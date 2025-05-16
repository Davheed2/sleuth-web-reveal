
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-pi-navy mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8 text-center">
        The page you're looking for could not be found.
      </p>
      <Button asChild className="bg-pi-accent hover:bg-pi-navy">
        <Link to="/">Return to Home</Link>
      </Button>
      <p className="mt-6 text-gray-500 text-center">
        If you believe this is an error, please contact us at
        <br />
        <a href="mailto:info@eliteinvestigations.com" className="text-pi-accent hover:underline">
          info@eliteinvestigations.com
        </a>
      </p>
    </div>
  );
};

export default NotFound;
