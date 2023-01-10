import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';
import LoadingButton from '@app/components/loader/LoadingButton';
import ErrorModal from '@app/components/modal/ErrorModal';
import Header from '@app/components/global/Header';
import axios from 'axios';
import Link from 'next/link';
import Success from '@app/components/toast/Success';
import swal from 'sweetalert';
import { useState } from 'react';
import { baseUrl } from '@app/utils/url';
import { useRouter } from 'next/router';

const Registrasi = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [jurusan, setJurusan] = useState('Sistem Informasi');
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios
        .post(`${baseUrl}/signup`, {
          jurusan: jurusan,
          nama: nama,
          nim: nim,
          email: email,
          password: password,
        })
        .then((res) => {
          swal({
            title: 'Yay!',
            text: res.data.message,
            icon: 'success',
          });
        });
      setTimeout(() => {
        router.push('/Login');
      }, 1200);
    } catch (err) {
      setIsLoading(false);
      swal({
        title: 'Oops!',
        text: err.message,
        icon: 'error',
      });
      throw err;
    }
  };

  return (
    <div>
      <Header title={'Register'} />
      <Navigation />
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>
            Registrasi Akun
          </h1>

          <p className='mt-4 text-gray-500'>
            Registrasi akun anda agar bisa menggunakan website KP FTI. Harap
            memasukkan data yang sesuai seperti Nama, Email Universitas dan
            Nomor Induk Mahasiswa.
          </p>
        </div>

        <form
          action=''
          className='max-w-md mx-auto mt-8 mb-0 space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='name' className='text-sm text-gray-800 ml-2 mb-2'>
              Jurusan
            </label>
            <div className='relative'>
              <select
                name='jurusan'
                onChange={(e) => setJurusan(e.target.value)}
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
              >
                <option className='text-xs' value='Sistem Informasi'>
                  Sistem Informasi
                </option>
                <option className='text-xs' value='Teknik Informatika'>
                  Teknik Informatika
                </option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor='nama' className='text-sm text-gray-800 ml-2 mb-2'>
              Nama
            </label>

            <div className='relative'>
              <input
                type='text'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter Name'
                name='nama'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='text-sm text-gray-800 ml-2 mb-2'>
              NIM
            </label>

            <div className='relative'>
              <input
                type='text'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter NIM'
                name='nim'
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='text-sm text-gray-800 ml-2 mb-2'>
              Email
            </label>

            <div className='relative'>
              <input
                type='email'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='password'
              className='text-sm text-gray-800 ml-2 mb-2'
            >
              Password
            </label>
            <div className='relative'>
              <input
                type='password'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                type='submit'
                className='inline-block px-8 py-3 ml-3 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 rounded-md shadow-lg'
              >
                Register
              </button>
            )}
          </div>
          <p className='text-sm text-center text-gray-700 pt-4'>
            Sudah Punya Akun?{' '}
            <span>
              <Link href='/Login'>
                <a className='underline'>Login</a>
              </Link>
            </span>
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Registrasi;
