import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const ImageMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};

function AnimalShow({ animal }) {
  return <img alt="animal" src={ImageMap[animal]} width={180} height={180} />;
}

export default AnimalShow;
