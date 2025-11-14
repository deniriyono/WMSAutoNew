
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboardIcon, UsersIcon, CarIcon, FileTextIcon, WrenchIcon, ShoppingCartIcon, 
  PrinterIcon, DollarSignIcon, BarChartIcon, SettingsIcon, LogOutIcon, WrenchMinimalistIcon 
} from './icons/Icons';

interface SidebarProps {
  currentPath: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboardIcon },
  { href: '/registrasi', label: 'Registrasi', icon: CarIcon },
  { href: '/estimasi', label: 'Estimasi', icon: FileTextIcon },
  { href: '/wo', label: 'Work Order', icon: WrenchIcon },
  { href: '/po', label: 'Purchase Order', icon: ShoppingCartIcon },
  { href: '/invoice', label: 'Invoice', icon: PrinterIcon },
  { href: '/keuangan', label: 'Keuangan', icon: DollarSignIcon },
  { href: '/laporan', label: 'Laporan', icon: BarChartIcon },
  { href: '/pengaturan', label: 'Pengaturan', icon: SettingsIcon },
];

const NavLink: React.FC<{ href: string; currentPath: string; children: React.ReactNode }> = ({ href, currentPath, children }) => {
  const isActive = currentPath === href;
  return (
    <a href={`#${href}`} className={`flex items-center p-2 my-1 text-base font-medium rounded-lg transition-colors duration-200 ${
        isActive 
          ? 'bg-brand-600 text-white' 
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}>
      {children}
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentPath, isOpen, setIsOpen }) => {
  const { user } = useAuth();

  return (
    <>
      <aside className={`fixed lg:relative z-20 h-full w-64 bg-white dark:bg-gray-800 shadow-md transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center p-4 border-b dark:border-gray-700">
             <WrenchMinimalistIcon className="w-8 h-8 text-brand-600" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white ml-2">WMSAuto</h1>
          </div>
          <nav className="flex-1 px-4 py-2">
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href} currentPath={currentPath}>
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t dark:border-gray-700">
             <a href="#" className="flex items-center p-2 text-base font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <LogOutIcon className="w-6 h-6 mr-3" />
                <span>Keluar</span>
            </a>
          </div>
        </div>
      </aside>
      {isOpen && <div className="fixed inset-0 z-10 bg-black opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;