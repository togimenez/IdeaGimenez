let subir = document.getElementById("presentacion");
subir.innerHTML += "<h2>Bienvenidx, ingrese su nombre</h2>";

const formNombre = document.getElementById("formulario");
const nombre = document.getElementById("nombreUsuario");
const dni = document.getElementById("dniUsuario");
const boton = document.getElementById("btnEnvio");

const comida = document.getElementById("select-comida");
const bebida = document.getElementById("select-bebida");

function reconocerCliente() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == dni.value) {
      console.log("usuario ya registrado");
    } else {
      console.log("usuario nuevo");
    }
  }
}

nombre.onmousedown = () => {
  console.log("down");
};

nombre.onkeyup = () => {
  console.log("keyup");
};

formNombre.onsubmit = (e) => {
  let infoUsuario = e.target;
  let nombreUsuario = infoUsuario.querySelector("#nombreUsuario").value;
  let apellido = document.getElementById("apellidoUsuario").value;
  localStorage.setItem("nombre", nombreUsuario);

  let mensaje = localStorage.getItem("nombre");
  console.log(mensaje);

  const usuario = { id: 4, Nombre: nombreUsuario + " " + apellido };
  const enJSON = JSON.stringify(usuario);
  localStorage.setItem("usuario", enJSON);

  let parseado1 = JSON.parse(enJSON);
  localStorage.setItem("usuarioID", parseado1.id);

  let valorDni = dni.value;
  localStorage.setItem("D.N.I", valorDni);

  let valorComida = comida.value;
  localStorage.setItem("Comida", valorComida);

  let valorBebida = bebida.value;
  localStorage.setItem("Bebida", valorBebida);

};

reconocerCliente();
