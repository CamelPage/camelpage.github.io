const opcje = [
    "Średniowiecze",
    "Romantyzm",
    "Starożytność",
    "Renesans",
    "Pozytywizm",
    "Barok",
];

const odp="Romantyzm";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {
    o[0] = document.getElementById("1");
    o[1] = document.getElementById("2");
    o[2] = document.getElementById("3");
    o[3] = document.getElementById("4");
    o[4] = document.getElementById("5");
    o[5] = document.getElementById("6");
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
                odp_e.value="Przejdź do zagadki nr 5.";
                o.forEach(e=>{

                    e.disabled=true;

                });
            } else  {
                odp_e.value="Spróbuj ponownie za 15 Sekund";
                o.forEach(e=>{
                    e.disabled="true";
                    setTimeout(function() {
                        e.disabled=false;
                    }, 15*1000);
                });
            }
    
        });
        i++;
    });




});

