import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';
import LoadingButton from '@app/components/loader/LoadingButton';
import Header from '@app/components/global/Header';
import Link from 'next/link';
import axios from 'axios';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import { useState } from 'react';
import { baseUrl } from '@app/utils/url';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios
        .post(`${baseUrl}/signin`, {
          nim: nim,
          password: password,
        })
        .then((res) => {
          const token = res.data.accessToken;
          const decoded = JwtDecode(token);

          Cookies.set('token', res.data.accessToken);
          Cookies.set('user', res.data.nama);

          console.log(decoded);
          setTimeout(() => {
            router.push('/Welcome');
          }, 600);
        });
    } catch (error) {
      setIsLoading(false);
      setErrMessage(error.response?.data.message);
      throw error;
    }
  };

  return (
    <>
      <Header title={'Login'} />
      <Navigation />
      <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl uppercase'>
            Masuk ke akun anda
          </h1>
          <p className='mt-4 text-gray-500'>
            Masuk ke akun anda menggunakan NIM sebagai username.
          </p>
        </div>

        <form
          action=''
          className='max-w-md mx-auto mt-8 mb-0 space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor='nim' className='text-sm text-gray-800 ml-2 mb-2'>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <p className='text-sm font-medium text-red-500 ml-3 mt-1'>
              {errMessage}
            </p>
          </div>

          <div className='flex items-center justify-center'>
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button
                type='submit'
                className='inline-block px-8 py-3 ml-3 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-md shadow-lg'
              >
                Login
              </button>
            )}
          </div>
          <p className='text-sm text-center text-gray-700'>
            Belum Punya Akun?{' '}
            <span>
              <Link href='/Registrasi'>
                <a className='underline'>Register</a>
              </Link>
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
