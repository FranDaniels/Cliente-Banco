class Banco {
  constructor(iban, saldo) {
    this.iban = iban;
    this.saldo = saldo;
    this.tarjeta = [];
  }

  getIban() {
    return this.iban;
  }

  getSaldo() {
    return this.saldo;
  }

  addTarjeta(tar) {
    this.tarjeta.push(tar);
  }

  getSizeTarjeta() {
    let count = 0;
    this.tarjeta.forEach((element) => {
      count++;
    });
    return count;
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

cuenta.addTarjeta(tarjeta);
cuenta.addTarjeta(t2);
cuenta.addTarjeta(t3);

function tableCreate() {
  const tbl = document.getElementById("table");
  tbl.innerText = "";
  tbl.style.width = "600px";
  tbl.style.border = "2px";

  let tr = tbl.insertRow();
  let td = tr.insertCell();

  let i = 0;

  while (i < cuenta.tarjeta.length) {
    let j = 0;
    tr = tbl.insertRow();
    while (j < 1) {
      td = tr.insertCell();
      td.appendChild(document.createTextNode(cuenta.iban));

      td = tr.insertCell();
      td.appendChild(document.createTextNode(cuenta.tarjeta[i].tarjeta));

      td = tr.insertCell();
      td.appendChild(document.createTextNode(cuenta.tarjeta[i].getActiva()));

      j++;
    }

    i++;
  }
}

let data = localStorage.getItem("cuenta");

if (data != null) {
  let parseObjCuenta = JSON.parse(data);
  cuenta = new Banco(parseObjCuenta.iban, parseObjCuenta.saldo);
  let i = 0;

  while (i < parseObjCuenta.tarjeta.length) {
    var t = new Tarjeta(
      parseObjCuenta.tarjeta[i].tarjeta,
      parseObjCuenta.tarjeta[i].cvv,
      parseObjCuenta.tarjeta[i].activa
    );

    cuenta.addTarjeta(t);
    i++;
  }
} else {
  let cuenta = new Banco("ES21 1465 0100 72 2030876293", 500);
  let tarjetita = new Tarjeta("test", false);
  cuenta.tarjeta.push(tarjetita);

  // console.log(parseJSON)
}

function guardar() {
  console.log(cuenta);

  let nombre = document.getElementById("nombre").value;
  let cvv = document.getElementById("cvv").value;
  let check = document.getElementById("check").checked;

  let message = "";

  if (checkTarjeta(nombre)) {
    if (checkCVV(cvv)) {
      let tarjeta = new Tarjeta(nombre, cvv, check);
      cuenta.tarjeta.push(tarjeta);
      tableCreate();
    } else if (cvv.length > 3) {
      message += "<li>El CVV solo admite hasta 3 dígitos</li>";
    } else {
      message += "<li>El CVV está vacío</li>";
    }
  } else {
    message += "<li>La tarjeta tiene un mal formato</li>";
  }

  document.getElementById("msg").innerHTML = `<ul>${message}</ul>`;


  let parseJSON = JSON.stringify(cuenta);
  localStorage.setItem("cuenta", parseJSON);

}

function checkTarjeta(str) {
  let cadena = /^[0-9]{4}\s[0-9]{5}\s[0-9]{6}$/;

  let rtnBool = cadena.test(str);

  return rtnBool;
}

function checkCVV(str) {
  let cadena = /^[0-9]{3}$/;

  let rtnBool = cadena.test(str);

  return rtnBool;
}

function cargarCabecera(dest){  
  document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="InfoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>' 
}