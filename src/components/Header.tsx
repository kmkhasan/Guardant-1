import { ShoppingCart, Search, Globe, Heart, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <header className="bg-white">
      {/* Top Banner */}
      <div className="bg-white border-b border-gray-200 text-[10px] py-1 px-4 flex justify-between items-center text-gray-600">
        <div className="flex gap-4">
          <span>GUARDANT OFFICIAL STORE</span>
          <span>{t('スーパーSALE開催中！', 'Super Sale now on!')}</span>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={toggleLanguage} className="flex items-center gap-1 font-bold bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded text-gray-800 transition-colors">
            <Globe size={12} />
            <span>{language === 'jp' ? 'EN' : 'JP'}</span>
          </button>
          <span className="text-[#0044cc] cursor-pointer">{t('ログイン', 'Login')}</span>
          <span className="text-[#0044cc] cursor-pointer">{t('注文詳細', 'Orders')}</span>
          <span className="text-[#0044cc] cursor-pointer">{t('お気に入り', 'Favorites')}</span>
        </div>
      </div>

      <div className="flex items-center px-4 py-4 gap-4 md:gap-8">
        
        {/* Logo / Brand Name */}
        <div className="flex flex-col">
          <Link to="/" className="font-serif text-3xl font-black italic tracking-tighter text-[#bf0000] leading-none hover:opacity-80 transition-opacity">
            Guardant
          </Link>
          <div className="text-[10px] text-gray-400 font-bold uppercase hidden md:block">Authentic Quality Bags</div>
        </div>

        {/* Search Bar - Hidden on small screens, expands on lg */}
        <div className="flex-1 flex max-w-2xl">
          <input
            type="text"
            placeholder={t('商品検索... (例: 本革 トートバッグ)', 'Search products...')}
            className="flex-1 border-2 border-[#bf0000] px-3 py-2 text-sm focus:outline-none w-full"
          />
          <button className="bg-[#bf0000] text-white px-4 md:px-6 py-2 flex items-center gap-2">
            <Search size={16} />
            <span className="font-bold text-sm hidden md:block">{t('検索', 'Search')}</span>
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-xs text-gray-700">
          <div className="flex flex-col items-center cursor-pointer hover:text-[#bf0000] transition-colors">
            <div className="p-2">
              <User size={24} strokeWidth={1.5} />
            </div>
            <span className="hidden md:block font-bold">{t('マイページ', 'My Page')}</span>
          </div>
          
          <div className="flex flex-col items-center cursor-pointer hover:text-[#bf0000] transition-colors">
            <div className="p-2 relative">
              <Heart size={24} strokeWidth={1.5} />
              <span className="absolute top-1 right-0 bg-[#bf0000] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                12
              </span>
            </div>
            <span className="hidden md:block font-bold">{t('お気に入り', 'Wishlist')}</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer hover:text-[#bf0000] transition-colors">
            <div className="p-2 relative">
              <ShoppingCart size={24} strokeWidth={1.5} />
              <span className="absolute top-1 right-0 bg-[#bf0000] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <span className="hidden md:block font-bold">{t('かご', 'Cart')}</span>
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="bg-[#bf0000] text-white text-[12px] flex px-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Link to="/category/all" className="py-2 px-4 hover:bg-red-800 cursor-pointer font-bold border-r border-[#990000]">{t('すべてみる (ALL ITEMS)', 'ALL ITEMS')}</Link>
        <Link to="/category/business" className="py-2 px-4 hover:bg-red-800 cursor-pointer font-bold border-r border-[#990000]">{t('ビジネスバッグ (BUSINESS)', 'BUSINESS BAGS')}</Link>
        <Link to="/category/tote" className="py-2 px-4 hover:bg-red-800 cursor-pointer font-bold border-r border-[#990000]">{t('トートバッグ (TOTE BAG)', 'TOTE BAGS')}</Link>
        <Link to="/category/backpack" className="py-2 px-4 hover:bg-red-800 cursor-pointer font-bold border-r border-[#990000]">{t('リュック (BACKPACK)', 'BACKPACKS')}</Link>
        <Link to="/category/wallet" className="py-2 px-4 hover:bg-red-800 cursor-pointer font-bold border-r border-[#990000]">{t('財布・小物 (WALLET/GOODS)', 'WALLETS & GOODS')}</Link>
      </nav>
    </header>
  );
}
