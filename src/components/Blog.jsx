import BlogCard from "./BlogCard"; 
import { useNavigate } from "react-router-dom";
import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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
      content: `Fluff with Purpose

Here's the thing about FluffCore Studios – we believe imaginary friends should help real friends. That's why every single purchase directly funds animal shelter operations, rescue missions, and adoption programs.

How It Works:
• 40% of profits go directly to partnered animal shelters  
• Monthly donations support spay/neuter programs  
• Quarterly drives fund emergency veterinary care  
• Annual campaigns sponsor shelter renovations  

Our Partners:
• Paws & Hearts Animal Rescue (Local)  
• Second Chance Shelter Network (Regional)  
• Global Pet Sanctuary Alliance (International)  

Real Impact: Since launch, FluffCore purchases have:
• ✅ Funded 347 animal adoptions  
• ✅ Sponsored 89 emergency surgeries  
• ✅ Provided 2,400+ meals to shelter animals  
• ✅ Built 3 new shelter play areas  

The Philosophy: When you adopt a FluffCore character, you're not just getting a companion – you're giving a real animal the chance to find their forever home. It's like having a cosmic adoption buddy system, but with more glitter and significantly more fangs.

"Every Crème Ghoul sold = one shelter cat's monthly food. Every StarLuxe adopted = one dog's vaccination series. Math has never felt this wholesome."`,

      image: cat,
    },
    {
  id: 4,
  title: "The Pastel Rebellion: Why Gen Z is Redefining Cute Culture",
  date: "28/07/2020",
  tag: "5 min read",
  preview: "Gone are the days when 'cute' meant 'simple.' Today's collectors want characters with depth...",
  content: `Not Your Childhood's Toy Store

Gone are the days when "cute" meant "simple." Today's collectors want characters with depth, aesthetic complexity, and just enough edge to feel authentic. FluffCore sits perfectly in this sweet spot of subversive kawaii.

The Cultural Shift:
• From Perfect to Quirky: Asymmetry is the new symmetry
• Comfort Objects for Adults: Emotional support comes in many forms
• Social Media Ready: Every angle needs to be photogenic
• Storytelling Matters: Backstory is becoming more important than design

Why Pastels with Fangs Work:
Our brains are wired to find contrast interesting. Soft colors with sharp teeth, fluffy clouds with zippers, royal foxes with attitude – these contradictions create memorable, shareable moments.

The FluffCore Effect:
We're not just riding the trend; we're helping define it. When someone sees our characters on Instagram, they don't just think "cute" – they think "Where do I get one?"`,
  image: cat,
}

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
