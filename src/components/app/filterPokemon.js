import Component from '../Component.js';

class FilterPokemon extends Component {
    onRender(select){
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML(){
        const pokemon = this.props.pokemon;
        const types = getUniqueTypes(pokemon);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/ `
        <select class="poke-filter">
            <option value="All Pokemon">All Pokemon</option>
            ${optionsHTML}
        </select>
        `;
    }
}

function getUniqueTypes(pokemon){
    const types = [];
    pokemon.forEach(pokemon => {
        if(!types.includes(pokemon.type_1)) {
            types.push(pokemon.type_1);
        }
    });
    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type_1 => {
        return /*html*/ `
        <option value="${type_1}">${type_1}</option>
        `;
    });
    return optionsArray.join('');
}

export default FilterPokemon;