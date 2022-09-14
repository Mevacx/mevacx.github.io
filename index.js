// Ejercicio 1
//var dinero = prompt("Hola! Ingrese la cantidad de dinero");

function Producto (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
};

var fideos = new Producto("Fideos $150",150);
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
    contador.innerHTML = "Su saldo actual es de $" + total;
}

function cancelar_din(){
    contador.innerHTML = "Su saldo actual es de $" + 0;
    total=0;
}

function restar_del_total(){
    total = total - 150;
    contador.innerHTML = "Su saldo actual es de $" + total
    if (total<0 && total>-100){
        alert("Ahora nos debe dinero ( ˘︹˘ )");
    };

    if (total<-100 && total>-230){
        alert("Mejor llamo a seguridad (►̃ ᆽ◄̃)");
    };

    
}






