import styles from '@/app/ui/home.module.css'
import projectStyles from '@/app/ui/project.module.css';
import { getBlogs } from '@/app/lib/data';
import Link from 'next/dist/client/link';
import { Blogs } from '@/app/lib/definitions';

export default async function Writing() {
    const blogs = await getBlogs();
    console.log(blogs);
    return (
        <section className={styles.section}>
            <div>
                <h1 className={styles.heading1}>Writing</h1>
                <div className={projectStyles.projects_container}>
                    <Link href={`blogs/${blogs[0].id}`} className={projectStyles.card}>
                        <h3 className={styles.heading3}>{blogs[0].title}</h3>
                        <p className={`${styles.text} text-center`}>{blogs[0].created_time}</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}