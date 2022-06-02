const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre sólo acepta letras";
  }

  return "";
}

// validar ciudad

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debes seleccionar una ciudad";
  }

  return "";
}

// validar descripcion de regalo

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (descripcionRegalo.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }
  if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "Este campo solo puede contener letras y números";
  }

  return "";
}
