import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Logo from '@app/img/logo-fti.png';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Navigation = () => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [profile, setProfile] = useState(false);

  const logoutHandler = () => {
    //
    router.push('/Welcome');
    Cookies.remove('token');
    Cookies.remove('user');
    setTimeout(() => {
      setProfile(false);
    }, 1000);
    // location.reload();
  };

  useEffect(() => {
    setToken(Cookies.get('token'));
    setUser(Cookies.get('user'));
  }, [logoutHandler]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 800px)');
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isDesktop]);

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
                  <Link href={`${token ? '/DataKp' : '/Registrasi'}`}>
                    <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-700'>
                      {`${token ? 'Isi Data KP' : 'Registrasi'}`}
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
              {token ? (
                <a
                  className='hidden sm:flex justify-center items-center space-x-2 cursor-pointer'
                  onClick={() => setProfile(!profile)}
                >
                  <div className='flex items-center pt-0.5 cursor-pointer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 sm:w-6 h-5 sm:h-6 mr-2 mt-0.5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <p className='text-xs sm:text-sm'>{user}</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-3 h-3 mt-0.5 ml-3 font-bold'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </a>
              ) : (
                <Link href='/Login'>
                  <a
                    className='px-3 py-2.5 text-center text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 duration-200 rounded-md shadow hidden sm:block'
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

      <div
        // className='block absolute right-6 mymd:right-[13rem] z-10 mt-1.5 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg'
        className={`${
          profile ? 'hidden sm:block' : 'hidden'
        } absolute right-6 mymd:right-[21rem] z-10 mt-1.5 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg`}
        role='menu'
      >
        <div className='flow-root py-2'>
          <div className='-my-2 divide-y divide-gray-100'>
            <div className='p-2'>
              {/* <Link to={`/profile/${id}`} state={id}> */}
              <a
                href='#'
                className='block rounded-lg px-4 py-1 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                role='menuitem'
              >
                Profile Settings
              </a>
              {/* </Link> */}
            </div>

            <div className='py-2 px-4'>
              <a
                className='text-white text-center bg-red-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                onClick={logoutHandler}
              >
                Logout
              </a>
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
        <div className='px-2 pt-2 pb-3 space-y-1 text-center'>
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

          <Link href={`${token ? '/DataKp' : '/Registrasi'}`}>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              {`${token ? 'Isi Data KP' : 'Registrasi'}`}
            </a>
          </Link>

          <Link href='/Lowongan'>
            <a className='text-slate-900 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Lowongan KP
            </a>
          </Link>

          {token ? (
            <div className='space-y-2'>
              <a className='flex justify-center items-center space-x-1 py-1.5 border border-black/20 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 mt-0.5'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{user}</span>
              </a>

              <a
                className='text-white bg-red-600 block px-3 py-2 rounded-md text-base font-medium'
                onClick={logoutHandler}
              >
                Logout
              </a>
            </div>
          ) : (
            <Link href='/Login'>
              <a className='text-white bg-purple-700 block px-3 py-2 rounded-md text-base font-medium'>
                Login
              </a>
            </Link>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Navigation;
