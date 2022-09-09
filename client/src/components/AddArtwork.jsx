function AddArtwork() {
  return (
    <div>
      <h3>New Work</h3>

      <form onSubmit>
        <label>Title:</label>
        <input type="text" name="title" value onChange />

        <label>Description:</label>
        <textarea type="text" name="description" value onChange />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddArtwork;
