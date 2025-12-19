import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
// import NairaSave from "../public/assets/save/naira-save.svg";
import Savesections from "../Sections/Savesections.js";
import Footer from "../Sections/Footer.js";

const Save = () => {
  return (
    <div className="save">
      <Navbar />
      <MiniHeader
        heading={`Get on the right side of saving`}
        texts="Saving can be much more than storing money. Automate your savings and earn awesome returns. No penalties. No fees. Absolutely free."
        buttonText="Get Started Now"
        headimg={<NairaSave />}
      />
      <Savesections />
      <Footer />
    </div>
  );
};

export default Save;
