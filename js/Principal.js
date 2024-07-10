/*CIRCO
Para un espectáculo de circo se tienen 3 tipos de entrada: niño
s (hasta 12 años), adolescentes (hasta 18) y adultos (mayores de 18, respectivamente),
 el precio de la entrada general es de 15$. Por cada espectador se tiene: nombre, edad y sexo.
  Además, se sabe que si el espectador es niño o adolescente obtiene un descuento del 10%.
   Se requiere mostrar: a) Precio Cancelado por cada espectador, 
   b) Promedio de las Ventas hechas a espectadores adolescentes, 
 c) Entre niños y adolescentes cuál asistió más al circo,
 d) Porcentaje que representa la cantidad de niños que asistieron
 al circo con respecto al total de espectadores procesados.
El circo suministra la siguiente información demostrativa, para 4 espectadores:
 (nombre, edad, sexo) (Ana, 8, F) (Luis, 15, M) (Valeria, 12, F) (Fabian, 21, M)*/
 
 import { Cl_cliente } from "./cliente.js";
 import Cl_Circo from "./circo.js";
 
 let cliente1=new Cl_cliente("Ana", 8, "F");
 let cliente2=new Cl_cliente("Luis", 15, "M");
 let cliente3=new Cl_cliente("Valeria", 12, "F");
 let cliente4=new Cl_cliente("Fabian", 21, "M");
 
 let circo=new Cl_Circo();
 circo.procesarCliente(cliente1);
 circo.procesarCliente(cliente2);
 circo.procesarCliente(cliente3);
 circo.procesarCliente(cliente4);
 
 let salida = document.getElementById("salida");
 salida.innerHTML= "Resultado"
 salida.innerHTML+= "<br> El espectador Ana debe cancelar: " +cliente1.calcularPrecio();
 salida.innerHTML+= "<br> El espectador Luis debe cancelar: " +cliente2.calcularPrecio();
 salida.innerHTML+= "<br> El espectador Valeria debe cancelar: " +cliente3.calcularPrecio();
 salida.innerHTML+= "<br> El espectador Fabian debe cancelar: " +cliente4.calcularPrecio();
 salida.innerHTML+= "<br> <br>"
 salida.innerHTML+= "<br> Promedio de las Ventas hechas a espectadores adolescentes: " +circo.PromedioVentaAdolescente();
 salida.innerHTML+= "<br> Entre niños y adolescentes el espectador que asistió más al circo fue " +circo.devolverAuxNombre();
 salida.innerHTML+= "<br> Porcentaje que representa la cantidad de niños que asistieron al circo: " +circo.PorceNiños() + "%";
 


