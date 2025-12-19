import React from "react";
import ArrowedLink from "../props/arrowedLink.js";

const Security = () => {
  const securityobj = [
    {
      id: 0,
      head: "Top-Notch Security",
      texts:
        "We use advanced encryption and security protocols to protect your account and personal data. Two-factor authentication ensures that only you can access your investments.",
    },
    {
      id: 1,
      head: "Secure Asset Custody",
      texts:
        "All your agricultural investments and funds are safely held with licensed custodians, ensuring protection from misuse, theft, or loss.",
    },
    {
      id: 2,
      head: "Regulatory Compliance",
      texts:
        "Grearn operates in full compliance with Nigerian financial regulations, providing transparency and legal protection for all our users.",
    },
    {
      id: 3,
      head: "Trusted Investment Options",
      texts:
        "Our agricultural investment opportunities are carefully curated and managed by experts, giving you access to high-quality farm produce and grain ventures with professional oversight.",
    },
  ];

  return (
    <div className="security">
      <div className="security__head">
        Safeguarding your agricultural investments is our priority.
      </div>
      <div className="security__description">
        Trust is our foundation. We ensure your funds and investments are fully protected while you focus on growing your wealth.
      </div>
      <div className="security__link">
        <ArrowedLink linktext="learn more" linkcolor="white" />
      </div>
      <div className="security__details">
        {securityobj.map((sec) => {
          return (
            <div key={sec.id} className="detail">
              <div className="point">
                <span></span>
                <span></span>
              </div>
              <div className="detail__info">
                <div className="detail__info__head">{sec.head}</div>
                <div className="detail__info__texts">{sec.texts}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Security;

