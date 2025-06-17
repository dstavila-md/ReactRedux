import Table from './Table';

function SortableTable(props) {
  const { config } = props;

  const handleClick = (label) => {
    console.log(label);
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

  return <Table {...props} config={udpatedConfig} />;
}

export default SortableTable;
