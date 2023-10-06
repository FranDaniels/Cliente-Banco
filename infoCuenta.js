class banco{
    constructor(iban,saldo){
        this.iban=iban
        this.saldo=saldo
    }

    ingresar(cantidad) {
        const numero=/^[0-9]+$/
        if (numero.test(cantidad)) {
            this.saldo+=cantidad
            
        }else{
            console.log('Debe escribir una cantidad en números')
        }
    }

    retirar(cantidad){
        const numero=/^[0-9]+$/

        if (numero.test(cantidad)) {
            if (this.saldo<=0){
                msg.innerHTML='La cuenta esta a 0'
            }else if (this.saldo-cantidad<0){
                msg.innerHTML('No puedes retirar tanto dinero, tienes '+this.saldo+'€ en la cuenta')
            }else{
                this.saldo-=cantidad
                msg.innerHTML='Se ha retirado correctamente el dinero'
            }
        }else{
            msg.innerHTML='Desbes escribir una cantidad en números'
        }
    }
}

var cuenta= new banco('ES21 1465 0100 72 2030876293',500)
console.log(cuenta)

const botonRetirar=document.getElementById('saldoRetirar')
const botonIngresar=document.getElementById('saldoIngresar')

botonRetirar.addEventListener('click', function(event){

var mensaje=document.getElementById('msg')
mensaje.textContent('hola')
mensaje.style.color='green'




})
botonIngresar.addEventListener('click', () => cuenta.ingresar('ingresado'))


function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="InfoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
   }