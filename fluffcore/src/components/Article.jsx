import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Fluff.css"; // If your article styling is also in Fluff.css
import FluffCoreBackground from "./FluffCoreBackground";
const Article = () => {
  const location = useLocation();
  const blogData = location.state?.blogData;

  // If no blog data is passed, show a fallback message
  if (!blogData) {
    return (
      <div className="container text-center mt-5">
        <h2>Oops! Article not found</h2>
        <p>Please go back to the <Link to="/Blog">Blog</Link> and try again.</p>
      </div>
    );
  }

  return (
   <> <FluffCoreBackground />
    <div className="container article-page my-5">
      <header className="mb-4 text-center">
        <h1>{blogData.title}</h1>
        <p className="text-muted">
          Published: {blogData.date} | {blogData.tag}
        </p>
      </header>

      <div className="article-content">
        <img
          src={blogData.image}
          alt={blogData.title}
          className="img-fluid mb-4 rounded"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />

       <div className="article-text">{blogData.content}</div>

      </div>

      <div className="text-center mt-5">
        <Link to="/Blog" className="btn btn-primary">
          ← Back to Blog
        </Link>
      </div>
    </div>
    </>
  );
};

export default Article;
