function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
    validarNombre(
      '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
    ) === 'Este campo debe tener menos de 50 caracteres',
    'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

  console.assert(
    validarNombre('231') === 'El campo nombre sólo acepta letras',
    'La función validarNombre no se ejecutó correctamente con un número como valor'
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('') === 'Debes seleccionar una ciudad',
    'La función validarCiudad no funcióno con un string vacío'
  );

  console.assert(
    validarCiudad('Buenos Aires') === '',
    'La función validarCiudad no funcionó con una ciudad seleccionada'
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo('') ===
      'Este campo debe tener al menos 1 caracter',
    'La función validarDescripcionRegalo no funcionó con un string vacío'
  );

  console.assert(
    validarDescripcionRegalo(
      '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
    ) === 'Este campo debe tener menos de 100 caracteres',
    'La función validarDescripcionRegalo no funcionó con más de 100 caracteres'
  );

  console.assert(
    validarDescripcionRegalo('#$') ===
      'Este campo solo puede contener letras y números',
    'La función validarDescripcionRegalo no funcionó con símbolos'
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
