
import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import EstimasiPage from './pages/EstimasiPage';
import WorkOrderPage from './pages/WorkOrderPage';
import PlaceholderPage from './pages/PlaceholderPage';
import RegistrasiPage from './pages/RegistrasiPage';

const pages: { [key: string]: React.ComponentType } = {
  '/': DashboardPage,
  '/registrasi': RegistrasiPage,
  '/estimasi': EstimasiPage,
  '/wo': WorkOrderPage,
  '/po': () => <PlaceholderPage title="Manajemen Purchase Order" />,
  '/invoice': () => <PlaceholderPage title="Manajemen Invoice" />,
  '/keuangan': () => <PlaceholderPage title="Manajemen Keuangan" />,
  '/laporan': () => <PlaceholderPage title="Laporan" />,
  '/pengaturan': () => <PlaceholderPage title="Pengaturan" />,
};

const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const PageComponent = useMemo(() => pages[currentPath] || pages['/'], [currentPath]);

  return (
    <Layout currentPath={currentPath}>
      <PageComponent />
    </Layout>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;