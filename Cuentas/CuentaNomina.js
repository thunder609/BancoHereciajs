import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta{
    constructor(cliente,numero,agencia,saldo){
        super(cliente,numero,agencia,saldo);
      
}
retiroCuenta(valor){
     super._retiroCuenta(valor,5)   
}
}