import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import ArtworkPage from "./pages/ArtworkPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
      </Routes>
    </div>
  );
}

export default App;
