import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/css/homePage.css";
import JumboSlider from "../components/JumboSlider";
import OurServices from "../components/OurServices";
import ItemShop from "../components/ItemShop";
import Blog from "../components/Blog";

function Home() {
  return (
    <main>
      <ParallaxProvider>
        <JumboSlider />
        <OurServices />
        <ItemShop />
        <Blog />
      </ParallaxProvider>
    </main>
  );
}

export default Home;
