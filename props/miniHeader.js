import gsap from "gsap";
import { useEffect, useRef } from "react";
const MiniHeader = ({ heading, texts, buttonText, smallText, headimg }) => {
  const headingRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, delay: 0.1 }
    );
    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, delay: 0.4 }
    );
    gsap.fromTo(
      btnRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, delay: 0.7 }
    );
  });

  return (
    <div className="mini-header grid-two aligncenter">
      <div className="mini-header__texts">
        {smallText && <p className="small-text">{smallText}</p>}
        <h1 ref={headingRef}>{heading}</h1>
        <p ref={textRef}>{texts}</p>
        <button ref={btnRef} className="btn">
          {buttonText}
        </button>
      </div>
      <div className="mini-header__image">
        <div className="headerimg">{headimg}</div>
      </div>
    </div>
  );
};

export default MiniHeader;
