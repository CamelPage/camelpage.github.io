const opcje = [
    "a",
    "b",
    "c",
    "d",
    "e"
];

const odp="edbac"

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {

    o[0] = document.getElementById("1");
    o[1] = document.getElementById("2");
    o[2] = document.getElementById("3");
    o[3] = document.getElementById("4");
    o[4] = document.getElementById("5");

    presub = document.getElementById("st");
    presub.innerHTML="";

    rst=document.getElementById("RST");
    sub=document.getElementById("SUB");

    rst.innerHTML = "Reset";
    sub.innerHTML = "Wyślij";

    odp_e=document.getElementById("odp");

    i=0;
    o.forEach(element => {
        element.innerHTML = opcje[i];
        element.addEventListener("click", function() {
            out+=element.innerHTML;
            presub.innerHTML=out;
            element.disabled=true;
        });
        i++;
    });

    rst.addEventListener("click", function() {

        out="";
        presub.innerHTML="";

        o.forEach(element => {

            element.disabled=false;

        });

    });

    sub.addEventListener("click", function() {

        if(out===odp) {
            odp_e.innerHTML="Kod To ##9###";
        } else {
            odp_e.innerHTML="Spróbuj Ponownie";
        }

    });



});

