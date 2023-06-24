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
const funcionFlecha = (fn) => {
  return fn("Pepe");
};
