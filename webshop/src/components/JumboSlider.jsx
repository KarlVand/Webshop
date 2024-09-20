import "../styles/css/homePage.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

/* --------------- IMAGES --------------- */

import Image1 from "../assets/images/banner-01.jpg";
import Image2 from "../assets/images/banner-02.jpg";
import Image3 from "../assets/images/banner-03.jpg";

function JumboSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      slider => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      {" "}
      <div
        ref={sliderRef}
        className="keen-slider">
        <div className="welcome">
          <h1>Welcome to Freshshop</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto necessitatibus nihil! </p>
          <button>SHOP NOW</button>
        </div>
        <div className="keen-slider__slide number-slide1"><img src={Image1} alt="strawberry" /></div>
        <div className="keen-slider__slide number-slide2"><img src={Image2} alt="tomatoes" /></div>
        <div className="keen-slider__slide number-slide3"><img src={Image3} alt="beans" /></div>
        
      </div>
    </>
  );
}


export default JumboSlider;