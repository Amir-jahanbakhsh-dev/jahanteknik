import React from 'react';

const Navbar = () => {
    return (
        // <navbar data-aos="zoom-out" className=' w-[100%] h-[110px] bg-slate-100 p-5 flex  fixed z-50'>
        //     <a className='flex-auto  w-20   ' href='/'>
        //         <img src='./image/logojahan.png' className='w-[80px]' />
        //     </a>
        //     <div className='flex-auto mt-5 '>

        //         <ul className=' flex max-md:hidden gap-4 w-[50%] absolute right-[15%] ps-10 '>
        //             <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a className='font-mj-titr' href='/'>خانه</a></li>
        //             <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''>مقالات</a></li>
        //             <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''>آدرس</a></li>
        //             <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''> رزرو نوبت</a></li>
        //             <li className='transition-all ease-linear duration-100 flex-1 p-[5px] relative  text-center rounded-2xl hover:font-bold hover:border-b-red-800  hover:border-b-[2px]'><a href=''> درباره ما</a></li>
        //         </ul>
        //     </div>
        //     <a href='' className='transition-all ease-linear duration-300 flex-auto absolute  w-30 left-10 hover:scale-110'>
        //         <img src="./image/UserIcon.png" alt="" className='w-[50px] ms-4' />
        //         <span className='font-Mj_Titr font-bold'>حساب کاربری </span>
        //     </a>
        // </navbar>

 <Disclosure as="nav" className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}0
}

export default Navbar;
