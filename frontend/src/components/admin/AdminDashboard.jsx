import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAdminToken, isAdminAuthenticated, logoutAdmin } from '../../utils/authHelper';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      logoutAdmin();
      return;
    }

    const fetchProducts = async () => {
      try {
        const token = getAdminToken();
        const { data } = await axios.get('https://blaxed-1.onrender.com/admin/products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(data);
        setDisplayedProducts(data);
      } catch (err) {
        const errorMsg = err.response?.data?.error || 'Failed to fetch products';
        setError(errorMsg);

        if (err.response?.status === 401 || err.response?.status === 403) {
          logoutAdmin();
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search filter logic
  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedProducts(filtered);
    setCurrentPage(1); // reset to first page on search
  }, [searchTerm, products]);

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = displayedProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {error && <div className="bg-red-100 text-red-600 p-3 rounded mb-4">{error}</div>}

      {/* Search and Filter Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/2"
        />
        <button
          onClick={() => setShowFilter(prev => !prev)}
          className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300"
        >
          {showFilter ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      {showFilter && (
        <div className="mb-6 bg-gray-100 p-4 rounded shadow">
          <p className="text-gray-700">Filter options can go here</p>
          {/* Add real filters here when needed */}
        </div>
      )}

      {/* Products Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(product => (
            <tr key={product._id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">${product.price}</td>
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

      {/* Pagination Controls */}
      {displayedProducts.length > itemsPerPage && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

<h3 className="text-2xl font-semibold mb-4">Products Gallery</h3>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <Skeleton height={200} />
              <div className="mt-4">
                <Skeleton width="60%" height={20} />
                <Skeleton width="80%" height={16} className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-xl font-bold text-green-600 mt-2">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500">No products available.</p>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 space-x-4">
        <Link to="/admin/add-products">
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
            Add Products
          </button>
        </Link>
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
