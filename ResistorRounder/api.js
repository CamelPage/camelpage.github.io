let selected = 3;
counts = [];

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const goal = Number(params.get("R"));
    const selected = Number(params.get("E"));

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

        document.body.innerHTML = `{"R":${closest}}`;
});
