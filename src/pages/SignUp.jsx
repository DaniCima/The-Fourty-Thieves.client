import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const API_URL = process.env.REACT_APP_API_URL;

function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    artist: false,
    discipline: "",
    autodefinition: "",
    // collaborators: [],
    // link: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleUserData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "artist") {
      console.log(userData.artist);
      setUserData({ ...userData, [name]: !userData.artist });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/auth/signup`, userData)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        const error = err.response.data.message;
        setErrorMessage(error);
      });
  };

  return (
    <Container>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>*Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={userData.email}
            onChange={handleUserData}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>*Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleUserData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>*Unique username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unique username:"
            name="username"
            value={userData.username}
            onChange={handleUserData}
          />
        </Form.Group>

        <label>Need your own gallery? | Artist mode</label>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox
            aria-label="Checkbox for following text input"
            name="artist"
            checked={userData.artist}
            onChange={handleUserData}
          />
          <Form.Control aria-label="Text input with checkbox" />
        </InputGroup>

        {userData.artist && (
          <>
            <Form.Select
              aria-label="Default select example"
              name="discipline"
              value={userData.discipline}
              onChange={handleUserData}
            >
              <option value="Music">Music</option>
              <option value="Painting">Painting</option>
              <option value="Muralism">Muralism</option>
              <option value="Dance">Dance</option>
              <option value="Magic">Magic</option>
              <option value="Fimls and Photography">
                Fimls and Photography
              </option>
              <option value="Juggle and Balance">Juggle and Balance</option>
              <option value="Poems and Writtings">Poems and Writtings</option>
              <option value="Handmade Objects">Handmade Objects</option>
              <option value="Sculptures">Sculptures</option>
            </Form.Select>
            {/* <label>"Discipline":</label>
            <select
              name="discipline"
              value={userData.discipline}
              onChange={handleUserData}
            >
              <option value="Music">Music</option>
              <option value="Painting">Painting</option>
              <option value="Muralism">Muralism</option>
              <option value="Dance">Dance</option>
              <option value="Magic">Magic</option>
              <option value="Fimls and Photography">
                Fimls and Photography
              </option>
              <option value="Juggle and Balance">Juggle and Balance</option>
              <option value="Poems and Writtings">Poems and Writtings</option>
              <option value="Handmade Objects">Handmade Objects</option>
              <option value="Sculptures">Sculptures</option>
            </select>
            <br /> */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Auto-definition:</Form.Label>
              <Form.Control
                type="text"
                placeholder="autodefinition"
                name="autodefinition"
                value={userData.autodefinition}
                onChange={handleUserData}
              />
            </Form.Group>
            {/* <label>Auto-definition:</label>
            <input
              type="text"
              name="autodefinition"
              value={userData.autodefinition}
              onChange={handleUserData}
            />
            <br /> */}
            {/* <label>Collaborators:</label>
            <input
              type="text"
              name="collaborators"
              value={userData.collaborators}
              onChange={handleUserData}
            />
            <br />
            <label>Link to Youtube/ Spotify/ etc :</label>
            <input
              type="text"
              name="link"
              value={userData.link}
              onChange={handleUserData}
            />
            <br /> */}
          </>
        )}

        <Button variant="outline-dark" type="submit">
          Sign Up
        </Button>
      </Form>
      {/* 
            <label>Collaborators:</label>
            <input
              type="text"
              name="collaborators"
              value={userData.collaborators}
              onChange={handleUserData}
            />
            <br />
            <label>Link to Youtube/ Spotify/ etc :</label>
            <input
              type="text"
              name="link"
              value={userData.link}
              onChange={handleUserData}
            />
            <br />
          </>
        )}
        <button type="submit">Sign Up</button>
      </form>  */}

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>( * Required Fields )</p>

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </Container>
  );
}

export default SignUp;
