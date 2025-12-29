import Image from "next/image";
import Link from "next/link";
import { calculateAge } from "@/app/lib/utils";

export default function Profile() {
    return (
        <section className="max-w-5xl mx-auto text-center py-16">
            {/* Profile Picture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image 
                    src="/next.svg" 
                    alt="Profile Picture"
                    width={150} 
                    height={150}
                />
                <div>
                    <h1 className="text-5xl font-bold mb-4 text-left">Willie Soo</h1>
                    <h2 className="text-2xl font-semibold mb-2 text-left">{calculateAge()}</h2>
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