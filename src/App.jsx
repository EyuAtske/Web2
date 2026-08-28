import React, { useState } from "react";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/LogIn";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
    }
  };
  if (isLoggedIn) {
    return <LoggedIn username={username} setIsLoggedIn={setIsLoggedIn} />;
  }

  return <LogIn 
  username={username}
  password={password}
  setPassword={setPassword}
  setUsername={setUsername}
  handleSubmit={handleSubmit}
  /> ;
  
}
