import React from "react";
import ArtworkCard from "./ArtworkCard";

function RenderYourArtworks({ projects }) {
  return (
    <>
      {projects.map((project) => (
        <ArtworkCard key={artwork.name} {...project} />
      ))}
    </>
  );
}

export default RenderYourArtworks;
