import { useState } from "react";
import ArticleList from "../component/ListContainer/ArticlesList"; 

function Home() {
  const [showArticles, setShowArticles] = useState(false);

  const handleClick = () => {
    setShowArticles(!showArticles); 
  };

  return (
    <div id="Home">
      <h1>Welcome to Northcoders News</h1>
      <p>Click on the button below to view available articles.</p>
      
      <button onClick={handleClick}>
        {showArticles ? "Hide Articles" : "Show Articles"}
      </button>

      {showArticles && <ArticleList />}
    </div>
  );
}

export default Home;
