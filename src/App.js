import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
import ArtworkPage from "./pages/ArtworkPage";
import EditArtwork from "./pages/EditArtwork";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import GeneralGalleryPage from "./pages/GeneralGalleryPage";
import NavbarFunc from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarFunc />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUp />
            </IsAnon>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gallery" element={<GeneralGalleryPage />} />
        <Route path="/gallery/:username" element={<GalleryPage />} />
        <Route path="/gallery/creator/:username" element={<GalleryPage />} />
        <Route path="/gallery/artwork/:artworkId" element={<ArtworkPage />} />
        <Route
          path="/gallery/artwork/edit/:artworkId"
          element={
            <IsPrivate>
              <EditArtwork />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
