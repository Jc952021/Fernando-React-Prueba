import { heroes } from "../data/heroes";

const getHeroesForPublish = ( publish ) => {
  const publishers = ["Marvel Comics", "DC Comics"];

  if (!publishers.includes(publish)) {
    throw new Error(`El ${publish} no esta incluido`);
  }

  return heroes.filter((hero) => hero.publisher === publish);
};

export default getHeroesForPublish;
