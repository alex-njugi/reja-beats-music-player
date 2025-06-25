import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('loggedInUser'); // ✅ remove from storage
    onLogout(); // ✅ clear user in App
    navigate('/'); // ✅ redirect to Hero
  }, [onLogout, navigate]);

  return null;
}

export default Logout;
