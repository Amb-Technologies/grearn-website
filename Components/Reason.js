import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Reason = () => {
  const questionsobj = [
    {
      id: 0,
      question: "Is Grearn fully regulated?",
      answer: "Absolutely!",
    },
    {
      id: 1,
      question: "Are there hidden fees?",
      answer: "None at all!",
    },
    {
      id: 2,
      question: "Do I earn good returns?",
      answer: "Yes, consistently!",
    },
    {
      id: 3,
      question: "Is my investment secure?",
      answer: "100% safe.",
    },
    {
      id: 4,
      question: "Ready to grow with Grearn?",
      answer: "Join the waitlist now!",
      acolor: "#b0e946ff",
    },
  ];
  var [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (number < questionsobj.length - 1) {
        setNumber(number + 1);
      } else {
        setNumber(0);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [number, questionsobj.length]);

  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      answerRef.current,
      { opacity: 0, x: 10, y: 50 },
      { opacity: 1, x: 0, y: 0, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      sectionRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20, duration: 0.5, delay: 2.5 }
    );
  }, [number, questionRef, answerRef, sectionRef]);
  return (
    <div className="reason">
      <div className="reason-head">WHY GREARN ?</div>
      <div className="questions-section" ref={sectionRef}>
        <div
          style={{ color: "rgba(163, 226, 15, 0.6)" }}
          className="questions-section__question"
          ref={questionRef}
        >
          {questionsobj[number].question}
        </div>
        <div
          style={
            questionsobj[number].acolor
              ? { color: `${questionsobj[number].acolor}` }
              : { color: " #badb40ff" }
          }
          className="questions-section__answer"
          ref={answerRef}
        >
          {questionsobj[number].answer}
        </div>
      </div>
    </div>
  );
};

export default Reason;
