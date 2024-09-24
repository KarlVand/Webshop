import "../styles/css/homePage.css";
import JumboSlider from "../components/JumboSlider";
import OurServices from "../components/OurServices";

import Blog from "../components/Blog";

function Home() {
  return (
    <main>
      <JumboSlider />
      <OurServices />

      <Blog />
      
    </main>
  );
}

export default Home;
