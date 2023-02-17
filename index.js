


// let numero = parseInt(prompt("Ingrese cantidad de prestamos"));

// /* tener en cuenta que sueldo menor a 100.000 no da prestamo mayor a 500.000 */

// for (let i = 1 ; i <= numero ; i++)
// {
// let nombre=prompt("ingrese su nombre");
// let sueldo=parseInt(prompt("ingrese sueldo"));
// let prestamo=prompt("¿cuanto dinero quiere sacar?")

// alert("Bienvenido " + nombre + " su sueldo es de " + sueldo + " y usted esta solicitando " + prestamo + " pesos.-");

// if (sueldo>=100000) 
// {
// alert("prestamo aprobado!");
// }

// else if (sueldo < 100000 && prestamo < 500000)
// {
// alert("Prestamo aprobado!")

// }
// else
// {
// alert("prestamo no aprobado!")
// }

// }



class Prestamo {
    constructor ( nombre , sueldo , prestamo) {

        this.nombre = nombre;
        this.sueldo = sueldo;
        this.prestamo = prestamo;

  }
        saludar() {
            alert("Hola Bienvendido" + this.nombre);
        }
}


// const prestamo1 = new Prestamo (" martin " , 150000 , 550000 );
// prestamo1.saludar ();
// alert (prestamo1); 

// /-----------------------------------------------------------------------/

let nombre;
let sueldo;
let prestamo;
const arrayPrestamo = []


let cantidad= prompt("Ingrese la cantidad de prestamos")
for (let i = 0;i <= cantidad; i++)
{
    nombre = prompt("Ingrese el nombre");

    sueldo = parseFloat(prompt("ingrese el sueldo"));

    prestamo = parseFloat(prompt("Ingrese el prestamo solicitado"));

    const prestamoPersona = new Prestamo (nombre , sueldo , prestamo);

    arrayPrestamo.push(prestamoPersona);
}

for (let i = 0; i <= arrayPrestamo.length; i++)
{
alert("nombre: "+ arrayPrestamo[i].nombre+"\n sueldo: "+arrayPrestamo[i].sueldo+"\nprestamo: "+arrayPrestamo[i].prestamo)
}