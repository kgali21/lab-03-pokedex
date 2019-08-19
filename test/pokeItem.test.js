import PokeItem from '../src/components/app/pokeItem.js';
const test = QUnit.test;

QUnit.module('pokemonItem');

test('Rendering Pokemon', assert => {
    //arrange
    const images = {

        pokemon: 'charmander',
        id: 5,
        species_id: 4,
        height: 6,
        weight: 85,
        base_experience: 62,
        type_1: 'fire',
        type_2: 'NA',
        attack: 52,
        defense: 43,
        hp: 39,
        special_attack: 60,
        special_defense: 50,
        speed: 65,
        ability_1: 'blaze',
        ability_2: 'NA',
        ability_hidden: 'solar-power',
        color_1: '#F08030',
        color_2: 'NA',
        color_f: 'NA',
        egg_group_1: 'monster',
        egg_group_2: 'dragon',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        generation_id: 1,
        evolves_from_species_id: 'NA',
        evolution_chain_id: 2,
        shape_id: 6,
        shape: 'upright',
        pokebase: 'charmander',
        pokedex: 'http://www.pokemon.com/us/pokedex/charmander'
    };

    const expected = /*html*/`
<li class="poke-container">
            <div class="title">
                <p>charmander</p>
            </div>
            <div class="pic-container">
                <img id="poke-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
                    alt="charmander">
            </div>
            <div class="type-1">
                <p>fire</p>
            </div>
            <div class="type-2">
                <p>NA</p>
            </div>
            <div class="poke-attack">
                <p>Attack: 52</p>
            </div>
        </li>
`;
    //act
    const props = { images: images };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();
    //assert

    assert.htmlEqual(html, expected);

});