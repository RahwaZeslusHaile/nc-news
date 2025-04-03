import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { fetchArticles } from "../../api"; 
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
 

      <div className="articles-list">
        {articles.map((article) => (  
          <div key={article.article_id}>
            <ArticleCard article={article} />
            <Link to={`/articles/${article.article_id}`}> 
              <button>View Article</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
