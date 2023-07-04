import { useLocation, useNavigate } from 'react-router-dom';

import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHeroByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heros = getHeroByName(q);
    console.log(heros)

    const { txtSearch, onInputChange } = useForm({
        txtSearch: q
    });

    const onSearchHero = (event) => {
        const hero = txtSearch.toLowerCase().trim();

        event.preventDefault();
        navigate(`?q=${hero}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching:</h4>
                    <hr />
                    <form onSubmit={onSearchHero}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="txtSearch"
                            autoComplete="off"
                            value={txtSearch}
                            onChange={onInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') ?
                            <div className="alert alert-primary">
                                Search a hero
                            </div>
                            : (heros.length === 0) ?
                                <div className="alert alert-danger">
                                    No exists a hero with <b>{q}</b>
                                </div>
                                : <div>
                                    {
                                        heros.map((hero) => (
                                            <HeroCard key={hero.id} {...hero} />
                                        ))
                                    }
                                </div>
                    }
                </div>
            </div>
        </>
    )
}
