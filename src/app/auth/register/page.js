"use client"; // Ceci doit être la première ligne du fichier

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666666;
`;

const LoginLink = styled.div`
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

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nom = e.target.nom.value;
    const prenom = e.target.prenom.value;
    const email = e.target.email.value;
    const motDePasse = e.target.password.value;
    const termsAccepted = e.target.terms.checked;

    if (!nom || !prenom || !email || !motDePasse || !termsAccepted) {
      setError("Veuillez remplir tous les champs et accepter les termes.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          motDePasse,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccess(data.message);
        setError("");
        // Clear any existing errors
        console.log("Redirection en cours...");
        router.push("/auth/login");
      } else {
        setError(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError("Erreur de réseau. Veuillez réessayer.");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error); 
      setError("");
    }
    if (success) {
      toast.success(success);
      setSuccess('')
    }
  }, [error, success]);
  return (
    <>
      <h1>Créer un compte</h1>
      <p>Inscrivez-vous en tant qu&apos;Admin</p>
      <form onSubmit={handleSubmit}>
        <Input id="nom" name="nom" type="text" placeholder="Nom" required />
        <Input id="prenom" name="prenom" type="text" placeholder="Prénom" required />
        <Input id="email" name="email" type="email" placeholder="E-mail" required />
        <Input id="password" name="password" type="password" placeholder="Mot de passe" required />
        <div>
          <Checkbox id="terms" name="terms" type="checkbox" required />
          <Label htmlFor="terms">Accepter les termes et le politique</Label>
        </div>
        <Button type="submit">S&apos;inscrire</Button>
      </form>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>} */}
      <LoginLink>
        <p>
          Vous avez déjà un compte? <Link href="/auth/login">Se connecter</Link>
        </p>
      </LoginLink>
    </>
  );
}
