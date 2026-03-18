import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trainers from "./components/Trainers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        
      </Routes>
    </Router>
  );
}

export default App;