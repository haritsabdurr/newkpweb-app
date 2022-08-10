import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/logo-fti.png';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  return (
    <header className='bg-white border-b-2 border-gray-300'>
      <div className='max-w-screen-2xl px-4 pt-3 pb-3 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <Link href='/'>
              <a className='block text-purple-600 pt-3'>
                <Image
                  src={Logo}
                  alt='logo ibik'
                  width={isDesktop ? 165 : 125}
                  height={isDesktop ? 80 : 65}
                  layout='intrinsic'
                />
                {/* <img
                  className='h-16 md:h-20 pt-2'
                  src='http://snti.untar.ac.id/images/logo-fti-png_2.png'
                  alt='logo ibik2'
                /> */}
              </a>
            </Link>
          </div>

          <div className='hidden md:block' id='desktop-menu'>
            <nav aria-labelledby='header-navigation'>
              <h2 className='sr-only' id='header-menu'>
                Header navigation
              </h2>

              <ul className='flex items-center gap-4 lg:gap-8 text-sm lg:text-lg font-semibold'>
                <li>
                  <Link href='/Alur'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                      Alur & File KP
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Tempat'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                      Tempat KP
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Registrasi'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                      Registrasi
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Lowongan'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                      Lowongan KP
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 sm:flex'>
              <Link href='/Login'>
                <a className='px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 duration-200 rounded-md shadow'>
                  Login
                </a>
              </Link>
            </div>

            <div className='block md:hidden'>
              <button
                className='p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75'
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } md:hidden z-40 absolute bg-white w-full rounded-sm border-b-2 border-gray-500 shadow-lg`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link href='/Alur'>
            <a className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Alur & File KP
            </a>
          </Link>

          <Link href='/Tempat'>
            <a className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Tempat KP
            </a>
          </Link>

          <Link href='/Registrasi'>
            <a className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Registrasi
            </a>
          </Link>

          <Link href='/Lowongan'>
            <a className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Lowongan KP
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
