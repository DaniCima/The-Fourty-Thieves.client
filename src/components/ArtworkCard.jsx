import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ArtworkCard({ title, description, _id, owner, imageUrl, link }) {
  return (
    <div>
      <Link to={`/gallery/artwork/${_id}`}>
        <h3>{title}</h3>
      </Link>
      {/* // another link to owner's gallery */}
      <h4>By: {owner}</h4>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <img src={imageUrl} alt="master-piece" width="200" />
      <Button variant="primary">
        <Link to={`../${link}`}>
          <h3>{link}</h3>
        </Link>
      </Button>{" "}
    </div>
  );
}

export default ArtworkCard;
