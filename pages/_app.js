// Import necessary dependencies
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import DoctorLoginPage from '../components/DoctorLoginPage';
import HospitalLoginPage from '../components/HospitalLoginPage';
import RegistrationPageDoctor from '../components/RegistrationPageDoctor';
import RegistrationPageHospital from '../components/RegistrationPageHospital';
import '../styles/globals.css'; // Import global styles

// Define the main app component
function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Get the router object
  const [isAuthenticated, setIsAuthenticated] = useState(true); // State for authentication status, set default to true

  useEffect(() => {
    // Check if user is authenticated and not trying to access unauthorized pages
    if (!isAuthenticated && !['/landing', '/doctor-login', '/hospital-login', '/registration-doctor', '/registration-hospital'].includes(router.pathname)) {
      router.push('/landing'); // Redirect to landing page if not authenticated
    }
  }, [isAuthenticated, router.pathname]); // Watch for changes in isAuthenticated and router pathname

  // Render the main app component with authentication props
  return <Component {...pageProps} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

export default MyApp; // Export the main app component as default
