import Image from "next/image";
import Link from "next/link";
import styles from '@/app/ui/home.module.css'

export default function Contact() {
    return (
        <section className={styles.section}>
            <div>
                <h1>Let's Build Something Together</h1>
                <p>Feel free to reach out to me for any inquiries, collaborations, or just to say hi! I'm always open to connecting with like-minded individuals and exploring new opportunities.</p>

                <div className="flex items-center justify-around">
                    <Link href="mailto:williesoo0108@gmail.com" target="_blank">
                        <Image src="/email-icon.png" alt="Email Icon" width={32} height={32} />
                    </Link>

                    <Link href="https://www.linkedin.com/in/willie-soo-706047209/" target="_blank">
                        <Image src="/linkedin.png" alt="LinkedIn Icon" width={32} height={32} />
                    </Link>

                    <Link href="https://www.instagram.com/willie.1.8/" target="_blank">
                        <Image src="/instagram.png" alt="Instagram Icon" width={32} height={32} />
                    </Link>

                    <Link href="https://wa.me/6385777993855" target="_blank">
                        <Image src="/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} />
                    </Link>
                </div>
            </div>
        </section>
    );
}