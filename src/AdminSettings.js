function AdminSettings() {
  return (
    <div className="max-w-2xl mx-auto my-16 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Admin Settings</h2>
      <p className="mb-4">Change your website settings here. (This is a frontend-only demo page.)</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Site Title</label>
          <input type="text" className="w-full px-3 py-2 border rounded" placeholder="Enter site title" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded" placeholder="Enter contact email" />
        </div>
        <button type="submit" className="bg-brand-dark text-white px-4 py-2 rounded">Save Changes</button>
      </form>
    </div>
  );
}
export default AdminSettings;
