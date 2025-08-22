import React, { useState } from 'react';
import AdminLoginPage from './AdminLoginPage';
import AdminDashboard from './AdminDashboard';
import AdminSettings from './AdminSettings';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import FeaturedProjects from './components/FeaturedProjects';
import Materials from './components/Materials';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllWorksPage from './AllWorksPage';
import GalleryPage from './GalleryPage';
import MaterialsPage from './MaterialsPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [lang, setLang] = useState('ar');
  const isArabic = lang === 'ar';
  const toggleLang = () => setLang(isArabic ? 'en' : 'ar');
  const [isAdmin, setIsAdmin] = useState(false);
  const [galleryImages, setGalleryImages] = useState({ en: [], ar: [] });
  const handleAdminLogin = () => setIsAdmin(true);
  const handleAdminLogout = () => setIsAdmin(false);
  // Add image to galleryImages state
  const handleAddImage = (img) => {
    setGalleryImages(prev => ({
      ...prev,
      [img.lang]: [...prev[img.lang], { src: img.src, tag: img.tag }]
    }));
  };

  return (
    <Router>
      <div className="App" dir={isArabic ? 'rtl' : 'ltr'} style={{ fontFamily: isArabic ? 'Cairo, sans-serif' : undefined }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar lang={lang} toggleLang={toggleLang} />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Hero lang={lang} toggleLang={toggleLang} />
                  <Gallery lang={lang} />
                  <FeaturedProjects lang={lang} />
                  <Materials lang={lang} />
                  <Location lang={lang} />
                  <Contact lang={lang} />
                  {/* Admin links section */}
                  {isAdmin && (
                    <div className="my-8 p-6 bg-yellow-50 border border-yellow-300 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-yellow-800">Admin Panel</h3>
                      <div className="flex gap-4 flex-wrap">
                        <a href="/admin/dashboard" className="px-4 py-2 bg-brand-dark text-white rounded hover:bg-brand-light">Dashboard</a>
                        <a href="/admin/settings" className="px-4 py-2 bg-brand-dark text-white rounded hover:bg-brand-light">Settings</a>
                        <button onClick={handleAdminLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Logout</button>
                      </div>
                    </div>
                  )}
                </main>
                <Footer lang={lang} />
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage lang={lang} toggleLang={toggleLang} />} />
          <Route path="/materials" element={<MaterialsPage lang={lang} toggleLang={toggleLang} />} />
          <Route path="/about" element={<AboutPage lang={lang} toggleLang={toggleLang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} toggleLang={toggleLang} />} />
          <Route path="/all-works" element={<AllWorksPage lang={lang} toggleLang={toggleLang} />} />
          {/* Admin login route */}
          <Route path="/admin" element={<AdminLoginPage onLogin={handleAdminLogin} />} />
          {/* Admin dashboard and settings routes, only accessible if isAdmin is true */}
          <Route path="/admin/dashboard" element={isAdmin ? <AdminDashboard onAddImage={handleAddImage} /> : <AdminLoginPage onLogin={handleAdminLogin} />} />
          <Route path="/admin/settings" element={isAdmin ? <AdminSettings /> : <AdminLoginPage onLogin={handleAdminLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
