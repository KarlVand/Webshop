import "../styles/css/homePage.css";
import JumboSlider from "../components/HeroSection";

function Home() {
  return (
    <main>
      <section className="hero">
        <JumboSlider />
      </section>

      <section className="services"></section>
      <section className="deals"></section>
      <section className="fruit"></section>
      <section className="blog"></section>
    </main>
  );
}

export default Home;
