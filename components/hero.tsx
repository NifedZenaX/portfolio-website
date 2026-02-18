import Link from "next/link";
import styles from "@/app/ui/home.module.css"

export default function Hero() {
    return (
        <section className={styles.section}>
            <div>
                <h1 className={styles.heading1}>Willie Soo</h1>
                <h2 className={styles.heading2}>Backend Engineer</h2>
            </div>
            <div>
                <p className={styles.text}>Building reliable and scalable backend systems using Java, Go, and cloud-native technologies.</p>
                <p className={styles.text}>Focused on clean architecture, performance, and production-ready systems.</p>

                {/* <Link href="/projects">
                    <button>Projects</button>
                </Link>

                <Link href="/contact">
                    <button>Contact me</button>
                </Link> */}
            </div>
        </section>
    )
}