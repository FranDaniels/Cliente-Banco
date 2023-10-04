var nombre=document.getElementById('inpNombre')
var primerApellido=document.getElementById('inpPApellido')
var segundoApellido=document.getElementById('inpSAPellido')
var nacionalidad=document.getElementById('inpNacionalidad')

const expReguLetras=/^[A-Za-z]+$/

function cargarDatos(){
    /*document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad*/
    menu = document.getElementById('menu').innerHTML
}

// function cargarCabecera(dest){  
//  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
// }
nombre.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgNombre')

    var test =expReguLetras.test(nombre.value)

    if(test){
    var array = nombre.value.split('')

    if (!validarTam(3,20, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'

        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'

    }

})
primerApellido.addEventListener('change', function (event) {

    var mensaje=document.getElementById('msgPApellido')

    var test =expReguLetras.test(primerApellido.value)

    if(test){
    var array = primerApellido.value.split('')

    if (!validarTam(3,20, array.length)) {

            mensaje.textContent = 'Tamaño incorrecto (3-20)'
            mensaje.style.color='red'

        } else {

            mensaje.textContent = ''
            mensaje.style.color = ''
        }
    } else {

        mensaje.textContent = 'Solo se pueden introducir letras(A-Z)'
        mensaje.style.color = 'red'

    }

})

function validarTam(minimo,maximo, tamCadena) {
   var valido=true 
   if(tamCadena<minimo){
    valido=false
   }
   if(tamCadena>maximo){
    valido= false
   }
    return valido
}
