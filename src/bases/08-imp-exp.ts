import { heroes, Owner, type Hero } from "../data/heroes.data";

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero: Hero) => {
    return hero.id === id;
  });
  //   if (!hero) throw new Error(`No existe un heroe con el id ${id}`);
  return hero;
};

console.log(getHeroById(1));

/**
 * getHeroesByOwner => Hero[]
 * Filtra heroes por su propietario
 * @param owner - El propietario por el cual filtrar
 * @returns Array de heroes pertenencientes al propietario
 */

export const getHeroesByOwner = (owner: Owner): Hero[] | undefined =>
  heroes.filter((hero: Hero) => hero.owner === owner);
