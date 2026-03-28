const opcje = [
    "1569",
    "1578",
    "1584",
];

const odp="1578";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {
    o[0] = document.getElementById("1");
    o[1] = document.getElementById("2");
    o[2] = document.getElementById("3");
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
                odp_e.value="Kod tej zagadki to suma pierwszej i ostatniej cyfry z poprawnej odpowiedzi"+"\n\n"+"Wpiszcie go w pole numer 2 na karcie do zbierania cyfr do kodu końcowego i sprawdźcie poprawność kodu.";
                o.forEach(e=>{

                    e.disabled=true;

                });
            } else {
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

