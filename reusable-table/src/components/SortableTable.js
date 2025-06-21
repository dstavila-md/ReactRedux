import { useState } from 'react';
import Table from './Table';

function SortableTable(props) {
  const { config } = props;
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

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={udpatedConfig} />
    </div>
  );
}

export default SortableTable;
