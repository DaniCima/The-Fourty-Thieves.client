import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <p>Discover</p>
      {/* if you are not logged in */}
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      {/* if you are logged in */}
      <Link to="/profile">
        <button>Your Profile</button>
      </Link>
      <Link to="/gallery/:currentUser">
        <button>Your Gallery</button>
      </Link>
    </div>
  );
}

export default HomePage;
