import AddArtwork from "../components/AddArtwork";
import RenderYourArtworks from "../components/RenderYourArtworks";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;

function GalleryPage() {
  const [artwork, setArtwork] = useState([]);
  const { user } = useContext(AuthContext);
  const { username } = useParams();

  const getCreations = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      // maybe it has to be redirected to gallery/:artwork ???
      .get(`${API_URL}/gallery/profile/${username}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setArtwork(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // console.log(user);
    if (user) {
      getCreations();
    }
  }, []);

  if (!user) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <p> {user && username}'s Gallery</p>
      {/* if is YOUR gallery/ :currentUser */}
      <AddArtwork refreshArtworks={getCreations} />
      {/* public */}
      <RenderYourArtworks artwork={artwork} />
    </div>
  );
}

export default GalleryPage;
