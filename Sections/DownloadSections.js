import SavingsApp from "../Components/SavingsApp.js";
import JoinCircle from "../Components/JoinCircle.js";
import Halal from "../Components/Halal.js";

const DownloadSections = () => {
  return (
    <div className="download-sections">
      {/* Main download section */}
      <div className="download-info py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Get the Grearn App (Beta)
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Experience the future of agricultural investment with our beta app.
          Download and install the APK directly to start exploring Grearn.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="/downloads/grearn-v1.0.apk"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-semibold transition duration-200"
            download
          >
            Download APK
          </a>

          <a
            href="#install-guide"
            className="text-green-700 hover:text-green-900 underline text-lg"
          >
            Installation Guide
          </a>
        </div>

        <div id="install-guide" className="max-w-xl mx-auto mt-12 text-left text-gray-700">
          <h3 className="font-semibold text-xl mb-3">How to Install:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Download the <strong>Grearn APK</strong> file to your phone.</li>
            <li>Open your file manager and locate the downloaded APK.</li>
            <li>Enable <strong>"Install from Unknown Sources"</strong> in your settings if prompted.</li>
            <li>Tap the APK file to install and start using Grearn!</li>
          </ul>
        </div>
      </div>

      {/* Keep your existing animated components */}
      <SavingsApp />
      <JoinCircle />
      <Halal />
    </div>
  );
};

export default DownloadSections;
