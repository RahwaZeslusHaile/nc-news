import React, { useState } from "react";

function ArticleCard({
  article,
  isSelected,
  onSelect,
  isSingleArticleView,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`article-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect} 
      role="button"
      tabIndex={0}
    >
      <img
        src={article?.article_img_url}
        alt={`Article image for ${article?.title}`}
        loading="I am coming"
      />
      <h3>{article?.title}</h3>

      {!isSingleArticleView && (
        <p>{article?.body?.substring(0, 100)}...</p>
      )}

      <p><strong>By:</strong> {article?.author}</p>

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
          <p><strong>title:</strong> {article?.topic}</p>
          <p><strong>Created at:</strong> {new Date(article?.created_at).toLocaleString()}</p>
          <p><strong>Votes:</strong> {article?.votes}</p>
          <p><strong>Comments:</strong> {article?.comment_count}</p>

        </div>
      )}
    </div>
  );
}

export default ArticleCard;
