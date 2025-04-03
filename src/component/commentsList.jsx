// Comments.jsx
import React, { useState, useEffect } from 'react';
import { fetchCommentsforArticle } from '../api'; // Replace with your API function

function ArticleWithComments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchCommentsforArticle(article_id)
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Error fetching comments");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comments-section">
      {comments.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.comment_id} className="comment-card">
            <p>{comment.body}</p>
            <p>By: {comment.author}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ArticleWithComments;
