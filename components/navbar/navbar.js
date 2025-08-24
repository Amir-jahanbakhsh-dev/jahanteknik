import React from 'react';

const Navbar = () => {
    return (
        <div className='w-[100%] h-[110px] bg-slate-100 p-5 flex  fixed'>
            <a className='flex-auto  w-20   ' href='/'>
                <img src='./image/logojahan.png' className='w-[80px]' />
            </a>
            <div className='flex-auto mt-5 '>

                <ul className='flex gap-4 w-[50%] absolute right-20 ps-10 '>
                    <li className='flex-1'><a className='font-mj-titr' href='/'>خانه</a></li>
                    <li className='flex-1'><a href=''>مقالات</a></li>
                    <li className='flex-1'><a href=''>آدرس</a></li>
                    <li className='flex-1'><a href=''> رزرو نوبت</a></li>
                    <li><a href=''> درباره ما</a></li>
                </ul>
            </div>
            <a href='' className='flex-auto absolute  w-30 left-10'>
                <img src="./image/UserIcon.png" alt="" className='w-[50px] ms-4' />
                <span className='font-mj-titr'>حساب کاربری </span>
            </a>
        </div>
    );
}

export default Navbar;
