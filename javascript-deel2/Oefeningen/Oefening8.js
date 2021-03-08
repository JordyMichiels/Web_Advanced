let getal1 = parseInt(prompt("Geef een eerste getal in."));
let getal2 = parseInt(prompt("Geef een tweede getal in."));
document.getElementById("vermenigvuldigen").innerHTML = "De uitkomst van de vermenigvuldiging is: " + (getal1 * getal2);
document.getElementById("optellen").innerHTML = "De uitkomst van de som is: " + (getal1 + getal2);
document.getElementById("aftrekken").innerHTML = "De uitkomst van het verschil is: " + (getal1 - getal2);
document.getElementById("delen").innerHTML = "De uitkomst van de deling is: " + (getal1 / getal2);
