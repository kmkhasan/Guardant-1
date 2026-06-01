import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ModernSlider from './ModernSlider';

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f5f5f5] font-sans">
      <div className="flex flex-col w-full max-w-[1280px] bg-white min-h-screen shadow-sm relative">
        <Header />
        {isHomePage && <ModernSlider />}
        <main className="flex-grow bg-white p-4 flex flex-col lg:flex-row gap-6 mt-1 border-t border-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-6 overflow-hidden w-full min-w-0 pr-1">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

