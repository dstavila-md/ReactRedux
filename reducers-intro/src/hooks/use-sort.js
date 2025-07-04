import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // If the clicked label is not the current sortBy, reset sortOrder to 'asc'
    // and set sortBy to the clicked label
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder == null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder == 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder == 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //Only sort data if sortOrder and sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sort
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    if (sortValue) {
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);
        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return (valueA - valueB) * reverseOrder;
        }
      });
    }
  }

  return {
    sortOrder,
    sortBy,
    setSortColumn,
    sortedData,
  };
}

export default useSort;
