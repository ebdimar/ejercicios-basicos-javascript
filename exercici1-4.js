/*
Exercici 1: Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per
 a crear una tercera array que contingui tots els elements de array1 i array2.
*/

const array1 = [1, 2, 3, 4];

const array2 = [5, 6, 7, 8];

const array3 = [...array1, ...array2];

//console.log(array3);

/*
Exercici 2: Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar
 un nombre indeterminat d'arguments i retornar la seva suma.
*/

const suma = (...numeros) => {
  if (!numeros.every((element) => typeof element === "number")) {
    throw new Error("Algún dels paràmetres no es un número");
  }
  const resultado = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
  }, 0);
  console.log(`la suma de todo es: ${resultado}`);
};

try {
  suma(1, 7, 3, 4, 5);
} catch (error) {
  console.error(error.message);
}

/*
Exercici 3: Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2',
 que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2'
  i comprova que 'objecte1' no ha canviat.
*/

const objecte1 = {
  propietat1: "1",
  propietat2: "2",
};

const objecte2 = { ...objecte1 };

objecte2.propietat1 = "3";

console.log(objecte1);
console.log(objecte2);

/*
Exercici 4: Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador
rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements
a una tercera variable.
*/

const arrayElements = ["cosa1", "cosa2", "cosa3", "cosa4"];

[element1, element2, ...element3] = arrayElements;

console.log(element3);

/*
Exercici 5: Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements
 i crida la funció utilitzant l'operador spread amb aquesta array.
*/

const exempleFuncio = (a, b, c) => {
  return a && b && c
    ? "El ejercicio es correcto"
    : "El ejercicio no es correcto";
};
const tresElementsArray = ["a", "b", "c"];
console.log(exempleFuncio(...tresElementsArray));

/*
Exercici 6: Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per
 a fusionar aquests dos objectes en un de nou.
 */

const objectePrimer = {
  propietat1: "1",
  propietat2: "2",
};

const objecteSegon = {
  propietat3: 3,
  propietat4: 4,
};

const objecteTercer = {
  ...objectePrimer,
  ...objecteSegon,
};

console.log(objecteTercer);
