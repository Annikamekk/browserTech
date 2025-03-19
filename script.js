

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
                // field.style.pla
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


const form = document.querySelector("form");
const button = form.querySelector("button");

function updateButtonState() {
    if (form.checkValidity()) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "true");
    }
}

// Luisteren naar veranderingen in het formulier
form.addEventListener("input", updateButtonState);
form.addEventListener("change", updateButtonState);

// Initialiseren bij pagina-load
updateButtonState();



const form1 = document.getElementById("Form1");
const form2 = document.getElementById("Form2");

    // Verberg Form2 bij het laden van de pagina
    form2.style.display = "none";

    // Voeg een event toe aan Form1 om het te verbergen en Form2 te tonen
    form1.onsubmit = function(event) {
        event.preventDefault(); // Voorkom standaard verzenden van formulier
        form1.style.display = "none"; // Verberg Form1
        form2.style.display = "block"; // Toon Form2
    };

    document.querySelector("#Form2  button").onclick = function(event) {
        event.preventDefault(); // Voorkom standaard formuliergedrag
        form2.style.display = "none"; // Verberg Form2
        form1.style.display = "block"; // Toon Form1
    };



// als de checkboxes 1b,1c,1d open zijn dat wil ik bepaalde inputs required maken

// document.addEventListener("DOMContentLoaded", function () {
//     const fieldsetB = document.querySelector(".b"); // Selecteer alleen fieldset met class "b"
//     const checkbox = fieldsetB.querySelector("#ja"); // De checkbox binnen fieldset "b"
//     const input = fieldsetB.querySelectorAll("input:not([type='checkbox'])"); // Alle inputs behalve checkboxes binnen fieldset "b"

//     function toggleRequired() {
//         if (checkbox.checked) {
//             input.forEach(field => field.setAttribute("required", "true"));
//         } else {
//             input.forEach(field => field.removeAttribute("required"));
//         }
//     }

//     // Event listener toevoegen aan de checkbox
//     checkbox.addEventListener("change", toggleRequired);
// });


// const fieldsetB = document.querySelector(".b"); // Selecteer alleen fieldset met class "b"
// const checkbox = fieldsetB.querySelector("#ja"); // De checkbox binnen fieldset "b"

// const radios = document.querySelectorAll(".expandable input");
 
// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     // Als 'Ja' is geselecteerd, maak de inputs onder expandable verplicht
//     radios.forEach(input => {
//         input.setAttribute("required", "true");
//     });
    
//   } else {
//     // Als 'Ja' niet is geselecteerd, verwijder het required attribuut
//     radios.forEach(input => {
//       input.removeAttribute("required");
//     });
//   }
// });


///////////////    required      /////////////////

const checkbox = document.querySelectorAll("[data-requireding]");
let i = 0;
while(i < checkbox.length) {
    checkbox[i].addEventListener("change",requireDingen);
    i++;
}


function requireDingen(){
    let requirePair = this.getAttribute('data-requireding');
    const radios = document.querySelectorAll("[data-requireMe="+requirePair+"] input");
    if (this.checked) {
       
        radios.forEach(input => {
            input.setAttribute("required", "true");
            console.log('aan');
        });
        
      } else {
        
        radios.forEach(input => {
          input.removeAttribute("required");
          console.log('uit');
        });
      }
      console.log("hoi");
}



////////////////// progress ////////////////

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Form1").addEventListener("input", function () {
        const form = this;
        const progressBar = document.querySelector("progress");

        if (form.checkValidity()) {
            progressBar.value = 2;
        } else {
            progressBar.value = 1;
        }
    });
    console.log(this);
});

//////////////// 


// const inputFields = document.querySelectorAll("input");
 
// inputFields.forEach((inputField) => {
//     if (localStorage.getItem(inputField.id)) {
//         inputField.value = localStorage.getItem(inputField.id);
//     }
//     inputField.addEventListener("input", () => {
//         localStorage.setItem(inputField.id, inputField.value);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    // Selecteer alle inputvelden
    const inputFields = document.querySelectorAll("input");
 
    inputFields.forEach((inputField) => {
        // Verschillende behandeling op basis van het type inputveld
        const fieldId = inputField.id;
       
        // Eerst de waarden uit localStorage halen en toewijzen
        if (localStorage.getItem(fieldId) !== null) {
            if (inputField.type === "radio") {
                // Voor radiobuttons, controleer of de waarde overeenkomt
                inputField.checked = (localStorage.getItem(fieldId) === inputField.value);
            } else if (inputField.type === "date") {
                // Voor datumvelden gewoon de waarde toewijzen
                inputField.value = localStorage.getItem(fieldId);
            } else {
                // Voor normale tekstvelden, e-mail, enz.
                inputField.value = localStorage.getItem(fieldId);
            }
        }
       
        // Event listeners toevoegen voor het opslaan van waarden
        if (inputField.type === "radio") {
            // Voor radiobuttons luisteren naar het change event
            inputField.addEventListener("change", () => {
                if (inputField.checked) {
                    localStorage.setItem(fieldId, inputField.value);
                }
            });
        } else {
            // Voor andere velden luisteren naar het input event
            inputField.addEventListener("input", () => {
                localStorage.setItem(fieldId, inputField.value);
            });
        }
    });
});