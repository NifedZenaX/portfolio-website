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

export type BlogBlock =
    | { tag: 'p'; content: string }
    | { tag: 'h2'; content: string }
    | { tag: 'h3'; content: string }
    | { tag: 'h4'; content: string }
    | { tag: 'ul'; items: string[] }
    | { tag: 'ol'; items: string[] }
    | { tag: 'blockquote'; content: string }
    | { tag: 'code'; content: string; language: string }
    | { tag: 'img'; src: string; alt: string }
    | { tag: 'hr' };

export type BlogPost = {
    id: string;
    content: BlogBlock[];
}