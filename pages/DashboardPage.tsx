
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { WrenchIcon, DollarSignIcon, CarIcon, UsersIcon } from '../components/icons/Icons';

const StatCard: React.FC<{ title: string; value: string; icon: React.ElementType; color: string }> = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center">
      <div className={`p-3 rounded-full mr-4 ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Selamat Datang, {user?.nama}!</h1>
      <p className="text-gray-600 dark:text-gray-300">Berikut adalah ringkasan performa bengkel Anda hari ini.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="WO Sedang Dikerjakan" value="12" icon={WrenchIcon} color="bg-blue-500" />
        <StatCard title="Pendapatan Bulan Ini" value="Rp 125jt" icon={DollarSignIcon} color="bg-green-500" />
        <StatCard title="Kendaraan Masuk Hari Ini" value="8" icon={CarIcon} color="bg-yellow-500" />
        <StatCard title="Pelanggan Baru" value="3" icon={UsersIcon} color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Work Order Terbaru</h2>
            <p className="text-gray-500 dark:text-gray-400">Tabel work order akan ditampilkan di sini.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Aktivitas Terkini</h2>
            <p className="text-gray-500 dark:text-gray-400">Log aktivitas akan ditampilkan di sini.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
