import styles from '@/app/ui/home.module.css';
import skillStyles from '@/app/ui/skill.module.css';
import projectDetailStyles from '@/app/ui/project_detail.module.css';
import path from 'path';
import { promises as fs } from 'fs';
import Link from 'next/link';
import Image from 'next/image';

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const filePath = path.join(process.cwd(), 'data/project_details.json');
    const file = await fs.readFile(filePath, 'utf-8');
    const projects = JSON.parse(file);
    const project = projects[id];
    return (
        <section className={styles.section}>
            <div className={projectDetailStyles.container}>
                <Image 
                    src={project?.image}
                    alt={project?.title}
                    width={1500}
                    height={800}
                    className={projectDetailStyles.image}
                />

                <div className={projectDetailStyles.content}>
                    <h1 className={styles.heading1}>{project?.title}</h1>
                    <p className={styles.text}>{project?.description}</p>

                    <hr className="my-8 border-t border-blue-100" />

                    <h2 className={styles.heading2}>Background</h2>
                    <p className={styles.text}>{project?.background}</p>

                    <hr className="my-8 border-t border-blue-100" />

                    <h2 className={styles.heading2}>Technologies Used</h2>
                    <div className={projectDetailStyles.skills}>
                        {project?.technologies?.split(",").map((tech: string) => (
                        <span className={skillStyles.skill_pill} key={tech.trim()}>
                            {tech.trim()}
                        </span>
                        ))}
                    </div>

                    <hr className="my-8 border-t border-blue-100" />

                    <h2 className={styles.heading2}>Responsibilities</h2>
                    <p className={styles.text}>{project?.responsibilities}</p>

                    <div className={projectDetailStyles.buttonGroup}>
                        <Link href={project?.gamePage || "#"} className={styles.button} target='_blank'>
                        Game Demo
                        </Link>
                        <Link href={project?.repository || "#"} className={styles.button} target='_blank'>
                        Repository
                        </Link>
                        <Link href="/" className={styles.button}>
                        Back
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}