import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import AddArtwork from "../components/AddArtwork";
import RenderYourArtworks from "../components/RenderYourArtworks";

const API_URL = "http://localhost:5006";

function ProfilePage() {
  const [artwork, setArtwork] = useState([]);
  const { user } = useContext(AuthContext);

  const getAllCreations = () => {
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      // maybe it has to be redirected to gallery/:artwork ???
      .get(`${API_URL}/artwork`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setArtwork(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    if (!user) {
      return null;
    } else {
      getAllCreations();
    }
  }, [artwork]);

  return (
    <>
      <AddArtwork refreshArtworks={getAllCreations} />

      <RenderYourArtworks artwork={artwork} />
    </>
  );
}

export default ProfilePage;
