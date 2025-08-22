

import { useState, useEffect, useRef } from 'react';

function Navbar({ lang, toggleLang }) {
  const [open, setOpen] = useState(false);
  const isArabic = lang === 'ar';
  const navLinks = isArabic
    ? ['المعرض', 'المواد', 'حول', 'تواصل']
    : ['Gallery', 'Materials', 'About', 'Contact'];
  const navIds = ['gallery', 'materials', 'about', 'contact'];
  const navRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50" dir={isArabic ? 'rtl' : 'ltr'}>
      <nav ref={navRef} className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
<a href="/" className="font-serif font-bold text-xl">
  {isArabic ? 'معرض الرخام' : 'Marble Gallery'}
</a>        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-3">
            {navLinks.map((item, i) => (
              <li key={item}>
                <a
                  href={`/${navIds[i]}`}
                  className="text-sm font-medium text-gray-600 hover:text-black transition"
                  onClick={e => {
                    e.preventDefault();
                    if (typeof onNavClick === 'function') {
                      onNavClick(navIds[i]);
                    } else {
                      window.location.pathname = `/${navIds[i]}`;
                    }
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="px-4 py-1 bg-white border rounded-lg shadow-sm hover:shadow-md text-sm font-medium ml-4 transition">{isArabic ? 'بحث' : 'Search'}</button>
          <button
            onClick={toggleLang}
            className="px-4 py-1 bg-black text-white rounded-lg shadow-sm hover:bg-gray-800 text-sm font-medium ml-4 transition"
          >
            {isArabic ? 'English' : 'العربية'}
          </button>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-sm border-t border-gray-100 flex justify-center">
          <ul className="flex flex-col gap-2 px-6 py-4 items-center w-full">
            {navLinks.map((item, i) => (
              <li key={item} className="w-full flex justify-center">
                <a
                  href={`/${navIds[i]}`}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-black transition text-center w-full"
                  onClick={e => {
                    e.preventDefault();
                    setOpen(false);
                    if (typeof onNavClick === 'function') {
                      setTimeout(() => {
                        onNavClick(navIds[i]);
                      }, 350);
                    } else {
                      setTimeout(() => {
                        window.location.pathname = `/${navIds[i]}`;
                      }, 350);
                    }
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="w-full flex justify-center">
              <button className="px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md text-sm font-medium mt-2 transition text-center">{isArabic ? 'بحث' : 'Search'}</button>
            </li>
            <li className="w-full flex justify-center">
              <button
                onClick={() => { toggleLang(); setOpen(false); }}
                className="px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-gray-800 text-sm font-medium mt-2 transition text-center"
              >
                {isArabic ? 'English' : 'العربية'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
