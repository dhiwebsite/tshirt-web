import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import AdminHeader from "./admin-components/AdminHeader";
import Sidebar from "./admin-components/SideBar";

const AdminCheck = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const location = useLocation();

  const isAdmin = user?.publicMetadata.role === "admin";

  if (!isLoaded) {
    return "Loading...";
  }

  if (!isAdmin && !isSignedIn) {
    <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return (
    <main className="root">
      <Sidebar />
      {/* <MobileNav /> */}
      <div className="root-container">
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AdminCheck;
