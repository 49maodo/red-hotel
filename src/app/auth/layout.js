"use client";
import styled from "styled-components";

const ContainerAuth = styled.div`
  margin: 0;
  padding: 0;
  background-color: #2C2C2C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://placehold.co/1920x1080/2C2C2C/2C2C2C');
  background-size: cover;
`;

const AuthContainer = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

export default function AuthLayout({ children }) {
  return (
    <ContainerAuth>
      <AuthContainer>{children}</AuthContainer>
    </ContainerAuth>
  );
}