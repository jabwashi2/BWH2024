const template = document.createElement("template");
    template.innerHTML = `
    <style>
        #footer{
            background-color: #033d4c;
            color: white;
            padding-top: 2.5em;
            padding-bottom: 2.5em;
            width: 100%;
            bottom: 0; 
            left: 0; 
            z-index: 10;
        }

        .footer-child{
            display: inline-block;
        }

        #creator-info{
            padding-left: 2.5em;
        }

        #links{
            float: right;
            padding-right: 2.5em;
        }

        a{
            color: white;
            text-decoration: none;
        }
    </style>

    <div id="footer">
        <div id="creator-info" class="footer-child">
            Jabrecia Washington | Black Wings Hacks 2024
        </div>
        <div id="links" class="footer-child">
            <a href="https://www.linkedin.com/in/jabrecia-washington/">LinkedIn | </a>
            <a href="https://github.com/jabwashi2"> GitHub | </a>
            <a href="mailto:jabwashi2@gmail.com"> Email</a>
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