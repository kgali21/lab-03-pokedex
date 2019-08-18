import Component from '../Component.js';
import Header from './header.js';
import Pokemon from './PokemonList.js';
import { getPokemon } from '../options/pokemonAPI.js';
import hashStorage from '../options/hash-storage.js';
import Search from '../options/search.js';
import Paging from '../options/paging.js';
// import FilterPokemon from './filterPokemon.js';

class Apps extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const searchSection = dom.querySelector('.options-section');
        const search = new Search();
        searchSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.paging');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new Pokemon({ images: [] });
        listSection.appendChild(pokemonList.renderDOM());

        // const props = {
        //     images: type1
        // };

        // const pokemonListSection = {
        //     images: type1,
        //     onFilter: (type1) => {
        //         let filteredPokemon;
        //         if(type1 === 'all'){
        //             filteredPokemon = type1;
        //         }
        //         else {
        //             filteredPokemon = type1.filter(image => {
        //                 return image.pokemonList == type1;
        //             });
        //         }
        //         const updateProps = { images: filteredPokemon };
        //         type1.update(updateProps);
        //     }
        // };
        // const filterPokemans = new FilterPokemon(filterPokemonProps);
        // const filterPokemonDOM = filterPokemans.rednerDOM();

        // const filterSection = dom.querySelector('.filter-section');
        // filterSection.appendChild(filterPokemonDOM);

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemon = data.results.results;
                    const totalPokemon = data.pokemon;

                    pokemonList.update({ images: pokemon });
                    paging.update({

                        totalPokemon: totalPokemon,
                        currentPage: +options.page
                    });

                });
        }
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }



    renderHTML() {
        return /*html*/ `
        <div>
        <section class="options-section">
        <aside>
        <select class="poke-filter">
            <option value="All Pokemon">All Pokemon</option>
            <option value="fire-type">Fire Type</option>
        </select>
        <select class="poke-sort">
            <option value="All Pokemon">All Pokemon</option>
            <option value="fire-type">Fire Type</option>
        </select>
         </aside>
        </section>
        <section class="list-section">
            <ul class="poke-content"></ul>
            <div>
        <p class="paging">
            <button class="prev"><</button>
            <span></span>
            <button class="next">></button>
        </p>
        </div>
        </section>
        <footer class="poke-slogan">
            <p>Gotta Catch em' All!</p>
        </footer>
        </div>
        `;
    }

}
export default Apps;