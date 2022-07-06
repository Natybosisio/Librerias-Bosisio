
function verificarReservasUsuario() {

   let inputDni = document.getElementById("inputDni").value;

   let dniUsuario = inputDni
   let validado = validadDni(dniUsuario)
   if (validado == false) {

      return
   }

   //ACA QUIERO que si apreta mas de una vez en consultar no vuelva a ponerlo 
   for (let dniR of reservas) {

      if (dniR.reservaDni() == dniUsuario) {
         let resultadosPorId = document.getElementById("resultadosPorId");

         resultadosPorId.innerHTML +=
            "<tr>" +
            "<th scope=\"row\">" + dniR.reservaDni() + "</th>" +
            "<td>" + dniR.dia + "</td>" +
            "<td>" + dniR.hora + "</td>" +
            "<td>" + dniR.nombre + "</td>" +
            "</tr>"

      }

   }

}


function validadDni(dni) {
   let esDniValido = true
   if (dni.length < 7 || dni.length > 12) {
      Swal.fire({
         title: 'Ingrese un DNI valido',
         showClass: {
            popup: 'animate__animated animate__fadeInDown'
         },
         hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
         }
      })
      esDniValido = false
   }
   return esDniValido
}