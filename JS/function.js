
function cargarDias() {
  diasHabilitados.innerHTML = ""
  for (const dia of semanaHabil) {
    const option = document.createElement("option")
    option.innerText = dia
    option.id = dia + "dia"
    diasHabilitados.append(option)
  }
}
cargarDias()


function cargarHorario() {
  horasHabilitadas.innerHTML = ""
  for (const hora of horariosDisponibles) {
    const option = document.createElement("option")
    option.innerText = hora
    option.id = hora + "horas"
    horasHabilitadas.append(option)
  }
}
cargarHorario()


//con esta funcion el usuario confirma la reserva y es cargada en mi array de reservas
function mostrarReserva() {
  dia = diasHabilitados.value;
  hora = horasHabilitadas.value;
  nombre = nombreUsuario.value;
  dni = dniUsuario.value;

  if (nombre !== "" && dni !== "") {
    resultadoUs.innerHTML =
      "<tr>" +
      "<td>" + diasHabilitados.value + "</td>" +
      "<td>" + horasHabilitadas.value + "hs", "</td>" +
      "</tr>"
    registrarReserva()

  }

  else {
    Swal.fire({
      title: 'Complete todos los campos',
      icon: 'error',
      confirmButtonText: 'error'
    })
  }
}


function registrarReserva() {

  let nuevaReserva = new Reserva(dia, hora, nombre, dni)
  let esValidoRegistrarReserva = compararReserva()
  if (esValidoRegistrarReserva) {
    reservas.push(nuevaReserva)
  }
  setTimeout(() => {
    Swal.fire({
      title: "para registrar su reserva deberá abonar",
      text: "el total a pagar es" + '${precio}',
      toast: false,
      allowEnterKey: true,
      showCancelButton: true,

    })
  }, 2000),
    cajaReservas()

}


//con esta funcion informo al usuario si fue reservada previamente
function compararReserva() {

  let existeReserva = buscarCoincidencia(dia, hora)
  if (existeReserva) {
    Swal.fire({
      title: 'Lo siento',
      text: 'ese dia y horario ya fue reservado',
      icon: 'warning',
      confirmButtonText: 'vuelve a intentar'
    })

  }
  return existeReserva

}

//verificaremos si el dia y la hora ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
  let existeCita = false

  for (let citaAux of reservas) {
    citaAux.informacion()
    existeCita = citaAux.verificarExistencia(dia, hora)
    if (existeCita) {
      break
    }
  }
  return existeCita
}

//finalización de compra 
function alertPago() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    text: "Esta a punto de abonar",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Continuamos?',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      let cargar = localStorage.setItem("reservas", JSON.stringify(reservas))//NO FUNCIONA
      reservas.push(cargar)
      console.log("Se agregó una reserva nueva.")
      swalWithBootstrapButtons.fire(
        'Listo!',
        'Su reserva quedo registrada.',
        'success'
      )
      cajaReservas()
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelada',
        'Esperamos verte pronto por aca :)',
        'error'
      )
    }
  })

}






