

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
        });
        
      } else {
        
        radios.forEach(input => {
          input.removeAttribute("required");
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
            progressBar.value = 7.7;
        } else {
            progressBar.value = 1;
        }
    });
    console.log(this);
});