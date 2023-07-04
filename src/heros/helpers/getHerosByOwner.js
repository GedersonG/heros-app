import { heros } from '../data/Heros';

export const getHerosByOwner = (owner) => {
    const validOwner = ['DC Comics', 'Marvel Comics'];
    if (!validOwner.includes(owner)) {
        throw new Error(`${owner} its not a valid owner.`);
    }

    return heros.filter(hero => hero.publisher === owner);
}