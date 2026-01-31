import { getProjects } from "@/app/lib/data"
import Link from "next/link";
import projectStyles from "@/app/ui/project.module.css";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="max-w-5xl mx-auto py-16">
            <h2 className={projectStyles.project_text}>Projects</h2>
            <div className="grid gap-8">
                { projects.length <= 0 ? 
                    <h3 className="text-lg font-semibold text-center">No projects found.</h3> :
                    projects.map((project) => (
                        <div className={projectStyles.project_card} key={project.id}>
                            <h3 className="text-xl font-bold mb-2">{project.project_name}</h3>
                            <p>{project.description}</p>
                            <Link 
                                href={project.link} 
                                target="_blank" 
                                className="text-blue-500 underline mt-4 inline-block">
                                Source Code
                            </Link>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.technologies && project.technologies.map((tech) => (
                                    <span className="px-4 py-2 bg-blue-200 rounded-full" key={tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))        
                }
                {/* <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Project One</h3>
                    <p>A cool project description goes here.</p>
                </div>
                <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Project Two</h3>
                    <p>Another cool project description goes here.</p>
                </div> */}
            </div>
        </section>
    )
}