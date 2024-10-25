// pages/index.js
'use client'
import styled from 'styled-components';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MainContent = styled.div`
  margin-left: 250px;
  padding: 0px 20px;
  background: #F0F0F0;
  min-height: 100vh;
`;

const Welcome = styled.div`
  margin: 20px;
`;

export default function LayoutHome({ children }) {

  const [user, setUser] = useState(null);
  const router = useRouter();

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
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  if (!user) {
    return null;
  }
  console.log("user", user)
  return (
    <>
      <Sidebar user={user} />
      <MainContent>
        <Header onLogout={handleLogout} />
        {children}
      </MainContent>
    </>
  );
}