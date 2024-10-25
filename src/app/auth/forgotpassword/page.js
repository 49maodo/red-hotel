"use client";
import styled from "styled-components";
import Link from "next/link";
// import AuthLayout from "@/app/layoutAuth";


const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  box-sizing: border-box;
`;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4A4A4A;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3A3A3A;
  }
`;

const ForgotPassword = styled.div`
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #FFD700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Signup = styled.div`
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #FFD700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LoginPage() {
  return (
    <>
      <h1>RED PRODUCT</h1>
      <p>Entrez votre adresse mail ci-dessous et nous vous envoyons des instructions sur la façons de modifier votre mot de passe</p>
      <form>
        <Input type="email" placeholder="E-mail" required />
        <Button type="submit">Se connecter</Button>
      </form>
      <Signup>
        <p>
          Revenir à la page <Link href="/auth/login">connection</Link>
        </p>
      </Signup>
    </>
  );
}
