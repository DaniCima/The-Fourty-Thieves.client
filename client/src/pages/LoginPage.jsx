import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <h1>Login</h1>

      <form onSubmit>
        <label>Email:</label>
        <input type="email" name="email" value onChange />

        <label>Password:</label>
        <input type="password" name="password" value onChange />

        <br />

        <button type="submit">Login</button>
      </form>
      {/* { errorMessage && <p className="error-message">{errorMessage}</p> } */}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </>
  );
}

export default LoginPage;
