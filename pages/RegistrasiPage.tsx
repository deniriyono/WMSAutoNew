import React, { useState } from 'react';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon } from '../components/icons/Icons';
import Modal from '../components/Modal';
import RegistrasiForm from '../components/RegistrasiForm';

// --- Mock Data ---
const mockData = [
  { id: 1, pelanggan: { nama: 'Andi Wijaya', telepon: '081234567890' }, kendaraan: { noPolisi: 'B 1234 XYZ', merk: 'Toyota', tipe: 'Avanza', tahun: 2021 }, tanggalMasuk: '2023-10-27', status: 'Estimasi' },
  { id: 2, pelanggan: { nama: 'Citra Lestari', telepon: '085678901234' }, kendaraan: { noPolisi: 'D 5678 ABC', merk: 'Honda', tipe: 'Brio', tahun: 2022 }, tanggalMasuk: '2023-10-27', status: 'Dikerjakan' },
  { id: 3, pelanggan: { nama: 'Budi Hartono', telepon: '087712345678' }, kendaraan: { noPolisi: 'F 9101 DEF', merk: 'Mitsubishi', tipe: 'Pajero Sport', tahun: 2020 }, tanggalMasuk: '2023-10-26', status: 'Selesai' },
  { id: 4, pelanggan: { nama: 'Dewi Anggraini', telepon: '089956781234' }, kendaraan: { noPolisi: 'B 1122 GHI', merk: 'Suzuki', tipe: 'Ertiga', tahun: 2019 }, tanggalMasuk: '2023-10-25', status: 'Baru' },
];

const statusStyles: { [key: string]: string } = {
  'Baru': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'Estimasi': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'Dikerjakan': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  'Selesai': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
};

// --- Main Page Component ---
const RegistrasiPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Registrasi Pelanggan & Kendaraan</h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                        Kelola data pelanggan dan kendaraan yang masuk ke bengkel.
                    </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                    <PlusIcon className="w-5 h-5" />
                    <span>Tambah Data</span>
                </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input type="text" placeholder="Cari berdasarkan nama pelanggan atau nomor polisi..." className="w-full pl-10 pr-4 py-2 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-brand-500 focus:border-brand-500" />
                </div>
            </div>

            {/* --- Desktop Table --- */}
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama Pelanggan</th>
                            <th scope="col" className="px-6 py-3">No. Polisi</th>
                            <th scope="col" className="px-6 py-3">Kendaraan</th>
                            <th scope="col" className="px-6 py-3">Tanggal Masuk</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockData.map((item) => (
                            <tr key={item.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.pelanggan.nama}</td>
                                <td className="px-6 py-4">{item.kendaraan.noPolisi}</td>
                                <td className="px-6 py-4">{`${item.kendaraan.merk} ${item.kendaraan.tipe} (${item.kendaraan.tahun})`}</td>
                                <td className="px-6 py-4">{item.tanggalMasuk}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                                    <button className="p-1 text-blue-600 hover:text-blue-800" aria-label="Edit"><EditIcon className="w-5 h-5" /></button>
                                    <button className="p-1 text-red-600 hover:text-red-800" aria-label="Hapus"><TrashIcon className="w-5 h-5" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/* --- Mobile Cards --- */}
            <div className="md:hidden space-y-4">
              {mockData.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-3">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{item.pelanggan.nama}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.pelanggan.telepon}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusStyles[item.status]}`}>
                          {item.status}
                        </span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">No. Polisi:</span>
                        <span className="font-medium">{item.kendaraan.noPolisi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Kendaraan:</span>
                        <span className="font-medium text-right">{`${item.kendaraan.merk} ${item.kendaraan.tipe} (${item.kendaraan.tahun})`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-gray-400">Tgl Masuk:</span>
                        <span className="font-medium">{item.tanggalMasuk}</span>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 border-t border-gray-200 dark:border-gray-700 pt-3">
                        <button className="p-2 text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-md" aria-label="Edit"><EditIcon className="w-5 h-5" /></button>
                        <button className="p-2 text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-md" aria-label="Hapus"><TrashIcon className="w-5 h-5" /></button>
                    </div>
                </div>
              ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Tambah Registrasi Baru">
                <RegistrasiForm onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default RegistrasiPage;
