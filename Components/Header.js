import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import Play from "../public/assets/header/play.svg";
import Pause from "../public/assets/header/pause.svg";
import Playstore from "../public/assets/header/playstore.svg";
import Appstore from "../public/assets/header/appstore.svg";

const Header = () => {
  const [number, setNumber] = useState(0);

  const headerInfo = [
    // {
    //   id: 0,
    //   hname: "GREARN",
    //   texts:
    //     "Grow your wealth through agriculture. Buy grains in one geopolitical zone, sell in another — and profit smartly.",
    //   handle: "@grearn_agro",
    //   background: "green",
    //   video: "Grearn-motion",
    //   playing: true,
    //   nowplaying: false,
    // },
    {
      id: 0,
      hname: "Bumi k",
      // img: "Grearn motion",
      texts:
        "Grow your wealth through agriculture. Buy grains in one geopolitical zone, sell in another — and profit smartly.",
      handle: "@wuwu",
      background: "pink",
      video: "Grearn motion",
      playing: true,
      nowplaying: false,
    },
    {
      id: 1,
      hname: "Mayokun A",
      // img: "mayokun",
      texts:
        "Cowrywise makes saving quite interesting and fun. My best part would be the fact that I can seamlessly invest my naira in dollars.",
      handle: "@mhay",
      background: "green",
      video: "Grearn motion",
      playing: false,
      nowplaying: false,
    },
   
  ];

  const [HeaderInfo, setHeaderinfo] = useState(headerInfo);
  const videoRef = useRef(null);

  useEffect(() => {
    if (HeaderInfo[number]?.playing && HeaderInfo[number]?.nowplaying) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [HeaderInfo, number]);

  const playClicked = () => {
    const newHeader = [...HeaderInfo];
    newHeader[number].playing = true;
    newHeader[number].nowplaying = true;
    setHeaderinfo(newHeader);
  };

  const pauseClicked = () => {
    const newHeader = [...HeaderInfo];
    newHeader[number].nowplaying = false;
    setHeaderinfo(newHeader);
    videoRef.current.pause();
  };

  const imageRef = useRef();
  const overlayRef = useRef();
  const descRef = useRef();
  const backRef = useRef();

  useEffect(() => {
    gsap.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    if (window.innerWidth > 550) {
      gsap.fromTo(
        imageRef.current,
        { transform: "rotate(4deg)", height: "20vh", marginTop: "30vh" },
        { transform: "rotate(0)", height: "85vh", duration: 0.8, marginTop: 0 }
      );
      gsap.fromTo(
        descRef.current,
        { scale: 1.2, marginTop: "3.2rem" },
        { scale: 1, marginTop: 0, duration: 0.8 }
      );
    } else {
      gsap.fromTo(descRef.current, { x: -25 }, { x: 0, duration: 0.8 });
      gsap.fromTo(
        overlayRef.current,
        { width: "100%" },
        { width: 0, duration: 0.8 }
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 1.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "ease",
        }
      );
      gsap.fromTo(
        backRef.current,
        { height: 0, opacity: 0 },
        {
          height: "100%",
          opacity: 0.5,
          duration: 0.8,
          ease: "ease",
        }
      );
    }
  }, [number, imageRef]);

  return (
    <div className="header">
      <div className="header__section">
        {/* Background Animation */}
        <div className="header__section__personas">
          <div
            className={`background ${HeaderInfo[number].background}`}
            ref={backRef}
          ></div>

          {/* Video / Image Section */}
          <div className="header__section__personas__image">
            <div
              className="header__section__personas__description"
              ref={descRef}
            >
              <div className="texts">{HeaderInfo[number].texts}</div>
              <div className="persona_info">
                <div className="name">{HeaderInfo[number].hname}</div>
                <div className="handle">{HeaderInfo[number].handle}</div>
              </div>
            </div>

            {/* Play / Pause Buttons */}
            {HeaderInfo[number].video && (
              <div className="play__section">
                {HeaderInfo[number]?.nowplaying ? (
                  <Pause onClick={pauseClicked} />
                ) : (
                  <Play onClick={playClicked} />
                )}
              </div>
            )}

            {/* Video / Image Display */}
            <div>
              {HeaderInfo[number]?.playing ? (
                <div className="video">
                  <video loop autoPlay ref={videoRef} muted>
                    <source
                      src={`/assets/header/videos/${HeaderInfo[number]?.video}.mp4`}
                      type="video/mp4"
                    />
                  </video>
                </div>
              ) : (
                <div className="imageCard">
                  <div className="overlay" ref={overlayRef}></div>
                  <img
                    ref={imageRef}
                    src={`/assets/header/${HeaderInfo[number]?.img}.jpg`}
                    alt={HeaderInfo[number].hname}
                    className="mainimg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="header__section__info">
          <div className="header__section__info__head bighead">
            Grow Wealth <br /> Through Agriculture 
          </div>
          <div className="header__section__info__text">
            Invest in real farm produce and grains. <br />
            Buy from one region, sell in another — profit made simple.
          </div>
          <div className="header__section__info__form desktopheader">
            <form>
              <input
                type="email"
                placeholder="Enter your email to join waitlist..."
                required
              />
              <button className="submit btn">Join Waitlist</button>
            </form>
          </div>
          <div className="mobileheader download-section">
            <div className="playstore">
              <Playstore />
            </div>
            <div className="appstore">
              <Appstore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
