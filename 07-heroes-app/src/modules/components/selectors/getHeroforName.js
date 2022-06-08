import { heroes } from "../data/heroes";

const getHeroforName = (name) => {
  if (name.trim() === "") {
    return [];
  }
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name.toLowerCase()));
};

export default getHeroforName;
