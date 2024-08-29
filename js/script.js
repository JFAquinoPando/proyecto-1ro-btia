const formulario = document.querySelector("form")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    /* comentario */
    const datos = new FormData(formulario)
    fetch("guardar.php",{
        method: "POST",
        body: datos
    }).then(
        cabecera => {
            console.log("ver que tiene: ",cabecera);
            return cabecera.json()
        }
    ).then(
        datos => {
            console.log(datos);
            if (datos.respuesta == "ok") {
                confetti()
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Loco, no guardaste nada!",
                  });
            }
        }
    )
})