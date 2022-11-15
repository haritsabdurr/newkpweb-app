import React from 'react';

const ErrorModal = ({ errMessage, close }) => {
  return (
    <div
      id='defaultModal'
      tabIndex='-1'
      aria-hidden='true'
      className='block overflow-y-auto overflow-x-hidden pt-12 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal h-full bg-gray-800 bg-opacity-50'
    >
      <div className='relative mx-auto mt-32 p-4 w-full max-w-md h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <div className='flex justify-center items-center p-3 border-b border-black/20'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 mr-3 mt-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
              />
            </svg>

            <h3 className='text-xl text-center font-semibold'>Error!</h3>
          </div>

          <div className='p-5 space-y-4'>
            <p className='text-center text-md font-semibold text-red-500 leading-relaxed'>
              {errMessage}
            </p>
          </div>

          <div className='flex justify-center items-center p-3 pb-4 space-x-2'>
            <button
              dataModalToggle='defaultModal'
              type='button'
              onClick={close}
              className='text-white bg-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
