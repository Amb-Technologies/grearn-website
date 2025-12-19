import SavingsApp from "../Components/SavingsApp.js";
import JoinCircle from "../Components/JoinCircle.js";

const DemoSections = () => {
  return (
    <div className="demo-sections py-16 text-center px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        Watch How Grearn Works
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        See how simple it is to invest, track your earnings, and withdraw profits on the
        Grearn platform.
      </p>

      <div className="max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
        <iframe
          src="https://www.youtube.com/embed/your-demo-video-id"
          title="Grearn Demo"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>

      <SavingsApp />
      <JoinCircle />
    </div>
  );
};

export default DemoSections;
