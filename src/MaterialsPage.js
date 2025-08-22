import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Materials from './components/Materials';

function MaterialsPage({ lang, toggleLang }) {
  return (
    <div style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <Materials lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
export default MaterialsPage;
