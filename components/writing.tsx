import styles from '@/app/ui/home.module.css'
import projectStyles from '@/app/ui/project.module.css';
import { getBlogs } from '@/app/lib/data';
import Link from 'next/dist/client/link';
import { Blogs } from '@/app/lib/definitions';

export default async function Writing() {
    const blogs = await getBlogs();
    console.log('Blogs: ', blogs);
    return (
        <section className={styles.section}>
            <div>
                <h1 className={styles.heading1}>Writing</h1>
                <div className={projectStyles.projects_container}>
                    {blogs.length <= 0 ? 
                        <p className={styles.text}>No blogs available.</p>
                    :
                        blogs.map((blog) => {
                            return (
                                <Link key={blog.id} href={{ pathname: `blogs/${blog.id}`, query: { title: blog.title } }} className={projectStyles.card}>
                                    <h3 className={styles.heading3}>{blog.title}</h3>
                                    <p className={`${styles.text} text-center`}>{blog.created_time}</p>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}