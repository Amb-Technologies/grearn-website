import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import BlogSections from "../Sections/BlogSections.js";
import Footer from "../Sections/Footer.js";

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <MiniHeader
        heading="Grearn Insights"
        texts="Stay informed with our latest updates, investment tips, and agricultural market insights."
        buttonText="Read Articles"
      />
      <BlogSections />
      <Footer />
    </div>
  );
};

export default Blog;
