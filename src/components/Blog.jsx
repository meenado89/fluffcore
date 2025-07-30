import BlogCard from "./BlogCard"; // ⬅️ import your card
import { useNavigate } from "react-router-dom";
import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


// 24537452hjghjgyufyjhjgyuy/./,l.m,...j
const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The FluffCore Origin Story: Where Weird Meets Wonderful",
      date: "28/07/2020",
      tag: "5 min read",
      content: "Three years ago, we started with a simple question: 'Why can’t toys be beautifully weird?'...",
      image: cat,
    },
    {
      id: 2,
      title: "Why Our Plushies Hit Different: The Science of Ugly-Cute",
      date: "28/07/2020",
      tag: "5 min read",
      content: "Ever wondered why Crème Ghoul's asymmetrical eyes make your heart skip...",
      image: cat,
    },
    {
      id: 3,
      title: "Adopt Don't Shop: How Your FluffCore Purchase Saves Real Lives",
      date: "28/07/2020",
      tag: "5 min read",
      content: "Here's the thing about FluffCore Studios – we believe imaginary friends should help real friends...",
      image: cat,
    },
    {
      id: 4,
      title: "The Pastel Rebellion: Why Gen Z is Redefining Cute Culture",
      date: "28/07/2020",
      tag: "5 min read",
      content: "Gone are the days when 'cute' meant 'simple.' Today's collectors want characters with depth...",
      image: cat,
    },
  ];

  const handleReadMore = (post) => {
    navigate("/article", { state: { blogData: post } });
  };

  return (
    <>
      <FluffCoreBackground />
      <div className="blogmain container">
        <header className="blog-banner p-5">
          <div className="nev d-flex">
            <p><Link to="/">Home</Link></p> / <p>Blog</p>
          </div>
          <h1>Blog</h1>
        </header>

        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-6 col-md-12" key={post.id}>
              <BlogCard
                title={post.title}
                date={post.date}
                tag={post.tag}
                content={post.content}
                image={post.image}
                onReadMore={() => handleReadMore(post)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
