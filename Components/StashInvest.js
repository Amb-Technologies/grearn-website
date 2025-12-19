import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const StashInvest = () => {
  const [current, setCurrent] = useState(0);
  const stashRef = useRef();
  const stashes = [
    {
      id: 0,
      option: "Transfer",
      head: "Send and receive cash",
      info: "With a dedicated bank account number, receive instant money transfers from anyone. Make instant transfers to anyone using their Stash username for free.",
    },
    {
      id: 1,
      option: "Save",
      head: "Fund your savings plans",
      info: "Instantly move money from your Stash balance into any of your savings plans. Enjoy quick top ups with no additional charges!",
    },
    {
      id: 2,
      option: "Invest",
      head: "Invest on your terms",
      info: "Fund your investment plans directly from your Stash. With diverse investment opportunities, there’s no limit to your moves as an investor.",
    },
  ];
  useEffect(() => {
    gsap.fromTo(
      stashRef.current,
      {
        x: -40,
        opacity: 0,
      },
      { x: 0, opacity: 1, duration: 0.5 }
    );
  }, [current, stashRef]);
  return (
    <div className="stash-invest grid-two aligncenter">
      <div className="stash-invest__info">
        <div className="options">
          {stashes.map((stash) => {
            return (
              <div
                key={stash?.id}
                className={`${stash?.id === current && "active"}`}
                onClick={() => {
                  setCurrent(stash?.id);
                }}
              >
                {stash?.option}
              </div>
            );
          })}
        </div>
        <div className="stash-words" ref={stashRef}>
          <h3>{stashes[current].head}</h3>
          <p>{stashes[current].info}</p>
        </div>
      </div>
      <div className="stash-invest__image">
        <img src="/assets/stash/stash-transfer.png" alt="" />
      </div>
    </div>
  );
};

export default StashInvest;
