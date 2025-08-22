import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';

function ContactPage({ lang, toggleLang }) {
  return (
    <div style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
export default ContactPage;
