const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokemon(options) {
    const page = options.page || 1;
    const search = options.search;

    const url = `${URL}?pokemon=${search || ''}`;
    
    return fetch(url)
        .then(response => response.json())
        .then(results => {
            return {
                count: 100 * page,
                results: results
            };
        });
}