import { HelmetProvider } from "@dr.pogodin/react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* You can add more pages: Projects, Skills, Contact */}
      </Routes>
    </HelmetProvider>
  );
}

export default App;
