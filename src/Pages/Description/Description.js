import "./description.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Description = () => {
  return (
    <div className="description">
      <Header />
      <h3 className="description-text">
        Hi. I am a Frontend Developer specialising in JavaScript and React.
        Click{" "}
        <a target="_blank" href="https://tejas-muthya.netlify.app/">
          here
        </a>{" "}
        to know more about me.
      </h3>
      <Footer />
    </div>
  );
};

export default Description;
