import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import ArtworkPage from "./pages/ArtworkPage";
import EditArtwork from "./pages/EditArtwork";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:artwork" element={<ArtworkPage />} />
        <Route path="/gallery/edit/:artwork" element={<EditArtwork />} />
      </Routes>
    </div>
  );
}

export default App;
