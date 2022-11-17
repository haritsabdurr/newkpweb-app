import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';
import Header from '@app/components/global/Header';

const Tempat = () => {
  return (
    <>
      <Header />
      <Navigation />
      <div className='py-12 px-4 md:px-20'>
        <div className='max-w-2xl mx-auto text-center mb-8'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>
            Daftar Tempat KP
          </h1>
          <p className='mt-4 text-gray-500'>
            Berikut adalah daftar perusahaan yang pernah dipilih sebagai tempat
            melaksanakan kerja praktek.
          </p>
        </div>
        <div className='flex justify-center overflow-x-auto'>
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

            <tbody className='divide-y divide-gray-200'>
              <tr>
                <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-center'>
                  1.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Administrasi Universitas Tarumanagara
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Jl. Letjen S. Parman No. 1, 11440, Jakarta Barat, DKI Jakarta,
                  Indonesia Indonesia
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  021-5671747
                </td>
              </tr>

              <tr>
                <td className='px-4 py-2 font-medium whitespace-nowrap text-center'>
                  2.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  ADR Group of Companies
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Jl. Raya PLP Curug No.88, Kadu Jaya, Kec. Curug, Kabupaten
                  Tangerang, Banten 15810
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  021-59492169
                </td>
              </tr>

              <tr>
                <td className='px-4 py-2 font-medium whitespace-nowrap text-center'>
                  3.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Alterra Academy
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Jalan Raya Tidar, Nomor 23, Karangbesuki, Kota Malang, Jawa
                  Timur. 65146.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  0812 3005 5223
                </td>
              </tr>

              <tr>
                <td className='px-4 py-2 font-medium whitespace-nowrap text-center'>
                  4.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Coding Bee Academy
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Ruko Golf Island Theme Park Blok D No.25, Pantai Indah Kapuk
                  Jakarta, Indonesia 144700
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  081386615565 - Kurniati
                </td>
              </tr>

              <tr>
                <td className='px-4 py-2 font-medium whitespace-nowrap text-center'>
                  5.
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  PT. Adira Dinamika Multi Finance Tbk
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Gedung Millenium Centennial Center Lantai 53, 56-61 Jl
                  Jenderal Sudirman Kav. 25 Jakarta 12920
                </td>
                <td className='px-4 py-2 text-gray-700 whitespace-nowrap text-center'>
                  Nurul Fitriani - 0center8885-2299
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tempat;
