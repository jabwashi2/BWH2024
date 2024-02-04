import * as arrays from "./arrays.js";
import {Content} from "./content.js";

// each page gets its own function
function orgs() {
    for (let o of arrays.organizationsArray){
        const content = document.createElement("my-content");

        content.dataset.name = o.name;
        content.dataset.url = o.url;

        const newLI = document.createElement("li");
        newLI.appendChild(content);
        document.querySelector("#orgs").appendChild(newLI);
    }
}

function people() {
    for (let p of arrays.peopleArray){
        const content = document.createElement("my-content");

        content.dataset.name = p.name;
        content.dataset.url = p.url;

        const newLI = document.createElement("li");
        newLI.appendChild(content);
        document.querySelector("#people").appendChild(newLI);
    }
}

function companies() {
    for (let c of arrays.companiesArray){
        const content = document.createElement("my-content");

        content.dataset.name = c.name;
        content.dataset.url = c.url;

        const newLI = document.createElement("li");
        newLI.appendChild(content);
        document.querySelector("#comps").appendChild(newLI);
    }
}

function jobs() {
    for (let j of arrays.jobsArray){
        const content = document.createElement("my-content");

        content.dataset.name = j.name;
        content.dataset.url = j.url;

        const newLI = document.createElement("li");
        newLI.appendChild(content);
        document.querySelector("#jobs").appendChild(newLI);
    }
}

function resources() {
    for (let r of arrays.resourcesArray){
        const content = document.createElement("my-content");

        content.dataset.name = r.name;
        content.dataset.url = r.url;

        const newLI = document.createElement("li");
        newLI.appendChild(content);
        document.querySelector("#resources").appendChild(newLI);
    }
}

// this is where we'll call each page's function that populates it's content
window.onload = () => { 
    // calling all of them for now,,,

    if (document.querySelector('h1').innerHTML == "Organizations"){
        orgs();
    }
    if (document.querySelector('h1').innerHTML == "People"){
        people();
    }
    if (document.querySelector('h1').innerHTML == "Companies"){
        companies();
    }
    if (document.querySelector('h1').innerHTML == "Job Boards"){
        jobs();
    }
    if (document.querySelector('h1').innerHTML == "Resources"){
        resources();
    }
}