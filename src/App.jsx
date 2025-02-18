import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true); 

  const handleSignIn = (credentials) => {
    console.log("Sign In avec :", credentials);
    
  };

  const handleSignUp = (credentials) => {
    console.log("Sign Up avec :", credentials);
  };

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

export default App;