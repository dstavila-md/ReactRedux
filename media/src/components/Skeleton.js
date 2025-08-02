import classNames from 'classnames';

function Skeleton({ times }) {
  const renderedItems = Array(times)
    .fill(0)
    .map((_, i) => {
      return <div key={i}></div>;
    });

  return renderedItems;
}

export default Skeleton;
