import { getProjects } from "@/app/lib/data"
import Link from "next/link";

export default async function Projects() {
    const projects = await getProjects();
    return (
        <section className="max-w-5xl mx-auto py-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
            <div className="grid gap-8">
                { projects.length <= 0 ? 
                    <h3 className="text-lg font-semibold text-center">No projects found.</h3> :
                    projects.map((project) => (
                        <div className="p-6 bg-white/70 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">{project.project_name}</h3>
                            <p>{project.description}</p>
                            {project.technologies && project.technologies.map((tech) => (
                                <span className="px-4 py-2 bg-blue-200 rounded-full">{tech}</span>
                            ))}
                            <Link 
                                href={project.link} 
                                target="_blank" 
                                className="text-blue-500 underline mt-4 inline-block">
                                Source Code
                            </Link>
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