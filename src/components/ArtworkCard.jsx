import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ArtworkCard({ title, description, _id, imageUrl, ownerc }) {
  console.log(ownerc);
  return (
    <Card id="cardd">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>
          <Link id="the-owner" to={`/gallery/artwork/${_id}`}>
            {title}
          </Link>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* 
        <ListGroup className="list-group-flush">
          <ListGroup.Item>By: {ownerc}</ListGroup.Item>
        </ListGroup> */}
      </Card.Body>
    </Card>
  );
}

export default ArtworkCard;
