import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/footer/navigation/Navbar";
import Footer from "./components/footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="bracket">
          <div className="horizontal-bar"></div>
          <div className="vertical-bar"></div>
        </div>
        <div className="main-container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className="right-bottom-bracket">
          <div className="bottom-vertical-bar"></div>
          <div className="bottom-horizontal-bar"></div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
