"use client";
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import toast from "react-hot-toast"

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
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Instructions pour réinitialiser votre mot de passe envoyées par e-mail !");
      } else {
        toast.error(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      toast.error("Erreur lors de la demande de réinitialisation.");
    }
  };

  return (
    <>
      <h1>RED PRODUCT</h1>
      <p>Entrez votre adresse mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Envoyer</Button>
      </form>
      <Signup>
        <p>
          Revenir à la page <Link href="/auth/login">connexion</Link>
        </p>
      </Signup>
    </>
  );
}