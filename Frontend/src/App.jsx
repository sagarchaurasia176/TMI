import "./App.css";
import Footer from "./page/Footer/Footer";
import WorksPage from "./page/FourthSection/WorksPage";
import HeroSection from "./page/HeroSection";
import Nextcomponent from "./page/NextWebSection/Nextcomponent";
import Rated from "./page/ThirdWebSection/Rated";
import TopBar from "./page/TopBar";
function App() {
  return (
    <>
      {/* Next Div */}
      {/* next components */}
      <div>
        <TopBar />
        <HeroSection />
        <Nextcomponent />
        {/* third section */}
        <Rated />
        <br></br>
        {/* fourth section */}
        <WorksPage />
        <br></br>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
