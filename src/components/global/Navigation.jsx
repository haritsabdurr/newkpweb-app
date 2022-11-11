import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Logo from '@app/img/logo-fti.png';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

  const namaMahasiswa = 'Kristopher';

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -19,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <header className='bg-white border-b-2 border-gray-300'>
      <div className='max-w-screen-2xl px-4 pt-3 pb-3 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <Link href='/'>
              <a className='block text-purple-600 pt-2'>
                <Image
                  src={Logo}
                  alt='logo ibik'
                  width={isDesktop ? 165 : 125}
                  height={isDesktop ? 75 : 58}
                  layout='intrinsic'
                />
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
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-700'>
                      Alur & File KP
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Tempat'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-700'>
                      Tempat KP
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Registrasi'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-700'>
                      Registrasi
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href='/Lowongan'>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-700'>
                      Lowongan KP
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 sm:flex'>
              {isLogin ? (
                <Tooltip
                  title={
                    <div className='flex p-1.5 rounded-lg'>
                      <Button
                        variant='contained'
                        size='small'
                        color='error'
                        onClick={() => setIsLogin(!isLogin)}
                      >
                        Logout
                      </Button>
                    </div>
                  }
                  arrow
                >
                  <div className='flex items-center pt-0.5 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 sm:w-6 h-5 sm:h-6 mr-1'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <p className='text-xs sm:text-sm'>{namaMahasiswa}</p>
                  </div>
                </Tooltip>
              ) : (
                <Link href='/Login'>
                  <a
                    className='px-3 py-2.5 text-center text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 duration-200 rounded-md shadow'
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    Login
                  </a>
                </Link>
              )}
            </div>

            <div className='block md:hidden'>
              <button
                className='p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75'
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className={`${
          open ? 'block' : 'hidden'
        } md:hidden z-40 mt-0.5 absolute bg-white w-full rounded-sm border-gray-500 shadow-lg`}
        id='mobile-menu'
        initial='exit'
        animate={open ? 'enter' : 'exit'}
        variants={subMenuAnimate}
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link href='/Alur'>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Alur & File KP
            </a>
          </Link>

          <Link href='/Tempat'>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Tempat KP
            </a>
          </Link>

          <Link href='/Registrasi'>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Registrasi
            </a>
          </Link>

          <Link href='/Lowongan'>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Lowongan KP
            </a>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navigation;
