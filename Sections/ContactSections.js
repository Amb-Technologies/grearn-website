import JoinCircle from "../Components/JoinCircle.js";

const ContactSections = () => {
  return (
    <div className="contact-sections">
      <div className="contact-info py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Fill out the form below or reach us directly through our social channels.
        </p>

        <form
          action="#"
          method="post"
          className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 flex flex-col items-center"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 focus:ring-2 focus:ring-green-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold w-full transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <JoinCircle />
    </div>
  );
};

export default ContactSections;
