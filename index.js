


let numero = parseInt(prompt("Ingrese cantidad de prestamos"));

/* tener en cuenta que sueldo menor a 100.000 no da prestamo mayor a 500.000 */

for (let i = 1 ; i <= numero ; i++)
{
let nombre=prompt("ingrese su nombre");
let sueldo=parseInt(prompt("ingrese sueldo"));
let prestamo=prompt("¿cuanto dinero quiere sacar?")

if (sueldo>=100000) 
{
alert("prestamo aprobado!");
}

else if (sueldo < 100000 && prestamo < 500000)
{
alert("Prestamo aprobado!")

}
else
{
alert("prestamo no aprobado!")
}

}