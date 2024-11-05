"use client";
import { Roller } from 'react-css-spinners'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast"
import { AuthContainer, AuthFooter, Input, Checkbox, Label, Button } from "@/styles/auth.style";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      if (response.ok) {
        setSuccess(data.message);
        setError("");
        router.push("/auth/login");
      } else {
        setError(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError("Erreur de réseau. Veuillez réessayer.");
    }finally {
        setIsLoading(false);
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
      <AuthContainer>
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? <span>Loading <Roller size={15}/> </span> : 'S\'inscrire' }
        </Button>
      </form>
      </AuthContainer>
      <AuthFooter>
        <p>
          Vous avez déjà un compte? <Link href="/auth/login">Se connecter</Link>
        </p>
      </AuthFooter>
    </>
  );
}
