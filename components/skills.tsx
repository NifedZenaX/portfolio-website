import { getSkills } from '@/app/lib/data';
import styles from '@/app/ui/home.module.css'

export default async function Skills() {
    // const skills = await getSkills();
    return (
        <section className={styles.section}>
            <div>
                <h1 className={`text-center ${styles.heading1}`}>Skills</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className={`text-center ${styles.heading2}`}>Technical Skills</h2>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>Java</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>Springboot</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>Golang</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>Python</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>MySQL</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>TypeScript</span>
                        <span className={`border-1 border-[#3b82f6] border-solid rounded-full px-4 py-2 mx-1 ${styles.text}`}>Next.js</span>
                    </div>
                    <div>
                        <h2 className={`text-center ${styles.heading2}`}>Soft Skills</h2>
                        <span className="px-4 py-2 bg-blue-200 rounded-full">Japanese</span>
                        <span className="px-4 py-2 bg-blue-200 rounded-full">English</span>
                        <span className="px-4 py-2 bg-blue-200 rounded-full">Chinese</span>
                    </div>
                    {/* { skills.length <= 0 ? 
                        <h3 className="text-lg font-semibold">No skills found.</h3> :
                        skills.map((skill) => (
                            <span className="px-4 py-2 bg-blue-100 rounded-full shadow-xl">{skill.skill_name}</span>
                        ))
                    } */}

                </div>
            </div>
            
        </section>
    )
}