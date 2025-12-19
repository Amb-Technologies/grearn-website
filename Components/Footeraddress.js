import React from "react";
import Twitter from "../public/assets/socials/twitter.svg";
import Facebook from "../public/assets/socials/facebook.svg";
import Whatsapp from "../public/assets/socials/whatsapp.svg";
import Telegram from "../public/assets/socials/telegram.svg";
import Instagram from "../public/assets/socials/instagram.svg";
import Youtube from "../public/assets/socials/youtube.svg";

const Footeraddress = () => {
  return (
    <div className="address">
      <div className="socials">
        <Twitter />
        <Facebook />
        <Whatsapp />
        <Telegram />
        <Instagram />
        <Youtube />
      </div>
      <div className="physical-address">
        <div className="office-address">
          <p>🇳🇬 &nbsp; No 1 Bida Road, Kaduna, Nigeria.</p>
        </div>
        <div className="license">
          <img src="/assets/license.png" alt="license" />
          <div className="license__info">
            <h5>Licensed by the Securities and Exchange Commission (SEC), Nigeria</h5>
            <h6>Investment Platform</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footeraddress;
