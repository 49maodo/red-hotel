// pages/index.js
'use client'
import styled from 'styled-components';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"
const MainContent = styled.div`
  margin-left: 250px;
  background: #F8F8F8;
  min-height: 100vh;
  @media screen and (max-width: 768px){
    margin-left: 0px;
  }
`;


export default function LayoutHome({ children }) {

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/user`, {
          method: "GET",
          credentials: "include",
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
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        router.push('/auth/login');
      } else {
        console.error("Erreur lors de la déconnexion");
        setError("Erreur lors de la déconnexion")
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      setError("Erreur réseau :")
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      setError("");
    }
  }, [error]);

  if (!user) {
    return null;
  }
  console.log("user", user)
  return (
    <>
      <Sidebar user={user} isVisible={sidebarVisible} />
      <MainContent >
        <Header onLogout={handleLogout} toggleSidebar={toggleSidebar}/>
        {children}
      </MainContent>
    </>
  );
}