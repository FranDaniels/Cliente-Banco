
function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest){  
 document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}
//Los consolelog se borran
class banco{
    constructor(iban,saldo){
        this.iban=iban
        this.saldo=saldo
    }

    ingresar(cantidad) {
        this.saldo+=cantidad
        console.log(this.saldo)
    }

    retirar(cantidad){
            if (this.saldo<=0){
                console.log('La cuenta esta a 0')
            }else if (this.saldo-cantidad<0){
                console.log('No puedes retirar tanto dinero, tienes '+this.saldo+'€ en la cuenta')
            }else{
                this.saldo-=cantidad
                console.log(this.saldo)
            }
    }
}


