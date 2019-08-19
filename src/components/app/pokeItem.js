import Component from '../Component.js';

class PokeItem extends Component{
    renderHTML(){
        const items = this.props.images;

        return /*html*/`
        <li class="poke-container">
            <div class="title">
                <p>${items.pokemon}</p>
            </div>
            <div class="pic-container">
                <img id="poke-image" src="${items.url_image}"
                    alt="${items.pokemon}">
            </div>
            <div class="type-1">
                <p>${items.type_1}</p>
            </div>
            <div class="type-2">
                <p>${items.type_2}</p>
            </div>
            <div class="poke-attack">
                <p>Attack: ${items.attack}</p>
            </div>
        </li>
        `;
    }
}

export default PokeItem;