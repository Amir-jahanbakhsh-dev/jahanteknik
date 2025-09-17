import React from 'react';
import Services from "@/components/services/services";
import  Desc from  '@/components/descripton/descripton';
import  Workers from  '@/components/workers/workers';
import Header from "@/components/header/header";
import { useEffect } from 'react';
import { useAos } from '../hooks/useAos';

const HomePage = () => {
    return (
        <section dir='rtl'>
        <Header />
        <Services />
        <Desc
          title="خدمات تعمیرگاه خودرو در اصفهان - جهان تکنیک"
          desc={
            <ul>
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
          src="./image/logojahan.png"
        />


        <a id="darbareh" href="#darbareh" aria-label="درباره ما">
          <Desc
            title="درباره ما"
            desc="ما این افتخار را داریم که بیش از ده سال سابقه در خدمت رسانی به مردم بوده‌ایم و کلیه‌ی امور مکانیکی ماشین‌های سواری را اعم از مکانیکی خودرو، تعمیرات موتور، گیربکس، زیر و بند، جعبه فرمان و سرویس پلوس و اکسل را انجام داده‌ایم و قصد داریم که با هدف ارائه خدمات بهتر نیازهای مشتریان نسبت به مخارج سنگین ماشین‌های امروزی کاهش دهیم."
            src="./image/pngwing.com.png"
          />
        </a>

        <a id="rezerv" href="#rezerv" aria-label="رزرو">
          <Workers />
        </a>

        <a id="address" href="#address" aria-label="آدرس دقیق و مراجعه حضوری">
          <Desc
            title="آدرس دقیق و مراجعه حضوری"
            src="./image/map.png"
            desc="اصفهان، خیابان امام خمینی، بعد از کوچه 108 قبل از سه راه ملک شهر، جنب برق سهیل"
          />
        </a>
 
        </section>
    );
}

export default HomePage;
