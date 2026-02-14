import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <h1>Willie Soo</h1>
            <h2>Backend Engineer</h2>
            <p>Building reliable and scalable backend systems using Java, Go, and cloud-native technologies.</p>
            <p>Focused on clean architecture, performance, and production-ready systems.</p>

            <Link href="/projects">
                <button>Projects</button>
            </Link>

            <Link href="/contact">
                <button>Contact me</button>
            </Link>
        </div>
    )
}