import React from 'react';

const Header = () => {
    return (
        <>
        <header data-aos="zoom-in" className='flex flex-wrap  bet w-[100%] h-[100vh] z-0 relative bg-cover bg-scroll  pt-[25%] ps-11 d-flex justify-center align-middle  bg-no-repeat bg-center'>
            <h1   data-aos="fade-down"className='basis-1/2" font-[BTitrBd] font-bold text-[3rem] text-[red]  top-[50%] text-center shadow-black'>مجموعه تعمیرگاهی جهان تکنیک</h1>
            <img  data-aos="fade-down" className='delay-100 max-md:w-[70%] relative -top-[20vh] max-md:top-[1%]  min-lg:left-[5vh] ' src="/image/logojahan.png" alt="" />
        </header>
       
        </>
    );
}

export default Header;
