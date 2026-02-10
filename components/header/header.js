'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
// وارد کردن استایل‌های پیش‌فرض
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Header = () => {
    return (
        <>
            <header dir='rtl' data-aos="zoom-in" className='bet w-full '>
                <Link href="/sliderPage">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]} // ماژول Autoplay حتماً باید اینجا معرفی شود
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="mt-[35vh] h-[100vh] mySwiper "
                    >
                        <SwiperSlide className="relative  bg-cover bg-center bg-[url('/image/slide1.jpg')] ">
                            <div className="absolute z-0 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50   ">
                            </div>
                            <div className='absolute z-1  right-12 top-10 pt-[10vh] text-center text-white'>
                                <h2 className='text-[10vh] font-BTitrBd text-red-500 '>جهان تکنیک</h2>
                                <p className='text-[6vh] shadow-xl pb-10 '>بهترین مکانیکی در اصفهان</p>
                                <span>09935566903 جهانبخش</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative  bg-cover bg-center bg-[url('/image/slide2.webp')] ">
                            <div className="absolute z-0 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50   ">
                            </div>
                            <div className='absolute z-1  right-12 top-10 pt-[10vh] text-center text-white'>
                                <h2 className='text-[10vh] font-BTitrBd text-red-500 '>جهان تکنیک</h2>
                                <p className='text-[6vh] shadow-xl pb-10 '>پذیرش انواع خودروهای ایرانی و چینی</p>
                                <span>09935566903 جهانبخش</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="relative  bg-cover bg-center  bg-[url('/image/slide4.jpg')] ">
                            <div className="absolute z-0 inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50   ">
                            </div>
                            <div className='absolute z-1  right-12 top-10 pt-[10vh] text-center text-white'>
                                <h2 className='text-[10vh] font-BTitrBd text-red-500 '>جهان تکنیک</h2>
                                <p className='text-[6vh] shadow-xl pb-10 '>ارائه خدمات مکانیکی و زیروبندسازی </p>
                                <span>09935566903 جهانبخش</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Link>
            </header>

        </>
    );
}

export default Header;
