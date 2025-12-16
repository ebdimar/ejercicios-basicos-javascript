/*
Exercici 1: Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un
 nombre i una funció de callback. La funció processar ha d'invocar la funció de callback,
  passant el nombre com a paràmetre. 
*/

const mostrarNombre = (nombre) => {
  if (typeof nombre !== "number") {
    throw new Error("El parámetre no es un nombre");
  }
  console.log(nombre);
};

const processar = (nombre, functionCallback) => {
  if (typeof nombre !== "number") {
    throw new Error("El paràmetre nombre no es un nombre");
  }
  if (typeof functionCallback !== "function") {
    throw new Error("El paràmetre functionCallback no es una funció");
  }
  functionCallback(nombre);
};

try {
  processar(7, mostrarNombre);
} catch (error) {
  console.error(error.message);
}
/*
Exercici 2: Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres 
paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la
 funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb
  una funció que faci la suma dels dos nombres.
*/

const suma = (a, b) => {
  if (![a, b].every((element) => typeof element === "number")) {
    throw new Error(
      "Un o ambdós paràmetres que haurien de ser números no ho son"
    );
  }
  return a + b;
};

const calculadora = (numero1, numero2, functionCallback) => {
  if (![numero1, numero2].every((element) => typeof element === "number")) {
    throw new Error(
      "Un o ambdós paràmetres que haurien de ser números no ho son"
    );
  }
  if (typeof functionCallback !== "function") {
    throw new Error("La funció callback no es una funció");
  }
  return functionCallback(numero1, numero2);
};

try {
  console.log(calculadora(6, 8, suma));
} catch (error) {
  console.error(error.message);
}

/*
Exercici 3: Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos
 paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors 
 invocar la funció de callback, passant el nom com a paràmetre.
*/

const saludar = (nom) => {
  if (typeof nom !== "string") {
    throw new Error("El paràmetre no es un string");
  }
  console.log(`Hola, ${nom}`);
};

const esperarISaludar = (nom, functionCallback) => {
  if (typeof nom !== "string") {
    throw new Error("Nom no es un string");
  }
  if (typeof functionCallback !== "function") {
    throw new Error("La funció callback no es una funció");
  }
  setTimeout(() => {
    functionCallback(nom);
  }, "3000");
};

try {
  esperarISaludar("Guillermo", saludar);
} catch (error) {
  console.error(console.error);
}

/*
Exercici 4: Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array
 i una funció de callback. La funció processarElements ha d'invocar la funció de callback per
  cada element de l'array.
*/

const processarElements = (arrayDeCoses, functionCallback) => {
  if (!Array.isArray(arrayDeCoses)) {
    throw new Error("El paràmetre no es un array");
  }
  if (typeof functionCallback !== "function") {
    throw new Error("La funció callback no es una funció");
  }
  arrayDeCoses.forEach((element) => {
    functionCallback(element);
  });
};

try {
  processarElements(["Jose", "María", "Alberto", "Ricardo"], saludar);
} catch (error) {
  console.error(error.message);
}

/*
Exercici 5: Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció
 de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la
  funció de callback amb la cadena transformada.
*/

const processarCadena = (cadenaDeCaracters, functionCallback) => {
  if (typeof cadenaDeCaracters !== "string") {
    throw new Error("El paràmetre no es un string");
  }
  if (typeof functionCallback !== "function") {
    throw new Error("La funció callback no es una funció");
  }
  const caractersMayuscules = cadenaDeCaracters.toUpperCase();
  functionCallback(caractersMayuscules);
};

try {
  processarCadena("cadenaenmajuscules", saludar);
} catch (error) {
  console.error(error.message);
}
