import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import { calculateAge } from "@/app/lib/utils";

export default function About() {
    return (
        <section className={`max-w-5xl mx-auto text-center py-16 ${styles.sectionBg}`}>
            {/* Profile Picture */}
            {/* <div className="p-6 bg-radial rounded-md bg-blue-100 grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div className={styles.profile_section_bg}>
                <Image 
                    src="/profile_picture.jpg" 
                    alt="Profile Picture"
                    width={400} 
                    height={400}
                    className="rounded-full"
                />
                <div>
                    <h1 className={styles.main_text_gray}>Willie Soo</h1>
                    <h2 className={styles.secondary_text_gray}>{calculateAge()}</h2>
                    <p className="text-lg text-left">
                        Hi! I am a software developer, primarily working as a backend developer, but not limited to learning
                        other areas such as frontend, devops, mobile development, game development and more. I love learning new technologies and
                        I love to challenge myself with new things.
                    </p>
                    <div className="flex justify-start mt-4 gap-4">
                        <Link href="https://www.linkedin.com/in/willie-soo-706047209/" target="_blank">
                            <Image 
                                src="/linkedin.png" 
                                alt="LinkedIn Profile"
                                width={30} 
                                height={30}
                            />
                        </Link>
                        <Link href="https://github.com/NifedZenaX" target="_blank">
                            <Image 
                                src="/github.png" 
                                alt="Github Profile"
                                width={30} 
                                height={30}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}