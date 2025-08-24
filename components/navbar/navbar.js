import React from 'react';

const Navbar = () => {
    return (
        <navbar className=' w-[100%] h-[110px] bg-slate-100 p-5 flex  fixed'>
            <a className='flex-auto  w-20   ' href='/'>
                <img src='./image/logojahan.png' className='w-[80px]' />
            </a>
            <div className='flex-auto mt-5 '>

                <ul className=' flex gap-4 w-[50%] absolute right-[15%] ps-10 '>
                    <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a className='font-mj-titr' href='/'>خانه</a></li>
                    <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''>مقالات</a></li>
                    <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''>آدرس</a></li>
                    <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''> رزرو نوبت</a></li>
                    <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''> درباره ما</a></li>
                </ul>
            </div>
            <a href='' className='transition-all ease-linear duration-300 flex-auto absolute  w-30 left-10 hover:scale-110'>
                <img src="./image/UserIcon.png" alt="" className='w-[50px] ms-4' />
                <span className='font-Mj_Titr font-bold'>حساب کاربری </span>
            </a>
        </navbar>
    );
}

export default Navbar;
