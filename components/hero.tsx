import Link from "next/link";
import styles from "@/app/ui/home.module.css"

export default function Hero() {
    return (
        <section className={styles.section}>
            <div>
                <h1 className={styles.heading1}>Willie Soo</h1>
                <h2 className={styles.heading2}>Backend Engineer</h2>
            </div>
            <div className="max-w-3xl px-6">
                <p className={styles.text}>
                Backend engineer specializing in scalable fintech systems and high-performance APIs.
                </p>
                <p className={styles.text}>
                Experienced in Java and Go, with a strong focus on database optimization, automation, and production reliability.
                </p>

                <Link href="/#projects" className={`mr-2 ${styles.button}`}>
                <button>Projects</button>
                </Link>

                <Link href="/#contact" className={`ml-2 ${styles.button}`}>
                <button>Contact Me</button>
                </Link>
            </div>
        </section>
    )
}