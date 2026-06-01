import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernSlider() {
  const { language } = useLanguage();
  const [current, setCurrent] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000",
      titleJp: "用の美",
      titleEn: "Beauty of Utility",
      subtitleJp: "日常に寄り添う、本革の温もり",
      subtitleEn: "The warmth of genuine leather in everyday life",
      accent: "bg-[#8B0000]" 
    },
    {
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000",
      titleJp: "日本の美意識",
      titleEn: "Japanese Aesthetics",
      subtitleJp: "細部まで宿る職人の手仕事",
      subtitleEn: "Artisan craftsmanship in every detail",
      accent: "bg-[#2F4F4F]" 
    },
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000",
      titleJp: "経年変化",
      titleEn: "Aging Gracefully",
      subtitleJp: "時と共に深まる、あなただけの色",
      subtitleEn: "Your unique color, deepening over time",
      accent: "bg-[#B8860B]" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full relative h-[200px] md:h-[350px] overflow-hidden bg-[#faf7f2] group border-b border-gray-200">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Subtle background color overlay */}
          <div className={`absolute inset-0 opacity-20 ${slide.accent} mix-blend-multiply`}></div>
          
          <img src={slide.image} alt="slider" className="w-full h-full object-cover object-center md:object-center opacity-85" referrerPolicy="no-referrer" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center justify-start p-8 md:p-16">
            <div className={`flex bg-white/95 backdrop-blur-sm border-l-4 border-[#8B0000] p-4 md:px-6 md:py-8 shadow-lg ${language === 'en' ? 'flex-col' : ''}`}>
              <div 
                className="flex justify-center" 
                style={{ 
                  writingMode: language === 'jp' ? 'vertical-rl' : 'horizontal-tb',
                  textOrientation: language === 'jp' ? 'upright' : 'mixed'
                }}
              >
                <h2 className={`text-2xl md:text-3xl font-serif text-gray-900 font-bold ${language === 'jp' ? 'tracking-[0.4em] mb-0 ml-4 md:ml-6' : 'tracking-[0.2em] mb-4'}`}>
                  {language === 'jp' ? slide.titleJp : slide.titleEn}
                </h2>
                <div className={`${language === 'jp' ? 'w-[1px] h-16 ml-4 md:ml-6' : 'h-[1px] w-24 mb-4'} bg-gray-300`}></div>
                <p className={`text-sm md:text-base font-serif text-gray-700 leading-loose ${language === 'jp' ? 'tracking-[0.3em]' : 'tracking-[0.1em]'}`}>
                  {language === 'jp' ? slide.subtitleJp : slide.subtitleEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button 
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-white/30 hover:bg-white/80 rounded-full text-gray-800 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-sm"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-white/30 hover:bg-white/80 rounded-full text-gray-800 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 shadow-sm"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all rounded-none ${index === current ? 'bg-white w-8 h-1 shadow-sm' : 'bg-white/50 w-3 h-1'}`}
          />
        ))}
      </div>
    </div>
  );
}
