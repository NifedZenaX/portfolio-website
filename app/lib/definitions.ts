export type ProjectDTO = {
    id: string;
    project_name: string;
    description: string;
    link: string;
    technologies: string;
};

export type Project = {
    id: string;
    project_name: string;
    description: string;
    link: string;
    technologies: string[];
}

export type Skill = {
    id: string;
    skill_name: string;
};