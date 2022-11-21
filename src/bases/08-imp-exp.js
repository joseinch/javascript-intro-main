import superHeros from "../data/heroes";

export const getHeroById = (_id) => superHeros.find(hero => hero.id === _id)
export const getHeroByOwner = (_owner) => superHeros.filter(hero => hero.owner === _owner)


// import { getHeroById,getHeroByOwner} from "./bases/08-imp-exp";

// console.log(getHeroById(2))
// console.log(getHeroByOwner('Marvel'))