// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user is logged in by looking for the access token
  const isAuthenticated = sessionStorage.getItem('accessToken');
  
  if (!isAuthenticated) {
    // Redirect to landing page if not authenticated
    return <Navigate to="/login"  />;
  }
  
  return children;
};

export default ProtectedRoute;