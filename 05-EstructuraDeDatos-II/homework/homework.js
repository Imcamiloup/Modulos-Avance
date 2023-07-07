'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
    this.head=null;
    

}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  //Crear un nodo con ese valor
  var newNode = new Node(value);
  var currentNode = this.head;
  //Agregarlo al final de la lista
  if(!this.head){
    this.head = newNode;
    return value;
  //Si la lista no estaba vacía  
  }

  while(currentNode.next){
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  return value;
};

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list);

LinkedList.prototype.remove = function() {
  // Si la lista está vacía, retornar null
  if (!this.head) {
    return null;
  }
  // Si la lista tiene un solo nodo, vaciar la lista y retornar el valor del nodo eliminado
  if (!this.head.next) {
    var value = this.head.value;
    this.head = null;
    return value;
  }
  // Si la lista tiene más de un nodo, recorrerla hasta el final, guardar el valor del penúltimo nodo, eliminar el último nodo y retornar el valor del nodo eliminado
  var currentNode = this.head;
  var previousNode = null;
  var value = null;
  while (currentNode.next) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    value = currentNode.value;
  }
  previousNode.next = null;
  return value;
};

list.remove();
list.remove();
console.log(list);

LinkedList.prototype.search = function(target) {
  var currentNode = this.head;
  while (currentNode) {
    if (typeof target === 'number' && currentNode.value === target) {
      return currentNode.value; // Búsqueda por valor
    } else if (typeof target === 'function' && target(currentNode.value)) {
      return currentNode.value; // Búsqueda por callback
    }
    currentNode = currentNode.next;
  }
  return null; // No se encontró el valor o no se cumplió la condición del callback
};



/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets=[];
  this.numBuckets= 35;
}


HashTable.prototype.hash=function(key){
  var suma=0;
  for (let i = 0; i < key.length; i++) {
    suma = suma + key.charCodeAt(i);      
  }
  let mod = suma%this.numBuckets;
  return mod;
}

HashTable.prototype.set = function(){
  
}

HashTable.prototype.get = function(){
  
}

HashTable.prototype.hasKey = function(){

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
