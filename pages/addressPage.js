import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Link from 'next/link';
import Desc from '@/components/descripton/descripton';
import Head from 'next/head';

const AddressPage = () => {
    return (
        <>
            <Head>
                <title>آدرس مکانیکی در اصفهان|جهان تکنیک</title>
                <meta name="description" content="بهترین مکانیکی در اصفهان و پذیرش خودرو های ایرانی و چینی خیابان امام خمینی بعدر از کوچه 108 قبل از سه راه بهارستان جنب برق سهیل" />
            </Head>
            <div className='servicePage mt-[23vh]'>
                <Navbar />
                <h1 className=" text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
                <Desc
                    title="آدرس دقیق و مراجعه حضوری"
                    src="./image/map.png"
                    desc="اصفهان، خیابان امام خمینی، بعد از کوچه 108 قبل از سه راه ملک شهر، جنب برق سهیل"
                />
                <Link className="w-[100%] mt-[5vh] mb-[5vh] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>

                <Footer />
            </div>
        </>

    );
}

export default AddressPage;
