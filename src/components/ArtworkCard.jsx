import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ArtworkCard({ title, description, _id, owner, imageUrl, link }) {
  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>
            <Link to={`/gallery/artwork/${_id}`}>{title}</Link>
          </Card.Title>
          <Card.Text>{description}</Card.Text>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {/* {" "}
              {link && (
                <Link to={`${link}`}>
                  <Button variant="primary">
                    <h3>{link}</h3>
                  </Button>
                </Link>
              )} */}
            </ListGroup.Item>
            <ListGroup.Item>By: {owner}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      {/* <Link to={`/gallery/artwork/${_id}`}>
        <h3>{title}</h3>
      </Link> */}
      {/* // another link to owner's gallery */}
      {/* <h4>By: {owner}</h4>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <img src={imageUrl} alt="master-piece" width="200" />
      {link && (
        <Link to={`../${link}`}>
          <Button variant="primary">
            <h3>{link}</h3>
          </Button>
        </Link>
      )} */}
    </div>
  );
}

export default ArtworkCard;
