/**
 * Écrire le programme pour demander à l’utilisateur de trouver le mot correspondant à la définition
 *  donnée dans le message.
•	Stocker la réponse de l’utilisateur dans une variable
•	Mettre cette réponse tout en minuscule
•	Tester si la réponse est bonne.
 */
let reponse = prompt('Quel est le nom de famille de la favorite de Charles VII?');
reponse = reponse.toUpperCase();
console.log(reponse);
let paragraphe = document.getElementById('p1');

if (reponse=="SOREL")
{
    paragraphe.innerHTML = " Bravo, c'est bien AGNES SOREL";
}
else
{
    paragraphe.innerHTML = " ET NON! C'est AGNES SOREL, l'influenceuse!";
}
