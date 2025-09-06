import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { toast } from "react-toastify"; // 👈 import toast
import "./Header.css";

export function Header() {
  const logout = useAuthStore((state) => state.logout);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    toast.info("you went out 👋", {
      position: "top-right",

    });
    navigate("/login"); 
  };

  return (
    <header className="site-header">
      <img src="/assets/logo.png" alt="Travel Logo" className="logo" />
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/add-trip">Add Trip</Link>
        <Link to="/my-journal">My Journal</Link>

        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
