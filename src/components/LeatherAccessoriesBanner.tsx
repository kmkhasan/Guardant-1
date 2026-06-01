import { Link } from 'react-router-dom';

export default function LeatherAccessoriesBanner() {
  return (
    <div className="mt-8 mb-4 relative aspect-[21/9] w-full overflow-hidden group cursor-pointer border border-gray-200 bg-[#e0d6c8]">
      {/* Fallback image if unsplash image is not perfectly matching, but let's build it using a combination */}
      <img 
        src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1600" 
        alt="Leather Accessories" 
        className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#e0d6c8]/90 via-[#e0d6c8]/60 to-transparent flex items-center p-8 md:p-12">
         <div className="max-w-md">
           <h3 className="font-serif italic text-gray-600 text-xl md:text-3xl mb-1">genuine leather</h3>
           <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-widest mb-6">LEATHER<br/>ACCESSORIES</h2>
           <p className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight leading-tight">
             いつものスタイルに<br/>
             <span className="text-2xl md:text-4xl">「高級感」</span>をプラス
           </p>
         </div>
      </div>
      
      {/* Dot Indicators Mock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <span className="w-2 h-2 rounded-full bg-red-600"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
}
