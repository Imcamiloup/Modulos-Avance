x = 1;
var a = 5;
var b = 15;
var c = function (a, b, c) {
   var x = 10;
   var b=8
   console.log(x);
   console.log(a);
   console.log(b)
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = 5;
      console.log(b)
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(7, 9, 10);
console.log(b);
console.log(x);


console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
var baz = 2;
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);

//La diferencia entre var y let es que var es una variable global y let es una variable local
//La diferencia entre var y const es que const no se puede modificar
//La diferencia entre let y const es que const no se puede modificar
//La diferencia entre var y function es que function es una funcion y var es una variable
//La diferencia entre let y function es que function es una funcion y let es una variable
//El contexto global y el contexto de una función tienen su propio basical environment
//Si declaro una variable en el contexto global y despues la declaro en el contexto 
//de una funcion, la variable global se modifica
//Si declaro una función en el contexto local habiendola declarado con el mismo nombre, 
//entonces se toma la variable definida en el contexto global

//Coerción de Datos
//¿Cuál crees que será el resultado de la ejecución de estas operaciones?:
//Var reserva un espacio de memoria para guardar el valor de la variable en el basical environment
//Let y const no hacen hoisting

// newFunction();
// {}[0]
// parseInt("09")
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// [3]+[3]-[10]
// 3>2>1
// [] == ![]
// Si te quedó alguna duda repasá con este artículo.

// function newFunction() {
//     6 / "3";
//     "2" * "3";
//     4 + 5 + "px";
//     "$" + 4 + 5;
//     "4" - 2;
//     "4px" - 2;
//     7 / 0;
// }
// newFunction();
// {}[0]
// parseInt("09")
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// [3]+[3]-[10]
// 3>2>1
// [] == ![]
// Si te quedó alguna duda repasá con este artículo.

// function newFunction() {
//     6 / "3";
//     "2" * "3";
//     4 + 5 + "px";
//     "$" + 4 + 5;
//     "4" - 2;
//     "4px" - 2;
//     7 / 0;
// }
console.log(6 / "3");
console.log("2" * "3"); 
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log({}[0]);
console.log(parseInt("09"));
console.log(5 && 2);
console.log(2 && 5);
console.log(5 || 0);
console.log(0 || 5);
console.log([3]+[3]-[10]);
console.log(3>2>1);
console.log([] == ![]);
"2" * "3";
4 + 5 + "px";
"$" + 4 + 5;
"4" - 2;
"4px" - 2;
7 / 0;
{}[0];
parseInt("09");
5 && 2;
2 && 5;
5 || 0;
0 || 5;
[3]+[3]-[10];
3>2>1;
[] == ![];

// Hoisting
// ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

function test() {
   console.log(a);//se hizo hosting a la variable a y se
   // le asigno el valor undefined pero no ha sido asignado el valor 1
   console.log(foo());//foo fue redifinida en el contexto local

   var a = 1;
   function foo() {
      return 2;
   }
}
console.log(foo());//foo está definida en el contexto global pero no retorna nada, 
//así que es undefined

test();

//Y el de este código? :

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   console.log(snack);
   return snack;
   
}
console.log(getFood(false));//getFood no retorna nada
console.log(getFood(true));//getFood retorna Friskies
console.log(snack);//snack es una variable global y retorna Meow Mix
getFood(true);

//This
// ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//Event loop
//Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();