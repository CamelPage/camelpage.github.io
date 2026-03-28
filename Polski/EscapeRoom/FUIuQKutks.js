const opcje = [
    "Lorem",
    "adipiscing",
    "ipsum dolor",
    "consectetur",
    "sit amet",
    "elit"
];

const odp="Lorem ipsum dolor sit amet consectetur adipiscing elit";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {

    o[0] = document.getElementById("1");
    o[1] = document.getElementById("2");
    o[2] = document.getElementById("3");
    o[3] = document.getElementById("4");
    o[4] = document.getElementById("5");
    o[5] = document.getElementById("6");

    presub = document.getElementById("st");
    presub.value="";

    rst=document.getElementById("RST");
    sub=document.getElementById("SUB");

    rst.innerHTML = "Reset";
    sub.innerHTML = "Wyślij";

    odp_e=document.getElementById("odp");

    i=0;
    o.forEach(element => {
        element.innerHTML = opcje[i];
        element.addEventListener("click", function() {
            out+=element.innerHTML+" ";
            presub.value=out;
            element.disabled=true;
        });
        i++;
    });

    rst.addEventListener("click", function() {

        out="";
        presub.value="";

        o.forEach(element => {

            element.disabled=false;

        });

    });

    sub.addEventListener("click", function() {

        if(out.replaceAll(" ","")===odp.replaceAll(" ","")) {
            odp_e.value="Kod To ##9###";
        } else {
            odp_e.value="Spróbuj Ponownie";
        }

    });



});

