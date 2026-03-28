const opcje = [
    "Rosja",
    "Włochy",
    "Ukraina",
    "Turcja",
    "Norwegia",
    "Francja"
];

const odp="FrancjaWłochy";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {

    // opcje.sort(()=>Math.random()-0.5)

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
            out+=element.innerHTML+" \n";
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
        if(out.replaceAll(" ","").replaceAll("\n","")===odp.replaceAll(" ","").replaceAll("\n","") || out.replaceAll(" ","").replaceAll("\n","")=== "WłochyFrancja") {
            odp_e.value="Kod tej zagadki to liczba krajów jaką odwiedził w młodości Jan Kochanowski"+"\n\n"+"Wpiszcie go w pole numer 5 na karcie do zbierania cyfr do kodu końcowego i następnie przejdź do zagadki nr 2.";
        } else  {
    odp_e.value = "Spróbuj ponownie za 15 Sekund";
    o.forEach(e => {
        e.disabled = "true";
        setTimeout(function () {
            e.disabled = false;
        }, 15 * 1000);
    });
    rst.disabled="true";
    setTimeout(function(){
        rst.disabled=false;
    },15*1000)
            }

    });



});

