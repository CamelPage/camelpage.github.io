const navbar = [
    [
        ["meta", "Elektronika"],
        ["a", "Kalkulator Rezystancji", "/ResistanceCalculator/"],
        ["a", "Zaokrąglacz Typoszeregów", "/ResistorRounder/"],
    ],
    [
        ["meta", "Szkoła Pods."],
        ["a", "Wielbłady", "/SzkolaPods/"],
    ]

];

document.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementsByTagName('meta').title.content;


    document.head.innerHTML += `
    <link rel="stylesheet" href="/global/css/navbar.css"></style>
    `
    document.body.innerHTML = `
    <div class="navigation">
    <header><h1>${e}</h1></header>
    <nav id="navbar"><div class=subtitle></div></nav>
    </div>
    ` + document.body.innerHTML;

    navbar.forEach(drop => {
        document.getElementById("navbar").innerHTML += `
        <div class="navbar">
        <button class="navbar_button">${drop[0][1]}</button>
        <div class="navbar_option" id="${drop[0][1]}"></div>
        </div>`
        drop.forEach(element => {
            switch (element[0]) {
                case "a":
                    document.getElementById(drop[0][1]).innerHTML += `
                <a class="noclass" href=${element[2]}>${element[1]}</a>`
                    break;
                case "button.ID":
                    document.getElementById(drop[0][1]).innerHTML += `
                <button ID="${element[2]}>${element[1]}</button>`
                    break;
                case "button":
                    document.getElementById(drop[0][1]).innerHTML += `
                <button onclick="${element[2]}">${element[1]}</button>`
                    break;
                default:
                    break;
            }
        })
    });

});