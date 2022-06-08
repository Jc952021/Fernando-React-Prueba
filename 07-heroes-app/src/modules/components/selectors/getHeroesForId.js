import { heroes } from "../data/heroes";

const getHeroesForId = ( id ) => {
  return heroes.find((hero) => hero.id === id);
};

export default getHeroesForId;
