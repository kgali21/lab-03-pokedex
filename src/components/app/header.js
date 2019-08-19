import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <div>
        <header class="poke-title">
            <h1>PokeDex</h1>
        </header>
        </div>
        `;
    }
}

export default Header;