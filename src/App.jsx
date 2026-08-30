import React, { useState } from "react";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/LogIn";
import OTPVerification from "./components/OTPVerification";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim()) {
      // Here you would call the Yegara API
      // and send the OTP

      setOtpSent(true);
    }
  };

  if (isLoggedIn) {
    return (
      <LoggedIn
        username={username}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  if (otpSent) {
    return (
      <OTPVerification
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return (
    <LogIn
      username={username}
      password={password}
      setPassword={setPassword}
      setUsername={setUsername}
      handleSubmit={handleSubmit}
    />
  );
}