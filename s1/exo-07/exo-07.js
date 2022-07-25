/** 
 * Écrire un programme javascript et demandez le prénom et l’âge de l’utilisateur. 
•	Ajoutez un an à cet âge
•	Affichez dans la console du navigateur la phrase suivante « je m’appelle … et j’ai … ans l’année prochaine ». 

*/
let prenom = window.prompt('Quel est votre prénom?');
let age = prompt('Quel est votre age')
// sans le parseInt, il y a concatenation de 44 et de 1 soit 441
//age = parseInt(age) +1;
// age++ donne bien le résultat attendu: 45
// age++;
// age+=2; ne fonctionne pas convenablement ici, il y a concatenation
console.log(`je s'appelerions ${prenom} et j'aurai ${age} l'an prochain`);
