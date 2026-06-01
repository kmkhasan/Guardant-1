import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-4 mb-2">
      
      {/* Top Red Promotional Banner */}
      <div className="bg-[#cc0000] border-2 border-[#cc0000] p-1 shadow-sm">
        <div className="border border-white/30 p-2 flex flex-col items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-1 md:gap-3 font-black text-white text-xl md:text-3xl tracking-wide mb-2">
            <span className="bg-yellow-400 text-red-800 px-2 flex items-center md:text-2xl h-8 border border-red-900 border-b-4">
              {t('毎月', 'Every Month')}
              <span className="text-2xl md:text-3xl mx-1 bg-white text-red-700 px-1 rounded-sm leading-none flex items-center h-6 md:h-8 border border-gray-300">1</span>
              {t('日', 'st')}
            </span>
            <span className="drop-shadow-md text-2xl md:text-4xl text-yellow-300 tracking-tighter">
              {t('ワンダフルデー', 'WONDERFUL DAY')}
            </span>
            <span className="text-yellow-400 text-2xl md:text-4xl drop-shadow-md flex items-end">
              <span className="text-sm md:text-lg mb-1 mr-1">{t('ポイント', 'Points')}</span>
              10<span className="text-xl md:text-2xl mb-0.5">{t('倍', 'x')}</span>
            </span>
          </div>
          <div className="bg-white text-[#cc0000] px-4 md:px-8 py-0.5 text-sm md:text-lg font-bold whitespace-nowrap inline-block shadow-inner w-full max-w-xl mx-auto rounded-sm">
            2026/06/01 00:00 ~ 2026/06/01 23:59
          </div>
        </div>
      </div>

      {/* Large Hero 1: Business Bags */}
      <div className="relative bg-gray-100 aspect-square md:aspect-[16/10] overflow-hidden flex items-center group cursor-pointer border border-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80&w=1200" 
          alt="Business Bags" 
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-multiply" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 via-transparent to-white/30"></div>
        
        {/* Overlays */}
        <div className="relative z-10 w-full h-full p-4 md:p-8 flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-xl mb-4 transform -rotate-3 border border-gray-100">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
              {t('本革', 'Genuine Leather')}
              <span className="block text-xl md:text-2xl font-light font-sans tracking-widest mt-1 text-gray-600 uppercase">Leather</span>
            </h2>
          </div>
          <div className="text-center mt-2 group-hover:-translate-y-2 transition-transform duration-500">
             <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-none drop-shadow-md italic mb-2 tracking-tighter">
               {t('ビジネスを', 'Elevate')}
               <br/>
               {t('格上げ', 'Business')}
             </h3>
             <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-900 font-black text-lg md:text-2xl px-6 py-2 rounded-full shadow-lg border-2 border-white inline-block mt-4">
               {t('RANKING No.1 STORE', 'RANKING No.1 STORE')}
             </div>
          </div>
        </div>

        {/* Badges Overlay */}
        <div className="absolute bottom-4 left-4 bg-red-700 text-white font-black p-2 shadow-2xl flex flex-col items-center justify-center transform -rotate-2 border-2 border-white">
          <span className="text-yellow-300 text-xl md:text-2xl leading-none">{t('ポイント', 'Points')}</span>
          <div className="flex items-baseline">
            <span className="text-5xl md:text-7xl">10</span>
            <span className="text-2xl md:text-3xl">{t('倍', 'x')}</span>
          </div>
        </div>
        
        <div className="absolute bottom-4 right-4 flex gap-2">
             <span className="bg-white text-gray-900 font-bold border border-gray-300 px-3 py-1 shadow-sm text-sm">2way</span>
             <span className="bg-white text-gray-900 font-bold border border-gray-300 px-3 py-1 shadow-sm text-sm">14型PC可</span>
        </div>
      </div>

      {/* Large Hero 2: Ladies Lightweight */}
      <div className="relative bg-[#faf7f2] aspect-square md:aspect-[16/10] overflow-hidden flex items-center group cursor-pointer border border-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=1200" 
          alt="Ladies Bags" 
          className="absolute inset-0 w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700" 
          referrerPolicy="no-referrer"
        />
        
        {/* Overlays */}
        <div className="relative z-10 w-full h-full p-4 md:p-8 pointer-events-none flex flex-col">
          <div className="flex items-start justify-between">
            <div className="bg-[#cc9933] text-white p-3 rounded-full flex items-center justify-center shadow-lg w-24 h-24 border-4 border-white transform rotate-12">
               <div className="text-center">
                 <div className="text-xs">{t('STORE', 'STORE')}</div>
                 <div className="text-2xl font-black leading-none">No.1</div>
               </div>
            </div>
            
            <div className="bg-pink-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-center font-bold text-sm leading-tight shadow-md border-2 border-white border-dashed transform -rotate-12">
              {t('カード\nケース\n付き', 'With\nCard\nCase')}
            </div>
          </div>
          
          <div className="mt-8">
             <div className="inline-block bg-yellow-300/80 backdrop-blur-sm text-gray-900 text-3xl md:text-5xl font-black px-4 py-2 mb-2 italic">
               {t('本革×軽量', 'Leather×Light')}
             </div>
             <br/>
             <div className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 text-4xl md:text-6xl font-black px-4 py-2 italic shadow-lg">
               {t('驚きのかるさ', 'Surprising Lightness')}
             </div>
          </div>
        </div>

        {/* Badges Overlay */}
        <div className="absolute bottom-4 left-4 bg-red-700 text-white font-black p-2 shadow-2xl flex flex-col items-center justify-center transform -rotate-2 border-2 border-white z-20">
          <span className="text-yellow-300 text-xl md:text-2xl leading-none">{t('ポイント', 'Points')}</span>
          <div className="flex items-baseline">
            <span className="text-5xl md:text-7xl">10</span>
            <span className="text-2xl md:text-3xl">{t('倍', 'x')}</span>
          </div>
        </div>
      </div>

      {/* LINE Banner */}
      <a href="#" className="bg-[#00B900] text-white flex flex-col md:flex-row items-stretch overflow-hidden group border-2 border-[#00B900] hover:shadow-lg transition-shadow cursor-pointer mt-4">
        <div className="p-4 flex-1 flex flex-col justify-center md:pl-6">
          <div className="flex items-baseline gap-2 font-black leading-none flex-wrap">
            <span className="text-xl md:text-3xl drop-shadow-sm">{t('LINEのお友達登録で', 'Add LINE Friend')}</span>
            <span className="text-yellow-300 text-3xl md:text-4xl drop-shadow-md">￥</span>
            <span className="text-yellow-300 text-6xl md:text-7xl tracking-tighter drop-shadow-md">300</span>
            <span className="text-yellow-300 text-4xl md:text-5xl drop-shadow-md">OFF</span>
          </div>
        </div>
        <div className="bg-black text-white text-sm md:text-lg font-bold py-2 px-4 md:px-6 flex items-center justify-between md:rounded-l-full md:mt-2 md:mb-2 md:ml-4 group-hover:bg-gray-900 transition-colors shrink-0">
           <span>★ こちらをクリックして今すぐクーポンGET！</span>
           <span className="ml-4 font-black hidden md:block">≫</span>
        </div>
      </a>

    </div>
  );
}
