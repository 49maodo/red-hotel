'use client'
import styled from 'styled-components';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
// import { useState, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from "react-hot-toast"
import { Ring } from 'react-css-spinners'
import { AuthProvider, useAuth } from '@/components/AuthContext';

const MainContent = styled.div`
  margin-left: 250px;
  background: #F8F8F8;
  min-height: 100vh;
  @media screen and (max-width: 768px){
    margin-left: 0px;
  }
`;

export default function LayoutHome({ children }) {
  const { user } = useAuth();

  // const [user, setUser] = useState(null);
  // const [error, setError] = useState("");
  // const router = useRouter();
  // const [sidebarVisible, setSidebarVisible] = useState(false);
  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };
  // const fetchUser = useCallback(async () => {
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/user`, {
  //       method: "GET",
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.user);
  //     } else {
  //       router.push('/auth/login');
  //     }
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération de l'utilisateur :", error);
  //     router.push('/auth/login');
  //   }
  // }, [router, setUser]);
  // useEffect(() => {
  //   if(user ===  null){
  //     fetchUser();
  //   }
  // }, [fetchUser, user]);

  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/logout`, {
  //       method: "POST",
  //       credentials: "include",
  //     });

  //     if (response.ok) {
  //       setUser(null)
  //       router.push('/auth/login');
  //     } else {
  //       console.error("Erreur lors de la déconnexion");
  //       setError("Erreur lors de la déconnexion")
  //     }
  //   } catch (error) {
  //     console.error("Erreur réseau :", error);
  //     setError("Erreur réseau :")
  //   }
  // };
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     setError("");
  //   }
  // }, [error]);
  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Ring color='rgba(102,95,101,1)' size={100} />
      </div>
    );
  }

  return (
    <>
      <>
        <Sidebar
        // user={user} isvisible={sidebarVisible} 
        />
        <MainContent >
          <Header
          //  onLogout={handleLogout} toggleSidebar={toggleSidebar} 
          />
          {children}
        </MainContent>
      </>
    </>
  );
}