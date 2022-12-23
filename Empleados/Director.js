import {Empleado} from  '../Empleados/Empleado.js'
export  class Director  extends Empleado{
    constructor(dni,nombre,salario)
    {
        super(dni,nombre,salario);
    }
    verBonificacion(){
     const  bono = 5
       return super._verBonificacion(bono)
    }
}