import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    type: '',
    thc: '',
    potencyCBD: '',
    potencyTHC: '',
    brand: '',
    effects: [],
    subCategories: [],
    strainType: '',
    weight: '',
    featured: '',
    limited: false,
    file: null,
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
      setPreviewImage(URL.createObjectURL(files[0]));
    } 
    else if ([ 'subCategories', 'effects'].includes(name)) {
      const updatedArray = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedArray });
    }
    else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } 
    else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.description || !formData.price || !formData.file) {
      toast.error('Please fill all fields and select an image.');
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        data.append(key, formData[key].join(','));
      } else if (key === 'file' && formData.file) {
        data.append('file', formData.file);
      } else {
        data.append(key, formData[key]);
      }
    });

    // Validate THC and potency values
    if (formData.thc && !/^\d+%$/.test(formData.thc.trim())) {
      alert('THC must be a number followed by % (e.g., 70%)');
      return;
    }

    const validPotency = ['Low', 'Moderate', 'High'];

    if (formData.potencyCBD && !validPotency.includes(formData.potencyCBD)) {
      alert('Potency CBD must be Low, Moderate, or High');
      return;
    }

    if (formData.potencyTHC && !validPotency.includes(formData.potencyTHC)) {
      alert('Potency THC must be Low, Moderate, or High');
      return;
    }

    try {
      setLoading(true);

      // const res = await axios.post(`${import.meta.env.VITE_API_URL}/admin/products`, data);
      const res = await axios.post('https://blaxed-1.onrender.com/admin/products', data);

      if (res.status === 200) {
        toast.success('Product uploaded successfully 🚀');
      } else {
        toast.success('Something went wrong but uploaded successfully');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);

      // Reset form after successful submission
      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        type: '',
        thc: '',
        potencyCBD: '',
        potencyTHC: '',
        brand: '',
        effects: [],
        subCategories: [],
        strainType: '',
        weight: '',
        featured: '',
        limited: false,
        file: null,
      });
      setPreviewImage(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product category"
          />
        </div>

        {/* Product Type */}
        <div>
          <label className="block mb-1 font-medium">Product Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product type"
          />
        </div>

        {/* THC */}
        <div>
          <label className="block mb-1 font-medium">THC (%)</label>
          <input
            type="text"
            name="thc"
            value={formData.thc}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 70%"
          />
        </div>

        {/* Potency CBD */}
        <div>
          <label className="block mb-1 font-medium">Potency CBD</label>
          <select
            name="potencyCBD"
            value={formData.potencyCBD}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Potency CBD</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Potency THC */}
        <div>
          <label className="block mb-1 font-medium">Potency THC</label>
          <select
            name="potencyTHC"
            value={formData.potencyTHC}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Potency THC</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Strain Type</label>
          <input
            type="text"
            name="strainType"
            value={formData.strainType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter strain type (e.g., Sativa)"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-1 font-medium">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter brand"
          />
        </div>

        {/* Effects */}
        <div>
          <label className="block mb-1 font-medium">Effects</label>
          <div className="space-x-4">
            {['Calm', 'Sleepy', 'Happy', 'Euphoric'].map((effect) => (
              <label key={effect} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="effects"
                  value={effect}
                  checked={formData.effects.includes(effect)}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>{effect}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Subcategories */}
        <div>
          <label className="block mb-1 font-medium">Subcategories</label>
          <div className="space-x-4">
            {['Default', 'Small Buds', 'Pre Ground', 'Infused Bud'].map((subCat) => (
              <label key={subCat} className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="subCategories"
                  value={subCat}
                  checked={formData.subCategories.includes(subCat)}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span>{subCat}</span>
              </label>
            ))}
          </div>
        </div>
    

        {/* Weight */}
        <div>
          <label className="block mb-1 font-medium">Weight</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product weight"
          />
        </div>

        {/* Featured */}
        <div>
          <label className="block mb-1 font-medium">Featured</label>
          <select
            name="featured"
            value={formData.featured}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Featured Status</option>
            <option value="Staff Pick">Staff Pick</option>
            <option value="Specials">Specials</option>
            <option value="Best Seller">Best Seller</option>
          </select>
        </div>

        {/* Limited Edition */}
        <div>
          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              name="limited"
              checked={formData.limited}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Limited Edition</span>
          </label>
        </div>

        {/* Product Image */}
        <div>
          <label className="block mb-1 font-medium">Product Image</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-3 rounded-lg w-full h-64 object-cover"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
