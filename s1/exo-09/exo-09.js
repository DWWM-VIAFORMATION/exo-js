
/**
 * Écrire un programme javascript et demandez une température en celsius
 *  à l’utilisateur.
•	Créez la variable temperatureKelvin 
et affectez la valeur de la température en kelvin.
•	Affichez dans la console du navigateur la phrase suivante : « la temperature de … °Celsius vaut … en Kelvin»
 */
let temperatureCelsius = parseInt(prompt('Temperature en celsius?'));
let temperatureKelvin = temperatureCelsius+273.15;
console.log(`la temperature de  ${temperatureCelsius}°Celsius vaut ${temperatureKelvin} en Kelvin`);