import Component from '../Component.js';
import Header from './header.js';
import Pokemon from './PokemonList.js';
import images from './pokeImageList.js';

class Apps extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const pokemon = new Pokemon(props);
        const pokemonDOM = pokemon.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(pokemonDOM);
    }

    renderHTML() {
        return /*html*/ `
        <section class="filter-section"></section>
        <section class="list-section">
            <ul class="poke-content"></ul>
        </section>
        <footer>
        </footer>
        `;
    }

}
export default Apps;