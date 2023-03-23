import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Aboutme from "./pages/AboutMe/Aboutme";
import VisualDesign from "./pages/VisualDesign/VisualDesign";
import MainNav from "./component/MainNav/MainNav";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Hero />
        <MainNav />
        <Routes>
          <Route path="/" element={<CaseStudies />} />
          <Route path="/About_me" element={<Aboutme />} />
          <Route path="/Visual_designs" element={<VisualDesign />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
