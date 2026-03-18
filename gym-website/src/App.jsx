import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Trainers from "./components/Trainers";
import About from "./components/About";
import Service from "./components/Services";
import Pricing from "./components/Plans";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/trainers" element={<PageWrapper><Trainers /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/service" element={<PageWrapper><Service /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;