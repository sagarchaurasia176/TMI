import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./page/HeroSection";
import Codeboard from "./CodeBoard/Codeboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route path="/Codeboard" element={<Codeboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
