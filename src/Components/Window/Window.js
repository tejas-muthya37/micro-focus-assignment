import "./window.css";
import Draggable from "react-draggable";
import { useRadio } from "../../Context/radio-context";

const Window = () => {
  const { positionCentered } = useRadio();
  return (
    <div className="window">
      <Draggable>
        <div
          className={`floating-block ${
            !positionCentered ? "position-bottom-right" : ""
          }`}
        >
          <h3>Floating..</h3>
          <h3>Drag me around..</h3>
        </div>
      </Draggable>
    </div>
  );
};

export default Window;
