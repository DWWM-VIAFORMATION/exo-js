/**
 * Créez une page HTML et un fichier script contenant le code permettant de :
•	Afficher tous les nombres de 1 à 10 en passant à la ligne (vous pouvez mettre <li><li> par exemple)
•	Affichez le résultat dans le code HTML dans la liste « maListe » (une balise <ul></ul> en html)
•	Utilisez document.getElementById() !

 */
let liste = document.getElementById('maListe');
for (let index = 1; index <= 10; index++) {
    liste.innerHTML+='<lI>'+index+'</Li>';
    //liste.innerHTML= liste.innerHTML+'<lI>'+index+'</Li>'; 
}