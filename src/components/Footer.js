
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer({ lang }) {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-white border-t border-gray-200 mt-24 py-12"
      style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div
          className="flex flex-wrap justify-center gap-6 mb-6"
        >
          <a
            href="#"
            className="text-2xl hover:text-brand-dark transition flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shadow-sm mb-2 sm:mb-0"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-brand-dark transition flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shadow-sm mb-2 sm:mb-0"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-2xl hover:text-brand-dark transition flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shadow-sm mb-2 sm:mb-0"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
        <div
          className="flex flex-wrap justify-center gap-6 mb-6 text-sm"
        >
          <a
            href="#"
            className="hover:text-black transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-dark"
          >
            {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </a>
          <a
            href="#"
            className="hover:text-black transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-dark"
          >
            {lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
          </a>
        </div>
        <div className="text-sm break-words">
          {lang === 'ar'
            ? `© ${year} معرض الرخام. جميع الحقوق محفوظة.`
            : `© ${year} Marble Gallery. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
