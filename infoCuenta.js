class banco{
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

var cuenta= new banco('ES21 1465 0100 72 2030876293',500)
console.log(cuenta)

const botonRetirar=document.getElementById('saldoRetirar')
const botonIngresar=document.getElementById('saldoIngresar')

botonRetirar.addEventListener('click', function(event){
    const retiradoInput = document.getElementById('retirado')
    const cantidadRetirar = Number(retiradoInput.value)
    cuenta.retirar(cantidadRetirar)

})

botonIngresar.addEventListener('click',function(event){
    const ingresadoInput=document.getElementById('ingresado')
    const cantidadIngresar=Number(ingresadoInput.value)
    cuenta.ingresar(cantidadIngresar)
})