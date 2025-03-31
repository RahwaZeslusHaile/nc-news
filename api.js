import axios from "axios";



function fetchItems() {
return axios
   .get("https://fe-nc-marketplace-api-1-s34e.onrender.com/api/items")
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
     return []
    });
}
