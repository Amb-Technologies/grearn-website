import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Invest = () => {
  const investRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      investRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: investRef.current,
          start: "top bottom",
        },
      }
    );
  }, [investRef]);
  return (
    <div className="invest">
  <div className="invest__head">
    Whatever you need, Grearn makes it possible.
  </div>

  <div className="invest__section" ref={investRef}>
    <div className="invest__section__quote">
      <span>"</span>
      Buy and hold agricultural produce automatically
    </div>

    <div className="invest__section__quote">
      <span>"</span>
      Diversify across regions and farm-produce markets
    </div>

    <div className="invest__section__quote">
      <span>"</span>
      Earn better returns through smart agri-asset pricing
    </div>

    <div className="invest__section__quote">
      <span>"</span>
      Grow my business funds with strategic commodity flips
    </div>

    <div className="invest__section__quote">
      <span>"</span>
      Invest in real, trackable commodity cycles easily
    </div>

    <div className="invest__section__quote">
      <span>"</span>
      Trade agricultural assets with low fees and zero stress
    </div>
  </div>
</div>

  );
};

export default Invest;
