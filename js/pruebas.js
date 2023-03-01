function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre("acbdefghijacbdefghijacbdefghijacbdefghijacbdefghij") ===
      "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("12341233421") === "El campo nombre sólo acepta letras",
    "Validar nombre no validó que el nombre contenga solo letras"
  );

  console.assert(
    validarNombre("Agustin") === "",
    "la función validar nombre no funcionó con un nombre válido"
  );
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debes seleccionar una ciudad",
    "Validar ciudad no validó que hayas seleccionado una ciudad"
  );

  console.assert(
    validarCiudad("Buenos Aires") === "",
    "La función validar ciudad no funcióno con una ciudad válida"
  );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "Este campo debe tener al menos 1 caracter",
    "Validar descripción del regalo no validó que hayas escrito más de 1 caracter"
  );

  console.assert(
    validarDescripcionRegalo(
      "acbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghij"
    ) === "Este campo debe tener menos de 100 caracteres",
    "Validar descripción del regalo no validó que hayas escrito menos de 100 caracteres"
  );

  console.assert(
    validarDescripcionRegalo("Descripcion") === "",
    "La función validar descripción regalo no funcionó con una descripción correcta"
  );

  console.assert(
    validarDescripcionRegalo(",.,.") ===
      "Este campo solo puede contener letras y números",
    "La función validar descripción regalo no validó que fuera solo números y letras"
  );
}

probarValidarDescripcionRegalo();
