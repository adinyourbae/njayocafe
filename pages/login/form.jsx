// LoginForm.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
import skyblue from "../../assets/LOGIN.mp4";
import Link from "next/link";
const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Handle successful login
        console.log("Login successful");
        router.push("../");
      } else {
        // Handle login failure
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div className={styles["login-container"]}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline className={styles["login-video"]}>
        <source src={skyblue} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form className={styles["login-form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link href='../'>

        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
