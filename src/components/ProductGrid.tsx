import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProductGrid() {
  const { t, language } = useLanguage();

  const renderProductSlider = (title: string, titleEn: string, items: typeof products) => (
    <div className="mb-8 overflow-hidden pl-1 flex flex-col items-center w-full">
      <div className="w-full">
        <h2 className="text-xl font-black text-gray-900 mb-4 pb-1 border-b-[2.5px] border-gray-800 flex justify-start items-end gap-2 tracking-tight">
          <span className="font-serif italic text-[#1a1a1a]">{t(title, titleEn)}</span>
          <span className="text-[10px] font-normal text-gray-500 mb-1">更新日 06/01 (05/25~05/31集計)</span>
        </h2>
      </div>

      <div className="relative group/slider w-full">
        <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {items.map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[150px] md:w-[180px] shrink-0 snap-start flex flex-col group cursor-pointer relative top-0 hover:-top-1 transition-all">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-2 border border-gray-200">
                <img
                  src={product.imageUrl}
                  alt={language === 'jp' ? product.name : product.nameEn}
                  className="w-full h-full object-cover object-center group-hover:opacity-80 transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Ranking Badge Overlay */}
                <div className="absolute top-0 left-0 bg-gradient-to-br from-black to-gray-800 text-white text-[12px] font-black w-8 h-8 flex flex-col items-center justify-center pt-1 shadow-md z-10 border-b-2 border-r-2 border-[#111]">
                  <span className="text-yellow-400 text-[8px] leading-none mb-0.5">No.1</span>
                  <span className="leading-none">{index + 1}</span>
                </div>
                
                {/* Points Badge Overlay */}
                <div className={`absolute top-0 right-0 border-l border-b border-red-800 bg-[#cc0000] text-yellow-300 text-[11px] md:text-xs font-bold px-1.5 py-0.5 z-10 shadow-sm`}>
                  {t('ポイント10倍', '10x Pts')}
                </div>
              </div>

              <div className="flex flex-col flex-grow text-left">
                {/* Rank Number Below Image */}
                <span className="font-bold text-gray-800 text-sm mb-0.5">{index + 1}位</span>
                
                <h3 className="text-[11px] leading-[1.3] h-[2.6em] overflow-hidden group-hover:text-[#cc0000] group-hover:underline text-gray-800 break-words mb-2">
                  <span className="text-gray-500 font-medium">＼今だけP10倍！／</span> {language === 'jp' ? product.name : product.nameEn}
                </h3>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-0.5 mt-1">
                    <span className="text-base md:text-lg font-bold text-[#cc0000] leading-none tracking-tight">
                      {language === 'en' ? '¥' : ''}{product.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-[#cc0000] font-bold">{t('円', '')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="absolute left-0 top-[35%] -translate-y-1/2 -ml-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover/slider:opacity-100 transition-all hover:scale-105 hidden md:flex z-10">
          <ChevronLeft size={20} strokeWidth={2.5} />
        </button>
        <button className="absolute right-0 top-[35%] -translate-y-1/2 -mr-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover/slider:opacity-100 transition-all hover:scale-105 hidden md:flex z-10">
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );

  const renderProductGrid = (title: string, titleEn: string, items: typeof products) => (
    <div className="mb-10 pl-1 w-full flex flex-col items-center">
      <div className="w-full">
        <h2 className="text-xl font-black text-gray-900 mb-4 pb-1 border-b-[2.5px] border-gray-800 flex justify-start items-baseline tracking-tight">
          <span className="font-serif italic text-[#1a1a1a]">{t(title, titleEn)}</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 w-full">
        {items.map((product, index) => (
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
              <h3 className="text-[11px] leading-[1.3] h-[2.6em] overflow-hidden group-hover:text-[#cc0000] group-hover:underline text-gray-800 break-words mb-2 mt-1">
                <span className="text-gray-500 font-medium">＼今だけP10倍！／</span> {language === 'jp' ? product.name : product.nameEn}
              </h3>

              <div className="mt-auto">
                <div className="flex items-baseline gap-0.5 mt-1">
                  <span className="text-base md:text-lg font-bold text-[#cc0000] leading-none tracking-tight">
                    {language === 'en' ? '¥' : ''}{product.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#cc0000] font-bold">{t('円', '')}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const recommendedItems = [...products].filter((p) => p.rating >= 4.7).slice(0, 12);
  const rankingItems = [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const popularItems = [...products].filter((p) => p.reviews > 150).slice(0, 12); 

  return (
    <section id="products" className="flex flex-col mt-2 max-w-full overflow-hidden w-full items-center">
      {renderProductGrid('当店のイチオシBag', "Our Recommended Bags", recommendedItems)}
      {renderProductSlider('売れ筋アイテムRanking', "Best Selling Items Ranking", rankingItems)}
      {renderProductGrid('当店の大人気アイテム', "Our Most Popular Items", popularItems)}
    </section>
  );
}
