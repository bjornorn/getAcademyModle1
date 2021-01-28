function fixText2(tekst) {
let teksten = tekst.value

document.getElementById("tekstUt").innerHTML = teksten;
teksten = teksten.trim();
storForbokstav = teksten.toUpperCase()[0] + teksten.toLowerCase().slice(1);


console.log(storForbokstav);
}
