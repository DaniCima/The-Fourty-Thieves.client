import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5006";

function ArtworkPage() {
  const [artwork, setArtwork] = useState({});
  const { artworkId } = useParams();

  const getArtwork = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/gallery/artwork/${artworkId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setArtwork(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArtwork();
    console.log(artwork);
  }, []);

  return (
    <div>
      <p>add to favs || make offert</p>
      <img src={artwork.imageUrl} alt="future-img" />
      <h1>
        {artwork.title} <br />
        <button>OFFERT</button>
        <button>FAVS</button>
      </h1>
      <h4>{artwork.description}</h4>
      <p>
        By:
        <Link to={`${artwork.owner}`}>
          <button>{artwork.owner}</button>
        </Link>
      </p>
      {/* if is yours/ currentUser */}
      <Link to={`../gallery/artwork/edit/${artworkId}`}>
        <button>Edit Piece</button>
      </Link>
    </div>
  );
}

export default ArtworkPage;
