const odp = "treny";

var o = [];

var out = "";

document.addEventListener("DOMContentLoaded", () => {


    presub = document.getElementById("st");
    presub.value = "";

    rst = document.getElementById("RST");
    sub = document.getElementById("SUB");

    rst.innerHTML = "Reset";
    sub.innerHTML = "Wyślij";

    odp_e = document.getElementById("odp");
    rst.addEventListener("click", function () {

        out = "";
        presub.value = "";

        o.forEach(element => {

            element.disabled = false;

        });

    });

    sub.addEventListener("click", function () {
        out = presub.value;

        if (out.replaceAll(" ", "").replaceAll("\n", "").toLocaleLowerCase() === odp.replaceAll(" ", "").replaceAll("\n", "")) {
            odp_e.value = "Kod tej zagadki to liczba sylab w słowie „KOCHANOWSKI”" + "\n\n" + "Cyfrę tę wpisz w polu numer 1 na karcie do zbierania cyfr do kodu końcowego i następnie przejdź do zagadki nr 3.";
        } else {
            odp_e.value = "Spróbuj ponownie za 15 Sekund";
            o.forEach(e => {
                e.disabled = "true";
                setTimeout(function () {
                    e.disabled = false;
                }, 15 * 1000);
            });
            presub.disabled=true;
            rst.disabled = "true";
            setTimeout(function () {
                rst.disabled = false;
                presub.disabled=false;
            }, 15 * 1000)
        }

    });



});

