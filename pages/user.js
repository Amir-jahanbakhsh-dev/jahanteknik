import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import HomePage from "./homePage";
import { useEffect } from 'react';
import { useAos } from '../hooks/useAos';
import aos from "@/aos";
import Image from "next/image";
import Link from 'next/link';
import Desc from "@/components/descripton/descripton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const UserPage = () => {
    useEffect(() => {
        aos.init({
            // اینجا تنظیمات را اعمال کنید
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // <--- این را به false تغییر دهید
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation

        });

        // اگر نیاز دارید که AOS دوباره refresh شود (مثلاً بعد از بارگذاری محتوای داینامیک)
        // می توانید از AOS.refresh(); یا AOS.refreshHard(); استفاده کنید.
        // اما برای مشکل شما، once: false کفایت می کند.
    }, []);
    useAos()
    return (
        <>
            <header>
                <nav>
                    <Link href="#" className="nav-link active icons poshtiban text-light text-icon" aria-label="گفتگو">
                        <i className="larg fas fa-comment-dots"></i>
                    </Link>

                    <Navbar />

                </nav>
            </header>
            <br /><br /><br /><br /><br /><br /><br />
            <Desc title='فرم ثبت نام در باشگاه مشتریان' />

            <Footer />
        </>
    )
}

export default UserPage;
