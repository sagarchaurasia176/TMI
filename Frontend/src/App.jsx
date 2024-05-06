import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./page/HeroSection";
import { ResizableDemo } from "./CodeBoard/ResizableDemo";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />}></Route>
        <Route path="/ResizableDemo" element={<ResizableDemo/>}></Route>
      </Routes>
    </>
  );
}

export default App;
