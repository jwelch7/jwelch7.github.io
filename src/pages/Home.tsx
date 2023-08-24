import construction from "../assets/construction.jpg";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";
import Feature from "./Feature";

const Home = () => {
  return (
    <div>
      <img
        src={construction}
        alt="Icon to say the website is under construction"
      />

      <h1>Welcome to my page</h1>
      <h2>word</h2>
      <p>
        This is currently under construction. <br />I will be using Vite and
        Typescript to create it
      </p>
      <a href="https://www.linkedin.com/in/jonno-w-9b249384/" target="_blank">
        <img src={linkedin} alt="Linked in logo" />
      </a>
      <Link to="/about">About</Link>
      <Feature />
    </div>
  );
};

export default Home;
