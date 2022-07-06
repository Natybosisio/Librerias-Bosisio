
function cajaReservas() {
  if (horasHabilitadas.value < 18) {
    precio = 1200
    console.log("ingresan a caja" + "" + precio)
  } else {
    precio = 1500
    console.log("ingresan a caja" + "" + precio)
  }
  return precio
}
