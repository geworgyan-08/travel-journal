import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function ProtectedRoute({ children }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {

    return <Navigate to="/login" replace />;
  }

  return children;
}
