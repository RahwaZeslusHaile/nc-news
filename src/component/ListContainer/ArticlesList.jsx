import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByArticleId } from "../../api"; 
import ArticleCard from "./ArticleCard";
import { useParams } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams(); 

  useEffect(() => {
    setError(null);
    setIsLoading(true);

    if (article_id) {
      fetchArticlesByArticleId(article_id)
        .then((data) => {
          setArticles([data.article]);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Error fetching article");
          setIsLoading(false);
        });
    } else {
      fetchArticles()
        .then((data) => {
          setArticles(data.article); 
          setIsLoading(false);
        })
        .catch(() => {
          setError("Error fetching data");
          setIsLoading(false);
        });
    }
  }, [article_id]); 

  if (isLoading) return <p>Loading Articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="article-wrapper">
      {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          article={article}
          isSingleArticleView={Boolean(article_id)}
          isSelected={selectedArticleId === article.article_id}
          onSelect={() => setSelectedArticleId(article.article_id)}
        />
      ))}
    </div>
  );
}

export default ArticleList;
