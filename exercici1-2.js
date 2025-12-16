/*
Exercici 1: Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a
 paràmetre i utilitzi l'operador ternari per determinar si l'usuari pot conduir.
  Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 
  'No pots conduir'.
*/

const potConduir = (edat) => {
  if (typeof edat !== "number") {
    throw new Error("El paràmetre de la funció no es número");
  }
  return edat >= 18 ? "Pots conduir" : "No pots conduir";
};

try {
  console.log("Resultat de l'exercici1: ", potConduir(18));
} catch (error) {
  console.error(error.message);
}

/*
Exercici 2: Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari
 per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més
  gran, retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran'.
*/

const numMesGran = num1 > num2 ? "num1 és més gran" : "num2 és més gran";

/*
Exercici 3: Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços 
d'operadors ternaris per determinar si un número és positiu, negatiu o zero.
*/

const positiuNegatiuZero =
  num > 0 ? "positiu" : num < 0 ? "negatiu" : "es zero";

/*
Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres
 (a, b, c) i utilitzi l'operador ternari per determinar el valor màxim.*/

const trobarMaxim = (a, b, c) => {
  if (![a, b, c].every((element) => typeof element === "number")) {
    throw new Error("Algún dels elements no es un número");
  }
  return a >= b && a >= c
    ? `${a} es el valor màxim`
    : b >= a && b >= c
    ? `${b} es el valor màxim`
    : `${c} es el valor màxim`;
};

try {
  console.log(
    "Resultat de la segona part de l'exercici 3: ",
    trobarMaxim(-10, -11, 5)
  );
} catch (error) {
  console.error(error.message);
}

/*
Exercici 4: Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números
 i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador ternari per a
  determinar si cada número és parell o imparell.
*/

const parOImpar = (numeros) => {
  if (!Array.isArray(numeros)) {
    throw new Error("No es un array");
  }
  if (!numeros.every((element) => typeof element === "number")) {
    throw new Error("Algún del elements de l'array no es un número");
  }
  numeros.forEach((n) => {
    console.log(n % 2 === 0 ? "par" : "impar");
  });
};

try {
  parOImpar([3, 6, 0, 7, -6, 8, 1, 7, 5, 3]);
} catch (error) {
  console.error(error.message);
}
