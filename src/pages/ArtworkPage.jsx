import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function ArtworkPage() {
  const [artwork, setArtwork] = useState({});
  const { artworkId } = useParams();
  const [owner, setOwner] = useState("");

  const getArtwork = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/gallery/artwork/${artworkId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setArtwork(response.data);
        setOwner(response.data.owner[0].username);
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
      <h1>{artwork.title}</h1>
      <h4>{artwork.description}</h4>
      <p>By: </p>

      <Link to={`/gallery/${owner}`}>{owner}</Link>

      {/* {" "}
              {link && (
                <Link to={`${link}`}>
                  <Button variant="primary">
                    <h3>{link}</h3>
                  </Button>
                </Link>
              )} */}
      {/* 
      if is yours/ currentUser */}
      <Link to={`/gallery/artwork/edit/${artworkId}`}>
        <button>Edit Piece</button>
      </Link>
    </div>
  );
}

export default ArtworkPage;
