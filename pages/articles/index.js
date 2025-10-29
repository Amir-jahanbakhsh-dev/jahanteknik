import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import Footer from '@/components/footer/footer';
import articlesData from '../../data/articlesData.json';
import { useEffect } from 'react';
import aos from "@/aos";
import Image from "next/image";
import Link from 'next/link';
import Desc from "@/components/descripton/descripton";
import BoxArt from "components/articles/box-art";
import Art from "@/components/articles/art";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const articles = () => {

    return (
        <div dir="rtl">
            <header>
                <nav>
                    <Link href="#" className="nav-link active icons poshtiban text-light text-icon" aria-label="گفتگو">
                        <i className="larg fas fa-comment-dots"></i>
                    </Link>

                    <Navbar />

                </nav>
            </header>
            <br /><br /><br /><br /><br /><br /><br />
            <Art title={<h1 className="ps-10 h1 text-center font-BTitrBd text-blue-500-800 text-3xl ">مقالات</h1>}
                desc={
                    articlesData.map(art => {
                        return <BoxArt title={art.title} img='image/s1.jpg' desc={art.excerpt} link={art.slug} />
                    })}
                    />
                    <Footer />
        </div>
    )
}

export default articles;
