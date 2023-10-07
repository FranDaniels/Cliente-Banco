class Banco{
    constructor(iban,saldo){
        this.iban=iban
        this.saldo=saldo
    }

    ingresar(cantidad) {
        const numero=/^[0-9]+$/
        var mensaje=document.getElementById('msg')
        if (numero.test(cantidad)) {
            this.saldo+=cantidad
            mensaje.textContent='Se ha ingresado correctamente, tienes '+this.saldo+'€'
            mensaje.style.color='green'
            
        }else{
            mensaje.textContent='No se ha ingresado correctamente'
            mensaje.style.color='red'
        }
    }

    retirar(cantidad){
        const numero=/^[0-9]+$/
        var mensaje=document.getElementById('msg')
        if (numero.test(cantidad)) {
            if (this.saldo<=0){
                mensaje.textContent='La cuenta esta a 0'
                mensaje.style.color='red'
               
            }else if (this.saldo-cantidad<0){
                mensaje.textContent='No puedes retirar tanto dinero, tienes '+this.saldo+'€ en la cuenta'
                mensaje.style.color='red'
            }else{
                this.saldo-=cantidad
                mensaje.textContent='Se ha retirado correctamente el dinero, tienes '+this.saldo+'€'
                mensaje.style.color='green'
                
            }
        }else{
            mensaje.textContent='Desbes escribir una cantidad en números'
            mensaje.style.color='red'
        }
    }
}
var data=localStorage.getItem('cuenta')
if(data!=null){
    var c=JSON.parse(data)
    var cuenta=new Banco(c.iban,c.saldo)
}else{
  
    var cuenta= new Banco('ES21 1465 0100 72 2030876293',500)
}




document.getElementById('ibanInfo').value=cuenta.iban
document.getElementById('saldoInfo').value=cuenta.saldo


const botonRetirar=document.getElementById('saldoRetirar')
const botonIngresar=document.getElementById('saldoIngresar')



botonRetirar.addEventListener('click', function(event){
    const retiradoInput = document.getElementById('retirado')
    const cantidadRetirar = Number(retiradoInput.value)
    cuenta.retirar(cantidadRetirar)
    document.getElementById('saldoInfo').value=cuenta.saldo
    establecerCuenta(cuenta)
})

botonIngresar.addEventListener('click',function(event){
    const ingresadoInput=document.getElementById('ingresado')
    const cantidadIngresar=Number(ingresadoInput.value)
    cuenta.ingresar(cantidadIngresar)
    document.getElementById('saldoInfo').value=cuenta.saldo
    establecerCuenta(cuenta)
})

const retirado=document.getElementById('retirado')
retirado.addEventListener('focus', function(){
    document.getElementById('ingresado').value = ""
})

const ingresado=document.getElementById('ingresado')
ingresado.addEventListener('focus', function(){
    document.getElementById('retirado').value = ""
})

function cargarCabecera(dest){  
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="InfoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}

function establecerCuenta(cuenta){
    var c=JSON.stringify(cuenta)
    localStorage.setItem('cuenta',c)
}