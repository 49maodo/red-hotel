'use client';
import { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { Ring } from 'react-css-spinners';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [error, setError] = useState('');
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const [user, setUser] = useState(null);
  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/user`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        router.push('/auth/login');
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      router.push('/auth/login');
    }
  }, [setUser, router]);
  useEffect(() => {
    if (user === null) {
      fetchUser();
    }
  }, [fetchUser, user]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setUser(null);
        router.push('/auth/login');
      } else {
        console.error('Erreur lors de la déconnexion');
        setError('Erreur lors de la déconnexion');
      }
    } catch (error) {
      console.error('Erreur réseau :', error);
      setError('Erreur réseau :');
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      setError('');
    }
  }, [error]);

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Ring color='rgba(102,95,101,1)' size={100} />
      </div>
    );
  }

  return <AuthContext.Provider value={{ user, setUser, handleLogout, toggleSidebar }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
