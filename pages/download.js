import Navbar from "../Components/Navbar.js";
import MiniHeader from "../props/miniHeader.js";
import Footer from "../Sections/Footer.js";

const GrearnDownload = () => {
  return (
    <div className="grearn-download-page" style={{ backgroundColor: "#f4f8fc" }}>
      <Navbar />

      <MiniHeader
        heading="Download The Grearn App"
        texts="Start earning by learning! Download the Grearn mobile app and join thousands of users worldwide learning new skills, participating in activities and earning rewards."
        buttonText="Download App"
      />

      <div 
        style={{ 
          textAlign: "center", 
          padding: "2.5rem 0",
          fontSize: "1.1rem",
          maxWidth: "650px",
          margin: "0 auto"
        }}
      >

        <p style={{ marginBottom: "2rem" }}>
          Select your platform to begin downloading Grearn.
        </p>

        {/* Android Download Button */}
        <a
          href="/api/download"     // Replace with your actual server file path
          download
          style={{
            background: "#1a73e8",
            padding: "15px 35px",
            borderRadius: "8px",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
            marginRight: "20px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#0859cf")}
          onMouseOut={(e) => (e.target.style.background = "#1a73e8")}
        >
          ⬇ Download for Android (APK)
        </a>

        {/* iOS Button Disabled Until Launch */}
        <a
          href="#"
          style={{
            background: "#d1d1d1",
            padding: "15px 35px",
            borderRadius: "8px",
            color: "#444",
            fontWeight: "600",
            cursor: "not-allowed",
            textDecoration: "none",
            display: "inline-block",
            transition: "0.3s",
          }}
          title="Coming soon on Apple App Store"
        >
           iOS Version Coming Soon
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default GrearnDownload;
