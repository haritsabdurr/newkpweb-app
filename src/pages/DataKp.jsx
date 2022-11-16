import Footer from '@app/components/global/Footer';
import Navigation from '@app/components/global/Navigation';
import LoadingButton from '@app/components/loader/LoadingButton';
import { useState } from 'react';

const DataKp = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Navigation />
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>
            Masukkan Data Kerja Praktik
          </h1>
          <p className='mt-4 text-gray-500'>Masukkan data dengan sesuai</p>
        </div>

        <form
          action=''
          className='max-w-md mx-auto mt-8 mb-0 space-y-4'
          //   onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='nim' className='text-sm text-gray-800 ml-2 mb-2'>
              Judul Kerja Praktik
            </label>

            <div className='relative'>
              <textarea
                id='message'
                rows='3'
                className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-200'
                name='judulkp'
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor='nim' className='text-sm text-gray-800 ml-2 mb-2'>
              Tempat Kerja Praktik
            </label>

            <div className='relative'>
              <textarea
                id='message'
                rows='2'
                className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-200'
                name='tempatkp'
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor='nim' className='text-sm text-gray-800 ml-2 mb-2'>
              Alamat Perusahaan
            </label>

            <div className='relative'>
              <textarea
                id='message'
                rows='3'
                className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-200'
                name='alamatkp'
              ></textarea>
            </div>
          </div>

          <div>
            <label htmlFor='name' className='text-sm text-gray-800 ml-2 mb-2'>
              Dosen Pembimbing
            </label>
            <div className='relative'>
              <select
                name='dospem'
                // onChange={(e) => setJurusan(e.target.value)}
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
              >
                <option className='text-xs' value='Sistem Informasi'>
                  Novario Jaya Perdana
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Zyad Rusdi
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Darius Andana Haris
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Dedi Trisnawarman
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Desi Arisandi
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Tjap Tji Beng
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Wasino
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Jeanny
                </option>
              </select>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                type='submit'
                className='inline-block px-8 py-3 ml-3 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-md shadow-lg'
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DataKp;
