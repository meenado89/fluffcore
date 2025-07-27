import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
  return (
    <>
      <FluffCoreBackground />
      <div className="blogmain">
        <div className="container">
          <header>Blog</header>

          <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-12">
              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <h3>"The FluffCore Origin Story: Where Weird Meets Wonderful"</h3>
                  <p>Three years ago, we started with a simple question:
                     "Why can't toys be beautifully weird?" In a world of perfectly symmetrical plushies and predictable pastels, 
                     we craved something different – something that celebrated the quirky, 
                    the misunderstood, and the wonderfully odd.</p>
                  <button>Read More</button>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <h3>Cyber Cat</h3>
                  <p>About section</p>
                  <button>Read More</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-12">
              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <h3>Cyber Cat</h3>
                  <p>About section</p>
                  <button>Read More</button>
                </div>
              </div>

              <div className="card-wrapper">
                <div className="blog-card">
                  <img src={cat} alt="Cyber cat" />
                  <h3>Cyber Cat</h3>
                  <p>About section</p>
                  <button>Read More</button>
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
