import {Empleado} from  '../Empleados/Empleado.js'
export  class Gerente  extends Empleado{
    constructor(dni,nombre,salario)
    {
        super(dni,nombre,salario);
    }
    verBonificacion(){
        const bono=8
         return super._verBonificacion(bono)
      }
  
}