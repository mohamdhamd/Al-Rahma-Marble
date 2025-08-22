
import { useState } from 'react';

function Contact({ lang }) {
  const [message, setMessage] = useState('');
  const whatsappNumber = '201012163135';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="my-16 max-w-xl mx-auto" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <h2 className="text-2xl font-bold font-serif text-center mb-8">{lang === 'ar' ? 'تواصل' : 'Contact'}</h2>
      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'ar' ? 'رسالتك' : 'Message'}</label>
          <textarea
            rows="5"
            placeholder={lang === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 bg-white"
            value={message}
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div> */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg transition font-medium w-full text-center text-base sm:text-lg shadow hover:bg-green-600 hover:scale-105 hover:shadow-xl duration-200"
          >
            {lang === 'ar' ? 'إرسال رسالة واتساب' : 'Send WhatsApp Message'}
          </a>
          <a
            href="tel:201012163135"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg transition font-medium w-full text-center text-base sm:text-lg shadow hover:bg-blue-700 hover:scale-105 hover:shadow-xl duration-200"
          >
            {lang === 'ar' ? 'اتصال' : 'Call'}
          </a>
        </div>
      </form>
    </section>
  );
}
export default Contact;
