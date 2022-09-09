import { Link } from "react-router-dom";

function ArtworkCard() {
  return (
    <div>
      <Link to={`/gallery/:artwork`}>
        <h3>title</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>description </p>
    </div>
  );
}

export default ArtworkCard;
