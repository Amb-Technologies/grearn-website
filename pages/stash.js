import Navbar from "../Components/Navbar.js";
import MiniHeader from "../props/miniHeader.js";
import Stashsections from "../Sections/Stashsections.js";
import Footer from "../Sections/Footer.js";
const Stash = () => {
  return (
    <div
      className="stash"
      style={{ backgroundColor: "rgba(205, 242, 252, 0.7)" }}
    >
      <Navbar />
      <MiniHeader
        smallText="STASH"
        heading="Seamlessly fund your plans with Stash"
        texts="Keep your money where it's safe. Send cash to people for FREE. Fund your savings and investment plans."
        buttonText="Get Your Stash"
        headimg={<img src="/assets/stash/stash-landing.png" alt="" />}
      />
      <Stashsections />
      <Footer />
    </div>
  );
};

export default Stash;
