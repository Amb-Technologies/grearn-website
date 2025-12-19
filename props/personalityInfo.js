import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

import ArrowedLink from "./arrowedLink.js";
const PersonalityInfo = ({
  personaImg,
  personaInfo,
  personaName,
  personaJob,
}) => {
  const personaRef = useRef();
  const imageRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      personaRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: personaRef.current,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
        },
      }
    );
  }, [personaRef, imageRef]);

  return (
    <div className="personality-info grid-two">
      <div className="persona-image" ref={imageRef}>
        <img src={`${personaImg}`} alt="" />
      </div>
      <div className="persona" ref={personaRef}>
        <h4>{personaInfo}</h4>
        <p>
          {personaName}
          <span>{personaJob}</span>
        </p>
        <ArrowedLink linktext="read more stories" linkcolor="#0066f5" />
      </div>
    </div>
  );
};

export default PersonalityInfo;
