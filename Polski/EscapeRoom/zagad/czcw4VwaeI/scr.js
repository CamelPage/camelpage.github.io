const opcje = [
    "zdrowie",
    "dowie",
    "smakujesz",
    "się",
    "nikt",
    "szlachetne",
    "jako",
    "nie"
];

const odp = "szlachetne zdrowie nikt się nie dowie jako smakujesz";

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
    o[6] = document.getElementById("7");
    o[7] = document.getElementById("8");

    presub = document.getElementById("st");
    presub.value = "";

    rst = document.getElementById("RST");
    sub = document.getElementById("SUB");

    rst.innerHTML = "Reset";
    sub.innerHTML = "Wyślij";

    odp_e = document.getElementById("odp");

    i = 0;
    o.forEach(element => {
        element.innerHTML = opcje[i];
        element.addEventListener("click", function () {
            out += element.innerHTML + " ";
            presub.value = out;
            element.disabled = true;
        });
        i++;
    });

    rst.addEventListener("click", function () {

        out = "";
        presub.value = "";

        o.forEach(element => {

            element.disabled = false;

        });

    });

    sub.addEventListener("click", function () {

        if (out.replaceAll(" ", "").replaceAll("\n", "") === odp.replaceAll(" ", "").replaceAll("\n", "")) {
            odp_e.value = "Przejdź do zagadki nr 6.";
        } else {
            odp_e.value = "Spróbuj ponownie za 15 Sekund";
            o.forEach(e => {
                e.disabled = "true";
                setTimeout(function () {
                    e.disabled = false;
                }, 15 * 1000);
            });
            rst.disabled = "true";
            setTimeout(function () {
                rst.disabled = false;
            }, 15 * 1000)
        }

    });



});

