import Navbar from "../Components/Navbar";
import Footer from "../Sections/Footer";

const Privacy = () => {
  return (
    <div className="privacy">
      <Navbar />
      <div className="py-16 px-6 md:px-20 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          At Grearn, your privacy is our priority. We collect minimal personal information
          to provide you with a secure investment experience.
        </p>
        <p className="text-gray-700 mb-4">
          We do not share or sell your data to third parties. Your contact information is
          only used for verification and notifications related to your account.
        </p>
        <p className="text-gray-700">
          By using Grearn, you agree to this Privacy Policy and the terms that govern your
          data usage.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
