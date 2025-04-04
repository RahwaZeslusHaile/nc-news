import axios from "axios";

function fetchArticles() {
  return axios
    .get("https://nc-news-app-f5i2.onrender.com/api/articles")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching articles:", error);
      throw error;
    });
}

function fetchArticlesByArticleId(article_id) {
  return axios
    .get(`https://nc-news-app-f5i2.onrender.com/api/articles/${article_id}`) 
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching article:", error);
      throw error;
    });
}
function fetchCommentsforArticle(article_id) {
  return axios
    .get(`https://nc-news-app-f5i2.onrender.com/api/articles/${article_id}/comments`) 
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching article:", error);
      throw error;
    });
}

function fetchUpdatedArticleVotes(article_id, voteChange) {
  
  return axios.patch(`https://nc-news-app-f5i2.onrender.com/api/articles/${article_id}`, {
    inc_votes: voteChange,
  })
    .then((response) => response.data.article)
    .catch((error) => {
      console.error("Error updating article votes:", error);
      throw error;
    });
}







export { fetchArticles, fetchArticlesByArticleId,fetchCommentsforArticle,fetchUpdatedArticleVotes };
