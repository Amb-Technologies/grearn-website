import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Plan from "../public/assets/navbar/plan.svg";
import Invest from "../public/assets/navbar/invest.svg";
import Logo from "../public/assets/logo.svg";
import Expand from "../public/assets/navbar/expand.svg";
import Expandbig from "../public/assets/navbar/expandbig.svg";
import gsap from "gsap";

function Navbar() {
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    handleShow(window.scrollY >= 140);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 0, img: Plan, head: "Waitlist", text: "Access Grearn tools", link: "waitlist" },
    { id: 1, img: Invest, head: "Download", text: "Grow your agricultural portfolio", link: "download" },
  ];

  const [myGrearn, setMyGrearn] = useState(false);
  const myGrearnClicked = () => setMyGrearn(!myGrearn);

  const [showMenu, setShowMenu] = useState(false);
  const menubarClicked = () => setShowMenu(!showMenu);

  const myGrearnRef = useRef(null);
  const animatedRef1 = useRef(null);
  const animatedRef2 = useRef(null);
  const animatedHeadRef = useRef(null);
  const menuRef = useRef(null);

  /* GSAP animation for dropdown */
  useEffect(() => {
    if (myGrearn && myGrearnRef.current) {
      const el = myGrearnRef.current;
      gsap.fromTo(el.querySelector(".animated0"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25 });
      gsap.fromTo(el.querySelector(".animated1"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.15 });
      gsap.fromTo(animatedHeadRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.3 });
      gsap.fromTo(animatedRef1.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.45 });
      gsap.fromTo(animatedRef2.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.6 });
    }
  }, [myGrearn]);

  /* GSAP animation for mobile menu */
  useEffect(() => {
    if (menuRef.current) {
      const menu = menuRef.current;
      gsap.fromTo(menu.querySelector(".nav-anim1"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.5 });
      gsap.fromTo(menu.querySelector(".nav-anim2"), { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.65 });
    }
  }, [showMenu]);

  return (
    <div className={`navbar ${show ? "showing" : ""}`}>
      <div className="navbar__section">
        {/* Mobile nav */}
        <div className="mobile-nav">
          <Link href="/" legacyBehavior>
            <a>
              <div className="logo">
                <Logo fill="#020c01ff" />
              </div>
            </a>
          </Link>
          <div onClick={menubarClicked} className={`menu ${showMenu ? "cancelicon" : "showicon"}`}>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Desktop & mobile menu */}
        <div className={`nav ${showMenu ? "showing" : "hiding"}`} ref={menuRef}>
          {/* My Grearn Dropdown */}
          <div className="personal link" ref={myGrearnRef}>
            <div className="personalhead link-head nav-anim1" onClick={myGrearnClicked}>
              <span className={`${myGrearn ? "black" : ""}`}>My Grearn</span>
              <span className="dropicon">
                <Expand className={`desktop ${myGrearn ? "less" : "more"}`} />
                <Expandbig className={`mobile ${myGrearn ? "less" : "more"}`} fill="white" />
              </span>
            </div>

            <div className={`link__section ${myGrearn ? "showsection" : "hidesection"}`}>
              <div className="link__section__left">
                {links.map((link, idx) => (
                  <Link href={`/${link.link}`} key={link.id} legacyBehavior>
                    <a>
                      <div className={`link-to-page animated${idx}`}>
                        <div className="image">
                          <link.img />
                        </div>
                        <div className="link__texts">
                          <div className="link__texts__head">{link.head}</div>
                          <div className="link__texts__body">{link.text}</div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              {/* <div className="link__section__right">
                <div className="right__texts__head" ref={animatedHeadRef}>
                  Growth Tools
                </div>
                <div className="right__texts__body" ref={animatedRef1}>
                  Estimate your interests
                </div>
                <div className="right__texts__body" ref={animatedRef2}>
                  Know your risk appetite
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
