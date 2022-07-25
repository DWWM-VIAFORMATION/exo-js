/**
 * Écrire un programme javascript et déclarez une variable « rayon »
•	Initialisez la variable rayon à 10
•	Créez la variable surface et affectez-lui la valeur de la surface du cercle de rayon « rayon »
•	Affichez dans la console: « le cercle de rayon … cm pour surface … cm2 »
 */
let rayon = 10;
let surface = Math.PI * Math.pow(rayon,2);
console.log(`le cercle de rayon ${rayon} cm pour surface ${surface.toFixed(2)} cm2`);
