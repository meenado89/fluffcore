// BlogCard.jsx
import "./Fluff.css";

const BlogCard = ({ title, date, tag, content, image, onReadMore }) => {
  return (
    <div className="card-wrapper">
      <div className="blog-card">
        <img src={image} alt={title} />
        <div className="mainheading">
          <h3 className="mb-3">{title}</h3>
        </div>
        <div className="date mb-3">
          Published: {date} | {tag}
        </div>
        <p className="text-start mb-3">{content}</p>
        <button className="blog-btn" onClick={onReadMore}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
