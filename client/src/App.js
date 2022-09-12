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
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignUp />
            </IsAnon>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:username" element={<GalleryPage />} />
        <Route path="/gallery/artwork/:id" element={<ArtworkPage />} />
        <Route
          path="/gallery/artwork/edit/:id"
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
