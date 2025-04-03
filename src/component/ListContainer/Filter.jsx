import React from "react";

function FilteredArticles({ filter, onFilterChange }) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by topic"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

export default FilteredArticles;
