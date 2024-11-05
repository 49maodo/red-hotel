"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast"
import { Roller } from 'react-css-spinners'
import { AuthContainer, AuthFooter, Input, Button } from "@/styles/auth.style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthContainer>
      <p>Entrez votre adresse mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <span>Loading <Roller size={15}/> </span> : 'Envoyer' }
        </Button>
      </form>
      </AuthContainer>
      <AuthFooter>
        <p>
          Revenir à la page <Link href="/auth/login">connexion</Link>
        </p>
      </AuthFooter>
    </>
  );
}