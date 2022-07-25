/**
 * Créez une page HTML et un fichier script contenant le code permettant de :
•	Afficher les puissances de 2
•	Aller de 2^0 à 2^16
•	Mettez en forme le texte
Faites l’exercice avec une boucle for. Utilisez Math.pow(base,exposant)
*/
function entreUnEtCent(valeur)
{
    return (valeur>=1)&&(valeur<=100);
}
function pasEntreUnEtCent(valeur)
{
    return !entreUnEtCent(valeur);
}
let exposantSaisi;
do
{
     exposantSaisi = parseInt(prompt('Quelle puissance?'));
     console.log(exposantSaisi);
}
/*while(
    (exposantSaisi<1)||
    (exposantSaisi>100)||
    (isNaN(exposantSaisi)))*/

while 
(
    pasEntreUnEtCent(exposantSaisi)||
    isNaN(exposantSaisi))

let liste = document.getElementById('maListe');
for (let exposant = 0; exposant < exposantSaisi; exposant++) 
{
    liste.innerHTML+=`<li>${2}^${exposant}= ${Math.pow(2,exposant)}</li>`;
    console.log(exposant);
}
console.log(exposant);// ceci provoque une erreur dans la console: la variable n'existe pas à cet endroit