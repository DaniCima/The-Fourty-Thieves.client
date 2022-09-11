import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/gallery">
        <button>General Gallery</button>
      </Link>
      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button>Your Profile</button>
          </Link>
          <Link to="/gallery/:currentUser">
            <button>Your Gallery</button>
          </Link>
          <span>Wellcome {user.name}</span>
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/">
            <button>Home</button>
          </Link>

          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
