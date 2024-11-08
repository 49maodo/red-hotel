"use client";
import { ContainerAuth, AuthTitle } from "@/styles/auth.style";

export default function AuthLayout({ children }) {
  return (
    <ContainerAuth>
      <AuthTitle>
        <img src="/image/redproduct.png" alt="Logo" />
        <h1>RED PRODUCT</h1>
      </AuthTitle>
        {children}
    </ContainerAuth>
  );
}