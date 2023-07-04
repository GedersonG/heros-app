import { heros } from '../data/Heros';

export const getHeroByName = (name = '') => {

    if (name.length === 0) {
        return [];
    }

    return heros.filter( (hero) => 
        hero.superhero.toLocaleLowerCase().includes(name)
    );
}