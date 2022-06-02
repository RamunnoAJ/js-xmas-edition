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
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debes seleccionar una ciudad",
    "Validar ciudad no validó que hayas seleccionado una ciudad"
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
      "acbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghijacbdefghija"
    ) === "Este campo debe tener menos de 500 caracteres",
    "Validar descripción del regalo no validó que hayas escrito menos de 500 caracteres"
  );
}

probarValidarDescripcionRegalo();
