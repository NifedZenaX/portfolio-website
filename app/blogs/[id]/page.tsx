import { getBlogPost } from '@/app/lib/data';
import styles from '@/app/ui/home.module.css';
import blogStyles from '@/app/ui/blog.module.css';
import Link from 'next/dist/client/link';

export default async function BlogPost(props: { params: Promise<{ id: string }>, searchParams: Promise<{ title: string }> }) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const id = params.id;
    const title = searchParams.title;
    const blogPost = await getBlogPost(id);
    return (
        <section className={styles.section}>
            <div className={blogStyles.container}>
                <h1 className={styles.heading1}>{title}</h1>
                {blogPost?.content.map((content, index) => {
                    if (content.tag === 'p') {
                        return <p key={index} className={`${styles.text} text-justify`}>{content.content}</p>
                    } else if (content.tag === 'h2') {
                        return <h2 key={index} className={styles.heading2}>{content.content}</h2>
                    }
                })}

                <Link href="/" className={styles.button}>
                    Back
                </Link>
            </div>
        </section>
    )
}