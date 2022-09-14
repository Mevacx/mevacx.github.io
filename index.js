// Ejercicio 1
//var dinero = prompt("Hola! Ingrese la cantidad de dinero");

function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
};

var fideos = new Producto("Fideos $150",140);
var arroz = new Producto("Arroz $120",120);
var harina = new Producto("Harina $90",90);
var aceite = new Producto("Aceite $190",190);
var polenta = new Producto("Polenta $110",110);

// Funcioan que captura cantidad de dinero a acreditar
var dinero = 0;
var total = 0;

function capturar_din(){
    dinero = document.getElementById("din_input").value;
    total = (Number (total) + Number (dinero));
    console.log(total);
    contador.innerHTML = total;

}






