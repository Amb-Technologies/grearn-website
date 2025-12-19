import Navbar from "../Components/Navbar.js";
import MiniHeader from "../props/miniHeader.js";
import Footer from "../Sections/Footer.js";
import Embedsvg from "../public/assets/embed/embednaira.svg";

const Embed = () => {
  return (
    <div
      className="embed"
      style={{ backgroundColor: "rgba(205, 242, 252, 0.7)" }}
    >
      <Navbar />
      <MiniHeader
        smallText="EMBED API"
        heading="Integrate investment features into your services"
        texts="Embed investment features into your services and connect your customers to high-quality investment products that enable them to grow and manage their money."
        buttonText="Request Early Access"
        headimg={<Embedsvg />}
      />
      <Footer />
    </div>
  );
};

export default Embed;
