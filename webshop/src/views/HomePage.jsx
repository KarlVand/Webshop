import "../styles/css/homePage.css";
import JumboSlider from "../components/JumboSlider";

function Home() {
  return (
    <main>
      <JumboSlider />
      

      <section className="services"></section>
      <section className="deals"></section>
      <section className="fruit"></section>
      <section className="blog"></section>
    </main>
  );
}

export default Home;
