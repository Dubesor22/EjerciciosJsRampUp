//EJERCICIOS JS
//1. Variables
//alert("“JavaScript funcionando correctamente”");
let variableSinValor;
let boolean1 = true;
let boolean2 = false;
const pi = 3.1416;
const tau = 2 * pi;
const miNombre = "David";
const miNumeroFav = 33;
const soyGuapo = false;
console.log(miNombre.length);
console.log(typeof miNumeroFav);
console.log(
  `mi nombre es ${miNombre} y mi numero favorito es el ${miNumeroFav}`
);
console.log("sere un crack de JS al terminar el Bootcamp".toUpperCase());
const frase1 = "hola soy un crack";
console.log(frase1.substring(0, 4));
const toString = miNumeroFav.toString();
console.log(typeof toString);
const nombre2 = "juan";
const edad2 = 25;
const str = `me llamo ${nombre2} y tengo ${edad2} anyos y el teclado en ingles`;
console.log(str);
console.log(pi.toPrecision(3));

//2. Arrays
const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayPares = [0, 2, 4, 6, 8];
const numerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ["hola", "mundo"];
const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
const arrayDeArrays = new Array(
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"]
);
console.log(arrayDeArrays.length);
loGuardoTodo.push("bien");
console.log(loGuardoTodo);
console.log(arrayNumeros.sort());
console.log(arrayNumeros2.reverse());
console.log(loGuardoTodo[1]);
loGuardoTodo.push("euralio");
console.log(loGuardoTodo[loGuardoTodo.length - 1]);

//3. Objetos.
const Coche = {
  marca: "Ford",
  modelo: "Mustang",
  matricula: "2244 HKX",
};

const Casa = {
  codPostal: 46015,
  calle: "mi calle",
  portal: 12,
  piso: 3,
};

const FullStackDeveloper = {
  lenguajes: ["js", "php"],
  proyecto: ["Mi Pagina personal", "encontrar curro", "no morir de hambre"],
};

const Perro = {
  nombre: "Torticulis",
  raza: "boxer",
  color: "marron caca",
  edad: 5,
};

const Noticia = {
  titular: "COVID CHAO",
  cuerpo:
    "loremlorem ipsum dasdasdadasdasdasdfaf afsasdas adasdasdas adasdasdas",
};

const Persona = {
  nombre: "David",
  apellidos: "Ubeda",
  edad: 38,
};

console.log(Persona.nombre);

console.log(FullStackDeveloper.lenguajes[0]);

const Portatil = {
  marca: "MSI",
};

console.log(Portatil.marca);
const marcaPortatil = new Array(Portatil.marca);
console.log(marcaPortatil);

const Concierto = {
  grupos: ["ACDC", "los Manolos", "Kumbaya", "Korn"],
};
console.log(Concierto.grupos);

const led = {
  colores: ["rojo", "verde", "azul"],
};
const arrayRGB = led.colores;
console.log(arrayRGB);

const O_Error = {
  codigo: 404,
};
console.log(O_Error.codigo);

const Grupo = {
  integrantes: ["Xony", "Poty", "tiriti"],
};
console.log(Grupo.integrantes[2]);

const impresora = {
  tinta: { rojo: "lleno", verde: "vacio", azul: "vacio" },
};
const nivelesTinta = impresora.tinta;
console.log(nivelesTinta);

const Movil = {
  especificaciones: ["Quad Core", "2gb Ram", "SnapDragon767"],
};
const especificaciones = Movil.especificaciones;
console.log(especificaciones);

Portatil.marca = "asus";
console.log(Portatil);

Concierto.grupos.push("guns&roses");
console.log(Concierto.grupos);

Concierto.fecha = "25 diciembre, 1995";
console.log(Concierto);
Concierto.fecha = new Date();
console.log(Concierto);

Concierto.grupos.pop();
console.log(Concierto.grupos);
console.log(Concierto.grupos.length);
