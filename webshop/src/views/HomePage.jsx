import "../styles/css/homePage.css";
import JumboSlider from "../components/JumboSlider";
import OurServices from "../components/OurServices";
import ItemShop from "../components/ItemShop";
import Blog from "../components/Blog";

function Home() {
  return (
    <main>
      <JumboSlider />
      <OurServices />
      <ItemShop />
      <Blog />
    </main>
  );
}

export default Home;
