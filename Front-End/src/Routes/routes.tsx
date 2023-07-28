import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login/login";
import { UserProvider } from "../providers/userContext/userContext";
import { RegisterPage } from "../pages/register/register";
import { DashPage } from "../pages/dash/dash";
import { ContactProvider } from "../providers/contactContext/contactContext";

export const RouterComponent = () => {
  return (
    <UserProvider>
      <ContactProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dash" element={<DashPage />} />
          {/*     <Route path="/*" element={<NotFound />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateUser" element={<UpdateUser />} />
            <Route path="/updateADMUser" element={<UpdateADMUser />} />
            <Route path="/admPage" element={<ADMPage />} />
            <Route path="/userPage" element={<UserPage />} /> */}
        </Routes>
      </ContactProvider>
    </UserProvider>
  );
};
