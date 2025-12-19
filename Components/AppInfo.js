import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AppInfo = () => {
  const appinfoRef = useRef();
  const screenshotRef = useRef();
  useEffect(() => {
    const element = appinfoRef.current;
    gsap.fromTo(
      element.querySelector(".stepnum1"),
      {
        height: "2.4rem",
        width: "2.4rem",
        backgroundColor: " rgba(163, 225, 250, 0.05)",
        opacity: 0.2,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        height: "7rem",
        width: "7rem",
        opacity: 1,
        backgroundColor: " rgba(163, 225, 250, 0.25)",
        duration: 0.5,
        delay: 0.1,
      }
    );
    gsap.to(element.querySelector(".stepnum1"), {
      scrollTrigger: {
        trigger: element,
        start: "top center",
      },
      backgroundColor: " rgba(163, 225, 250, 0)",
      duration: 0.5,
      delay: 0.6,
    });
    gsap.fromTo(
      element.querySelector(".line1"),
      {
        height: "0%",
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        height: "100%",
        duration: 1.2,
        ease: "ease",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      element.querySelector(".info1"),
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        opacity: 1,
        duration: 1.4,
        ease: "ease",
        delay: 0.4,
      }
    );
    gsap.fromTo(
      element.querySelector(".stepnum2"),
      {
        height: "2.4rem",
        width: "2.4rem",
        opacity: 0.2,
        backgroundColor: " rgba(163, 225, 250, 0.05)",
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        height: "7rem",
        width: "7rem",
        opacity: 1,
        backgroundColor: " rgba(163, 225, 250, 0.2)",
        duration: 0.5,
        delay: 1.2,
      }
    );
    gsap.to(element.querySelector(".stepnum2"), {
      scrollTrigger: {
        trigger: element,
        start: "top center",
      },
      backgroundColor: " rgba(163, 225, 250, 0)",
      duration: 0.5,
      delay: 1.7,
    });
    gsap.fromTo(
      element.querySelector(".line2"),
      {
        height: "0%",
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        height: "100%",
        duration: 1.2,
        ease: "ease",
        delay: 1.6,
      }
    );
    gsap.fromTo(
      element.querySelector(".info2"),
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        opacity: 1,
        duration: 1.4,
        ease: "ease",
        delay: 1.1,
      }
    );
    gsap.fromTo(
      element.querySelector(".stepnum3"),
      {
        height: "2.4rem",
        width: "2.4rem",
        backgroundColor: " rgba(163, 225, 250, 0.02)",
        opacity: 0.2,
        scale: 1,
        fontSize: "1.8rem",
        duration: 0.5,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        height: "7rem",
        width: "7rem",
        scale: "2",
        fontSize: "0.9rem",
        opacity: 1,
        backgroundColor: " rgba(163, 225, 250, 0.3)",
        duration: 1,
        delay: 2,
      }
    );
    gsap.to(element.querySelector(".stepnum3"), {
      scrollTrigger: {
        trigger: element,
        start: "top center",
      },
      backgroundColor: " rgba(163, 225, 250, 0)",
      duration: 0.5,
      scale: 1,
      x: "0",
      fontSize: "1.8rem",
      delay: 3,
    });
    gsap.fromTo(
      element.querySelector(".info3"),
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top center",
        },
        opacity: 1,
        duration: 1.4,
        ease: "ease",
        delay: 2,
      }
    );
  }, [appinfoRef, screenshotRef]);
  return (
    <div className="appinfo">
      <div className="appinfo__screenshot" ref={screenshotRef}>
        <img src="/assets/app-screenshot.jpg" alt="App view" />
      </div>
      <div className="appinfo__description">
        <div className="appinfo__description__head">
          It only takes few minutes
        </div>
        <div className="appinfo__description__steps" ref={appinfoRef}>
          <div className="appinfo-step">
            <div className="stepcount">
              <div className="stepcount__number">
                <div className="stepnum1">01</div>
              </div>
              <div className="stepcount__countline line1"></div>
            </div>
            <div className="stepinfo info1">
  <div className="stepinfo__head">Create your Grearn account</div>
  <div className="stepinfo__details">
    Sign up with your name, email, and phone number to start investing in agricultural produce.
  </div>
</div>
</div>
<div className="appinfo-step">
  <div className="stepcount">
    <div className="stepcount__number">
      <div className="stepnum2">02</div>
    </div>
    <div className="stepcount__countline line2"></div>
  </div>
  <div className="appinfostepinfo info2">
    <div className="stepinfo__head">Fund your account</div>
    <div className="stepinfo__details">
      Use your debit card or bank transfer to start investing in farm produce and grains.
    </div>
  </div>
</div>
<div className="appinfo-step">
  <div className="stepcount">
    <div className="stepcount__number">
      <div className="stepnum3">03</div>
    </div>
  </div>
  <div className="appinfostepinfo info3">
    <div className="stepinfo__head">Watch your investments grow</div>
    <div className="stepinfo__details">
      Monitor your produce investments, earn profits, and track growth across regions effortlessly.
    </div>
  </div>
</div>
</div>
<div className="signup">
  <button className="btn">Sign Up Now</button>
</div>
</div>
</div>

  );
};

export default AppInfo;
