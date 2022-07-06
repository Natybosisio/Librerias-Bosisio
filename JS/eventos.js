
//ME CONECTO CON EL IMPUT DNI PARA BUSCAR RESERVAS
let btnConsultarDni = document.getElementById("btnConsultarDni")
btnConsultarDni.addEventListener("click", verificarReservasUsuario)

//ME CONECTO CON EL OPTION DIA Y HORA
const diasHabilitados = document.querySelector("#diasHabilitados")
const horasHabilitadas = document.querySelector("#horasHabilitadas")
const fecha = document.querySelector("#fecha")

//RELACIONO EL NOMBRE Y EL DNI 
const nombreUsuario = document.getElementById("nombre")
const dniUsuario = document.getElementById("dni")

//CONFIRMO QUE EL USUARIO ALGO COMPLETO EN NOMBRE
nombreUsuario.addEventListener("blur", () => {
  if (nombreUsuario.value == "") {
    //  nombreUsuario.className = "campoIncompeto" ESTO NO ME FUNCIONA Y NO SE COMO HACERLO DESDE CSS
    Swal.fire({
      title: 'Complete el campo Nombre',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }

})

//CHEQUEO QUE HAYA PUESTO UNA CANTIDAD DE NUMEROS VALIDOS
dniUsuario.addEventListener("blur", () => {
  if (dniUsuario.value.length < 7 || nombreUsuario.value.length > 8) {
    Swal.fire({
      title: 'Ingrese un DNI valido',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

})

//BOTON PARA ELEGIR LAS OPCIONES SELECCIONADAS X EL USUARIO
const btnConfirmar = document.getElementById("btnConfirmar")
btnConfirmar.addEventListener("click", mostrarReserva)

//ACA GENERO SE CARGUEN LAS OPCIONES QUE ELIGIO EL USUARIO
const resultadoUs = document.querySelector("#resultadoUs")

//boton de pagar- quisiera unificar todo en un solo boton
const btnAbonar = document.querySelector("#btnAbonar")
btnAbonar.addEventListener("click", alertPago)