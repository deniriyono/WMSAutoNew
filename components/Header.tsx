
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, ChevronDownIcon } from './icons/Icons';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700 shadow-sm">
      <div className="flex items-center">
        <button onClick={onMenuClick} className="text-gray-500 focus:outline-none lg:hidden">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2 focus:outline-none">
            {user?.avatarUrl && <img className="h-8 w-8 rounded-full object-cover" src={user.avatarUrl} alt="User avatar" />}
            <div className='text-left hidden sm:block'>
              <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{user?.nama}</span>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role}</p>
            </div>
            <ChevronDownIcon className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border dark:border-gray-700">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Profil Saya</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Pengaturan</a>
              <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Keluar</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
