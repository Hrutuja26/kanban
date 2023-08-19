import React from 'react';

const SortingControls = ({ onSelectSorting }) => {
  const handleSortingChange = event => {
    onSelectSorting(event.target.value);
  };

  return (
    <div className="sorting-controls">
      <label htmlFor="sorting">Sort by:</label>
      <select id="sorting" onChange={handleSortingChange}>
        <option value="">None</option>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortingControls;
