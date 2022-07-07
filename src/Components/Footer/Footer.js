import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Made with ❤️ by Tejas Muthya</h3>
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
  );
};

export default Footer;
