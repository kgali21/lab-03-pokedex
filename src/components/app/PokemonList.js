import Component from '../Component.js';
import PokeItem from './pokeItem.js';

class Pokemon extends Component {

    onRender(dom) {
        const pokemon = this.props.images;

        pokemon.forEach(images => {
            const props = { images: images };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }

    renderHTML(){
        return /*html*/ `
        <ul class="poke-content"></ul>
        
        `;
    }
}

export default Pokemon;