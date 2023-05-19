import { error } from "console";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../feature/auth/authSlice";

// L'utilisateur autorise l'accès à ses données et est redirigé vers l'URI de redirection
// Cette URI comprends un code d'autorisation qu'on va extraire et transmettre au backend.

const Callback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (!code) {
      navigate("/login");
      return;
    }

    // envoie du code d'autorisation a l'API backend
    // où il sera échangé contre un token d'accès

    fetch("/api/auth/callback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then(
        (
          data // si data a la structure { token: 'abcd', user: { name: 'John Doe', ... }
        ) => {
          dispatch(loginSuccess({ token: data.token, user: data.user }));

          navigate("/dashboard");
        }
      )

      .catch((error) => {
        console.error("Error during authentication:", error);
      });
  }, [navigate, dispatch]);

  return <div>Loading...</div>;
};

export default Callback;

// Idées d'amélioration
// 1) Gestion des erreurs 500/400 "conviviale" pour l'utilisateur
// 2) Meilleure UX "Loading..."
// 3) Meilleure gestion  de l'état de l'authentification (Redux)
// 4) Protection de certaines routes de l'application accessibles uniquement aux utilisateurs authentifies (Route Guard)
