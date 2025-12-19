import SavingsApp from "../Components/SavingsApp.js";
import JoinCircle from "../Components/JoinCircle.js";
import Halal from "../Components/Halal.js";

const AboutSections = () => {
  return (
    <div className="about-sections">
      <div className="about-info py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Grearn is redefining agricultural investment in Africa by making it simple,
          transparent, and profitable. We connect investors with real farm produce and
          trade opportunities across Nigeria’s geopolitical zones.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left mt-10 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl mb-3 text-green-700">Our Mission</h3>
            <p>
              To empower everyday people to grow wealth through agriculture and regional
              trade, while supporting farmers and local economies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3 text-green-700">Our Vision</h3>
            <p>
              To become Africa’s most trusted agri-investment ecosystem — driving
              prosperity through technology and sustainable trade.
            </p>
          </div>
        </div>
      </div>

      <SavingsApp />
      <JoinCircle />
      <Halal />
    </div>
  );
};

export default AboutSections;
