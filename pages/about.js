import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import AboutSections from "../Sections/AboutSections.js";
import Footer from "../Sections/Footer.js";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <MiniHeader
        heading="About Grearn"
        texts="We’re building the bridge between agriculture, technology, and investment — empowering people to earn from real assets."
        buttonText="Join Waitlist"
      />
      <AboutSections />
      <Footer />
    </div>
  );
};

export default About;
