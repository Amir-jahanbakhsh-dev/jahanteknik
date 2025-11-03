import React from 'react';
import Services from "@/components/services/services";
import Desc from '@/components/descripton/descripton';
import Workers from '@/components/workers/workers';
import Header from "@/components/header/header";
import { useEffect } from 'react';
import { useAos } from '../hooks/useAos';
import Image from 'next/image';
import Link from 'next/link';
import Art from '../components/articles/art';
import BoxArt from 'components/articles/box-art';
import articlesData from '../data/articlesData.json';
import Galery from "@/components/galery/galery"


const HomePage = () => {
  return (
    <section dir='rtl'>
      <Header />
      <Services />
            <Link className='block pt-12' id="darbareh" href="#darbareh" aria-label="درباره ما">
        <Desc
          title="درباره ما"
          desc="ما این افتخار را داریم که بیش از ده سال سابقه در خدمت رسانی به مردم بوده‌ایم و کلیه‌ی امور مکانیکی ماشین‌های ایرانی و چینی و کره ای را اعم از مکانیکی خودرو، تعمیرات موتور، گیربکس، زیر و بند، جعبه فرمان و سرویس پلوس و اکسل را انجام داده‌ایم و با عیب یابی تخصصی  قصد داریم که با ارائه خدمات بهتر نیازهای مشتریان نسبت به مخارج سنگین ماشین‌های امروزی کاهش دهیم."
          src="./image/pngwing.com.png"
        />
      </Link>
      <Art 
      title={
        <>
          
          <h2 className="ps-10 h1 text-center font-BTitrBd text-blue-500-800 text-3xl">مقالات</h2>
          <Link className='text-indigo-600' href="/articles">دیدن همه</Link>
        </>
      }
      desc={
        articlesData.slice(0,5).map(art=>{
          return <BoxArt key={art} title={art.title} img='image/s1.jpg' desc={art.excerpt} link={art.slug+'.html'} />
        })
      } />
      <Galery/>
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




      <Workers />


      <Link className='block pt-12' id="address" href="#address" aria-label="آدرس دقیق و مراجعه حضوری">
        <Desc
          title="آدرس دقیق و مراجعه حضوری"
          src="./image/map.png"
          desc="اصفهان، خیابان امام خمینی، بعد از کوچه 108 قبل از سه راه ملک شهر، جنب برق سهیل"
        />
      </Link>

    </section>
  );
}

export default HomePage;
