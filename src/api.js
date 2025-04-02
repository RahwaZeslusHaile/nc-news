import axios from "axios";



function fetchArticles() {
return axios
   .get("https://nc-news-app-f5i2.onrender.com/api/articles")
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
     return [];
    });

  }
    export default fetchArticles;