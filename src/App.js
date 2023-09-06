import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import HomePage from "./components/Pages/HomePage";
import RegisterPage from "./components/Pages/RegisterPage"
import LoginPage from "./components/Pages/LoginPage";
import CreatePage from "./components/Pages/Offers/CreateOfferPage";
import DashboardPage from "./components/Pages/DashboardPage";

function App() {
  return (
    <div>
      <div id="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <HomePage />

        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
