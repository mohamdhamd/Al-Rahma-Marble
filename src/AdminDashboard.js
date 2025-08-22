import { useState } from 'react';

function AdminDashboard({ onAddImage }) {
  const [tag, setTag] = useState('');
  const [src, setSrc] = useState('');
  const [lang, setLang] = useState('en');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!src || !tag) {
      setMessage('Please fill all fields');
      return;
    }
    if (onAddImage) {
      onAddImage({ src, tag, lang });
      setMessage('Image added!');
      setSrc('');
      setTag('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input type="text" value={src} onChange={e => setSrc(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="https://..." />
        </div>
        <div>
          <label className="block mb-1 font-medium">Tag/Details</label>
          <input type="text" value={tag} onChange={e => setTag(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="e.g. Kitchen" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Language</label>
          <select value={lang} onChange={e => setLang(e.target.value)} className="w-full px-3 py-2 border rounded">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
        <button type="submit" className="bg-brand-dark text-white px-4 py-2 rounded">Add Image</button>
        {message && <div className="mt-2 text-green-600">{message}</div>}
      </form>
      <p className="mb-4">Add gallery photos with details for All Works page.</p>
    </div>
  );
}
export default AdminDashboard;
