

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import React from 'react';

const slides = {
  en: [
    {
      image: 'https://images.unsplash.com/photo-1618762638822-20586945a8a7?auto=format&fit=crop&w=1200&q=80',
      title: 'Timeless Creations in Marble',
      desc: 'Discover the artistry and elegance of our marble creations, crafted to perfection for your home.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      title: 'Luxury Marble Interiors',
      desc: 'Elevate your space with luxurious marble designs tailored to your style.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
      title: 'Crafted to Perfection',
      desc: 'Experience the beauty of craftsmanship in every detail.'
    }
  ],
  ar: [
    {
      image: 'https://images.unsplash.com/photo-1618762638822-20586945a8a7?auto=format&fit=crop&w=1200&q=80',
      title: 'إبداعات خالدة من الرخام',
      desc: 'اكتشف فن وأناقة تصاميمنا الرخامية المصنوعة بإتقان لمنزلك.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      title: 'تصاميم رخامية فاخرة',
      desc: 'ارتقِ بمساحتك مع تصاميم رخامية فاخرة تناسب ذوقك.'
    },
    {
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
      title: 'إتقان في كل التفاصيل',
      desc: 'استمتع بجمال الحرفية في كل تفصيلة.'
    }
  ]
};

function Hero({ lang }) {
  const isArabic = lang === 'ar';
  const viewProjectsText = isArabic ? 'عرض المشاريع' : 'View Projects';

  return (
    <section
      id="services"
      className="w-full h-[500px] flex items-center justify-center rounded-2xl overflow-hidden my-16"
      dir={isArabic ? 'rtl' : 'ltr'}
      style={{ fontFamily: isArabic ? 'Cairo, sans-serif' : undefined }}
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides[lang].map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[500px] flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center p-10 rounded-xl flex flex-col items-center">
                  <h1 className="font-serif text-white text-4xl md:text-5xl font-extrabold drop-shadow mb-4">
                    {slide.title}
                  </h1>
                  <p className="font-sans text-white text-base md:text-lg mt-2 opacity-90 max-w-xl mx-auto">
                    {slide.desc}
                  </p>
                  <button className="mt-6 px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-100 font-medium transition">
                    {viewProjectsText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
