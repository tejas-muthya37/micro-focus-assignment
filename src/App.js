import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "./Pages/Description/Description";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </Router>
  );
}

export default App;
