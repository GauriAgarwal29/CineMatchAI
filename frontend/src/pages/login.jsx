import React from "react";
import "../styles/Forms.css";

export default function Login() {
  return (
    <div className="form-page">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>Don’t have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}
