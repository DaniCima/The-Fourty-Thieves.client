import Card from "react-bootstrap/Card";

function HomePage() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://images8.alphacoders.com/414/414623.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Fourty Thieves</Card.Title>
        <Card.Text>
          This is a place where you can "steal" the art from the money propouses
          and take it back to you, to your friends and make it public to reach
          every consciences.
        </Card.Text>
        <Card.Text>
          Discover Artworks from unknown artists all over the world, and if you
          choose so: have your own gallery.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomePage;
