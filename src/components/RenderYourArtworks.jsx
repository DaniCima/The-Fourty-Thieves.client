import ArtworkCard from "./ArtworkCard";

function RenderYourArtworks({ artwork, ownerb }) {
  return (
    <div className="artwork-conteiner">
      {artwork.map((creation) => (
        <ArtworkCard key={creation._id} {...creation} ownerc={ownerb} />
      ))}
    </div>
  );
}

export default RenderYourArtworks;
