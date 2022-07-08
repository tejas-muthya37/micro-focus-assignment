import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { useRadio } from "../../Context/radio-context";
import { Link } from "react-router-dom";

const Footer = () => {
  const { inHomepage, setInHomepage, positionCentered, setPositionCentered } =
    useRadio();
  return (
    <div className="footer">
      <div className="footer-left">
        <h3>Made by Tejas Muthya</h3>
        <div className="social-icons-group">
          <a href="https://www.linkedin.com/in/tejas-muthya/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/tejas-muthya37">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/tejas.muthya/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <Link to={inHomepage ? "/description" : "/"}>
        <h3
          onClick={() => {
            if (!inHomepage) setPositionCentered(true);
            setInHomepage((prev) => !prev);
          }}
          className="router-text"
        >
          {inHomepage ? "Go to Page 2" : "Back"}
        </h3>
      </Link>
    </div>
  );
};

export default Footer;
