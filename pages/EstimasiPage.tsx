
import React from 'react';

const EstimasiPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Manajemen Estimasi</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Buat dan kelola estimasi biaya perbaikan untuk pelanggan di halaman ini.
      </p>
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Konten manajemen estimasi akan ditampilkan di sini, seperti daftar estimasi dengan status (Draft, Submitted, Approved) dan tombol untuk membuat estimasi baru.</p>
      </div>
    </div>
  );
};

export default EstimasiPage;
