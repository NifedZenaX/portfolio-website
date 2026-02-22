import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import { CiMail, CiLinkedin, CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className="w-[80%]">
                <h1 className={`text-center ${styles.heading1}`}>Let's Build Something Together</h1>
                <p className={`${styles.text} text-center`}>Feel free to reach out to me for any inquiries, collaborations, or just to say hi! I'm always open to connecting with like-minded individuals and exploring new opportunities.</p>

                <div className="flex items-center justify-around mt-10">
                    <Link href="mailto:soo.willie@yahoo.com" target="_blank">
                        <CiMail className="text-3xl" />
                    </Link>

                    <Link href="https://www.linkedin.com/in/willie-soo-706047209/" target="_blank">
                        <CiLinkedin className="text-3xl" />
                    </Link>

                    <Link href="https://www.instagram.com/willie.1.8/" target="_blank">
                        <CiInstagram className="text-3xl" />
                    </Link>

                    <Link href="https://wa.me/6385777993855" target="_blank">
                        <FaWhatsapp className="text-3xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
}