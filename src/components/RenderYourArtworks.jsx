import ArtworkCard from "./ArtworkCard";

function RenderYourArtworks({ artwork }) {
  return (
    <>
      {artwork.map((creation) => (
        <ArtworkCard key={creation._id} {...creation} />
      ))}
    </>
  );
}

export default RenderYourArtworks;
