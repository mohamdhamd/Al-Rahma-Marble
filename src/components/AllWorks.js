import Header from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';

// Preload images function
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

const images = {
  en: [
    { src: '/images/works/kit1.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit02.jpg', tag: 'Kitchen' },
    // { src: '/images/works/kit3.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit4.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit5.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit6.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit7.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit8.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit9.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit10.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit11.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit12.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit13.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit14.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit15.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit16.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit17.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit18.jpg', tag: 'Kitchen' },
    { src: '/images/works/bath1.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath2.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath3.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath4.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath5.jpg', tag: 'Bathroom' },
    { src: '/images/works/st1.jpg', tag: 'Stairs' },
    { src: '/images/works/st2.jpg', tag: 'Stairs' },
    { src: '/images/works/st3.jpg', tag: 'Stairs' },
    { src: '/images/works/st4.jpg', tag: 'Stairs' },
    { src: '/images/works/st5.jpg', tag: 'Stairs' },
    { src: '/images/works/st6.jpg', tag: 'Stairs' },

  ],
  ar: [
    { src: '/images/works/kit1.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit02.jpg', tag: 'مطبخ' },
    // { src: '/images/works/kit3.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit4.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit5.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit6.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit7.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit8.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit9.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit10.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit11.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit12.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit13.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit14.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit15.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit16.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit17.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit18.jpg', tag: 'مطبخ' },
    { src: '/images/works/bath1.jpg', tag: 'حمام' },
    { src: '/images/works/bath2.jpg', tag: 'حمام' },
    { src: '/images/works/bath3.jpg', tag: 'حمام' },
    { src: '/images/works/bath4.jpg', tag: 'حمام' },
    { src: '/images/works/bath5.jpg', tag: 'حمام' },
    { src: '/images/works/bath6.jpg', tag: 'حمام' },
    { src: '/images/works/bath7.jpg', tag: 'حمام' },
    { src: '/images/works/bath8.jpg', tag: 'حمام' },
    { src: '/images/works/bath9.jpg', tag: 'حمام' },
    { src: '/images/works/bath10.jpg', tag: 'حمام' },


    { src: '/images/works/st1.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st2.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st3.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st4.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st5.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st6.jpg', tag: 'سلالم ومداخل ابراج' },

  ]
};
const filters = {
  en: ['All', 'Kitchen', 'Bathroom', 'Stairs'],
  ar: ['الكل', 'مطبخ', 'حمام', 'سلالم ومداخل ابراج']
};

function AllWorks({ lang, toggleLang }) {
  const [active, setActive] = useState(filters[lang][0]);
  const [isLoading, setIsLoading] = useState(true);
  const isAll = lang === 'ar' ? 'الكل' : 'All';

  useEffect(() => {
    // Preload images for the current filtered view
    const preloadImages = async () => {
      setIsLoading(true);
      const imagesToLoad = active === isAll ? images[lang] : images[lang].filter(img => img.tag === active);
      try {
        await Promise.all(imagesToLoad.map(img => preloadImage(img.src)));
      } catch (error) {
        console.error('Error preloading images:', error);
      }
      setIsLoading(false);
    };

    preloadImages();
  }, [active, lang, isAll]);
  const filtered = active === isAll ? images[lang] : images[lang].filter(img => img.tag === active);
  // Custom handler for navbar links to go to home and scroll to section
  const handleNavClick = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };
  return (
    <div style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <Header
        lang={lang}
        toggleLang={toggleLang}
        onNavClick={handleNavClick}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl font-bold font-serif text-center mb-8">{lang === 'ar' ? 'جميع الأعمال' : 'All Works'}</h2>
        <div className="flex gap-3 flex-wrap justify-center mb-8">
          {filters[lang].map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 bg-white border rounded-full text-sm shadow transition hover:bg-gray-100 font-medium ${active === f ? 'border-brand-dark text-black' : 'text-gray-600'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[300px]">
          {!isLoading && filtered.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition w-full h-48 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.tag}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-300 ease-in-out opacity-0 animate-fadeIn"
                onLoad={(e) => e.target.classList.remove('opacity-0')}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-xl shadow-lg border border-white">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
export default AllWorks;
