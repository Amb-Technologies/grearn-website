import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Faq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  /*Animation*/
  const faqRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1,
        scrollTrigger: {
          trigger: faqRef.current,
          start: `center bottom`,
        },
      }
    );
  }, [faqRef]);
  return (
    <div className="faq" ref={faqRef}>
      <div className="faq__heading" onClick={handleShow}>
        <h4>{question}</h4>
        <div className={`sign ${show ? "plus" : "minus"}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`faq__body ${show && "showfaq"}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;
