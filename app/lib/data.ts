import postgres from 'postgres';
import {
    Project,
    ProjectDTO,
    Skill,
    Blogs,
    BlogPost,
    NotionBlock
} from './definitions';
import { Client } from '@notionhq/client';
import { create } from 'domain';
import { resolve } from 'path';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });
const notionBlogPageId = process.env.NOTION_BLOG_PAGE_ID!;
const notionApiKey = process.env.NOTION_API_KEY!;

function generateHeaders() {
    return {
        'Authorization': `Bearer '${notionApiKey}'`,
        'Notion-Version': '2025-09-03'
    };
}

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

export async function getBlogs(){
    const notionClient = new Client({ auth: notionApiKey });
    try {
        const response = await notionClient.blocks.children.list({ block_id: notionBlogPageId });
        const parsedResponse: NotionBlock = JSON.parse(JSON.stringify(response));
        const blogs: Blogs[] = parsedResponse.results.map((obj) => {
            if (obj.type === 'child_page') {
                return {
                    id: obj.id,
                    title: obj.child_page!.title,
                    created_time: new Date(obj.created_time).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                }
            }
        }).filter(obj => obj !== null && obj !== undefined);
        return blogs;
    } catch (error) {
        console.error('Error fetching blogs from Notion:', error);
        return [];
    }
}

export async function getBlogPost(pageId: string) {
    const notionClient = new Client({ auth: notionApiKey });
    try {
        const response = await notionClient.blocks.children.list({ block_id: pageId });
        const parsedResponse: NotionBlock = JSON.parse(JSON.stringify(response));
        const blogPost: BlogPost = {
            id: pageId,
            content: parsedResponse.results.map((block) => {
                if (block.type === 'paragraph') {
                    return {
                        tag: 'p',
                        content: block.paragraph!.rich_text.map((text) => text.plain_text).join('')
                    }
                } else if (block.type === 'heading_1') {
                    return {
                        // H1 will be for title, H2 will be for section headings
                        tag: 'h2',
                        content: block.heading_1!.rich_text.map((text) => text.plain_text).join('')
                    }
                }
            }).filter(obj => obj !== null && obj !== undefined)
        }
        return blogPost;
    } catch (error) {
        console.error('Error fetching blog post from Notion:', error);
        return null;
    }
}