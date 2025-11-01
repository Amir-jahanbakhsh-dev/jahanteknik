import React from 'react';
import Image from 'next/image';
const Galery = () => {
    return (
        <div>
            <h3 data-aos="fade-right" className='h1 font-BTitrBd text-4xl mt-10 text-center'>گالری تصاویر</h3>
            <Image data-aos="fade-right"  className='w-[95%] flex ms-6 shadow-2xl rounded-xl mt-10 ' src="/image/galey.jpg" alt="galry"/>
        </div>
    );
}

export default Galery;
