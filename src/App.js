import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import ReservationsPage from "./pages/ReservationsPage";
import ProfilePage from "./pages/ProfilePage";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
