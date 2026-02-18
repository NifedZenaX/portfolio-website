import { getSkills } from '@/app/lib/data';
import styles from '@/app/ui/home.module.css'

export default async function Skills() {
    // const skills = await getSkills();
    return (
        <section className={styles.section}>
            <h1 className={styles.heading1}>Skills</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {/* { skills.length <= 0 ? 
                    <h3 className="text-lg font-semibold">No skills found.</h3> :
                    skills.map((skill) => (
                        <span className="px-4 py-2 bg-blue-100 rounded-full shadow-xl">{skill.skill_name}</span>
                    ))
                } */}
                <span className="px-4 py-2 bg-blue-200 rounded-full">Java</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">Springboot</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">Golang</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">Python</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">MySQL</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">TypeScript</span>
                <span className="px-4 py-2 bg-blue-200 rounded-full">Next.js</span>
            </div>
        </section>
    )
}