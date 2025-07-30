import BlogCard from "./BlogCard"; // ⬅️ import your card
import { useNavigate } from "react-router-dom";
import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { preview } from "vite";



const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The FluffCore Origin Story: Where Weird Meets Wonderful",
      date: "28/07/2020",
      tag: "5 min read",
      preview:
        "Three years ago, we started with a simple question: 'Why can’t toys be beautifully weird?' In a world of symmetrical plushies and predictable pastels...",
      content: `
     Three years ago, we started with a simple question: "Why can't toys be beautifully weird?" In a world of perfectly
      symmetrical plushies and predictable pastels, we craved something different – something that celebrated the quirky,
       the misunderstood, and the wonderfully odd.FluffCore Studios was born from late-night art sessions, too much bubble tea,
        and an obsession with creating characters that feel like they have actual personalities. We're not just making toys;
         we're crafting companions for the beautifully chaotic souls of Gen Z.Our Mission: Every misfit deserves love, every dreamer needs a companion,
          and honestly? The world could use more glittery sneezes and digital purrs.
          Fun Fact: Our first prototype was a clay figure that looked nothing like our current characters – but it had the same
           "I'm cute but I might plot world domination" energy that defines FluffCore today.

    `,
      image: cat,
    },
    
    {
  id: 2,
  title: "Why Our Plushies Hit Different: The Science of Ugly-Cute",
  date: "28/07/2020",
  tag: "5 min read",
  preview: "Ever wondered why Crème Ghoul's asymmetrical eyes make your heart skip...",
  content: `Beyond Basic Kawaii

Ever wondered why Crème Ghoul's asymmetrical eyes make your heart skip, or why Nimbus Knot's chaotic energy feels so comforting? There's actual psychology behind the ugly-cute phenomenon, and we're totally here for it.

What Makes FluffCore Special:
• Imperfect by Design: Real personalities have flaws, quirks, and asymmetries – just like real people
• Emotional Complexity: Our characters aren't just "happy" – they're mischievous, dreamy, rebellious, and wonderfully complicated
• Interactive Elements: Zippers, removable crowns, sound features – these aren't just toys, they're experience pieces
• Story-Rich: Each character has enough backstory to fuel fan fiction (and we encourage it!)

The Neuroscience Bit: Research shows that slightly "imperfect" faces trigger stronger emotional connections because they feel more authentic.

We didn't plan to be scientifically adorable, but here we are.`,
  image: cat,
},



    {
      id: 3,
      title: "Adopt Don't Shop: How Your FluffCore Purchase Saves Real Lives",
      date: "28/07/2020",
      tag: "5 min read",
      preview: "Here's the thing about FluffCore Studios – we believe imaginary friends should help real friends...",
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
                content={post.preview}
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
