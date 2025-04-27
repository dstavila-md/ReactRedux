import useState from 'react';
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    console.log('isExpanded', isExpanded);

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}

export default Accordion;
