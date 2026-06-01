import { CreditCard, PackageIcon, Clock, MessageCircleQuestion } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-200 mt-4 text-gray-700">
      <div className="px-4 py-8 max-w-7xl mx-auto">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[#bf0000] mb-1">
              <CreditCard size={14} />
              <h4 className="font-bold text-[11px]">{t('お支払いについて', 'About Payment')}</h4>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-600">
              {t('クレジットカード、銀行振込、後払い決済、Apple Pay、セブンイレブン（前払）、ローソン、郵便局ATM等（前払）がご利用いただけます。', 'Credit Card, Bank Transfer, Apple Pay, Convenience Store (Prepaid) are available.')}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[#bf0000] mb-1">
              <PackageIcon size={14} />
              <h4 className="font-bold text-[11px]">{t('配送・送料について', 'About Shipping')}</h4>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-600">
              {t('全品送料無料！', 'Free Shipping!')}<br/>
              {t('平日13時までのご注文で即日発送いたします（土日祝除く）。', 'Orders before 1PM on weekdays are shipped the same day.')}<br/>
              {t('配送業者：ヤマト運輸 / 佐川急便', 'Delivery: Yamato / Sagawa')}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[#bf0000] mb-1">
              <Clock size={14} />
              <h4 className="font-bold text-[11px]">{t('営業時間について', 'Business Hours')}</h4>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-600">
              {t('ネットでのご注文は24時間受け付けております。', 'Online orders accepted 24/7.')}<br/>
              {t('営業時間：10:00〜18:00', 'Hours: 10:00 - 18:00')}<br/>
              {t('定休日：土・日・祝日', 'Closed: Weekends & Holidays')}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-[#bf0000] mb-1">
              <MessageCircleQuestion size={14} />
              <h4 className="font-bold text-[11px]">{t('お問い合わせ', 'Contact Us')}</h4>
            </div>
            <p className="text-[10px] leading-relaxed text-gray-600">
              {t('株式会社GUARDANT', 'Guardant Co., Ltd.')}<br/>
              MAIL: guardant@example.com<br/>
              TEL: 03-XXXX-XXXX
            </p>
          </div>
        </div>

        {/* Categories & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-[11px]">
          <div>
            <h5 className="font-bold mb-2 border-l-2 border-[#bf0000] pl-2 text-[#bf0000]">CATEGORY</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('すべての商品', 'All Products')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('ビジネスバッグ', 'Business Bags')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('トートバッグ', 'Tote Bags')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('リュック・バックパック', 'Backpacks')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('財布・革小物', 'Wallets & Accessories')}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 border-l-2 border-[#bf0000] pl-2 text-[#bf0000]">CONTENTS</h5>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('GUARDANTについて', 'About GUARDANT')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('レザーのお手入れ方法', 'Leather Care')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('よくある質問', 'FAQ')}</a></li>
              <li><a href="#" className="hover:text-[#bf0000] text-gray-600">{t('お客様の声', 'Customer Reviews')}</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="font-bold mb-2 border-l-2 border-[#bf0000] pl-2 text-[#bf0000]">NEWSLETTER</h5>
            <p className="text-[10px] mb-2 text-gray-600">{t('最新の入荷情報や限定キャンペーンをお届けします。', 'Get the latest arrivals and exclusive offers.')}</p>
            <div className="flex gap-2">
              <input type="email" placeholder={t('メールアドレス', 'Email Address')} className="bg-white border border-gray-300 px-2 py-1 w-full focus:outline-none focus:border-[#bf0000] text-[11px]" />
              <button className="bg-[#bf0000] text-white px-4 py-1 font-bold hover:bg-red-800 transition-colors whitespace-nowrap text-[11px]">
                {t('登録', 'Subscribe')}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="bg-[#333] text-white text-[10px] py-2 px-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Guardant All Rights Reserved.
      </div>
    </footer>
  );
}
