import { HeroCard } from './HeroCard';
import { getHerosByOwner } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ owner }) => {

    const heros = useMemo( () => 
        getHerosByOwner(owner), [owner]
    );

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heros.map((hero) => (
                    <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}
