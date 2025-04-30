import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Topbar from "./Topbar"; // ← ici l'import de ta topbar

function TopBar() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (credentials) => {
    console.log("Sign In avec :", credentials);
    setIsAuthenticated(true);
  };

  const handleSignUp = (credentials) => {
    console.log("Sign Up avec :", credentials);
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Topbar /> {/* ← ici on affiche la topbar */}
          <div style={{ padding: "20px", flexGrow: 1 }}>
            <h1>Bienvenue dans ton espace !</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>{isLogin ? "Connexion" : "Inscription"}</h1>
      {isLogin ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <SignUp onSignUp={handleSignUp} />
      )}
      <p>
        {isLogin ? "Pas de compte ? " : "Déjà un compte ? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Créer un compte" : "Se connecter"}
        </button>
      </p>
    </div>
  );
}

export default TopBar;
