class Banco {
  constructor(iban, saldo) {
    this.iban = iban;
    this.saldo = saldo;
  }

  getIban() {
    return this.iban;
  }
}

class Tarjeta {
  constructor(tarjeta, cvv, activa) {
    this.tarjeta = tarjeta;
    this.cvv = cvv;
    this.activa = activa;
  }

  getTarjeta() {
    return this.tarjeta;
  }

  getActiva() {
    let rtnBool = "No";

    if (this.activa) {
      rtnBool = "Si";
    }

    return rtnBool;
  }
}

let cuenta = new Banco("ES21 1465 0100 72 2030876293", 500);
let c2 = new Banco("ES21 1465 0100 72 2030876293", 500);
let c3 = new Banco("ES21 1465 0100 72 2030876293", 500);

let tarjeta = new Tarjeta(" t1 ", "No");
let t2 = new Tarjeta(" t2 ", 123, "Si");
let t3 = new Tarjeta(" t3 ", 123, "Si");

let v = [
  [cuenta, tarjeta],
  [c2, t2],
  [c3, t3],
];

function tableCreate() {
  const tbl = document.getElementById("table");
  tbl.innerText = "";
  tbl.style.width = "600px";
  tbl.style.border = "2px";

  let tr = tbl.insertRow();
  let td = tr.insertCell();

  v.forEach((arr) => {
    tr = tbl.insertRow();
    arr.forEach((value) => {
      td = tr.insertCell();

      if (value instanceof Banco) {
        td.appendChild(document.createTextNode(value.getIban()));
      }

      if (value instanceof Tarjeta) {
        td.appendChild(document.createTextNode(value.getTarjeta()));
      }

      if (value instanceof Tarjeta) {
        td = tr.insertCell();
        td.appendChild(document.createTextNode(value.getActiva()));
      }
    });
  });
}

function guardar() {
  let nombre = document.getElementById("nombre").value
  let cvv = document.getElementById("cvv").value
  let check = document.getElementById("check").checked

  let message = ""


    if(checkTarjeta(nombre)){
        if(checkCVV(cvv)){
            let tarjeta = new Tarjeta(nombre, cvv, check);
            let arr = [cuenta, tarjeta];
            v.push(arr);
            tableCreate();
        }else if(cvv.length>3){
            message += "<li>El CVV solo admite hasta 3 dígitos</li>"
        }else{
            message += "<li>El CVV está vacío</li>"
        }
    }else {
        message += "<li>La tarjeta tiene un mal formato</li>"
    }
  
  document.getElementById("msg").innerHTML  = `<ul>${message}</ul>`
}

function checkTarjeta(str) {
  let cadena = /^[0-9]+$/;

  let rtnBool = cadena.test(str);

  return rtnBool;
}

function checkCVV(str){
    let cadena = /^[0-9]{3}$/;

    let rtnBool = cadena.test(str);
  
    return rtnBool;
}


function cargarCabecera(dest){  
  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="InfoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
 }

 