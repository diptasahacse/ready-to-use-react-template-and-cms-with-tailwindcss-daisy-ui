import {
  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./App.css";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import NotFound from "./components/FrontPart/Pages/NotFound";
import Dashboard from "./components/Dashboard/Pages/Dashboard";
import DashboardProfile from "./components/Dashboard/Pages/Profile";
import AllUsers from "./components/Dashboard/Pages/Users";
import DashboardPageNotFound from "./components/Dashboard/Pages/DashboardPageNotFound";
import SignIn from "./components/FrontPart/Pages/SinIn";
import Register from "./components/FrontPart/Pages/Register";
import AuthLayout from "./components/FrontPart/Layouts/AuthLayout";
import ResetPassword from "./components/FrontPart/Pages/resetPassword";
import ProfileSettings from "./components/Dashboard/Pages/ProfileSettings";
import DashboardBlogs from "./components/Dashboard/Pages/Blogs";
import Blogs from "./components/FrontPart/Pages/Blogs";
import UserDetails from "./components/FrontPart/Components/components/UserDetails";
import Home from "./components/FrontPart/Pages/Home";

function App() {
 

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
