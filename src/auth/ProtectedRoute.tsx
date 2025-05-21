import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }:any) => {
  // const { user }:any = useAuth();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  console.log("Protected Route Check:", user);
  // console.log("Protecteddddd",user)
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
