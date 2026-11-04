import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

function AnimalShow({ animal }) {
  switch (animal) {
    case "bird":
      return <img alt="animal" src={bird} width={180} height={180} />;
    case "cat":
      return <img alt="animal" src={cat} width={180} height={180} />;
    case "cow":
      return <img alt="animal" src={cow} width={180} height={180} />;
    case "dog":
      return <img alt="animal" src={dog} width={180} height={180} />;
    case "gator":
      return <img alt="animal" src={gator} width={180} height={180} />;
    case "heart":
      return <img alt="animal" src={heart} width={180} height={180} />;
    case "horse":
      return <img alt="animal" src={horse} width={180} height={180} />;
    default:
      return null;
  }
}

export default AnimalShow;
