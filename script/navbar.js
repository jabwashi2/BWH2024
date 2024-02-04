const template = document.createElement("template");
    template.innerHTML = `
    <style>
        #navbar{
            font-size: 1.2em;
            border-bottom: #033d4c solid;
        }
        .logo{
            float: left;
            padding-top: 0;
        }
        a{
            display: block;
            padding: 8px;
            color: #033d4c;
            text-decoration: none;
        }
        a:hover{
            color: #ffb300;
        }
        a:active{
            color: #e73a3a;
        }
        ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        li{
            display: inline;
            float: right;
            padding-top: 1.2em;
            padding-right: 1.3em;
        }
        img{
            width: 200px;
        }
    </style>
    <div id="navbar">
        <ul class="nav-links">
            <li class="logo">
                <a id="home-btn" href="index.html">
                    <img id="logo" src ="./files/BGDH-logo.png"></img>
                </a>
            </li>
            <li>
                <a id="about" href="about.html">About</a>
            </li>
            <li>
                <a id="resources" href="resources.html">Resources</a>
            </li>
            <li>
                <a id="job-boards" href="job-boards.html">Job Boards</a>
            </li>
            <li>
                <a id="companies" href="companies.html">Companies</a>
            </li>
            <li>
                <a id="people" href="people.html">People</a>
            </li>
            <li>
                <a id="opportunities" href="opportunities.html">Opportunities</a>
            </li>
           
            
        </ul>
    </div>
    `;

//navbar class
class Navbar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-navbar', Navbar);

export {Navbar};