import postgres from 'postgres';
import {
    Project,
    ProjectDTO,
    Skill,
    Blogs
} from './definitions';
import { Client } from '@notionhq/client';
import { create } from 'domain';

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
        console.log('Notion API Raw Response: ', response);
        const blogs: Blogs[] = response.results.map((obj) => {
            if (obj.type === 'child_page') {
                return {
                    id: obj.id,
                    title: obj.child_page.title,
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
        const response = await notionClient.pages.retrieve({ page_id: pageId });
        return response;
    } catch (error) {
        console.error('Error fetching blog post from Notion:', error);
        return null;
    }
}