import "../styles/css/homePage.css";
import JumboSlider from "../components/JumboSlider";
import OurServices from "../components/OurServices";

function Home() {
  return (
    <main>
      <JumboSlider />
      <OurServices />

      
      <section className="deals"></section>
      <section className="fruit"></section>
      <section className="blog"></section>
    </main>
  );
}

export default Home;
