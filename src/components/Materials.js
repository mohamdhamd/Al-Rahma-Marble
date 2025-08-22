
const materials = {
  en: [
    {
      name: 'Quartz',
      img: '/images/types/maded.jpg',
    },
    {
      name: 'Black Galaxy',
      img: '/images/types/maded2.jpg',
    },
    {
      name: 'Egyptian Aswan Black',
      img: '/images/types/maded3.png',
    },
  ],
  ar: [
    {
      name: ' كوارتز',
      img: '/images/types/maded.jpg',
    },
    {
      name: ' اسود جلاكسي',
      img: '/images/types/maded2.jpg',
    },
    {
      name: 'اسود اسوان مصري',
      img: '/images/types/maded3.png',
    },
  ]
};

function Materials({ lang }) {
  return (
    <section id="materials" className="my-16" style={{ fontFamily: lang === 'ar' ? 'Cairo, sans-serif' : undefined }}>
      <h2 className="text-2xl font-bold font-serif text-center mb-4">{lang === 'ar' ? 'المواد' : 'Materials'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {materials[lang].map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center relative group overflow-hidden"
          >
            <img
              src={m.img}
              alt={m.name}
              className="rounded-xl w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-75 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-xl shadow-lg border border-white">
                {m.name}
              </span>
            </div>
            <div className="text-center text-sm font-medium mt-2">{m.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Materials;
