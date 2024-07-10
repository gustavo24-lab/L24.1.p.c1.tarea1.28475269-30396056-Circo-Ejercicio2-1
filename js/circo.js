export default class Cl_Circo{
    constructor(){
        this.acumVentaAdolesc = 0;
        this.contAdolesc = 0;
        this.contNiños = 0;
        this.contCliente = 0;
        this.Mayor = 0;
        this.auxNombre = " ";
    }
    procesarCliente(cl){
        
        if(cl.verTipo() == "Adolescente"){
            this.acumVentaAdolesc+= cl.calcularPrecio();
        }
      
        if(cl.verTipo()== "Adolescente"){
            this.contAdolesc++;
        }
        else if(cl.verTipo()== "Niño"){
            this.contNiños++;
        }
      
        this.contCliente++;
        
        if(this.contNiños< this.contAdolesc> this.Mayor){
            this.mayor= this.contAdolesc;
            this.auxNombre= "Adolescente"
        }
        else if(this.contAdolesc< this.contNiños> this.Mayor){
            this.mayor= this.contAdolesc;
            this.auxNombre= "Niños";
        }
        else{
            return 0;
        }
            
        
    }
    PromedioVentaAdolescente(){
        return this.acumVentaAdolesc/this.contAdolesc;
    }
    PorceNiños(){
        return this.contNiños*100/this.contCliente;
    }
    devolverAuxNombre(){
        return this.auxNombre;
    }
}