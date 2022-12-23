import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import {Cliente}    from './Cliente.js'
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';
import {Cuenta}  from './Cuentas/Cuenta.js'
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';
const cliente1 = new Cliente(123456,'jose','pachon');
//cliente1.dni="123456";
//cliente1.nombre="jose ";
//cliente1.apellido="pachon"

const cta1 = new   CuentaCorriente(cliente1,12369887,"altavista",0);
//cta1.numero=1;
//cta1.agencia="altavista";
//cta1.cliente=cliente1;

let saldo=cta1.versaldo()

console.log('el saldo actual es maria pppp',cta1.cliente)
console.log('el saldo actual es cuenta jose',saldo)
saldo=cta1.depositoCuenta(300)
console.log('el saldo actual es cuenta jose',saldo)

const cliente2 = new Cliente(123457,'maria','garicia');
//cliente2.dni="123457";
//cliente2.nombre="maria";
//cliente2.apellido="garcia"

const cta2 = new   CuentaCorriente(cliente2,12369887,"orinokia",0);
const cta3 = new   CuentaCorriente(cliente1,12369887,"altavista",0);
const cta4 = new   CuentaCorriente(cliente1,12369887,"altavista",0);
//cta2.numero=1;
//cta2.agencia="altavista";
//cta2.setcliente=cliente2;

if (cta2.cliente)
console.log(cta2.cliente)
else 
console.log(cta2)
let saldom=cta2.versaldo();
saldom = cta2.depositoCuenta(200)


cta1.taferenciaEnCuenta(100,cta2);
console.log('el saldo actual es maria',+saldom)
const cuentamaria = cta2.versaldo()
console.log('el saldo actual es maria',+cuentamaria)
const cuentajose = cta1.versaldo()
console.log('el saldo actual es jose',+cuentajose)
console.log(cta1)
console.log(cta1.cliente)
console.log(cta2)
console.log(cta2.cliente)
console.log(CuentaCorriente.cantidadCuentas)
 const cah1 = new  CuentaAhorro(cliente2,12345777,'callao',0)
 console.log(cah1)
 console.log(cah1.cliente)
//  const cuenta = new Cuenta(cliente2,12345777,'callao',0)
//  console.log(cuenta)
const cuentano = new CuentaNomina(cliente1,14544,'caracas',10)

console.log(cuentano)
cuentano.depositoCuenta(150)
console.log(cuentano.versaldo())
cuentano.retiroCuenta(50)
console.log(cuentano.versaldo())


const empleado1 = new Empleado(12345,'pedro',100)
const empleado2 = new Director(12345,'pedro',100)
const empleado3 = new Gerente(12345,'pedro',200)
console.log("empleado Director",+empleado2.verBonificacion())
console.log("empleado generete",+empleado3.verBonificacion())


empleado1.asignarclave('123')
console.log(SistemaAutenticacion.login(empleado1,'123'))





