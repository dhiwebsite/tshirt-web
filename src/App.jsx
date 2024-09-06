import { Route, Routes } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "./pages/Home";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoutes";
import Admin from "./pages/Admin";
import AdminCheck from "./components/AdminCheck";
import React from "react";

function App() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <div> Loading </div>;
  }
  const isAdmin = user?.publicMetadata?.role === "admin";

  console.log(isAdmin);
  return (
    <Routes>
      {isAdmin ? (
        <>
          <Route path="/*" element={<AdminCheck></AdminCheck>}>
            <Route index element={<Admin />} />
            <Route path="billing" element={<div>Billing</div>} />
            <Route path="customers" element={<div>Customers</div>} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </>
      ) : (
        <>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/cloth" element={<div>Cloth</div>} />

          <Route path="/orders" element={<div>Orders</div>} />
          <Route path="/*" element={<div>Not Found</div>} />
        </>
      )}
      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
