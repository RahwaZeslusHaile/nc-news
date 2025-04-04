import React from 'react';

function VoteButton({ article_id, voteChange, handleVote, isUpdating }) {
  return (
    <button
      onClick={(e) => handleVote(article_id, voteChange, e)}
      aria-label={voteChange === 1 ? "Upvote" : "Downvote"}
      disabled={isUpdating}
    >
      {voteChange === 1 ? "👍 Upvote" : "👎 Downvote"}
    </button>
  );
}

export default VoteButton;
