import Component from '../Component.js';
import Header from './header.js';
import Pokemon from './PokemonList.js';
import { getPokemon } from '../options/pokemonAPI.js';
import hashStorage from '../options/hash-storage.js';
import Search from '../options/search.js';
import Paging from '../options/paging.js';

class Apps extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        const searchSection = dom.querySelector('.options-section');
        const search = new Search();
        searchSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new Pokemon({ images: [] });
        listSection.appendChild(pokemonList.renderDOM());

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemon = data.results.results;
                    const totalPokemon = data.results.count;
                    pokemonList.update({ images: pokemon });
                    paging.update({

                        totalCount: totalPokemon,
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
        <section class="options-section"></section>
        <section class="list-section">
            <ul class="poke-content"></ul>
            <div>
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