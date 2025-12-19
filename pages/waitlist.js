import { useState } from "react";
import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import NairaPlan from "../public/assets/plan/naira-plan.svg";
import Plansections from "../Sections/Plansections.js";
import Footer from "../Sections/Footer.js";

const plan = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const submitWaitlist = async () => {
    if (!fullname || !email) {
      alert("Fullname & Email are required!");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, phone }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.status === 200) {
      alert("🎉 You have been added to the waitlist!");
      setFullname("");
      setEmail("");
      setPhone("");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="plan">
      <Navbar />

      <MiniHeader
        heading="Join the Grearn Early Access Waitlist"
        texts="Be among the first to access Africa’s trusted agricultural investment platform. Sign up today and secure your priority invitation once we launch."
        buttonText="Join Waitlist"
        headimg={<NairaPlan />}
      />

      <div className="waitlist-form-container">
        <form className="waitlist-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={submitWaitlist} disabled={loading}>
            {loading ? "Please wait..." : "Join Waitlist"}
          </button>
        </form>
      </div>

      <Plansections />
      <Footer />

      {/* 👇 Embedded CSS */}
      <style jsx>{`
        .plan {
          background-color: #cdf2fc;
          min-height: 100vh;
          width: 100%;
        }

        .waitlist-form-container {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 4rem 1rem;
          margin-top: -2rem;
        }

        .waitlist-form {
          width: 100%;
          max-width: 480px;
          background: white;
          padding: 2rem 2rem;
          border-radius: 18px;
          box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.07);
          display: flex;
          flex-direction: column;
        }

        .waitlist-form input {
          width: 100%;
          padding: 15px;
          margin-bottom: 1.2rem;
          font-size: 16px;
          border-radius: 12px;
          border: 1px solid #d8d8d8;
          transition: border 0.2s;
        }

        .waitlist-form input:focus {
          outline: none;
          border-color: #0ba34a;
        }

        .waitlist-form button {
          padding: 15px;
          font-size: 17px;
          background: #0ba34a;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .waitlist-form button:hover {
          background: #09873e;
          transform: scale(1.01);
        }

        .waitlist-form button:disabled {
          background: #6fb995;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .waitlist-form-container {
            padding: 2.5rem 1rem;
          }

          .waitlist-form {
            padding: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default plan;
