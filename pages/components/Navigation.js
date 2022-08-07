import React from 'react';

const Navigation = () => {
  return (
    <header className='bg-white' x-data='{ open: false }'>
      <div className='max-w-screen-2xl px-4 pt-3 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='md:flex md:items-center md:gap-12'>
            <a className='block text-teal-600'>
              <span className='sr-only'>Home</span>
              <img
                className='h-16 md:h-20 pt-2'
                src='http://snti.untar.ac.id/images/logo-fti-png_2.png'
                alt='logo ibik'
              />
            </a>
          </div>

          <div className='hidden md:block'>
            <nav aria-labelledby='header-navigation'>
              <h2 className='sr-only' id='header-navigation'>
                Header navigation
              </h2>

              <ul className='flex items-center gap-4 lg:gap-8 text-lg font-semibold'>
                <li>
                  <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                    Alur & File KP
                  </a>
                </li>

                <li>
                  <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                    Tempat KP
                  </a>
                </li>

                <li>
                  <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                    Registrasi
                  </a>
                </li>

                <li>
                  <a className='py-2 text-slate-900 transition hover:text-gray-500/75 hover:border-b-2 hover:border-purple-600'>
                    Lowongan KP
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:gap-4 sm:flex'>
              <a className='px-5 py-2.5 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 duration-200 rounded-md shadow'>
                Login
              </a>
            </div>

            <div className='block md:hidden' x-onClick='open = ! open'>
              <button className='p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75'>
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
      <div className='hidden' id='mobile-menu' x-show='open'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Alur & File KP
          </a>

          <a
            href='#'
            className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Tempat KP
          </a>

          <a
            href='#'
            className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Registrasi
          </a>

          <a
            href='#'
            className='text-slate-900 hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Lowongan KP
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
