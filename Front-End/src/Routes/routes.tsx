import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/login";
import { UserProvider } from "../providers/userContext/userContext";
import { RegisterPage } from "../pages/register/register";
import { DashPage } from "../pages/dash/dash";
import { ContactProvider } from "../providers/contactContext/contactContext";
import { NotFound } from "../pages/notFound/notFound";

export const RouterComponent = () => {
  return (
    <UserProvider>
      <ContactProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dash" element={<DashPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ContactProvider>
    </UserProvider>
  );
};
