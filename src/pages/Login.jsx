import Link from 'next/link';
import Navigation from '@app/components/global/Navigation';
import Footer from '@app/components/global/Footer';

const Login = () => {
  return (
    <>
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

        <form action='' className='max-w-md mx-auto mt-8 mb-0 space-y-4'>
          <div>
            <label htmlFor='email' className='text-sm text-gray-800 ml-2 mb-2'>
              NIM
            </label>

            <div className='relative'>
              <input
                type='email'
                className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm'
                placeholder='Enter NIM'
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
              />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='inline-block px-8 py-3 ml-3 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-md shadow-lg'
            >
              Login
            </button>
          </div>
          <p className='text-sm text-center text-gray-700'>
            Dont have an account?{' '}
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
