import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const loggedUser = localStorage.getItem("loggedUser");

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}