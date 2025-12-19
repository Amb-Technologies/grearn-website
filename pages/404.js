import Navbar from "../Components/Navbar.js";
import Link from "next/link";
import Footer from "../Sections/Footer.js";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <Navbar />
      <div className="error-page__container">
        <div className="center">
          <h1>You didn&apos;t come this far, to only come this far</h1>
          <p>Don&apos;t stop, keep going!</p>
          <Link href="/" legacyBehavior>
            <a>
              <button className="btn">Return to the Homepage</button>
            </a>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
