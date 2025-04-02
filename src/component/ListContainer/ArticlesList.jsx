import { useState, useEffect } from "react";
import fetchArticles from "../../api"; 
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) return <p>Loading Articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="article-wrapper">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} {...article} />
      ))}
    </div>
  );
}

export default ArticleList;
