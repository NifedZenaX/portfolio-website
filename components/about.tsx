import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import { calculateAge } from "@/app/lib/utils";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


export default function About() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heading1}>About</h1>

            <div className="max-w-4xl px-6">
                <p className={styles.text}>
                I am a backend engineer specializing in scalable and high-performance systems within fintech environments. 
                My experience includes optimizing complex database operations, improving system throughput, and building reliable 
                APIs designed for production workloads.
                </p>

                <p className={`${styles.text} mt-4`}>
                I value clean architecture, observability, and long-term maintainability. I enjoy analyzing performance bottlenecks 
                and designing systems that remain stable as they scale.
                </p>

                <p className={`${styles.text} mt-4`}>
                In addition to backend development, I explore game development and interactive applications, which broadens my perspective 
                on system behavior and user-driven performance considerations.
                </p>

                <p className={`${styles.text} mt-4`}>
                I am actively preparing to work in international engineering environments, particularly in Japan. Alongside strengthening my 
                backend and infrastructure expertise, I continue to develop my Japanese language skills to better collaborate in global teams.
                </p>

                <div className="flex justify-start mt-6 gap-4">
                <Link href="https://www.linkedin.com/in/willie-soo-706047209/" target="_blank">
                    <CiLinkedin className="text-3xl" />
                </Link>
                <Link href="https://github.com/NifedZenaX" target="_blank">
                    <FaGithub className="text-3xl" />
                </Link>
                </div>
            </div>
        </section>
    )
}