import postgres from 'postgres';
import {
    Project,
    ProjectDTO,
    Skill,
    Blogs,
    BlogPost,
    BlogBlock
} from './definitions';
import { Client, isFullBlock } from '@notionhq/client';
import { BlockObjectResponse, ChildPageBlockObjectResponse } from '@notionhq/client';
import { create } from 'domain';
import { resolve } from 'path';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
const notionBlogPageId = process.env.NOTION_BLOG_PAGE_ID!;
const notionApiKey = process.env.NOTION_API_KEY!;

export async function getProjects() {
    try {
        const data = await sql<ProjectDTO[]>`SELECT * FROM projects ORDER BY project_name ASC`;
        const formattedData: Project[] = data.map((project) => ({
            ...project,
            technologies: JSON.parse(project.technologies)
        }));
        return formattedData;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

export async function getSkills() {
    try {
        const data = await sql<Skill[]>`SELECT * FROM skills ORDER BY skill_name ASC`;
        return data;
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}

export async function getBlogs(): Promise<Blogs[]> {
    const notionClient = new Client({ auth: notionApiKey });
    try {
        const response = await notionClient.blocks.children.list({ block_id: notionBlogPageId });
        return response.results
            .filter(isFullBlock)
            .filter((block): block is ChildPageBlockObjectResponse => block.type === 'child_page')
            .map((block) => ({
                id: block.id,
                title: block.child_page.title,
                created_time: new Date(block.created_time).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
            }));
    } catch (error) {
        console.error('Error fetching blogs from Notion:', error);
        return [];
    }
}

function richTextToPlainText(richText: { plain_text: string }[]): string {
    return richText.map((item) => item.plain_text).join('');
}

function blocksToBlogBlocks(blocks: BlockObjectResponse[]): BlogBlock[] {
    const output: BlogBlock[] = [];
    let pendingList: { tag: 'ul' | 'ol'; items: string[] } | null = null;

    const flushList = () => {
        if (pendingList && pendingList.items.length > 0) output.push(pendingList);
        pendingList = null;
    };

    for (const block of blocks) {
        switch (block.type) {
            case 'paragraph':
                flushList();
                output.push({ tag: 'p', content: richTextToPlainText(block.paragraph.rich_text) });
                break;
            case 'heading_1':
                flushList();
                // H1 is reserved for the post title (from the URL), so render as h2
                output.push({ tag: 'h2', content: richTextToPlainText(block.heading_1.rich_text) });
                break;
            case 'heading_2':
                flushList();
                output.push({ tag: 'h3', content: richTextToPlainText(block.heading_2.rich_text) });
                break;
            case 'heading_3':
                flushList();
                output.push({ tag: 'h4', content: richTextToPlainText(block.heading_3.rich_text) });
                break;
            case 'bulleted_list_item': {
                const text = richTextToPlainText(block.bulleted_list_item.rich_text);
                if (!pendingList || pendingList.tag !== 'ul') {
                    flushList();
                    pendingList = { tag: 'ul', items: [text] };
                } else {
                    pendingList.items.push(text);
                }
                break;
            }
            case 'numbered_list_item': {
                const text = richTextToPlainText(block.numbered_list_item.rich_text);
                if (!pendingList || pendingList.tag !== 'ol') {
                    flushList();
                    pendingList = { tag: 'ol', items: [text] };
                } else {
                    pendingList.items.push(text);
                }
                break;
            }
            case 'quote':
                flushList();
                output.push({ tag: 'blockquote', content: richTextToPlainText(block.quote.rich_text) });
                break;
            case 'code':
                flushList();
                output.push({ tag: 'code', content: richTextToPlainText(block.code.rich_text), language: block.code.language });
                break;
            case 'divider':
                flushList();
                output.push({ tag: 'hr' });
                break;
            case 'image': {
                flushList();
                const src = block.image.type === 'external' ? block.image.external.url : block.image.file.url;
                const alt = richTextToPlainText(block.image.caption ?? []);
                output.push({ tag: 'img', src, alt });
                break;
            }
            default:
                // table, toggle, child_page, etc. — skip for now
                break;
        }
    }

    flushList();
    return output;
}

export async function getBlogPost(pageId: string): Promise<BlogPost | null> {
    const notionClient = new Client({ auth: notionApiKey });
    try {
        const blocks: BlockObjectResponse[] = [];
        let cursor: string | undefined;

        do {
            const response = await notionClient.blocks.children.list({
                block_id: pageId,
                start_cursor: cursor,
            });
            blocks.push(...response.results.filter(isFullBlock));
            cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
        } while (cursor);

        return { id: pageId, content: blocksToBlogBlocks(blocks) };
    } catch (error) {
        console.error('Error fetching blog post from Notion:', error);
        return null;
    }
}