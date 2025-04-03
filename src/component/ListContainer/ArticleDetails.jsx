import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { fetchArticlesByArticleId } from "../../api";

function ArticleDetails() {
  const { article_id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchArticlesByArticleId(article_id) 
      .then((data) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching article");
        setIsLoading(false);
      });
  }, [article_id]); 

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="article-details">
      <h1>{article.title}</h1>
      <p><strong>Topic:</strong> {article.topic}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p>{article.body}</p>
      <p><strong>Votes:</strong> {article.votes}</p>
      <p><strong>Comments:</strong> {article.comment_count}</p>
      <img src={article.article_img_url} alt={article.title} />
    </div>
  );
}

export default ArticleDetails;
