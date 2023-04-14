import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/Home";
import NotFound from "./components/FrontPart/Pages/NotFound";
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import DashboardProfile from "./components/Dashboard/Pages/Profile";
import AllUsers from "./components/Dashboard/Pages/Users";
import DashboardPageNotFound from "./components/Dashboard/Pages/DashboardPageNotFound";
import SignIn from "./components/FrontPart/Pages/SinIn";
import Register from "./components/FrontPart/Pages/Register";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import ResetPassword from "./components/FrontPart/Pages/resetPassword";
import { Provider } from "react-redux";
import store from "../redux/store";
import ProfileSettings from "./components/Dashboard/Pages/ProfileSettings";
import DashboardBlogs from "./components/Dashboard/Pages/Blogs";
import Blogs from "./components/FrontPart/Pages/Blogs";
import UserDetails from "./components/FrontPart/Components/components/UserDetails";

function App() {
  // const location = useLocation();
  // const isDashboardPage = location.pathname.startsWith("/dashboard");
  // const isAuthPage =
  //   location.pathname.startsWith("/sign-in") ||
  //   location.pathname.startsWith("/register") ||
  //   location.pathname.startsWith("/forget-password");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FrontPartLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "blogs",
          element: <Blogs />,
          // loader: async()=>{
          //   return fetch("https://jsonplaceholder.typicode.com/users")
          // }
        },
        {
          path: "/blogs/:userId",
          element: <UserDetails />,
          // loader: async({params})=>{
          //   return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          // }
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/forget-password",
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/profile",
          element: <DashboardProfile />,
        },
        {
          path: "/dashboard/profile-settings",
          element: <ProfileSettings />,
        },
        {
          path: "/dashboard/blogs",
          element: <DashboardBlogs />,
        },
        {
          path: "/dashboard/users",
          element: <AllUsers />,
        },
        {
          path: "/dashboard/*",
          element: <DashboardPageNotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <>
        {/* {isDashboardPage && (
          <Routes>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="profile" element={<DashboardProfile />} />
              <Route path="settings" element={<ProfileSettings />} />
              <Route path="blogs" element={<DashboardBlogs />} />
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
              <Route exact path="/blogs" element={<Blogs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </FrontPartLayout>
        )} */}

        <RouterProvider router={router} />
      </>
    </>
  );
}

export default App;
