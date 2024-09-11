// NotFound.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to home page...</p>
    </div>
  );
}
