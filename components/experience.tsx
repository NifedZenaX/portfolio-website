import styles from '@/app/ui/home.module.css'

export default function Experience() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heading1}>Experience</h1>
            <div>
                <h2>Backend Engineer</h2>
                <h3>Kredit Pintar Indonesia</h3>
                <p>Oct 2024 - Present</p>
                <ul>
                    <li>Design and implement scalable backend services using Node.js and Express, ensuring high performance and reliability.</li>
                    <li>Collaborate with cross-functional teams to define API specifications and integrate third-party services.</li>
                    <li>Optimize database queries and implement caching strategies to improve application performance.</li>
                    <li>Participate in code reviews and contribute to the continuous improvement of development processes.</li>
                </ul>
            </div>
        </section>
    );
}