import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = {
  bird,
  cat,
  cow,
  gator,
  horse,
  heart,
};

function AnimalShow({ type }) {
  return (
    <div>
      <img alt='animal' src={svgMap[type]}></img>
    </div>
  );
}

export default AnimalShow;
