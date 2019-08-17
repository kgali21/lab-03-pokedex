import Component from '../Component.js';
import Header from './header.js';
import Pokemon from './PokemonList.js';
// import images from './pokeImageList.js';
import { getPokemon } from '../options/pokemonAPI.js';
import hashStorage from '../options/hash-storage.js';
import Search from '../options/search.js';
import Paging from '../options/paging.js';

class Apps extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        // const props = {
        //     images: images
        // };
        
        // const pokemon = new Pokemon(props);
        // const pokemonDOM = pokemon.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new Pokemon({ images: [] });
        listSection.appendChild(pokemonList.renderDOM());

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemon = data.results;
                    const totalPokemon = data.pokemon;

                    pokemonList.update({ pokemon: pokemon });
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