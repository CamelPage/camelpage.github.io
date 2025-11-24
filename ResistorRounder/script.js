let selected = 3;
counts = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calc").addEventListener("click", function () {
        const goal = parseFloat(document.getElementById("R").value);

        switch (selected) {
            case 3:
                counts = E3;
                break;
            case 6:
                 counts = E6;
                break;
            case 12:
                counts = E12;
                break;
            case 24:
                counts = E24;
                break;
            case 48:
                counts = E48;
                break;
            case 96:
                counts = E96;
                break;
            case 192:
                counts = E192;
                break;

            default:
                document.getElementById("Ro").value = `ERR[404]: File Not Found`;
                return;
        }

        var closest = counts.reduce(function(prev, curr) {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

        document.getElementById("Ro").value = `${closest}`;
    });

    document.getElementById("E3").addEventListener("click", function () {
        document.getElementById("E3").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 3;
    })
    document.getElementById("E6").addEventListener("click", function () {
        document.getElementById("E6").disabled = true;
        document.getElementById("E3").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 6;
    })
    document.getElementById("E12").addEventListener("click", function () {
        document.getElementById("E12").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E3").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 12;
    })
    document.getElementById("E24").addEventListener("click", function () {
        document.getElementById("E24").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E3").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 24;
    })
    document.getElementById("E48").addEventListener("click", function () {
        document.getElementById("E48").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E3").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 48;
    })
    document.getElementById("E96").addEventListener("click", function () {
        document.getElementById("E96").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E3").disabled = false;
        document.getElementById("E192").disabled = false;
        selected = 96;
    })
    document.getElementById("E192").addEventListener("click", function () {
        document.getElementById("E192").disabled = true;
        document.getElementById("E6").disabled = false;
        document.getElementById("E12").disabled = false;
        document.getElementById("E24").disabled = false;
        document.getElementById("E48").disabled = false;
        document.getElementById("E96").disabled = false;
        document.getElementById("E3").disabled = false;
        selected = 192;
    })
    document.getElementById("api").addEventListener("click", function () {
        const goal = parseFloat(document.getElementById("R").value);
        window.location.href = `https://camelpage.github.io/ResistorRounder/api.html?R=${goal}&E=${selected}`;
    })
});
