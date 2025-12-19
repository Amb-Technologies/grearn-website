import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import ContactSections from "../Sections/ContactSections.js";
import Footer from "../Sections/Footer.js";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <MiniHeader
        heading="Contact Us"
        texts="We’d love to hear from you. Reach out to the Grearn team for support, inquiries, or partnerships."
        buttonText="Send Message"
      />
      <ContactSections />
      <Footer />
    </div>
  );
};

export default Contact;
