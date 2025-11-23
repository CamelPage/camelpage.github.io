
document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);

const Vin = Number(params.get("Vin"));
const Vo1 = Number(params.get("Vo1"));
const Vo2 = Number(params.get("Vo2"));
const Vf = Number(params.get("Vf"));


let P_MAX, Rz, R1, R2, Rl, OUT;

if (Vo1 >= Vo2) { P_MAX = 0.25 / Vo1; } else { P_MAX = 0.25 / Vo2; }

Rz = Vin / P_MAX;
R1 = (Vo1 * Rz) / Vin;
R2 = (Vo2 * Rz) / Vin;

Rl = (Vo1 - Vf) / 0.020

document.body.innerHTML += `"R1":${R1},`;
document.body.innerHTML += `"R2":${R2},`;
document.body.innerHTML += `"Rl":${Rl},`;
document.body.innerHTML += `"I":${P_MAX.toFixed(5)}`;

document.body.innerHTML += "}"

console.log(document.body.innerHTML)

if (Vo1 + Vo2 != Vin) {
    console.error("188")
    document.body.innerHTML = `{"err":"Błąd [188]: Błąd Rezystancji"}`;
}

});