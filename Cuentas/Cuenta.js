
import {Cliente}    from '../Cliente.js'

export class Cuenta{
    #cliente;
    #saldo;
    set  cliente(valor){
        if (valor instanceof Cliente)
        this.#cliente=valor;
      }
      get cliente(){
         return this.#cliente
      }
    constructor(cliente,numero,agencia,saldo){
     if (this.constructor==Cuenta){
        throw new error("no se puede instacia clase objecto clase cuenta")
     }
        this.numero=numero;
        this.agencia=agencia;
        this.#cliente=cliente;
        this.#saldo=saldo;
    }
    depositoCuenta(valor){
        if (valor> 0){
        this.#saldo += valor;
        return this.#saldo;
        }
      }
      retiroCuenta(valor){
        //metodo astracto
            throw new Error('debe implementar el metodo de retiro en su cuenta clase ')
      }
   _retiroCuenta(valor,comision){
        valor = valor * (1+ comision /100)
        if (valor <= this.#saldo)
        this.#saldo -= valor;
        return this.#saldo;
            
      }
      versaldo(){
        return this.#saldo;
      }
      taferenciaEnCuenta(valor,Cuentadestino){
        this.retiroCuenta(valor);
        Cuentadestino.depositoCuenta(valor)
      }
}
