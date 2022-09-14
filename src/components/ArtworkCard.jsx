import { Link } from "react-router-dom";

function ArtworkCard({ title, description, _id, owner, imageUrl }) {
  return (
    <div>
      <Link to={`/gallery/artwork/${_id}`}>
        <h3>{title}</h3>
      </Link>
      {/* // another link to owner's gallery */}
      <h4>By: {owner}</h4>

      <p style={{ maxWidth: "400px" }}>{description} </p>
      <img src={imageUrl} alt="master-piece" width="200" />
    </div>
  );
}

export default ArtworkCard;
