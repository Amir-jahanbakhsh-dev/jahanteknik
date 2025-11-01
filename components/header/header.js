import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
    return (
        <>
            <header data-aos="zoom-in" className='flex flex-wrap  bet w-[100%]  z-0 relative  bg-cover bg-scroll  pt-[25%] ps-11 d-flex justify-around align-middle  bg-no-repeat bg-center'>
                <div>
                    <h1 data-aos="fade-right" className='basis-1/2  font-bold mt-[10vh]  font-[BTitrBd] font-bold text-[3.5rem] text-shadow-[1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] text-[#E0E0E0]   top-[50%] text-center '>مکانیکی ایرانی و چینی در اصفهان</h1>
                    <h3 data-aos="fade-right" className='basis-1/2  font-bold mt-[5vh]  font-[BTitrBd] font-bold text-[2.5rem] text-shadow-[1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] text-[#E0E0E0]   top-[50%] text-center '>(باضمانت و بهترین مکانیکی در اصفهان)</h3>
                    <p data-aos="fade-left" className='basis-1/2  font-bold mt-[5vh]  font-IranianSans  text-[1.5rem] text-shadow-[1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000] text-[#E0E0E0]   top-[50%] text-center '>جهانبخش :  09935566903</p>
                    <p  className='basis-1/2  font-bold mt-[5vh] text-center font-[IranianSans]  text-[1rem]  text-[#E0E0E0]  '>مکانیکی در خیابان امام خمینی</p>
                </div>
                <Image alt="" data-aos="fade-left" className='delay-100  max-md:w-[70%] relative -top-[20vh] max-md:top-[1%]  min-lg:left-[5vh] ' src="/image/logojahan.png" />
            </header>

        </>
    );
}

export default Header;
