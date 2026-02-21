import { getProjects } from "@/app/lib/data"
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import projectStyles from "@/app/ui/project.module.css";

export default async function Projects() {
    // const projects = await getProjects();
    return (
        <section id="projects" className={styles.section}>
            <div>
                <h1 className={`text-center ${styles.heading1}`}>Projects</h1>
                <div className="grid grid-cols-3 gap-8">
                    {/* { projects.length <= 0 ? 
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
                    } */}
                    <div className={projectStyles.card}>
                        <h3 className={styles.heading3}>Immunopedia</h3>
                        <p className={styles.text}>A tower defense game where you play as a commander and deploy immune cells as your troops to fight various bacteria.</p>
                    </div>
                    <div className={projectStyles.card}>
                        <h3 className={styles.heading3}>Escapigs</h3>
                        <p className={styles.text}>An endless runner game where you play as a pig and try to escape from a food lab.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}