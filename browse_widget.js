const browse_template = document.createElement('template');
browse_template.innerHTML = ``;

class Browse_widget extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.append(browse_template.content.cloneNode(true));
    }
}

customElements.define('browse-widget', Browse_widget);