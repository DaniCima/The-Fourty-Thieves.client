import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
const API_URL = process.env.REACT_APP_API_URL;

function ArtworkPage() {
  const [artwork, setArtwork] = useState({});
  const { artworkId } = useParams();
  const [owner, setOwner] = useState("");
  const { user } = useContext(AuthContext);

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
    <Container>
      {/* <p>add to favs || make offert</p> */}
      <img src={artwork.imageUrl} alt="future-img" />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{artwork.title}</Accordion.Header>
          <Accordion.Body>{artwork.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <h1>{artwork.title}</h1>
      <h4>{artwork.description}</h4> */}
      {/* <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      ></FloatingLabel> */}
      <h5>By: </h5>

      <h3>
        <Link to={`/gallery/${owner}`}>{owner}</Link>
      </h3>
      <br />

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
      {user.username === owner ? (
        <Link to={`/gallery/artwork/edit/${artworkId}`}>Edit Piece</Link>
      ) : (
        [<p>click up to visit this gallery</p>]
      )}
    </Container>
  );
}

export default ArtworkPage;
