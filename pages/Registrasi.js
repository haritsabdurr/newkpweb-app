import Link from "next/link";
import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const Registrasi = () => {
  const berhasilSubmit = () => {
    alert("Berhasil melakukan Registrasi");
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl uppercase">
            Registrasi Akun
          </h1>

          <p className="mt-4 text-gray-500">
            Registrasi akun anda agar bisa menggunakan website KP FTI. Gunakan
            NIM anda sebagai username dan gunakan email universitas sebagai
            email saat login.
          </p>
        </div>

        <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm text-gray-800 ml-2 mb-2">
              Jurusan
            </label>

            <div className="relative">
              <input
                type="radio"
                name="radio-1"
                value="Sistem Informasi"
                className="cursor-pointer"
                checked
              />
              <label
                htmlFor="radio-1"
                className="ml-2 mr-2 text-sm font-normal text-gray-800"
              >
                Sistem Informasi
              </label>
              <input
                type="radio"
                name="radio-1"
                value="Teknik Informatika"
                className="cursor-pointer"
              />
              <label
                htmlFor="radio-1"
                className="ml-2 mr-2 text-sm font-normal text-gray-800"
              >
                Teknik Informatika
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="name" className="text-sm text-gray-800 ml-2 mb-2">
              Name
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-800 ml-2 mb-2">
              NIM
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter NIM"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-800 ml-2 mb-2">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm text-gray-800 ml-2 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm text-gray-800 ml-2 mb-2"
            >
              Repeat Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/Login">
              <button
                type="submit"
                onClick={berhasilSubmit}
                className="inline-block px-8 py-3 ml-3 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-md shadow-lg"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Registrasi;
