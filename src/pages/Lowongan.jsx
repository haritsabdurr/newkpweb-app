import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';
import Header from '@app/components/global/Header';

const Lowongan = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className='py-12 px-4 md:px-20'>
        <div className='max-w-2xl mx-auto text-center mb-8'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>
            Daftar Lowongan KP
          </h1>
          <p className='mt-4 text-gray-500'>
            Berikut adalah daftar lowongan untuk melaksanakan kerja praktek.
          </p>
        </div>
        <div className='flex justify-center overflow-x-auto py-3'>
          <table className='w-full text-sm divide-y-2 divide-gray-200'>
            <thead>
              <tr>
                <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                  No.
                </th>
                <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                  Nama Perusahaan
                </th>
                <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                  Alamat
                </th>
                <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                  Kontak
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='text-center text-lg font-medium py-3'>
          <h1>Saat ini belum ada lowongan KP</h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Lowongan;
