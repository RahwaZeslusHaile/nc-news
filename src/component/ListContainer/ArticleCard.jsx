import React, { useState } from "react";
import VoteButton from "./voteButton"; 

function ArticleCard({ article, isSelected, handleVote, isUpdating }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`article-card ${isSelected ? "selected" : ""}`}>
      <img
        src={article?.article_img_url}
        alt={`Article image for ${article?.title}`}
        loading="lazy"
      />
      <h3>{article?.title}</h3>
      <p><strong>By:</strong> {article?.author}</p>
      <p>Votes: {article?.votes}</p>

      <VoteButton
        article_id={article.article_id}
        voteChange={1}
        handleVote={handleVote}
        isUpdating={isUpdating}
      />
      <VoteButton
        article_id={article.article_id}
        voteChange={-1}
        handleVote={handleVote}
        isUpdating={isUpdating}
      />

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
          <p><strong>Topic:</strong> {article?.topic}</p>
          <p><strong>Created at:</strong> {new Date(article?.created_at).toLocaleString()}</p>
          <p><strong>Votes:</strong> {article?.votes}</p>
          <p><strong>Comments:</strong> {article?.comment_count}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
