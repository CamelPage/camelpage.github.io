const opcje = [
    "Halina",
    "Barbara",
    "Urszula",
    "Zofia",
];

const odp="Urszula";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {

    // opcje.sort(()=>Math.random()-0.5)

    o[0] = document.getElementById("1");
    o[1] = document.getElementById("2");
    o[2] = document.getElementById("3");
    o[3] = document.getElementById("4");
    sub=document.getElementById("SUB");

    odp_e=document.getElementById("odp");

    i=0;
    o.forEach(element => {
        element.innerHTML = opcje[i];
        element.addEventListener("click", function() {
            out=element.innerHTML;
            element.disabled=true;
        });
        element.addEventListener("click", function() {
    
            if(out.replaceAll(" ","").replaceAll("\n","")===odp.replaceAll(" ","").replaceAll("\n","")) {
                odp_e.value="Przejdź do zagadki nr 7.";
                o.forEach(e=>{

                    e.disabled=true;

                });
            } else  {
    odp_e.value = "Spróbuj ponownie za 15 Sekund";
    o.forEach(e => {
        e.disabled = "true";
        setTimeout(function () {
            e.disabled = false;
        }, 15 * 1000);
    });
            }
    
        });
        i++;
    });




});

