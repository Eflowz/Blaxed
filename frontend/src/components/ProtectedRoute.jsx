import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAdminAuthenticated } from '../utils/authHelper';

const ProtectedRoute = () => {
  const isAuthenticated = isAdminAuthenticated();

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
