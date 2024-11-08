"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast"
import { Ring } from 'react-css-spinners'
import { AuthContainer, AuthFooter, Input, Button } from "@/styles/auth.style";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [motDePasse, setMotDePasse] = useState("");
  const [confirmerMotDePasse, setConfirmerMotDePasse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
        body: JSON.stringify({ token, motDePasse }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Mot de passe modifié avec succès !");
        router.push("/auth/login");
      } else {
        toast.error(data.message || "Une erreur s'est produite.");
      }
    } catch (error) {
      toast.error("Erreur lors de la modification du mot de passe.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthContainer>
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <span className="load"> <span>Loading</span> <Ring size={18} /> </span> : 'Modifier'}
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
