function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length >= 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return 'El campo nombre sólo acepta letras';
  }

  return '';
}

// validar ciudad

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'Debes seleccionar una ciudad';
  }

  return '';
}

// validar descripcion de regalo

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (descripcionRegalo.length >= 100) {
    return 'Este campo debe tener menos de 100 caracteres';
  }
  if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return 'Este campo solo puede contener letras y números';
  }

  return '';
}

function validarFormulario(event) {
  const $form = document.querySelector('#carta-a-santa');
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo,
  };

  console.log(errores);

  manejarErrores(errores);

  event.preventDefault();
}

function manejarErrores(errores) {
  errorNombre = errores.nombre;
  errorCiudad = errores.ciudad;
  errorDescripcionRegalo = errores.descripcionRegalo;

  if (errorNombre) {
    $form.nombre.className = 'error';
  } else {
    $form.nombre.className = '';
  }

  if (errorCiudad) {
    $form.ciudad.className = 'error';
  } else {
    $form.ciudad.className = '';
  }

  if (errores.descripcionRegalo) {
    $form['descripcion-regalo'].className = 'error';
  } else {
    $form['descripcion-regalo'].className = '';
  }
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
