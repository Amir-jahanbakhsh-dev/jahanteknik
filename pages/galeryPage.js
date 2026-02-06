import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Link from 'next/link';
import Galery from '@/components/galery/galery';
const GaleryPage = () => {
    return (
        <div className='servicePage mt-[23vh]'>
            <Navbar />
            <h1 className=" text-[5vh]  w-[100%] p-1 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 top-[-12vh] z-10">بهترین مکانیکی در اصفهان با جهان تکنیک</h1>
            <Galery />
            <Link className="w-[100%] mt-[5vh] mb-[5vh] p-5 text-center font-BTitrBd bg-gray-300 hover:bg-gray-400 mt-5 block" href='/'> بازگشت به صفحه اصلی</Link>

            <Footer />
        </div>
    );
}

export default GaleryPage;
