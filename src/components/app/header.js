import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header class="poke-title">
            <h1>PokeDex</h1>
        </header>
        `;
    }
}

export default Header;