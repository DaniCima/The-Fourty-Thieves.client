import ArtworkCard from "./ArtworkCard";

function RenderYourArtworks({ artwork }) {
  return (
    <>
      {artwork.map((creation) => (
        <ArtworkCard key={artwork.title} {...creation} />
      ))}
    </>
  );
}

export default RenderYourArtworks;
