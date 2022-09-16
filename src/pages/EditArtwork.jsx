import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const API_URL = process.env.REACT_APP_API_URL;

function EditArtwork() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  const { artworkId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/gallery/artwork/${artworkId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const selectedArt = response.data;
        setTitle(selectedArt.title);
        setDescription(selectedArt.description);
      })
      .catch((error) => console.log(error));
  }, [artworkId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/gallery/artwork/${artworkId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/gallery`);
      });
  };

  const deleteArtwork = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/gallery/artwork/${artworkId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/gallery");
      })
      .catch((err) => console.log(err));
  };

  return (
    // <div className="EditProjectPage">
    //   <h3>Edit the Project</h3>

    //   <form onSubmit={handleFormSubmit}>
    //     <label>Title:</label>
    //     <input
    //       type="text"
    //       name="title"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />

    //     <label>Description:</label>
    //     <textarea
    //       name="description"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //     />

    //     <button type="submit">Update Project</button>
    //   </form>

    //   <button onClick={deleteArtwork}>Delete</button>
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Edit Work
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Title:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name it"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Description:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell what you whant to tell"
            />
          </Col>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Update data
        </Button>
      </Form>
      <Button variant="outline-dark" onClick={deleteArtwork}>
        Delete
      </Button>
    </Container>
    // </div>
  );
}

export default EditArtwork;
