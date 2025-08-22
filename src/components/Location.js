
function Location({ lang }) {
  return (
    <section id="about" className="my-16" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <h2 className="text-2xl font-bold font-serif text-center mb-4">{lang === 'ar' ? 'الموقع' : 'Location'}</h2>
      <div className="relative flex justify-center items-center p-0 rounded-2xl overflow-hidden shadow-lg" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f9fafb 100%)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d214.33027946494857!2d31.858577255783562!3d30.738509896647578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1752573454733!5m2!1sar!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={lang === 'ar' ? 'موقعنا على الخريطة' : 'Our location on the map'}
          className="rounded-xl w-full max-w-4xl mx-auto shadow-lg"
        ></iframe>
        <a
          href="https://maps.app.goo.gl/7mGwHcKNiuwbqXBx5"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 font-medium transition w-full max-w-xs text-center text-base sm:text-lg"
        >
          {lang === 'ar' ? 'افتح الموقع على خرائط جوجل' : 'Open location in Google Maps'}
        </a>
      </div>
    </section>
  );
}
export default Location;
