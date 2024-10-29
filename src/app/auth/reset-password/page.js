"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Assurez-vous d'importer depuis next/navigation
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

export default function ResetPasswordPage() {
  const router = useRouter(); // Assurez-vous d'importer depuis next/navigation
  const [token, setToken] = useState(null);
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmerMotDePasse, setConfirmerMotDePasse] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromQuery = urlParams.get('token');

    if (tokenFromQuery) {
      setToken(tokenFromQuery);
    } else {
      toast.error("Token non trouvé dans l'URL.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (motDePasse !== confirmerMotDePasse) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/password-confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, motDePasse }), // Utilise le token ici
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Mot de passe modifié avec succès !");
        // Redirigez l'utilisateur vers la page de connexion ou une autre page si nécessaire
        router.push("/auth/login"); // Rediriger vers la page de connexion
      } else {
        toast.error(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      toast.error("Erreur lors de la modification du mot de passe.");
    }
  };

  return (
    <>
      <h1>RED PRODUCT</h1>
      <p>Entrez votre nouveau mot de passe</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirmer Mot de passe"
          value={confirmerMotDePasse}
          onChange={(e) => setConfirmerMotDePasse(e.target.value)}
          required
        />
        <Button type="submit">Modifier</Button>
      </form>
      <Signup>
        <p>
          Revenir à la page <Link href="/auth/login">connexion</Link>
        </p>
      </Signup>
    </>
  );
}
