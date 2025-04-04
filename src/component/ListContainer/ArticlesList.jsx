import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticles, fetchUpdatedArticleVotes } from "../../api"; 
import ArticleCard from "./ArticleCard"; 

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingVotes, setUpdatingVotes] = useState({}); 
  useEffect(() => {
    setError(null);
    setIsLoading(true);

    fetchArticles()  
      .then((data) => {
        setArticles(data.article); 
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setIsLoading(false);
      });
  }, []);

  const handleVote = (article_id, voteChange, event) => {
    
    event.stopPropagation(); 
  
    setUpdatingVotes((prev) => ({ ...prev, [article_id]: true })); 
    const updatedArticles = [...articles];
    const articleIndex = updatedArticles.findIndex((article) => article.article_id === article_id);
    const updatedArticle = updatedArticles[articleIndex];
  
    if (updatedArticle.votes + voteChange >= 0) {
      updatedArticle.votes += voteChange; 
    }
  
    setArticles(updatedArticles); 
    fetchUpdatedArticleVotes(article_id, voteChange)
      .catch(() => {
       
        updatedArticle.votes -= voteChange;
        setArticles(updatedArticles);
        setError("Failed to update votes. Please try again.");
      })
      .finally(() => {
        setUpdatingVotes((prev) => ({ ...prev, [article_id]: false })); 
      });
  };
  

  return (
    <div className="article-wrapper">
      {isLoading ? (
        <p>Loading articles...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="articles-list">
          {articles.map((article) => (
            <div key={article.article_id}>
              <ArticleCard
                article={article}
                handleVote={handleVote} 
                isUpdating={updatingVotes[article.article_id]} 
              />
              <Link to={`/articles/${article.article_id}`}>
                <button>View Article</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleList;
