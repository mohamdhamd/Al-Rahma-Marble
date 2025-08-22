import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AboutPage({ lang, toggleLang }) {
  return (
    <div style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <h2 className="text-3xl font-bold font-serif text-center mb-8">{lang === 'ar' ? 'حول المعرض' : 'About the Gallery'}</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          {lang === 'ar'
            ? 'معرض الرخام يقدم أفضل أنواع الرخام والحجر الطبيعي لمختلف الاستخدامات المنزلية والتجارية.'
            : 'Marble Gallery offers the finest marble and natural stone for various residential and commercial uses.'}
        </p>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
export default AboutPage;
