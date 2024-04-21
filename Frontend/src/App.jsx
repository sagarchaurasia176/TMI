import "./App.css";
import HeroSection from "./page/HeroSection";
import Nextcomponent from "./page/NextWebSection/Nextcomponent";
import Rated from "./page/ThirdWebSection/Rated";
import TopBar from "./page/TopBar";
function App() {
  return (
    <>
      <TopBar />
      {/* Next Div */}
      <HeroSection />
      {/* next components */}
      <div>
        <Nextcomponent />
      </div>

      {/* third section */}
      <Rated />
    </>
  );
}

export default App;
