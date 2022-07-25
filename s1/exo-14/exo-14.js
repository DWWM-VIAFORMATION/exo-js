/**
 * Créez une page HTML et un fichier script contenant le code permettant de :
•	Afficher les puissances de 2
•	Aller de 2^0 à 2^16
•	Mettez en forme le texte
Faites l’exercice avec une boucle for. Utilisez Math.pow(base,exposant)
 */
let liste = document.getElementById('maListe');
for (let exposant = 0; exposant < 17; exposant++) 
{
    liste.innerHTML+=`<li>${2}^${exposant}= ${Math.pow(2,exposant)}</li>`;
    console.log(exposant);
}
console.log(exposant);// ceci provoque une erreur dans la console: la variable n'existe pas à cet endroit