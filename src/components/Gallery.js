
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    { src: '/images/works/kit17.jpg', tag: 'Kitchen' },
    { src: '/images/works/kit3.jpg', tag: 'Kitchen' },
    { src: '/images/works/bath1.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath2.jpg', tag: 'Bathroom' },
    { src: '/images/works/bath3.jpg', tag: 'Bathroom' },
    { src: '/images/works/st1.jpg', tag: 'Stairs' },
    { src: '/images/works/st2.jpg', tag: 'Stairs' },
    { src: '/images/works/st3.jpg', tag: 'Stairs' },
  ],
  ar: [
    { src: '/images/works/kit1.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit17.jpg', tag: 'مطبخ' },
    { src: '/images/works/kit3.jpg', tag: 'مطبخ' },
    { src: '/images/works/bath1.jpg', tag: 'حمام' },
    { src: '/images/works/bath2.jpg', tag: 'حمام' },
    { src: '/images/works/bath3.jpg', tag: 'حمام' },
    { src: '/images/works/st1.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st2.jpg', tag: 'سلالم ومداخل ابراج' },
    { src: '/images/works/st3.jpg', tag: 'سلالم ومداخل ابراج' },
  ]
};
const filters = {
  en: ['All', 'Kitchen', 'Bathroom', 'Stairs'],
  ar: ['الكل', 'مطبخ', 'حمام', 'سلالم ومداخل ابراج']
};

function Gallery({ lang }) {
  const [active, setActive] = useState(filters[lang][0]);
  const [isLoading, setIsLoading] = useState(true);
  const isAll = lang === 'ar' ? 'الكل' : 'All';
  const filtered = active === isAll ? images[lang] : images[lang].filter(img => img.tag === active);
  const navigate = useNavigate();

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
  return (
    <section id="gallery" className="my-16" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <h2 className="text-2xl font-bold font-serif text-center mb-6">{lang === 'ar' ? 'المعرض' : 'Gallery'}</h2>
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition w-full h-48 cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.tag}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-xl shadow-lg border border-white">
                {img.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={() => navigate('/all-works')}
          className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 hover:scale-105 hover:shadow-xl font-medium transition text-base sm:text-lg"
        >
          {lang === 'ar' ? 'عرض المزيد من الأعمال' : 'Show More Works'}
        </button>
      </div>
    </section>
  );
}
export default Gallery;
