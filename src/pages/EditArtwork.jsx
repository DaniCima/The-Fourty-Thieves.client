import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteArtwork}>Delete</button>
    </div>
  );
}

export default EditArtwork;
