
import React from 'react';

const PelangganPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Manajemen Pelanggan</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Di halaman ini, Anda akan dapat menambah, melihat, mengubah, dan menghapus data pelanggan.
      </p>
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Konten manajemen pelanggan akan ditampilkan di sini, termasuk tabel data, fungsionalitas pencarian, filter, dan tombol tambah pelanggan baru.</p>
      </div>
    </div>
  );
};

export default PelangganPage;
