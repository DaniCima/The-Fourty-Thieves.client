import ArtworkCard from "./ArtworkCard";

function RenderYourArtworks({ artwork }) {
  return (
    <>
      {artwork.map((creation) => (
        <ArtworkCard key={artwork._id} {...creation} />
      ))}
    </>
  );
}

export default RenderYourArtworks;
