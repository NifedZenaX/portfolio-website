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

export type Blogs = {
    id: string;
    title: string;
    created_time: string;
}

export type BlogPost = {
    id: string;
    content: {
        tag: string,
        content: string
    }[];
}

export type NotionBlock = {
    type: string;
    results: {
        type: string;
        id: string;
        paragraph?: {
            rich_text: {
                plain_text: string;
            }[];
        };
        heading_1?: {
            rich_text: {
                plain_text: string;
            }[];
        };
        child_page?: {
            title: string;
        };
        created_time: string;
    }[];
}