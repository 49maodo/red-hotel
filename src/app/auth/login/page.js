"use client";
import { useEffect, useState } from "react";
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

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666666;
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
  const [motDePasse, setMotDePasse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END}/api/login`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, motDePasse }),
      });

      const data = await response.json();

      if (response.ok) {
        // Connexion réussie, redirection vers une autre page
        setSuccess(data.message)
        setError("");
        router.push("/");
      } else {
        setError(data.message || "Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Erreur serveur. Veuillez réessayer plus tard.");
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      setError('');
    }
    if (success) {
      toast.success(success);
      setSuccess('')
    }
  }, [error, success]);
  return (
    <>
      <h1>RED PRODUCT</h1>
      <p>Connectez-vous en tant qu&apos;Admin</p>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />
        <div>
          <Checkbox id="remember-me" type="checkbox" />
          <Label htmlFor="remember-me">Gardez-moi connecté</Label>
        </div>

        <Button type="submit">Se connecter</Button>
      </form>
      <ForgotPassword>
        <Link href="/auth/forgotpassword">Mot de passe oublié?</Link>
      </ForgotPassword>
      <Signup>
        <p>
          Vous n&apos;avez pas de compte? <Link href="/auth/register">S&apos;inscrire</Link>
        </p>
      </Signup>
    </>
  );
}
