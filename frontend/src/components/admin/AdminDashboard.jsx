import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAdminToken, isAdminAuthenticated, logoutAdmin } from '../../utils/authHelper';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      logoutAdmin();
      return;
    }

    const fetchProducts = async () => {
      try {
        const token = getAdminToken();

        const { data } = await axios.get('http://localhost:4000/api/admin/products', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setProducts(data);
      } catch (err) {
        const errorMsg = err.response?.data?.error || 'Failed to fetch products';
        setError(errorMsg);

        if (err.response?.status === 401 || err.response?.status === 403) {
          logoutAdmin();
        }
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>}

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Stock</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.stock}</td>
              <td className="py-2 px-4">
                <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={logoutAdmin}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
