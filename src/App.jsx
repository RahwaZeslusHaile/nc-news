import Header from "./component/Header";
import Nav from "./component/Nav";
import Home from "./component/Home";
import ArticleList from "./component/ListContainer/ArticlesList";
import AddArticle from "./component/ListContainer/Adder";
import FilteredArticles from "./component/ListContainer/Filter";
import UserProvider from "./Context/UserContext";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div id="app">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddArticle />} />
            <Route path="/filter" element={<FilteredArticles />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:article_id" element={<ArticleList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
