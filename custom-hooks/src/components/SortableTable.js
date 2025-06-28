import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

import useSort from '../hooks/use-sort';

import Table from './Table';

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const udpatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => {
        return (
          <th
            className='cursor-pointer hover:bg-gray-100'
            onClick={() => setSortColumn(column.label)}
          >
            <div className='flex items-center'>
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        );
      },
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={udpatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
