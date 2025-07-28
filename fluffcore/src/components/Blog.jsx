import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"

const Blog = () => {
  return (
    <>
     {/* <NavBar /> */}
      <FluffCoreBackground />
      <div className="blogmain">
        <div className="container">
          <header className="blog-banner p-5">
            <div className="nev d-flex">
              <p> <Link to="/">Home</Link></p>
              /
              <p>Blog</p>
            </div>
            <h1>
              Blog
            </h1>
          </header>

          <div className="row">
            {/* Left Column */}

            <div className="col-lg-6 col-md-12">
              {/* CARD 1 */}
              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <div className="mainheading">
                    <h3 className="mb-3">
                      "The FluffCore Origin Story: Where Weird Meets Wonderful"
                    </h3>
                  </div>
                  <div className="date mb-3">Published: 28/07/2020 | 5 min read</div>
                  <p className="text-start mb-3">
                    Three years ago, we started with a simple question: "Why
                    can't toys be beautifully weird?" In a world of perfectly
                    symmetrical plushies and predictable pastels, we craved
                    something different – something that celebrated the quirky,
                    the misunderstood, and the wonderfully odd.
                  </p>
                  <br />
                  <button className="blog-btn">Read More</button>
                </div>
              </div>
              {/* CARD 2 */}
              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <div className="mainheading">
                    <h3 className="mb-3">
                      Why Our Plushies Hit Different: The Science of Ugly-Cute
                    </h3>
                  </div>
                  <div className="date mb-3">Published: 28/07/2020 | 5 min read</div>
                  <h5 className="mb-3">
                    <b>Beyond Basic Kawaii</b>
                  </h5>
                  <p className="text-start mb-3">
                    Ever wondered why Crème Ghoul's asymmetrical eyes make your
                    heart skip, or why Nimbus Knot's chaotic energy feels so
                    comforting? There's actual psychology behind the ugly-cute
                    phenomenon, and we're totally here for it.
                  </p>
                   <br />
                  <button className="blog-btn">Read More</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12">
              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <div className="mainheading">
                    <h3 className="mb-3">
                      "Adopt Don't Shop: How Your FluffCore Purchase Saves Real
                      Lives"
                    </h3>
                  </div>
                  <div className="date mb-3">Published: 28/07/2020 | 5 min read</div>
                  <h5 className="mb-3">
                    <b>Fluff with Purpose</b>
                  </h5>
                  <p className="text-start mb-3">
                    Here's the thing about FluffCore Studios – we believe
                    imaginary friends should help real friends. That's why every
                    single purchase directly funds animal shelter operations,
                    rescue missions, and adoption programs.
                  </p>
                  <br />
                  <button className="blog-btn">Read More</button>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <div className="mainheading">
                    <h3>
                      "The Pastel Rebellion: Why Gen Z is Redefining Cute Culture"
                    </h3>
                  </div>
                  <div className="date mb-3">Published: 28/07/2020 | 5 min read</div>
                  <h5 className="mb-3">
                    <b>Not Your Childhood's Toy Store</b>
                  </h5>
                  <p className="text-start mb-3">
                    Gone are the days when "cute" meant "simple." Today's collectors want characters with depth, aesthetic complexity, 
                    and just enough edge to feel authentic. FluffCore sits perfectly in this sweet spot of subversive kawaii.
                  </p>
                  <br />
                  <button className="blog-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
