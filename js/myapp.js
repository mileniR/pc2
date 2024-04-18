const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES DE USUARIO */
const credenciales = {
    profesor: { usuario: "profesor123", pass: "profesor123" },
    alumno: { usuario: "alumno456", pass: "alumno456" }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    
    // Verificar si es un profesor
    if (valueUsuario == credenciales.profesor.usuario) {
        if (valuePassword == credenciales.profesor.pass) {
            // Iniciar sesión como profesor
            location.href = "dashboard_profe.html";
            localStorage.setItem("userLogueado", "profesor");
        } else {
            mostrarError("Contraseña incorrecta");
        }
    }
    // Verificar si es un alumno
    else if (valueUsuario == credenciales.alumno.usuario) {
        if (valuePassword == credenciales.alumno.pass) {
            // Iniciar sesión como alumno
            location.href = "dashboard_alumno.html";
            localStorage.setItem("userLogueado", "alumno");
        } else {
            mostrarError("Contraseña incorrecta");
        }
    }
    // Usuario no encontrado
    else {
        mostrarError("Usuario no encontrado");
    }
});

function mostrarError(mensaje) {
    Swal.fire({
        title: "ERROR",
        text: mensaje,
        icon: "error"
    });
}
