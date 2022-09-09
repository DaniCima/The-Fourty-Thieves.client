import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/gallery">
        <button>General Gallery</button>
      </Link>
      {/* <button onClick={logOutUser}>Logout</button> */}
      <br />
    </div>
  );
}

export default Navbar;
