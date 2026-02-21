import { getSkills } from '@/app/lib/data';
import styles from '@/app/ui/home.module.css'
import skillStyles from '@/app/ui/skill.module.css'

export default async function Skills() {
    // const skills = await getSkills();
    return (
        <section className={styles.section}>
            <div>
                <h1 className={`text-center ${styles.heading1}`}>Skills</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className={`text-center ${styles.heading2}`}>Technical Skills</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Java</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Springboot</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Golang</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Python</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>MySQL</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>TypeScript</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Next.js</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Kubernetes</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Elasticsearch</span>
                        </div>
                    </div>
                    
                    <div>
                        <h2 className={`text-center ${styles.heading2}`}>Soft Skills</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Japanese</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>English</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Chinese</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Problem Solving</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Code Debugging</span>
                            <span className={`${skillStyles.skill_pill} ${styles.text}`}>Teamwork</span>
                        </div>
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