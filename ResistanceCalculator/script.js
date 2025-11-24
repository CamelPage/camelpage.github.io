document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calc").addEventListener("click", function () {
        const Vin = parseFloat(document.getElementById("Vin").value);
        const Vo1 = parseFloat(document.getElementById("Vo1").value);
        const Vo2 = parseFloat(document.getElementById("Vo2").value);
        const Vf  = parseFloat(document.getElementById("Vf").value);
        if(Vo1+Vo2!=Vin) {
            console.error("Błąd [188]: Błąd Rezystancji")
            return 0;
        }
        let P_MAX, Rz, R1, R2, Rl;

        if (Vo1 >= Vo2) { P_MAX = 0.25/Vo1; } else { P_MAX = 0.25/Vo2; }

        Rz = Vin/P_MAX;
        R1 = (Vo1*Rz)/Vin;
        R2 = (Vo2*Rz)/Vin;

        Rl = (Vo1-Vf)/0.020
        
        if(Rl < 0){
            console.error(177);
            return 1;
        }
        
        console.log(Vin, Vo1, Vo2, Vf, Rz, R1, R2, Rl);

        document.getElementById("R1").value = `${R1.toFixed(2)}Ω / ${(P_MAX*Vo1).toFixed(2)}W`;
        document.getElementById("R2").value = `${R2.toFixed(2)}Ω / ${(P_MAX*Vo2).toFixed(2)}W`;
        document.getElementById("RL").value = `${Rl.toFixed(2)}Ω`;
        document.getElementById("PM").value = `${P_MAX.toFixed(5)}A`;
    });
    document.getElementById("api").addEventListener("click", function () {

        const Vin = parseFloat(document.getElementById("Vin").value);
        const Vo1 = parseFloat(document.getElementById("Vo1").value);
        const Vo2 = parseFloat(document.getElementById("Vo2").value);
        const Vf  = parseFloat(document.getElementById("Vf").value);

        window.location.href = `https://camelpage.github.io/ResistanceCalculator/api.htm?Ref=OS&Vin=${Vin}&Vo1=${Vo1}&Vo2=${Vo2}&Vf=${Vf}`;

    })
});
