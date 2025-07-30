
import "./Fluff.css";
import FluffCoreBackground from "./FluffCoreBackground";
import cat from "../assets/CyberCat.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// reuseable BlogCard

const BlogCard = ({ title, date, tag, content, image, onReadMore }) => {
  return (
    <div className="card-wrapper">
      <div className="blog-card">
        <img src={image} alt={title} />
        <div className="mainheading">
          <h3 className="mb-3">{title}</h3>
        </div>
        <div className="date mb-3">Published: {date} | {tag}</div>
        <p className="text-start mb-3">{content}</p>
        <br />
        <button className="blog-btn" onClick={onReadMore}>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
