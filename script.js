
const eenB = document.querySelector("#ja");

let dag = document.querySelector("#overlijdingsDag");
let maand = document.querySelector("#overlijdingsMaand");
let jaar = document.querySelector("#overlijdingsJaar");



let first = document.querySelector('#BurgerSer');
let second = document.querySelector('#beconnummer');
let third = document.querySelector('#Protocolnummer');

function toggleDisabled(input) {
    let inputs = [first, second, third];

    if (input.value.trim() !== "") {
        inputs.forEach(field => {
            if (field !== input) {
                field.setAttribute("disabled", "true");
                field.style.backgroundColor = "#d0d0d0";
                field.style.border= ".1em solid #a9a9a9"; 
                field.style.pla
            }
        });
    } else {
        inputs.forEach(field => {
            field.removeAttribute("disabled");
            field.style.backgroundColor = "";  
        });
    }
}

// Voeg event listeners toe aan elk inputveld
[first, second, third].forEach(input => {
    input.addEventListener("input", () => toggleDisabled(input));
});
