import { Route, Routes, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/home";
import About from "./components/FrontPart/Pages/about";
import NotFound from "./components/FrontPart/Pages/notFound";
import Dashboard from "./components/Dashboard/Pages/dashboard";
import DashboardProfile from "./components/Dashboard/Pages/profile";
import AllUsers from "./components/Dashboard/Pages/users";
import DashboardPageNotFound from "./components/Dashboard/Pages/dashboardPageNotFound";
import SignIn from "./components/FrontPart/Pages/signIn";
import Register from "./components/FrontPart/Pages/register";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import ResetPassword from "./components/FrontPart/Pages/resetPassword";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isAuthPage =
    location.pathname.startsWith("/sign-in") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/forget-password");

  return (
    <>
      {isDashboardPage && (
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<AllUsers />} />
            <Route path="profile" element={<DashboardProfile />} />
          </Route>
          <Route path="*" element={<DashboardPageNotFound />} />
        </Routes>
      )}
      {isAuthPage && (
        <AuthLayout>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthLayout>
      )}

      {!isAuthPage && !isDashboardPage && (
        <FrontPartLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FrontPartLayout>
      )}
    </>
  );
}

export default App;
