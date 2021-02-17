/*
 CSS Dependencies: minus-btn 
*/

export default class BrowseInput extends HTMLElement {
    static count = 0;

    attributeChangedCallback(name, oldValue, newValue) {
        if ('showminus' === name) {
            if (newValue === 'true') {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
                minusBtn.addEventListener('click', () => {
                    this.remove();
                })
            } else if (newValue === 'false') {
                this.querySelector('.minus-btn').remove();
            }
        }
    }
    connectedCallback() {
        BrowseInput.count++;
        this.innerHTML = `
            <style>
                browse-input {
                    align-self: flex-start;
                    margin: 0.2rem;
                    margin-left: 0;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                }
            </style> 
            <input type="file">
        `
        this.classList.add('browse');

        if (this.hasAttribute('showminus')) {
            const showMinus = this.getAttribute('showminus');
            if (showMinus === "true") {
                let minusBtn = document.createElement('div');
                minusBtn.classList.add('minus-btn');
                this.append(minusBtn);
                minusBtn.addEventListener('click', () => {
                    this.remove();
                })
            }
        }
    }

    disconnectedCallback() {
        BrowseInput.count--;
    }
}

customElements.define('browse-input', BrowseInput);