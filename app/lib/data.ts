import postgres from 'postgres';
import {
    Project,
    ProjectDTO,
    Skill
} from './definitions';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

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