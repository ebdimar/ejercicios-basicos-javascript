/*
Exercici 1: Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que
 retorni la cadena de text 'Hola, món'.*/
const promesa = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, món");
  }, 2000);
});

/*
Exercici 2: Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un
 .then que imprimeixi el resultat a la consola.*/

promesa.then((resultat) => {
  console.log(resultat);
});

/*
Exercici 3: Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és 
igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.
*/

const promesaAmbReject = (input) => {
  if (input !== "hola") {
    return Promise.reject(new Error("input invalid"));
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("exit!");
    }, 2000);
  });
};

promesaAmbReject("hola")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

/*
Exercici 4: Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar 
el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat 
a la consola.
*/

const asyncFuncio = async () => {
  const valor = await promesa;
  console.log(valor);
};

asyncFuncio();

/*
Exercici 5: Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi
qualsevol possible error utilitzant un bloc try/catch.
*/
const asyncFuncio2 = async () => {
  try {
    const valor = await promesa;
    console.log(valor);
  } catch (error) {
    return new Error("Error en asyncFuncio2");
  }
};
asyncFuncio2();
/*
Exercici 6: Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament.
 Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els 
 resultats a la consola.
*/
const promesaDosSegons = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resposta de la primera promesa");
  }, 2000);
});

const promesaTresSegons = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resposta de la segona promesa");
  }, 2000);
});

Promise.all([promesaDosSegons, promesaTresSegons])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => console.log(`Error en la promesa ${error}`));
