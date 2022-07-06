
let producto = prompt("que producto desea:\n raqueta \n grip")
let cantidad
let precio1 = parseInt("200")
let precio2 = parseInt("10000")
let descuento = parseInt("10%")
let bonificadoR = ((precio2 * descuento) / 100)
let precioDescuentoR = (precio2 - bonificadoR)
let bonificadoG = ((precio1 * descuento) / 100)
let precioDescuentoG = (precio1 - bonificadoG)
let confirma = ""

//Utilice toLowerCase pero no funciona, queria que si escriben RaQueta o RAQUETA lo detecte como corecto igual
switch (producto) {

    case "raqueta":
        cantidad = parseInt(prompt("cuantas desea comprar"))
        console.log("Usted va a llevar", cantidad, producto, "el total a pagar es", "$", (precio2 * cantidad))
        alert("Si abona por tranferencia, tiene un 10% de descuento")
        confirma = confirm("Desea abonar por tranferencia")

        if (confirma == true) {
            console.log("Buena elección su total a pagar es", (cantidad * precioDescuentoR))
            break;
        }
        else (confirma == false)
        {
            console.log("Usted va a llevar", cantidad, producto, "por un total de", "$", (precio2 * cantidad))
        }
        break;

    case "grip":
        cantidad = parseInt(prompt("cuantas desea comprar"))
        console.log("Usted va a llevar", cantidad, producto, "el total a pagar es", "$", (precio1 * cantidad))
        console.warn("Si abona por tranferencia, tiene un 10% de descuento")
        confirma = confirm("Desea abonar por tranferencia")

        if (confirma == true) {
            console.log("Buena elección su total a pagar es", (cantidad * precioDescuentoG))
            break;
        }
        else (confirma === false)//me sale este mensaje tambien si es verdadero, y no se porque 
        {
            console.log("Usted va a llevar", cantidad, producto, "por un total de", "$", (precio1 * cantidad))
        }
        break;

    default:
        console.error("no contamos con", " ", producto)
        break;

}



