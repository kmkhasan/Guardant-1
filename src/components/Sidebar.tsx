import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { t } = useLanguage();

  const categories = [
    { 
      jp: 'メンズ', en: 'Men\'s', hasSub: true, path: '/category/mens',
      subItems: [
        { jp: 'バッグ', en: 'Bag', path: '/category/mens-bag' },
        { jp: '財布', en: 'Wallet', path: '/category/mens-wallet' },
        { jp: 'レザーグッズ', en: 'Leather Goods', path: '/category/mens-leather' },
      ]
    },
    { 
      jp: 'レディース', en: 'Women\'s', hasSub: true, path: '/category/womens',
      subItems: [
        { jp: 'バッグ', en: 'Bag', path: '/category/womens-bag' },
        { jp: '財布', en: 'Wallet', path: '/category/womens-wallet' },
        { jp: 'レザーグッズ', en: 'Leather Goods', path: '/category/womens-leather' },
      ]
    },
    { jp: '雑貨', en: 'Miscellaneous Goods', hasSub: true, path: '/category/miscellaneous' },
    { jp: '革の種類で選ぶ', en: 'By Leather Type', hasSub: true, path: '/category/leather' },
    { jp: 'ブランドで選ぶ', en: 'By Brand', hasSub: true, path: '/category/brand' },
    { jp: 'アウトレット', en: 'Outlet', hasSub: true, path: '/category/outlet' },
    { jp: '新着商品', en: 'New Arrivals', hasSub: false, path: '/category/new' },
    { jp: 'その他', en: 'Others', hasSub: false, path: '/category/others' }
  ];

  const featured = [
    { jp: '新着商品', en: 'NEW ITEM', sub: 'NEW ITEM', bg: 'bg-[#b6883d]', color: 'text-white' },
    { jp: 'アウトレット', en: 'OUTLET', sub: 'OUTLET', bg: 'bg-[#cc0000]', color: 'text-white' },
    { jp: 'レディース', en: 'LADIES', sub: 'LADIES', bg: 'bg-[#d14b64]', color: 'text-white' },
    { jp: 'メンズ', en: 'MENS', sub: 'MENS', bg: 'bg-[#002b6b]', color: 'text-white' }
  ];

  const topics = [
    { jp: '父の日ギフト', en: 'Father\'s Day Gift' },
    { jp: '経年変化と異なる本革と...', en: 'Aging & Unique Leather...' },
    { jp: '【 特別セール!! 】', en: '【 Special Sale!! 】' },
    { jp: '★スーパーセール', en: '★Super Sale' }
  ];

  const shopInfo = [
    { jp: '会社概要・決済方法・配送方法', en: 'Company / Payment / Shipping' },
    { jp: 'ショップへ問い合わせ', en: 'Contact Shop' },
    { jp: 'メルマガ登録・変更', en: 'Newsletter Signup' },
    { jp: 'すべての商品', en: 'All Products' }
  ];

  // Dummy calendar data to match visual structure
  const renderCalendar = (monthParams: { month: string, end: number, startDay: number, highlightDays: number[] }) => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1).slice(0, monthParams.end);
    const blanks = Array.from({ length: monthParams.startDay }, (_, i) => i);
    const weekLabels = ['日', '月', '火', '水', '木', '金', '土'];
    
    return (
      <div className="mb-4">
        <div className="text-center font-bold mb-2">{monthParams.month}</div>
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {weekLabels.map((lbl, i) => (
            <div key={i} className={`text-[8px] font-bold ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-gray-600'}`}>
              {lbl}
            </div>
          ))}
          {blanks.map(b => <div key={`blank-${b}`} className="h-4"></div>)}
          {days.map(d => {
            const isHighlight = monthParams.highlightDays.includes(d);
            return (
              <div key={d} className="flex items-center justify-center">
                <span className={`inline-block w-4 h-4 text-center leading-4 rounded-full ${isHighlight ? 'bg-pink-100 text-red-600' : 'text-gray-700'}`}>
                  {d}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <aside className="w-full md:w-[200px] flex flex-col gap-4 font-sans text-gray-800 text-[11px] shrink-0">
      {/* Category Navigation */}
      <div className="bg-white">
        <h3 className="text-sm font-serif font-bold text-gray-800 mb-3 px-1">Shop Category</h3>
        <ul className="flex flex-col relative bg-[#f9f9f9]">
          {categories.map((item, i) => (
            <li key={i} className="border-b border-white last:border-b-0 group/nav relative">
              <Link to={item.path} className="flex justify-between items-center py-2.5 px-3 hover:bg-white transition-colors text-gray-700">
                <span className="font-medium text-[11px]">{t(item.jp, item.en)}</span>
                {item.hasSub && <ChevronRight size={14} className="text-gray-400" />}
              </Link>

              {/* Hover Dropdown menu for desktop */}
              {item.subItems && (
                 <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg border border-gray-100 rounded-sm opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <Link to={item.path} className="font-bold text-gray-900 hover:text-red-700 block text-[13px]">
                        {t(item.jp, item.en)}
                      </Link>
                    </div>
                    <ul className="py-2">
                      {item.subItems.map((sub, j) => (
                        <li key={j}>
                          <Link to={sub.path} className="block px-4 py-2 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors">
                            {t(sub.jp, sub.en)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                 </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Categories */}
      <div>
        <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-gray-600 px-1">{t('注目カテゴリ', 'Featured Categories')}</h3>
        <div className="grid grid-cols-2 gap-2">
          {featured.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 cursor-pointer group">
              <div className={`${item.bg} ${item.color} aspect-square w-full flex flex-col items-center justify-center p-2 text-center group-hover:opacity-90 transition-opacity`}>
                <span className="font-bold text-[12px] leading-tight">{item.sub}</span>
                <span className="text-[8px] mt-1">{t(item.jp, item.en)}</span>
              </div>
              <span className="text-[9px] text-gray-600 group-hover:text-red-700">{t(item.jp, item.en)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div>
        <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-gray-600 px-1">{t('トピックス', 'Topics')}</h3>
        <ul className="flex flex-col gap-3 px-1">
          {topics.map((item, i) => (
            <li key={i} className="flex gap-2 items-start cursor-pointer group">
              <div className="w-8 h-8 bg-gray-200 shrink-0 border border-gray-200 overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${1550000000000 + i * 100000}?auto=format&fit=crop&w=100&q=80`} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[10px] text-gray-600 group-hover:underline leading-tight mt-0.5 line-clamp-2">
                {t(item.jp, item.en)}
              </span>
            </li>
          ))}
          <li className="text-right mt-1">
            <a href="#" className="flex items-center justify-end text-[10px] text-gray-500 hover:text-gray-800">
              {t('すべて見る', 'See All')} <ChevronRight size={10} />
            </a>
          </li>
        </ul>
      </div>

      {/* Shop Info */}
      <div>
        <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-gray-600 px-1">{t('ショップ情報', 'Shop Information')}</h3>
        <ul className="flex flex-col gap-2 px-1 text-[10px] text-gray-600">
          {shopInfo.map((item, i) => (
            <li key={i}><a href="#" className="hover:underline hover:text-red-700">{t(item.jp, item.en)}</a></li>
          ))}
        </ul>
      </div>

      {/* Calendar */}
      <div>
        <h3 className="font-bold border-b border-gray-300 pb-1 mb-3 text-gray-600 px-1">{t('受注・発送カレンダー', 'Order/Shipping Calendar')}</h3>
        <div className="px-1 text-[9px]">
          {renderCalendar({ month: '2026年6月', end: 30, startDay: 1, highlightDays: [6, 7, 13, 14, 20, 21, 27, 28] })}
          {renderCalendar({ month: '2026年7月', end: 31, startDay: 3, highlightDays: [4, 5, 11, 12, 18, 19, 25, 26] })}
          
          <div className="flex flex-col gap-1 mt-2 text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 bg-pink-100 text-red-500 border border-pink-200 rounded-full inline-block"></span>
              <span>{t('休業日（受注・発送なし）', 'Closed (No order/shipping)')}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 border border-blue-400 rounded-full inline-block"></span>
              <span>{t('受注対応のみ', 'Order processing only')}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 border border-green-400 rounded-full inline-block"></span>
              <span>{t('発送対応のみ', 'Shipping only')}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
