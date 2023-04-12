import { Route, Routes, useLocation } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/home";
import NotFound from "./components/FrontPart/Pages/notFound";
import Dashboard from "./components/Dashboard/Pages/dashboard";
import DashboardProfile from "./components/Dashboard/Pages/profile";
import AllUsers from "./components/Dashboard/Pages/users";
import DashboardPageNotFound from "./components/Dashboard/Pages/dashboardPageNotFound";
import SignIn from "./components/FrontPart/Pages/signIn";
import Register from "./components/FrontPart/Pages/register";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import ResetPassword from "./components/FrontPart/Pages/resetPassword";
import { Provider } from "react-redux";
import store from "../redux/store";
import ProfileSettings from "./components/Dashboard/Pages/profileSettings";
import Blogs from "./components/Dashboard/Pages/blogs";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const isAuthPage =
    location.pathname.startsWith("/sign-in") ||
    location.pathname.startsWith("/register") ||
    location.pathname.startsWith("/forget-password");

  return (
    <>
      <Provider store={store}>
        {isDashboardPage && (
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="profile" element={<DashboardProfile />} />
              <Route path="settings" element={<ProfileSettings />} />
              <Route path="blogs" element={<Blogs />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </FrontPartLayout>
        )}
      </Provider>
    </>
  );
}

export default App;
