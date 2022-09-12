import { Link } from "react-router-dom";

function ArtworkCard({ title, description, _id, owner }) {
  return (
    <div>
      <Link to={`/gallery/artwork/${_id}`}>
        <h3>{title}</h3>
        <h4>By: {owner}</h4>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default ArtworkCard;
