import React from 'react';

const Home = () => {
  return (
    <div className='max-w-screen-2xl px-2 py-6 my-24 mx-auto sm:px-6 lg:px-8'>
      <div className='text-center '>
        <h1 className='text-2xl md:text-5xl font-bold py-2 uppercase'>
          Selamat Datang<br></br> di Website KP FTI Untar
        </h1>
        <h2 className='text-md md:text-xl mt-4'>
          Website ini digunakan oleh Mahasiswa FTI Untar untuk menginput
          informasi KP yang sedang dilakukan. Mahasiswa harus melakukan
          registrasi terlebih dahulu untuk dapat menggunakan website ini.
        </h2>
        <h2 className='text-lg md:text-xl font-bold py-3 mt-8'>
          Pengumuman KP
        </h2>
      </div>
      <div>
        <div className='block p-6 transition-shadow bg-white sm:pr-12 group shadow-md border border-slate-400 rounded-md mx-2 my-3'>
          <h2 className='mt-3 text-md md:text-lg font-bold'>
            Briefing ke 7-Pengumpulan Laporan Kemajuan
          </h2>

          <p className='mt-3 text-sm text-gray-500'>
            Bagi mahasiswa yang mengikuti Magang & Studi Independen Semester
            Genap 2021/2022 diselenggarakan via Ms. Teams pada tanggal 11
            Februrari 2022 | 11.00 - 11.30 WIB
          </p>

          <p className='relative inline-block mt-16 text-md font-bold text-purple-600'>
            <span className='relative cursor-pointer hover:text-slate-900'>
              Find out more →
            </span>
          </p>
        </div>
        <div className='block p-6 transition-shadow bg-white sm:pr-12 group shadow-md border border-slate-400 rounded-md mx-2 my-3'>
          <h2 className='mt-3 text-md md:text-lg font-bold'>
            Briefing Penyusunan Laporan Kemajuan
          </h2>

          <p className='mt-3 text-sm text-gray-500'>
            Bagi mahasiswa yang mengikuti Magang & Studi Independen Semester
            Genap 2021/2022 diselenggarakan via Ms. Teams pada tanggal 18 Maret
            2022 | 11.00 - 11.30 WIB
          </p>

          <p className='relative inline-block mt-16 text-md font-bold text-purple-600'>
            <span className='relative cursor-pointer hover:text-slate-900'>
              Find out more →
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
