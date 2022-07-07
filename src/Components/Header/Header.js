import "./header.css";

const Header = () => {
  const date = new Date();
  return (
    <div className="header">
      <div className="header-left">
        <h3>Position: </h3>
        <div>
          <input
            name="position-input"
            type="radio"
            id="position-center-input"
          />
          <label htmlFor="position-center-input">Center</label>
        </div>
        <div>
          <input
            name="position-input"
            type="radio"
            id="position-lower-right-input"
          />
          <label htmlFor="position-lower-right-input">Lower Right</label>
        </div>
      </div>
      <div className="header-center">
        <p>Press ESC key to hide the window. Enter to show it again</p>
      </div>
      <div className="header-right">
        <h3>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </h3>
      </div>
    </div>
  );
};

export default Header;
