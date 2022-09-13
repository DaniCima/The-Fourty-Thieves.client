import { useState, useEffect } from "react";
import axios from "axios";
import RenderYourArtworks from "../components/RenderYourArtworks";
const API_URL = "http://localhost:5006";

function GeneralGalleryPage() {
  const [artwork, setArtwork] = useState([]);

  const getRandomCreations = () => {
    axios
      .get(`${API_URL}/gallery`)
      .then((response) =>
        setArtwork(response.data.sort((a, b) => 0.5 - Math.random()))
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomCreations();
  }, []);

  return (
    <>
      <RenderYourArtworks artwork={artwork} />
    </>
  );
}

export default GeneralGalleryPage;
