import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Link from 'next/link';
import Desc from '@/components/descripton/descripton';
import Head from 'next/head';

const AboutPage = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://jahanteknik.ir/" />
                <meta name="robots" content="noindex, follow"></meta>
                <title>مکانیکی در اصفهان</title>
                <meta name="description" content="بهترین مکانیکی در اصفهان و پذیرش خودرو های ایرانی و چینی" />
            </Head>
            <div className='servicePage mt-[23vh]'>
                <Navbar />
                <h1 className=" text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
                <Desc
                    title="درباره ما"
                    desc="ما این افتخار را داریم که بیش از ده سال سابقه در خدمت رسانی به مردم بوده‌ایم و کلیه‌ی امور مکانیکی ماشین‌های ایرانی و چینی و کره ای را اعم از مکانیکی خودرو، تعمیرات موتور، گیربکس، زیر و بند، جعبه فرمان و سرویس پلوس و اکسل را انجام داده‌ایم و با عیب یابی تخصصی  قصد داریم که با ارائه خدمات بهتر نیازهای مشتریان نسبت به مخارج سنگین ماشین‌های امروزی کاهش دهیم."
                    src="./image/pngwing.com.png"
                />
                <Link className="w-[100%] mt-[5vh] mb-[5vh] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>

                <Footer />
            </div>
        </>

    );
}

export default AboutPage;
