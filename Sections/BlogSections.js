const BlogSections = () => {
  const posts = [
    {
      title: "5 Reasons Investing in Agriculture Beats Crypto",
      date: "October 2025",
      excerpt:
        "Unlike volatile markets, agriculture offers tangible growth opportunities with real-world value.",
    },
    {
      title: "Understanding Agro-Trading Across Nigeria’s Zones",
      date: "September 2025",
      excerpt:
        "Learn how Grearn bridges trade gaps between Nigeria’s producing and consuming regions.",
    },
    {
      title: "How Grearn Protects Your Investment Capital",
      date: "August 2025",
      excerpt:
        "Transparency, escrow protection, and sustainable trade — here’s how we secure your funds.",
    },
  ];

  return (
    <div className="blog-sections py-16 px-6 md:px-20 text-center">
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-left">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href="#" className="text-green-600 font-semibold hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSections;
