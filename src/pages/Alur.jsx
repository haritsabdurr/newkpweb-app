import Footer from '@app/components/global/Footer';
import Navigation from '@app/components/global/Navigation';

const Alur = () => {
  return (
    <>
      <Navigation />
      <div className='max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center mb-12'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>Alur KP</h1>
          <p className='mt-4 text-gray-500'>
            Berikut adalah alur dari Kerja Praktik (KP). Download buku manual
            petunjuk KP{' '}
            <a
              href='http://ibik.fti.untar.ac.id/kpfti/downfilekp.php?no=0'
              className='underline'
            >
              disini
            </a>
            .
          </p>
          <p className='mt-4 text-gray-500'></p>
        </div>

        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Menyerahkan Surat Keterangan KP pada perusahaan
              </h5>

              <p className='mt-2 text-sm'>
                Surat Keterangan KP dapat diperoleh dari staff Program Studi,
                dengan mengajukan pembuatan surat tersebut terlebih dahulu.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Memilih mata kuliah KP
              </h5>

              <p className='mt-2 text-sm'>
                Mata kuliah kerja praktik dapat dipilih saat pengisian KRRS
                Online.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Mengajukan Form Permohonan Pembimbing
              </h5>

              <p className='mt-2 text-sm'>
                Memilih dosen pembimbing KP pada saat mengisi data KP. Setelah
                itu men-generate form permohonan dosen pembimbing untuk
                ditandatangani.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Melaksanakan KP di perusahaan
              </h5>

              <p className='mt-2 text-sm'>
                Disertai bimbingan dengan dosen pembimbing. Minimal jumlah
                bimbingan adalah 8 (delapan) kali.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Memperoleh Surat Keterangan Selesai KP dari perusahaan
              </h5>

              <p className='mt-2 text-sm'>
                Setelah mahasiswa selesai melakukan KP, kemudian diharuskan
                membuat Lembar Persetujuan Mengikuti Sidang KP.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Mengumpulkan Laporan KP
              </h5>

              <p className='mt-2 text-sm'>
                Mengumpulkan minimal 3 jilid laporan untuk diujikan saat sidang.
                Lalu mengumpulkan minimal 1 jilid setelah diujikan.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Mengikuti sidang KP
              </h5>

              <p className='mt-2 text-sm'>
                Presentasi dilakukan menggunakan alat bantuk komputer dan
                proyektor saat <span className='font-bold'>Luring</span>. Atau
                menggunakan bantuan media online saat{' '}
                <span className='font-bold'>Daring</span>.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Perbaikan laporan KP
              </h5>

              <p className='mt-2 text-sm'>
                Melakukan evaluasi dan perbaikan terhadap laporan KP jika
                terdapat hal - hal yang perlu diperbaiki.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Konsultasi format akhir KP dengan Koordinator KP
              </h5>

              <p className='mt-2 text-sm'>
                Melakukan konsultasi format laporan KP sebelum nanti dikumpulkan
                dan disahkan.
              </p>
            </div>
          </a>
          <div className='flex justify-center items-center py-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-9 w-9'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
        <div>
          <a className='relative block p-8 shadow-md hover:shadow-lg border border-slate-200 rounded-md mx-2 my-3'>
            <div className='mt-2 text-gray-500 sm:pr-8 text-center'>
              <h5 className='mt-2 text-xl font-bold text-gray-900'>
                Mengumpulkan laporan akhir KP
              </h5>

              <p className='mt-2 text-sm'>
                Laporan akhir KP dikumpulkan kemudian dilakukan pengesahan
                dengan mengisi Lembar Pengesahan Laporan KP.
              </p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Alur;
