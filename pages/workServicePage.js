import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Desc from '@/components/descripton/descripton';
import Link from 'next/link';
const WorkServicePage = () => {
    return (
        <div className='servicePage mt-[23vh]'>
            <Navbar />
            <h1 className=" text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
            <Desc
                title="خدمات تعمیرگاه خودرو در اصفهان - جهان تکنیک"
                desc={
                    <ul>
                        <li>تعمیرگاه انواع خودرو های چینی و کره ای </li>
                        <li>تعمیرگاه جک در اصفهان </li>
                        <li>تعمیرگاه mvm در اصفهان </li>
                        <li>تعمیرگاه هیوندا کیا در اصفهان </li>
                        <li>تعمیرگاه ایرانخودرو در اصفهان - خدمات باکیفیت</li>
                        <li>مکانیک سیار در اصفهان - در محل خودتان</li>
                        <li>تعمیرگاه سایپا در اصفهان - سرویس تخصصی</li>
                        <li>تعمیرگاه پژو در اصفهان - حرفه‌ای و مطمئن</li>
                        <li>تعمیرگاه ال نود در اصفهان - بهترین خدمات</li>
                        <li>تعمیرگاه شاهین در اصفهان - تعمیرات سریع</li>
                        <li>تعمیرات دنا در اصفهان - متخصصین ما در خدمت شما</li>
                        <li>تراش دیسک روکار در اصفهان - دقت و کیفیت</li>
                        <li>تعمیرات تخصصی گیربکس در اصفهان - خدمات با ضمانت</li>
                    </ul>
                }
                src="/image/png-image.png"
            />
            <Link className="w-[100%] mt-[5vh] mb-[5vh] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>

            <Footer />
        </div>
    );
}

export default WorkServicePage;
