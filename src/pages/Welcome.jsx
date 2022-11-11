import Link from 'next/link';
import React from 'react';

const Welcome = () => {
  return (
    <>
      <div
        className='text-center md:pb-16 text-white px-6 py-32 xl:px-[20rem] h-[36rem]'
        id='banner-hero'
      >
        <h1 className='text-2xl md:text-5xl font-bold py-2 uppercase'>
          Selamat Datang<br></br> di Website KP FTI Untar
        </h1>
        <h2 className='text-md md:text-xl mt-4 py-3'>
          Website ini digunakan oleh Mahasiswa FTI Untar untuk menginput
          informasi KP yang sedang dilakukan. Mahasiswa harus melakukan
          registrasi terlebih dahulu untuk dapat menggunakan website ini.
        </h2>
        <div className='sm:gap-4 flex justify-center items-center my-8'>
          <Link href='/Registrasi'>
            <a className='px-6 py-3 text-md font-medium shadow-xl text-white uppercase bg-purple-700 hover:bg-purple-800 hover:outline duration-200 rounded-md'>
              Registrasi
            </a>
          </Link>
        </div>
      </div>
      <div className='max-w-screen-2xl px-2 py-6 my-2 mx-auto sm:px-6 lg:px-8'>
        <div>
          <h2 className='text-lg text-center md:text-xl font-bold py-3 mt-8'>
            Pengumuman KP
          </h2>
          <div className='block p-6 transition-shadow bg-white sm:pr-12 group shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <h2 className='mt-3 text-md md:text-lg font-bold'>
              Briefing ke 7-Pengumpulan Laporan Kemajuan
            </h2>

            <p className='mt-3 text-sm text-gray-500'>
              Bagi mahasiswa yang mengikuti Magang & Studi Independen Semester
              Genap 2021/2022 diselenggarakan via Ms. Teams pada tanggal 11
              Februrari 2022 | 11.00 - 11.30 WIB
            </p>

            <p className='relative inline-block mt-16 text-md font-bold text-purple-700'>
              <span className='relative cursor-pointer hover:text-slate-900'>
                Find out more →
              </span>
            </p>
          </div>
          <div className='block p-6 transition-shadow bg-white sm:pr-12 group shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <h2 className='mt-3 text-md md:text-lg font-bold'>
              Briefing ke-6 Penyusunan Laporan Kemajuan
            </h2>

            <p className='mt-3 text-sm text-gray-500'>
              Bagi mahasiswa yang mengikuti Magang & Studi Independen Semester
              Genap 2021/2022 diselenggarakan via Ms. Teams pada tanggal 12
              Maret 2022 | 11.00 - 11.30 WIB
            </p>

            <p className='relative inline-block mt-16 text-md font-bold text-purple-700'>
              <span className='relative cursor-pointer hover:text-slate-900'>
                Find out more →
              </span>
            </p>
          </div>
          <div className='block p-6 transition-shadow bg-white sm:pr-12 group shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <h2 className='mt-3 text-md md:text-lg font-bold'>
              Briefing Penyusunan Laporan Kemajuan
            </h2>

            <p className='mt-3 text-sm text-gray-500'>
              Bagi mahasiswa yang mengikuti Magang & Studi Independen Semester
              Genap 2021/2022 diselenggarakan via Ms. Teams pada tanggal 18
              Maret 2022 | 11.00 - 11.30 WIB
            </p>

            <p className='relative inline-block mt-16 text-md font-bold text-purple-700'>
              <span className='relative cursor-pointer hover:text-slate-900'>
                Find out more →
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
