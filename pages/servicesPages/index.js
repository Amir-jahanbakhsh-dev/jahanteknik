import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Desc from '@/components/descripton/descripton';
import Link from 'next/link';
import Head from 'next/head';
const WorkServicePage = () => {
    return (
        <>
            <Head>
                <link rel="canonica/l" href="httsps://jahanteknik.ir/" />
                <meta name="robots" content="noindex, follow"></meta>
                <title>بهترین مکانیکی در اصفهان | جهان تکنیک</title>
                <meta name="description" content="تعمیرگاه انواع خودرو های چینی و کره ایتعمیرگاه جک در اصفهان تعمیرگاه mvm در اصفهان تعمیرگاه هیوندا کیا در اصفهان تعمیرگاه ایرانخودرو در اصفهان - خدمات باکیفیت مکانیک سیار در اصفهان - در محل خودتان تعمیرگاه سایپا در اصفهان - سرویس تخصصی تعمیرگاه پژو در اصفهان - حرفه‌ای و مطمئن تعمیرگاه ال نود در اصفهان - بهترین خدمات تعمیرگاه شاهین در اصفهان - تعمیرات سریع تعمیرات دنا در اصفهان - متخصصین ما در خدمت شما تراش دیسک روکار در اصفهان - دقت و کیفیت تعمیرات تخصصی گیربکس در اصفهان - خدمات با ضمانت" />
            </Head>
            <div className='servicePage mt-[23vh]'>
                <Navbar />
                <h1 className=" text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
                <Desc
                    title="خدمات تعمیرگاه خودرو در اصفهان - جهان تکنیک"
                    desc={
                        <ul>
                            <Link href='/servicesPages/chini'>
                                <li>تعمیرگاه انواع خودرو های چینی و کره ای </li>
                            </Link>
                            <Link href='/servicesPages/jak'>
                                <li>تعمیرگاه جک در اصفهان </li>
                            </Link>
                            <Link href='/servicesPages/mvm'>
                                <li>تعمیرگاه mvm در اصفهان </li>
                            </Link>
                            <Link href='/servicesPages/kia'>
                                <li>تعمیرگاه هیوندا کیا در اصفهان </li>
                            </Link>
                            <Link href='/servicesPages/isaco'>
                                <li>تعمیرگاه ایرانخودرو در اصفهان - خدمات باکیفیت</li>
                            </Link>
                            <Link href='/servicesPages/sayar'>
                                <li>مکانیک سیار در اصفهان - در محل خودتان</li>
                            </Link>
                            <Link href='/servicesPages/saipa'>
                                <li>تعمیرگاه سایپا در اصفهان - سرویس تخصصی</li>
                            </Link>
                            <Link href='/servicesPages/pejo'>
                                <li>تعمیرگاه پژو در اصفهان - حرفه‌ای و مطمئن</li>
                            </Link>
                            <Link href='/servicesPages/l90'>
                                <li>تعمیرگاه ال نود در اصفهان - بهترین خدمات</li>
                            </Link>
                            <Link href='/servicesPages/dena'>
                                <li>تعمیرات دنا در اصفهان - متخصصین ما در خدمت شما</li>
                            </Link>
                            <Link href='/servicesPages/disk'>
                                <li>تراش دیسک روکار در اصفهان - دقت و کیفیت</li>
                            </Link>
                            <Link href='/servicesPages/girbox'>
                                <li>تعمیرات تخصصی گیربکس در اصفهان - خدمات با ضمانت</li>
                            </Link>
                        </ul>
                    }
                    src="/image/png-image.png"
                />
                <Link className="w-[100%] mt-[5vh] mb-[5vh] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>

                <Footer />
            </div>
        </>
    );
}

export default WorkServicePage;
