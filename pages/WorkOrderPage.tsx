
import React from 'react';

const WorkOrderPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Manajemen Work Order</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Lacak progres semua Work Order (WO) atau Surat Perintah Kerja (SPK) dari sini.
      </p>
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Tabel yang menampilkan semua Work Order beserta statusnya (Draft, Approved, In Progress, Completed) akan ada di sini. Foreman akan dapat memperbarui sub-status pekerjaan dari halaman detail WO.</p>
      </div>
    </div>
  );
};

export default WorkOrderPage;
