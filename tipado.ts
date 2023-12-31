//# Declaracion de tipos
let numero: number = 5;

let cadena: string = "hola";

let hola = "hola";
hola = 5;

/*************************************/
//# Inferencia
//?Any = IGNORE el tipado de typescript
let anyValue: any = "hola";

/*************************************/
//#  Inferencia
//? a y b infieren que son number sin especificar que son number con :number
const a = 1;
const b = 2;

const c = a + b;
//? debido a que a y b son numer, c tambien sera number

/*************************************/
//#funciones

//¿funcion con any
function saludarAny(nombre) {
  console.log(`hola${nombre}`);
}

saludarAny("Juan");
saludarAny(5);

//¿ funcion sin any
function saludarSinAny(nombre: string) {
  console.log(`hola${nombre}`);
}

saludarSinAny("Juan");
saludarSinAny(5);

//¿ funcion con objeto
//* Tipar forma 1
function saludarObj1({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Hola ${nombre}, tienes ${edad} años`);
}

saludarObj1({ nombre: "lalo", edad: 18 });

//* Tipar forma 2
function saludarObj2(persona: { nombre: string; edad: number }) {
  const { nombre, edad } = persona;
  console.log(`Hola ${nombre}, tienes ${edad} años`);
}

saludarObj2({ nombre: "lalo", edad: 18 });

//¿ funcion con return
//? :number es opcional, es para indicar nosotros el tipo de dato que devolvera
function saludarReturn({
  nombre,
  edad,
}: {
  nombre: string;
  edad: number;
}): number {
  console.log(`Hola ${nombre}, tienes ${edad} años`);

  return edad;
}

let user: string;
user = saludarReturn({ nombre: "Juan", edad: 48 });

let userN: number;
userN = saludarReturn({ nombre: "Juan", edad: 48 });

//¿ funcion con funcion como parametro
const funcionFlecha = (fn: (nombre: string) => void) => {
  return fn("Pepe");
};

const paramFn = (nombre: string) => {
  console.log(`hola ${nombre}`);
};

funcionFlecha(paramFn);

//¿ funcion flecha
//* tipar forma 1
const sumar = (a: number, b: number) => {
  return a + b;
};

//* tipar forma 2
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

//¿ funcion con never
//? Never es para que indicar que una funcion, nunca devolvera nada
function throwError(message: string): never {
  throw new Error(message);
}

//# never y void

/**
 *# Las funciones no tienen inferencia
 ** Never: para indicar que una funcion nunca devolvera algo
 ** Void: para indicar que una funcion puede devolver un dato, pero no nos interesa que devuelva un dato
 */

function logMessage(message: string): void {
  console.log(message);
  // throw new Error(message)

  //! Con el never, no llega al return

  // return implicito <= lo ignora => void => no devuelve nada
  //* Con el void, si llega al return, pero lo ignora
}

//# inferencia de funciones anonimas segun el contexto
/**
 * * Aveces las funciones pueden inferir el tipo de dato, dependiendo su contexto en el que se crea esa funcion
 */

const avengers = ["Spiderman", "Hulk", "IronMan"];

avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase());
});

//# Objetos
//¿ Type Alias

//$ optional properties

//$ intersection types

type Heroeid = `${string}-${string}-${string}-${string}-${string}`;

type HeroeInfoBasica = {
  nombre: string;
  edad: number;
};

type HeroePropiedades = {
  readonly id?: Heroeid;
  activo?: boolean;
  EscalaPoder?: HeroePoder;
};

type Heroe = HeroeInfoBasica & HeroePropiedades;

let heroe: Heroe = {
  nombre: "hola",
  edad: 5000,
};

function createHero(heroe: HeroeInfoBasica): Heroe {
  const { nombre, edad } = heroe;
  return { id: crypto.randomUUID(), nombre, edad, activo: true };
}

const thor = createHero({ nombre: "Thor", edad: 6000 });

//? si thor tiene un id ejecuta el metodo, si no tiene id no lo ejecutara
thor.id?.toString();

thor.id = 5;

//$ template union types
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = "0033ff";
const color2: HexadecimalColor = "#0033ff";

//$ union types

thor.EscalaPoder = "MUY FUERTE";
thor.EscalaPoder = "local";

type HeroePoder = "local" | "planetario" | "galactico";

let ann: 2 | string;

ann = 1;
ann = "1";
ann = true;

const habilitarDuracionAnimacion: boolean | number = 199.9;

//$ type indexing
type HeroeProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const addressHeroe: HeroeProperties["address"] = {
  planet: "tierra",
  city: "juarez",
};

//$ type from value
const address = {
  planet: "earth",
  city: "Madrid",
};
//? Typeof es un operador que sirve para crear types a partir de codigo que ya exista
type Adress = typeof address;

const addressTwitch: Adress = {
  planet: "Mars",
  city: "Twitch",
};

//$ type from function return

function createAddress() {
  return {
    planet: "tierra",
    city: "Barcelona",
  };
}

//? Returntype es para recuperar el tipo de lo que devuelve la funcion
type AdressFunct = ReturnType<typeof createAddress>;

/*************************************/

//# Arreglos
const lenguajes: (string | number)[] = [];

lenguajes.push("Javascript");
lenguajes.push(1);

//?Heroes con array de types
const heroesConInfoBasica: HeroeInfoBasica[] = [];

//#Matrices

type datoMatriz = "X" | "O" | "";

//*Esto es una tupla
//? Una tupla es un arreglo, que tiene un limite fijado de longitu
type tablero = [
  [datoMatriz, datoMatriz, datoMatriz],
  [datoMatriz, datoMatriz, datoMatriz],
  [datoMatriz, datoMatriz, datoMatriz]
];

const gameBoard: datoMatriz[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

//$ tuplas

type State = [string, (name: string) => void];
const [heroe, SetHeroe] = useState("thor");

type RGB = [number, number, number];
const RGB: RGB = [255, 255, 0];
