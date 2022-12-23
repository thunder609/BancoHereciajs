export class Empleado {
    #dni;
    #nombre
    #salario
    #clave
    constructor(dni,nombre,salario,clave){
        this.#dni=dni;
        this.#nombre=nombre;
        this.#salario=salario;
        this.#clave='';
    }
    asignarclave(clave){
        this.#clave=clave
    }
    autenticable(clave){
        return clave == this.#clave
    }
    verBonificacion(){
               return this.#salario
    }
    _verBonificacion(bono){
        return this.#salario + this.#salario * bono / 100
    }
}