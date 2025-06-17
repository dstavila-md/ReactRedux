import Table from './Table';

function SortableTable(props) {
  const { config } = props;
  const udpatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => {
        return <th>{column.label} IS SORTABLE</th>;
      },
    };
  });
  return <Table {...props} config={udpatedConfig} />;
}

export default SortableTable;
