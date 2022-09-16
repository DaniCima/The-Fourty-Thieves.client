import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { uploadImage } from "../service";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const API_URL = process.env.REACT_APP_API_URL;

function AddArtwork(props) {
  const { user } = useContext(AuthContext);
  const [artworkData, setArtworkData] = useState({
    title: "",
    description: "",
    owner: "",
    imageUrl: "",
    // link: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setArtworkData({ ...artworkData, imageUrl: response.fileUrl });
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/gallery`,
        artworkData,
        { headers: { Authorization: `Bearer ${storedToken}` } } // Send the token through the request "Authorization" Headers
      )
      .then((response) => {
        // Reset the state
        props.refreshArtworks();
      })
      .catch((err) => {
        console.log(err);
        const error = err.response.data.message;
        setErrorMessage(error);
      });
  };

  const handleArtworkData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setArtworkData({ ...artworkData, [name]: value });
  };

  useEffect(() => {
    if (user) {
      setArtworkData({ ...artworkData, owner: [user._id] });
    }
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Add New Work
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
              value={artworkData.title}
              onChange={handleArtworkData}
              placeholder="Name it"
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formFileSm" className="mb-3">
          {/* <Form.Label>Default file input example</Form.Label> */}
          <Form.Control type="file" onChange={(e) => handleFileUpload(e)} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Description:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="description"
              value={artworkData.description}
              onChange={handleArtworkData}
              placeholder="Tell what you whant to tell"
            />
          </Col>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Post
        </Button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Form>
    </Container>
    // <div className="conteiner">
    //   <h5>Add New Work</h5>

    //   <form onSubmit={handleSubmit}>
    //     <label>Title:</label>
    //     <input
    //       type="text"
    //       name="title"
    //       value={artworkData.title}
    //       onChange={handleArtworkData}
    //     />

    //     <input type="file" onChange={(e) => handleFileUpload(e)} />

    //     <label>Description:</label>
    //     <textarea
    //       type="text"
    //       name="description"
    //       value={artworkData.description}
    //       onChange={handleArtworkData}
    //     />

    //     {/* <label>Link:</label>
    //     <textarea
    //       type="text"
    //       name="link"
    //       value={artworkData.link}
    //       onChange={handleArtworkData}
    //     /> */}

    //     <button type="submit">Submit</button>
    //   </form>
  );
}

export default AddArtwork;
