import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import "./Header.css";

export function Header() {
  const logout = useAuthStore((state) => state.logout);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <header className="site-header">
      <img src="/assets/logo.png" alt="Travel Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add-trip">Add Trip</Link>
        <Link to="/my-journal">My Journal</Link>
        <Link to="/login">Login</Link>
        {isLoggedIn && (
        <button
          onClick={logout}
        >
          Logout
        </button>
      )}
      </nav>
    </header>
  );
}