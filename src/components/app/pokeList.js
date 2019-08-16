import Component from '../Component.js';

onRender(dom){
    const poke = this.props.images;

    poke.forEach(images => {
        const props = { images: images };
    })
}
