import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import { uploadImage } from "../service";

const API_URL = "http://localhost:5006";

function AddArtwork(props) {
  const { user } = useContext(AuthContext);
  const [artworkData, setArtworkData] = useState({
    title: "",
    description: "",
    owner: "",
    imageUrl: "",
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

        <input type="file" onChange={(e) => handleFileUpload(e)} />

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
