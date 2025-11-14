
import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Fitur ini sedang dalam pengembangan.
      </p>
      <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <p className="text-gray-500 dark:text-gray-400">Konten untuk modul {title.toLowerCase()} akan segera tersedia.</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
