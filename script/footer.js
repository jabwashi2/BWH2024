const template = document.createElement("template");
    template.innerHTML = `
    <style>
        #footer{
            background-color: #033d4c;
            color: white;
            padding: 2.5em;
            position: absolute; 
            bottom: 0; 
            left: 0; 
            z-index: 10;
            width: 95.81vw;
        }

        .footer-child{
            display: inline-block;
        }

        #creator-info{
        }

        #links{
            float: right;
        }
    </style>

    <div id="footer">
        <div id="creator-info" class="footer-child">
            Jabrecia Washington | Black Wings Hacks 2024
        </div>
        <div id="links" class="footer-child">
            <a>LinkedIn | </a>
            <a> GitHub | </a>
            <a> Email</a>
        </div>
    </div>
    `;

// footer class
class Footer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-footer', Footer);

export {Footer};