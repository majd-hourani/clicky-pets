import { useState } from "react";
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
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 10);
  }

  return (
    <div onClick={handleClick}>
      <img alt="animal" src={ImageMap[animal]} width={180} height={180} />
      <img alt="animal" src={heart} width={10 + clicks} height={10 + clicks} />
    </div>
  );
}

export default AnimalShow;
