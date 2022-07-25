/**
 * Écrire un programme javascript et demandez une longueur et une largeur à l’utilisateur
•	Créez la variable surface et affectez-lui la valeur de la surface (longueur*largeur)
•	Affichez dans la console du navigateur la phrase suivante : « le rectangle de longueur … cm et de largeur … cm a pour surface … cm2 »
*/
let longueur = parseInt(prompt('Quelle est la longueur?'));
let largeur = parseInt(prompt('Quelle est la largeur?'));
let surface = longueur*largeur;
console.log(`le rectangle de longueur ${longueur}cm et de 
largeur ${largeur}cm a pour surface ${surface}cm2 `);