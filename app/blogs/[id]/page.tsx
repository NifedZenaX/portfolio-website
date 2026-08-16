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
                {blogPost?.content.map((block, index) => {
                    switch (block.tag) {
                        case 'p':
                            return <p key={index} className={`${styles.text} text-justify`}>{block.content}</p>;
                        case 'h2':
                            return <h2 key={index} className={styles.heading2}>{block.content}</h2>;
                        case 'h3':
                            return <h3 key={index} className={styles.heading3}>{block.content}</h3>;
                        case 'h4':
                            return <h4 key={index} className={blogStyles.heading4}>{block.content}</h4>;
                        case 'ul':
                            return (
                                <ul key={index} className={blogStyles.list}>
                                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            );
                        case 'ol':
                            return (
                                <ol key={index} className={blogStyles.orderedList}>
                                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ol>
                            );
                        case 'blockquote':
                            return <blockquote key={index} className={blogStyles.blockquote}>{block.content}</blockquote>;
                        case 'code':
                            return <pre key={index} className={blogStyles.code}><code>{block.content}</code></pre>;
                        case 'img':
                            return <img key={index} src={block.src} alt={block.alt} className={blogStyles.image} />;
                        case 'hr':
                            return <hr key={index} className={blogStyles.divider} />;
                        default:
                            return null;
                    }
                })}

                <Link href="/" className={styles.button}>
                    Back
                </Link>
            </div>
        </section>
    )
}