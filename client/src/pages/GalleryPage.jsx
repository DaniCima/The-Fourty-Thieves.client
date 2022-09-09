import AddArtwork from "../components/AddArtwork";

function GalleryPage() {
  return (
    <div>
      <p>Gallery</p>
      {/* if is YOUR gallery/ :currentUser */}
      <AddArtwork />
      {/* public */}
    </div>
  );
}

export default GalleryPage;
