import { useState } from "react";

function AddArticle({ onAddArticle }) {
  const [newArticle, setNewArticle] = useState({
    title: "",
    topic: "",
    author: "",
    created_at: "",
    body: "",
    votes: "",
    article_img_url: "",
    comment_count: ""
  });

  const handleSubmit = () => {
    if (newArticle.title && newArticle.body) {
      const articleToAdd = {
        ...newArticle,
        votes: parseInt(newArticle.votes, 10) || 0,
        comment_count: parseInt(newArticle.comment_count, 10) 
      };

      onAddArticle(articleToAdd);
      setNewArticle({
        title: "",
        topic: "",
        author: "",
        created_at: "",
        body: "",
        votes: "",
        article_img_url: "",
        comment_count: ""
      });
    } else {
      alert("Please fill in the required fields");
    }
  };

  return (
    <div className="add-article-form">
      <input
        type="text"
        placeholder="Title"
        value={newArticle.title}
        onChange={(e) =>
          setNewArticle({ ...newArticle, title: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Topic"
        value={newArticle.topic}
        onChange={(e) =>
          setNewArticle({ ...newArticle, topic: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Author"
        value={newArticle.author}
        onChange={(e) =>
          setNewArticle({ ...newArticle, author: e.target.value })
        }
      />
      <textarea
        placeholder="Body"
        value={newArticle.body}
        onChange={(e) =>
          setNewArticle({ ...newArticle, body: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Votes"
        value={newArticle.votes}
        onChange={(e) =>
          setNewArticle({ ...newArticle, votes: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Article Image URL"
        value={newArticle.article_img_url}
        onChange={(e) =>
          setNewArticle({ ...newArticle, article_img_url: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Comment Count"
        value={newArticle.comment_count}
        onChange={(e) =>
          setNewArticle({ ...newArticle, comment_count: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Created At"
        value={newArticle.created_at}
        onChange={(e) =>
          setNewArticle({ ...newArticle, created_at: e.target.value })
        }
      />
      <button onClick={handleSubmit}>Add Article</button>
    </div>
  );
}

export default AddArticle;
