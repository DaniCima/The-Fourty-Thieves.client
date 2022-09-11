import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5006";

function AddArtwork(props) {
  const [artworkData, setArtworkData] = useState({
    title: "",
    description: "",
    // imageUrl: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const handleArtworkData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setArtworkData({ ...artworkData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/artwork`,
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

  return (
    <div>
      <h3>New Work</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={artworkData.title}
          onChange={handleArtworkData}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={artworkData.description}
          onChange={handleArtworkData}
        />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AddArtwork;
