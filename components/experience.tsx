import styles from '@/app/ui/home.module.css'
import expStyles from '@/app/ui/experience.module.css'

export default function Experience() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heading1}>Experience</h1>
            <div className="overflow-y-auto h-50 w-[70%]">
                <h2 className={styles.heading2}>Backend Engineer</h2>
                <h3 className={styles.heading3}>Kredit Pintar Indonesia</h3>
                <p className={styles.text}>Oct 2024 - Present</p>
                <ul className={`${styles.text} ${expStyles.ul_bullet}`}>
                    <li>Architect and develop scalable backend services using Java (Spring Boot) and Go, supporting high-traffic financial operations.</li>
                    <li>Refactored and optimized complex SQL queries, reducing execution time by up to 95% through indexing strategies, query restructuring, and execution plan analysis.</li>
                    <li>Designed caching mechanisms and asynchronous processing workflows to improve API response times and system throughput.</li>
                    <li>Automated repetitive operational and deployment tasks, improving team efficiency by approximately 80% and reducing manual intervention.</li>
                    <li>Led performance debugging and production issue investigations, ensuring system reliability and minimizing downtime.</li>
                    <li>Collaborate cross-functionally to define API contracts and ensure seamless integration with internal and third-party services.</li>
                </ul>
                <hr className="my-8 border-t border-blue-100" />
                <h2 className={styles.heading2}>Software Development Engineer Intern</h2>
                <h3 className={styles.heading3}>DANA Indonesia</h3>
                <p className={styles.text}>Aug 2023 - Oct 2024</p>
                <ul className={`${styles.text} ${expStyles.ul_bullet}`}>
                    <li>Developed and maintained RESTful backend services within a large-scale fintech environment using Java and Spring Boot.</li>
                    <li>Implemented unit and integration testing strategies to improve service reliability and reduce regression issues.</li>
                    <li>Contributed to CI/CD automation pipelines, reducing deployment friction and improving release efficiency.</li>
                    <li>Collaborated with senior engineers in system design discussions and participated in code reviews to ensure maintainable architecture.</li>
                </ul>
            </div>
        </section>
    );
}