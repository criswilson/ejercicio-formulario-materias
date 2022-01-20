let alumnos = [
  {
    nombre: `Cristián Wilson`,
    email: `cristian.wilson@gmail.com`,
    materia: `Física 3`,
  },
  {
    nombre: `Karina Olga`,
    email: `karinaaaa@gmail.com`,
    materia: `Física 1`,
  },
  {
    nombre: `Jorge Wolkowiski`,
    email: `jorgito56@gmail.com`,
    materia: `Cálculo 2`,
  },
  {
    nombre: `Armando Guayaquil`,
    email: `asdelfratacho@gmail.com`,
    materia: `Literatura`,
  },
  {
    nombre: `Mauricio Macri`,
    email: `mauricabj12@gmail.com`,
    materia: `Recreo`,
  },
];

const boton = document.querySelector(`.boton-confirmar`);
const contenedor = document.querySelector(`.grid-container`);

let htmlCode = "";

for (alumno in alumnos) {
  let datos = alumnos[alumno];
  let nombre = datos[`nombre`];
  let email = datos[`email`];
  let materia = datos[`materia`];
  htmlCode += `<div class="grid-item nombre">${nombre}</div>
      <div class="grid-item email">${email}</div>
      <div class="grid-item materia">${materia}</div>
      <div class="grid-item semana">
        <select name="" id="" class="semana-elegida">
          <option value="Semana 1">Semana 1</option>
          <option value="Semana 2">Semana 2</option>
        </select>
      </div>`;
}

contenedor.innerHTML = htmlCode;

boton.addEventListener(`click`, () => {
  let confirmar = confirm(`¿Realmente quieres confirmar las mesas?`);
  if (confirmar) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(`.semana`);
    let semanasElegidas = document.querySelectorAll(`.semana-elegida`);
    for (elemento in elementos) {
      semana = elementos[elemento];
      semana.innerHTML = semanasElegidas[elemento].value;
    }
  }
});
