const DateTime = luxon.DateTime

const fechaActual = DateTime.now()


function mostrarFechaActual() {
    fecha.innerHTML = ""
    let fechaHoy = fechaActual.toLocaleString(DateTime.DATE_HUGE)
    const div = document.createElement("div")
    div.innerText = dia
    div.id = dia + "dia"
    fecha.append(fechaHoy)

}
mostrarFechaActual()

