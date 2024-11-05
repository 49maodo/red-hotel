"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast"
import { Roller } from 'react-css-spinners'
import { AuthContainer, AuthFooter, Input, Checkbox, Label, Button } from "@/styles/auth.style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
        setSuccess(data.message)
        setError("");
        router.push("/");
      } else {
        setError(data.message || "Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError("Erreur serveur. Veuillez réessayer plus tard.");
    }finally {
      setIsLoading(false);
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
      <AuthContainer>
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <span>Loading <Roller size={15}/> </span> : 'Se connecter' }
        </Button>
      </form>
      </AuthContainer>
      <AuthFooter>
        <Link href="/auth/forgotpassword">Mot de passe oublié?</Link>
        <p>
          Vous n&apos;avez pas de compte? <Link href="/auth/register">S&apos;inscrire</Link>
        </p>
      </AuthFooter>
    </>
  );
}
