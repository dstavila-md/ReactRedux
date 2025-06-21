import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    console.log(label);
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

  const udpatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => {
        return (
          <th onClick={() => handleClick(column.label)}>
            {column.label} IS SORTABLE
          </th>
        );
      },
    };
  });

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

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={udpatedConfig} />
    </div>
  );
}

export default SortableTable;
