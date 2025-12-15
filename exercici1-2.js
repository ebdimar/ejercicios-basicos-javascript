/*
Exercici 1: Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a
 paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
  Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 
  'No pots conduir'.
*/

const potConduir = (edat) => {
  if (typeof edat !== "number") {
    return "El paràmetre de la funció no es número";
  } else {
    return edat >= 18 ? "Pots conduir" : "No pots conduir";
  }
};

console.log(potConduir(5));

/*
Exercici 2: Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari
 per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més
  gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
*/

const compararNumeros = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 === num2) {
      return "num1 i num2 son iguals";
    }
    return num1 > num2 ? "num1 és més gran" : "num2 és més gran";
  }
  return "un o ambdós paràmetres no són números";
};

/*
Exercici 3: Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços 
d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
*/
const positiuNegatiu = (num) => {
  if (typeof num == "number") {
    return num > 0 ? "positiu" : num < 0 ? "negatiu" : "es zero";
  } else {
    return "El paràmetre de la funció no es un número";
  }
};

console.log(
  "El resultat de la primera part de l'exercici 3 es: ",
  positiuNegatiu(0)
);
/*
Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres
 (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/

const trobarMaxim = (a, b, c) => {
  return a >= b && a >= c
    ? `${a} es el valor màxim`
    : b >= a && b >= c
    ? `${b} es el valor màxim`
    : `${c} es el valor màxim`;
};

console.log(trobarMaxim(-10, -11, -9));

/*
Exercici 4: Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números
 i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a
  determinar si cada número és parell o imparell.
*/

const parOImpar = (numeros) => {
  if (Array.isArray(numeros) === true) {
    numeros.forEach((n) => {
      if (typeof n === "number") {
        return console.log(n % 2 === 0 ? "par" : "impar");
      } else {
        return console.log("el paràmetre no es un número");
      }
    });
  } else {
    return console.log("no es un array");
  }
};

parOImpar([3, 6, 0, 7, -6, null, 1, 5, 3]);
