// pages/articles/[slug].js
import articlesData from '../../data/articlesData.json';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar.js";
import Footer from '@/components/footer/footer.js';
import { useEffect } from 'react';
import aos from "@/aos";
import Image from "next/image";
import Link from 'next/link';
import Desc from "@/components/descripton/descripton";

// 1. **getStaticProps**: واکشی داده‌های مقاله خاص
export async function getStaticProps({ params }) {
  console.log(await articlesData);

  const article = articlesData.find(a => a.slug === params.slug);

  if (!article) {
    return {
      notFound: true, // اگر مقاله پیدا نشد، صفحه 404 نشان داده شود
    };
  }

  return {
    props: {
      article,
    },
  };
}

// 2. **getStaticPaths**: تعریف مسیرهای داینامیک
export async function getStaticPaths() {
  const paths = articlesData.map(article => ({
    params: { slug: article.slug }, // slug باید با نام فایل ([slug].js) یکی باشد
  }));

  return {
    paths,
    fallback: false, // اگر false باشد، مسیرهای تعریف نشده 404 می‌شوند.
  };
}

// 3. کامپوننت صفحه
const ArticlePage = ({ article }) => {
  return (

    <div dir='rtl'>
      <header>
        <nav>
          <Link href="#" className="nav-link active icons poshtiban text-light text-icon" aria-label="گفتگو">
            <i className="larg fas fa-comment-dots"></i>
          </Link>

          <Navbar />

        </nav>
      </header>
      <br /><br /><br /><br /><br /><br /><br />
      <Head>
        <title>{article.title}</title>
      </Head>

      <div className="container mx-auto p-4">
        <h1 className='font-BTitrBd text-xl'>{article.title}</h1>
        <p className="text-gray-500 font-BNazanin">تاریخ: {article.date}</p>

        {/*
          ⚠️ توجه: اگر محتوای article.content حاوی HTML است، از dangerouslySetInnerHTML
          یا یک کتابخانه‌ی رندر مارک‌داون (مانند 'react-markdown') استفاده کنید.
        */}
        <div className="mt-6 text-lg font-BNazanin">
          {article.content}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;