export class Cl_cliente{
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get nombre(){
        return this._nombre;
    }
    set edad(edad){
        this._edad=+edad;
    }
    get edad(){
        return this._edad;
    }
    set sexo(sexo){
        this._sexo=sexo;
    }
    get sexo(){
        return this._sexo;
    }
    calcularPrecio(){
        let precio = 15;
        if(this._edad <= 18){
            return precio-precio*10/100;
        }
        else{
            return precio;
        }
    }
    verTipo(){
        let tipo;
        if(this._edad<=12){
            return tipo = "Niño";
        }
        else if(this._edad<=18){
            return tipo = "Adolescente";
        }
        else{
            return tipo = "Adulto";
        }
    }
}