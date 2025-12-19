import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Richstep = () => {
  const descriptionRef = useRef();
  const stepsRef = useRef();
  const barsRef = useRef();

  useEffect(() => {
    const element = descriptionRef.current;
    const barselement = barsRef.current;
    const stepselement = stepsRef.current;
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".bighead"),
      { x: "-50" },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        x: 0,
        duration: 0.2,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      element.querySelector(".little"),
      { y: "50", x: "0", opacity: 0 },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      element.querySelector("#desctexts"),
      { x: "40" },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        x: 0,
        duration: 0.6,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar1"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,1.9583740234375,1128.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,1.9583740234375,1128.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar2"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,377.6028747558594,788.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,377.6028747558594,788.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 1,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar3"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,752.214111328125,448.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,752.214111328125,448.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step1"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step2"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.4,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step3"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.7,
      }
    );
  }, [descriptionRef, stepsRef, barsRef]);
  return (
    <div className="richstep">
      <div className="richstep__description" ref={descriptionRef}>
        <div className="bighead">
  Grow a <div className="little">little</div> wealthier every day
</div>

       <div className="richstep__description__texts" id="desctexts">
  Small agricultural investments today, stronger harvest returns tomorrow.
</div>

        <button className="btn">Start Your Financial Journey</button>
      </div>
      <div className="richstep__steps">
        <div className="stepsvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1270 1360"
            width="1270"
            height="1360"
            preserveAspectRatio="xMidYMid meet"
            ref={barsRef}
          >
            <defs>
              <clipPath>
                <rect width="1270" height="1360" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g>
  <g id="bar1" transform="matrix(1.2899999618530273,0,0,1,1.9583740234375,1128.6500244140625)" opacity="1">
    <g opacity="1" transform="matrix(1,0,0,1,199.46499633789062,115.19400024414062)">
      <path
        fill="rgba(0,128,0,1)"
        fillOpacity="1"
        d=" M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.43899536132812,-477.5190124511719 -198.43899536132812,-477.5190124511719 C-198.43899536132812,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
      ></path>
    </g>
  </g>

  <g id="bar2" transform="matrix(1.2899999618530273,0,0,1,377.6028747558594,788.6500244140625)" opacity="1">
    <g opacity="1" transform="matrix(1,0,0,1,200.4290008544922,115.19400024414062)">
      <path
        fill="rgba(34,177,76,1)"
        fillOpacity="1"
        d=" M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.44000244140625,-477.5190124511719 -198.44000244140625,-477.5190124511719 C-198.44000244140625,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
      ></path>
    </g>
  </g>

  <g id="bar3" transform="matrix(1.2899999618530273,0,0,1,752.214111328125,448.6500244140625)" opacity="1">
    <g opacity="1" transform="matrix(1,0,0,1,201.42100524902344,115.19400024414062)">
      <path
        fill="rgba(102,255,102,1)"
        fillOpacity="1"
        d=" M198.43899536132812,-432.52099609375 C198.43899536132812,-432.52099609375 0.6470000147819519,-317.5769958496094 0.6470000147819519,-317.5769958496094 C0.6470000147819519,-317.5769958496094 -198.44000244140625,-432.5190124511719 -198.44000244140625,-432.5190124511719 C-198.44000244140625,-432.5190124511719 -0.6470000147819519,-547.4639892578125 -0.6470000147819519,-547.4639892578125 C-0.6470000147819519,-547.4639892578125 198.43899536132812,-432.52099609375 198.43899536132812,-432.52099609375z"
      ></path>
    </g>
  </g>
</g>

          </svg>
        </div>
        <div className="richstep__steps__eachstep" ref={stepsRef}>
          <div className="step1">
            <div className="stepdesc">
              <div className="heading">Increase your Income</div>
              <div className="texts">
                Consistently grow your Incomes by setting realistic
                goals.
              </div>
            </div>
            <span>1</span>
          </div>
          <div className="step2">
            <div className="stepdesc">
              <div className="heading">Invest deliberately</div>
              <div className="texts">
                Invest in our diverse kind of produce that grow in value over
                time.
              </div>
            </div>
            <span>2</span>
          </div>
          <div className="step3">
            <div className="stepdesc">
              <div className="heading">Stay wealthy ✨</div>
              <div className="texts">
               make smart financial decisions.
              </div>
            </div>
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Richstep;
