
const projects = {
  en: [
    {
      title: 'Luxury Kitchen Renovation',
      img: '/images/works/kit1.jpg',
    },
    {
      title: 'Modern Stairs Design',
      img: '/images/works/st1.jpg',
    },
    {
      title: 'Luxury Kitchen Renovation',
      img: '/images/works/kit10.jpg',
    },
  ],
  ar: [
    {
      title: 'تجديد مطبخ فاخر',
      img: '/images/works/kit1.jpg',
    },
    {
      title: 'تصميم سلالم عصريه',
      img: '/images/works/st1.jpg',
    },
    {
      title:'تجديد مطبخ فاخر',
      img: '/images/works/kit10.jpg',
    },
  ]
};

function FeaturedProjects({ lang }) {
  return (
    <section className="my-16" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <h2 className="text-2xl font-bold font-serif text-center mb-4">{lang === 'ar' ? 'مشاريع مميزة' : 'Featured Projects'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {projects[lang].map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-4 flex-1 flex flex-col items-center max-w-xs mx-auto relative group overflow-hidden"
          >
            <img
              src={p.img}
              alt={p.title}
              className="rounded-lg w-full h-48 object-cover group-hover:scale-105 group-hover:brightness-75 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <span className="text-white text-lg font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-xl shadow-lg border border-white">
                {p.title}
              </span> */}
            </div>
            <div className="text-sm font-semibold text-gray-800 mt-2 text-center">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturedProjects;
