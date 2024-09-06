import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return "Loading...";
  }

  return isSignedIn ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
