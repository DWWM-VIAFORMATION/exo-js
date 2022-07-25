/**
 * Créez une page index.html et un fichier script contenant le code permettant de :
•	Faire saisir deux nombres (x et y) à l’utilisateur
•	Afficher dans le paragraphe avec l’identifiant p1 le message suivant :
o	si x > y alors afficher “x est plus grand que y”
o	si x <= y alors afficher “x est plus petit que y”

 */

let x = parseInt(prompt('x=?'));
let y = parseInt(prompt('y=?'));
let paragraphe = document.getElementById('p1');
if ((isNaN(x))||(isNaN(y)))
    {
        paragraphe.innerHTML = `x:${x} y:${y} ne sont pas comparables!`;
    }
    else
if (x>y)
{
    paragraphe.innerHTML = "x est plus grand que y";
}
else
{
    paragraphe.innerHTML = `x:${x} est plus petit ou egal à y:${y} `;
}