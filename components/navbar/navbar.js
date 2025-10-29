
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <nav data-aos="zoom-out" dir='rtl' className=' w-[100%] h-[110px] bg-slate-100 p-5 flex fixed z-50'>
                <Link className='flex-auto w-20' href='/'>
                    <img  src='/image/logojahan.png' className='w-[80px]' alt="Logo" />
                </Link>
                <div className='flex-auto mt-5'>
                    <ul className='max-md:hidden flex gap-4 w-[50%] font-BTitrBd  absolute right-[15%] ps-10'>
                        <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'><Link className='font-mj-titr' href='/'>خانه</Link></li>
                        <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'><Link href='/articles'>مقالات</Link></li>
                        <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'><Link href='/#address'>آدرس</Link></li>
                        <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'><Link href='/#rezerv'> رزرو نوبت</Link></li>
                        <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'><Link href='/#darbareh'> درباره ما</Link></li>
                    </ul>
                </div>
                <div onClick={toggleModal} data-aos="zoom-out" className="hidden max-md:block relative w-12 h-12 mt-5 cursor-pointer bg-slate-800">
                    <img  src="/image/hamberger.png" alt="Navbar Toggle Icon" />
                </div>

                {/* مدیریت نمایش و پنهان کردن مودال به صورت کامل  */}
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <div onClick={toggleModal} data-aos="zoom-out" className=" inset-0 bg-gray-600 bg-opacity-50 z-40"></div>

                        {/* Modal Panel */}
                        <div id="modal-panel" data-aos="zoom-out" className="fixed inset-0  flex items-center justify-center p-4 z-50">
                            <div className="relative top-[150px] w-[80vh] bg-gray-400 rounded-lg transition-all ease-linear duration-250 shadow-xl max-w-lg mx-auto p-6">
                                <div className="flex justify-between items-center pb-3">
                                    <button onClick={toggleModal} className="text-gray-800 hover:text-gray-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="my-4 flex align-middle justify-center   ">
                                    <ul className='gap-4 space-y-5 w-[50%] font-BMitra font-BTitrBd ps-5   pb-4'>
                                        <Link className='font-mj-titr' href='/'>
                                            <li onClick={toggleModal} className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'>
                                                خانه
                                            </li>
                                        </Link>
                                        <Link href='/articles'>
                                            <li onClick={toggleModal} className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'>
                                                مقالات
                                            </li>
                                        </Link>
                                        <Link href='/#address'>
                                            <li onClick={toggleModal} className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'>
                                                آدرس
                                            </li>

                                        </Link>
                                        <Link href='/#rezerv'>
                                            <li onClick={toggleModal} className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'>
                                                رزرو نوبت
                                            </li>
                                        </Link>
                                        <Link href='/#darbareh'>
                                            <li onClick={toggleModal} className='transition-all ease-linear duration-100 flex-1 p-[5px] relative text-center rounded-2xl hover:font-bold hover:border-b-red-800 hover:border-b-[2px]'>
                                                درباره ما    
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                                <hr />
                                <div className="flex justify-end pt-4 border-t border-gray-200">
                                    <button id="cancel-modal" onClick={toggleModal} className="font-BTitrBd ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">بستن</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;
