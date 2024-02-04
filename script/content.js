const template = document.createElement("template");
    template.innerHTML = `
        <div class="content">
            <h2>????</h2>
        </div>
    `;

// content class
class Content extends HTMLElement {
    constructor(){
        super();
        this._name = "Default Name";
        this._url = "No URL found";

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["data-name", "data-url"];
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log(attributeName, oldValue, newValue);
        if(oldValue === newValue) return;
        if(attributeName == "data-name"){
          this._name = newValue;
        }
        if(attributeName == "data-url"){
            this._url = newValue;
        }
        this.render();
      }
  
      // helper method
      render(){
        this.innerHTML = `<div class="content">
            <h1><a href="${this.url}>${this._name}</a></h1>
        </div>`;
  
        // Is the template loaded?
        let a = this.shadowRoot.querySelector("a");
        // If so, update the shadow DOM
        if(a){
          a.href = this._url;
          a.textContent = this.name;
        }
    }
}

customElements.define('my-content', Content);

export {Content};