import { useState } from "react";

function ArticleCard({ 
  title, 
  topic, 
  author, 
  created_at, 
  votes, 
  article_img_url, 
  comment_count, 
  isSelected, 
  onSelect 
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className={`item-card ${isSelected ? 'selected' : ''}`} 
      onClick={onSelect}
      role="button"
      tabIndex={0} 
    >
      <img src={article_img_url} alt={`Article image for ${title}`} loading="lazy" />
      <h3>{title}</h3>

      <button 
        className="toggle-button"
        aria-expanded={showDetails}
        onClick={(event) => {
          event.stopPropagation();
          setShowDetails((prev) => !prev);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="article-details">
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Topic:</strong> {topic}</p>
          <p><strong>Author:</strong> {author}</p>
          <p><strong>Created_at:</strong> {new Date(created_at).toLocaleString()}</p>
          <p><strong>Votes:</strong> {votes}</p>
          <p><strong>Comments:</strong> {comment_count}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
