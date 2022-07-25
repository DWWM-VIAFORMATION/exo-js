/**
 * •	Créer une variable alea contenant un nombre tiré au hasard entre 1 et 100
•	Demander à l’utilisateur un nombre
•	Verifier si ce nombre est égal au nombre cherché
•	Afficher un message de victoire quand réussi.

 */
let alea= (Math.random()*10).toFixed(0);
let nombre;
let tentatives = 0;
do
{
     nombre= parseInt(prompt('nombre?'));
     tentatives++;
     if (nombre>alea)
        alert('trop grand');
    if (nombre<alea)
        alert('trop petit');
}
while ((nombre != alea)&&(tentatives<5))// pas de ; ici sinon, la répétition ne se fait pas!
if (nombre == alea)
alert('bravo');
else
alert('BOUHOUHHOUUHH!')

