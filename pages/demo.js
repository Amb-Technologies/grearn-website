import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import DemoSections from "../Sections/DemoSections.js";
import Footer from "../Sections/Footer.js";

const Demo = () => {
  return (
    <div className="demo">
      <Navbar />
      <MiniHeader
        heading="Grearn App Preview"
        texts="Take a sneak peek into how the Grearn app helps you invest in agriculture with ease."
        buttonText="Download App"
      />
      <DemoSections />
      <Footer />
    </div>
  );
};

export default Demo;
