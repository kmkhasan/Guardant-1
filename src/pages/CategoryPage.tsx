import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const { t, language } = useLanguage();

  const categoryNameMap: Record<string, { jp: string; en: string }> = {
    'business': { jp: 'ビジネスバッグ', en: 'Business Bags' },
    'tote': { jp: 'トートバッグ', en: 'Tote Bags' },
    'backpack': { jp: 'リュック・バックパック', en: 'Backpacks' },
    'wallet': { jp: '財布・小物', en: 'Wallets & Goods' },
    'all': { jp: 'すべての商品', en: 'All Products' },
    'mens': { jp: 'メンズ', en: 'Men\'s' },
    'mens-bag': { jp: 'メンズ バッグ', en: 'Men\'s Bag' },
    'mens-wallet': { jp: 'メンズ 財布', en: 'Men\'s Wallet' },
    'mens-leather': { jp: 'メンズ レザーグッズ', en: 'Men\'s Leather Goods' },
    'womens': { jp: 'レディース', en: 'Women\'s' },
    'womens-bag': { jp: 'レディース バッグ', en: 'Women\'s Bag' },
    'womens-wallet': { jp: 'レディース 財布', en: 'Women\'s Wallet' },
    'womens-leather': { jp: 'レディース レザーグッズ', en: 'Women\'s Leather Goods' },
    'miscellaneous': { jp: '雑貨', en: 'Miscellaneous Goods' },
    'leather': { jp: '革の種類で選ぶ', en: 'By Leather Type' },
    'brand': { jp: 'ブランドで選ぶ', en: 'By Brand' },
    'outlet': { jp: 'アウトレット', en: 'Outlet' },
    'new': { jp: '新着商品', en: 'New Arrivals' },
    'others': { jp: 'その他', en: 'Others' }
  };

  const categoryInfo = categoryId && categoryNameMap[categoryId] ? categoryNameMap[categoryId] : { jp: 'カテゴリー', en: 'Category' };

  const displayedProducts = categoryId && categoryId !== 'all' 
    ? products.filter(p => {
        let match = true;
        
        // Exact matching
        if(categoryId === 'business') return p.category === 'ビジネス';
        if(categoryId === 'tote') return p.category === 'トート';
        if(categoryId === 'backpack') return p.category === 'リュック';
        if(categoryId === 'new') return p.isNew;
        if(categoryId === 'outlet') return !!p.originalPrice;
        if(categoryId === 'miscellaneous') return p.category === '小物';
        if(categoryId === 'others') return false; // mockup
        
        // Characteristic inclusion matching
        if (categoryId.includes('mens')) match = match && (p.name.includes('メンズ') || p.name.includes('Mens') || p.nameEn.includes('Mens'));
        if (categoryId.includes('womens')) match = match && (p.name.includes('レディース') || p.name.includes('Womens') || p.nameEn.includes('Womens'));

        if (categoryId.includes('wallet')) match = match && (p.category.includes('財布') || p.category.includes('Wallet') || p.category === 'クラッチ');
        if (categoryId.includes('bag') && !categoryId.includes('business') && !categoryId.includes('tote') && !categoryId.includes('backpack')) {
           match = match && (p.category === 'バッグ' || p.category === 'ショルダー' || p.category === 'トート' || p.category === 'ビジネス' || p.category === 'ボストン' || p.category === 'リュック');
        }
        if (categoryId === 'mens-leather' || categoryId === 'womens-leather' || categoryId === 'leather') {
            match = match && (p.category === '小物' || p.categoryEn === 'Goods' || p.category === '革小物');
        }
        
        return match;
      })
    : products;

  const isMensBase = categoryId === 'mens';
  const isWomensBase = categoryId === 'womens';
  const showSubNav = isMensBase || isWomensBase;
  const basePrefix = isMensBase ? 'mens' : 'womens';

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* Dynamic Banners for Mens/Womens Base Page */}
      {showSubNav && (
        <div className="flex flex-col gap-3 mb-2">
          {/* Main Hero Banner */}
          <div className="w-full relative aspect-[2/1] md:aspect-[2.5/1] bg-gray-100 overflow-hidden cursor-pointer">
             <img src="https://images.unsplash.com/photo-1547949007-56b093325c34?auto=format&fit=crop&q=80&w=1200" alt="Leather Accessories" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-left bg-gradient-to-r from-white/90 via-white/60 to-transparent">
                <p className="text-gray-500 font-serif italic text-xs md:text-sm mb-1">genuine leather</p>
                <h2 className="text-3xl md:text-5xl font-serif text-[#4a4036] tracking-wider mb-2">LEATHER</h2>
                <h2 className="text-2xl md:text-4xl font-serif text-[#4a4036] tracking-wider mb-4">ACCESSORIES</h2>
                <p className="text-gray-800 text-sm md:text-lg font-medium mt-4">いつものスタイルに</p>
                <p className="text-gray-900 text-2xl md:text-4xl font-bold tracking-widest leading-none mt-1">「高級感」<span className="text-sm md:text-xl font-normal">をプラス</span></p>
             </div>
          </div>
          
          {/* Secondary Banners Strip 1 */}
          <div className="grid grid-cols-3 gap-2">
            <Link to={`/category/${basePrefix}-bag`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-[#2d3748] text-white flex items-center justify-center p-2 text-center aspect-[4/1]">
              <span className="text-[10px] md:text-sm font-bold tracking-tight">防水レザーシリーズ<br/><span className="text-[8px] font-normal">waterproof series</span></span>
            </Link>
            <Link to={`/`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-[#00b900] text-white flex items-center justify-center p-2 text-center aspect-[4/1]">
              <span className="text-[10px] md:text-sm font-bold tracking-tight">LINEお友達登録で<br/>300円OFF</span>
            </Link>
            <Link to={`/category/${basePrefix}`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-[#71717a] text-white flex items-center justify-center p-2 text-center aspect-[4/1]">
              <span className="text-[10px] md:text-sm font-bold tracking-tight">SEEKER<br/><span className="text-[8px] font-normal">CREATIVE PRODUCT</span></span>
            </Link>
          </div>

          {/* Secondary Banners Strip 2 */}
          <div className="grid grid-cols-3 gap-2">
            <Link to={`/category/${basePrefix}-bag`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-[#fdfbf6] border border-gray-200 text-gray-800 flex items-center justify-center p-2 text-center aspect-[4/1]">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
              <span className="relative z-10 text-[10px] md:text-sm font-bold text-[#b45309]">ビジネススタイルを格上げ<br/><span className="text-gray-800">BRIEF CASE</span></span>
            </Link>
            <Link to={`/category/${basePrefix}-bag`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-white border border-gray-200 text-gray-800 flex items-center p-2 text-center gap-2 aspect-[4/1]">
              <div className="w-1/3 h-full bg-gray-900 border-r-4 border-[#b45309] shrink-0 font-bold text-white flex items-center justify-center text-[10px] md:text-sm">本革</div>
              <span className="text-[10px] md:text-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis">A4縦型ショルダーバッグ</span>
            </Link>
            <Link to={`/category/${basePrefix}-wallet`} className="relative overflow-hidden hover:opacity-90 transition-opacity bg-[#8b5a2b] text-white flex items-center justify-center p-2 text-center aspect-[4/1]">
              <span className="text-[10px] md:text-sm font-bold">SMART WALLET<br/><span className="text-[8px] font-normal">シンプルで使いやすい</span></span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col items-center justify-center my-8 w-full">
             <div className="flex items-center w-full max-w-lg mb-4">
               <div className="flex-grow h-[1px] bg-gray-300"></div>
               <span className="px-6 text-sm font-bold tracking-widest text-gray-800">{t('検索窓', 'Search')}</span>
               <div className="flex-grow h-[1px] bg-gray-300"></div>
             </div>
             <div className="flex w-full max-w-sm shrink-0 border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
               <input type="text" className="w-full p-2.5 text-sm outline-none" />
               <button className="bg-black text-white px-4 flex items-center justify-center hover:bg-gray-800 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
               </button>
             </div>
          </div>

          {/* Trending Keywords */}
          <div className="w-full bg-[#f4f4f4] p-5 text-[11px] mb-4">
            <h3 className="text-center font-bold text-gray-800 mb-4">{t('人気上昇キーワード', 'Trending Keywords')}</h3>
            <div className="flex flex-wrap gap-2 justify-center text-gray-600">
              <span className="bg-white px-3 py-1.5 border border-gray-200">長財布 レディース ブランド</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">二つ折り財布 レディース</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">スマホショルダー</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">サコッシュ</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">ボディバッグ 本革</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">斜め掛けバッグ メンズ</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">軽量 本革 ショルダーバッグ</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">ショルダーバッグ レディース</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">本革 バッグ レディース</span>
              <span className="bg-white px-3 py-1.5 border border-gray-200">ビジネスバッグ 本革</span>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="text-[11px] text-gray-500 mb-2">
        <Link to="/" className="text-blue-600 hover:underline">{t('ストアトップ', 'Store Top')}</Link>
        <span className="mx-1">{'>'}</span>
        <span>{t(categoryInfo.jp, categoryInfo.en)}</span>
      </div>

      {/* Sub-category Navigation for Men/Women Base Pages */}
      {showSubNav && (
        <div className="flex flex-wrap items-center mb-6 text-[12px] w-full px-2">
          <Link to={`/category/${basePrefix}-bag`} className="text-blue-600 hover:opacity-75 relative flex items-center pr-6 mr-6 group">
            <div className="w-[5px] h-[5px] bg-[#cc0000] mr-2"></div>
            <span className="text-blue-600 group-hover:underline">{t('バッグ', 'Bag')} <span className="text-blue-600">({products.filter(p => (p.name.toLowerCase().includes(basePrefix === 'mens' ? 'mens' : 'womens') || p.name.includes(basePrefix === 'mens' ? 'メンズ' : 'レディース')) && ['リュック', 'トート', 'ショルダー', 'ビジネス', 'ボストン'].includes(p.category)).length}件)</span></span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-gray-300"></div>
          </Link>
          <Link to={`/category/${basePrefix}-wallet`} className="text-blue-600 hover:opacity-75 relative flex items-center pr-6 mr-6 group">
            <div className="w-[5px] h-[5px] bg-[#cc0000] mr-2"></div>
            <span className="text-blue-600 group-hover:underline">{t('財布', 'Wallet')} <span className="text-blue-600">({products.filter(p => (p.name.toLowerCase().includes(basePrefix === 'mens' ? 'mens' : 'womens') || p.name.includes(basePrefix === 'mens' ? 'メンズ' : 'レディース')) && p.category === '財布').length}件)</span></span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3 bg-gray-300"></div>
          </Link>
          <Link to={`/category/${basePrefix}-leather`} className="text-blue-600 hover:opacity-75 relative flex items-center group">
            <div className="w-[5px] h-[5px] bg-[#cc0000] mr-2"></div>
            <span className="text-blue-600 group-hover:underline">{t('革小物', 'Leather Goods')} <span className="text-blue-600">({products.filter(p => (p.name.toLowerCase().includes(basePrefix === 'mens' ? 'mens' : 'womens') || p.name.includes(basePrefix === 'mens' ? 'メンズ' : 'レディース')) && (p.category === '小物' || p.category === 'クラッチ')).length}件)</span></span>
          </Link>
        </div>
      )}

      {/* Toolbar / Filters (Mockup to match image) */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-[#f5f5f5] border border-gray-300 px-3 py-2 text-[11px] mb-2 gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-700">{t('並び替え', 'Sort')}</span>
            <select className="border border-gray-300 px-2 py-1 bg-white text-gray-700 outline-none">
              <option>{t('標準', 'Standard')}</option>
              <option>{t('価格が安い順', 'Price: Low to High')}</option>
              <option>{t('価格が高い順', 'Price: High to Low')}</option>
              <option>{t('新着順', 'Newest')}</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="w-3 h-3 cursor-pointer" />
              <span>{t('在庫あり', 'In Stock')}</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="checkbox" className="w-3 h-3 cursor-pointer" />
              <span>{t('送料無料', 'Free Shipping')}</span>
            </label>
          </div>
        </div>
        <div className="text-gray-600 shrink-0">
          1件 ～ {displayedProducts.length}件 (全 {displayedProducts.length}件)
        </div>
      </div>
      
      <div className="text-[10px] text-gray-500 mb-4 -mt-4 bg-[#fdfdfd] border-b border-gray-200 pb-2 px-1">
        <span className="border border-gray-400 rounded-full w-3 h-3 inline-flex items-center justify-center text-[8px] mr-1">i</span>
        {t('価格や割引は、商品のサイズや色によって異なる場合があります。', 'Prices and discounts may vary depending on product size and color.')}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 w-full">
        {displayedProducts.map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex flex-col group cursor-pointer relative top-0 hover:-top-1 transition-all">
            <div className="relative aspect-square overflow-hidden bg-gray-100 mb-2 border border-gray-200">
              <img
                src={product.imageUrl}
                alt={language === 'jp' ? product.name : product.nameEn}
                className="w-full h-full object-cover object-center group-hover:opacity-80 transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute top-0 right-0 border-l border-b border-red-800 bg-[#cc0000] text-yellow-300 text-[11px] md:text-xs font-bold px-1.5 py-0.5 z-10 shadow-sm`}>
                {t('ポイント10倍', '10x Pts')}
              </div>
            </div>

            <div className="flex flex-col flex-grow text-left">
              <h3 className="text-[11px] text-blue-600 leading-[1.4] h-[3.8em] overflow-hidden group-hover:text-[#cc0000] group-hover:underline break-words mb-2 mt-1">
                <span className="text-gray-700 font-medium">【送料無料】</span> {language === 'jp' ? product.name : product.nameEn}
              </h3>

              <div className="mt-auto flex flex-col items-center justify-center text-center">
                <div className="flex items-baseline gap-0.5 mt-1">
                  <span className="text-base font-bold text-[#cc0000] leading-none tracking-tight">
                    {language === 'en' ? '¥' : ''}{product.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#cc0000] font-bold">{t('円', '')}</span>
                </div>
                <div className="text-[10px] text-[#cc0000] font-bold mt-0.5">送料無料</div>
                <div className="text-[#f5a623] text-[10px] flex items-center justify-center mt-1">
                  ★★★★★ <span className="text-blue-600 ml-1 hover:underline">({product.reviews}件)</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {displayedProducts.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          {t('商品が見つかりませんでした。', 'No products found.')}
        </div>
      )}
    </div>
  );
}
