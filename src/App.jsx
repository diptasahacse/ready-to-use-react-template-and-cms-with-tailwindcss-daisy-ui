import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/Dashboard/Layouts/DashboardLayout";
import FrontPartLayout from "./components/FrontPart/Layouts/FrontPartLayout";
import Home from "./components/FrontPart/Pages/home";
import About from "./components/FrontPart/Pages/about";
import NotFound from "./components/FrontPart/Pages/notFound";

function App() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboardPage ? (
        <DashboardLayout>
          <Routes></Routes>
        </DashboardLayout>
      ) : (
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
