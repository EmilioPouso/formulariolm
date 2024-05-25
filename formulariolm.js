function calcularNota() {
    let nombre = document.querySelector("#nombre").value;
    let ejercicios = parseFloat(document.querySelector("#ejercicios").value);
    let teorico = parseFloat(document.querySelector("#teorico").value);
    let practico = parseFloat(document.querySelector("#practico").value);
    let proyecto = parseFloat(document.querySelector("#proyecto").value);

    if (isNaN(ejercicios) || isNaN(teorico) || isNaN(practico) || isNaN(proyecto)) {
        alert("Por favor, ingrese todas las notas.");
        return;
    }

    let notaFinal = (ejercicios * 0.2) + (teorico * 0.2) + (practico * 0.3) + (proyecto * 0.3);
    let resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.style.display = "block";

    if (notaFinal >= 5) {
        resultadoDiv.className = "form-field aprobado";
        resultadoDiv.textContent = `${nombre}, has aprobado con una nota de ${notaFinal.toFixed(2)}`;
    } else {
        resultadoDiv.className = "form-field suspendido";
        resultadoDiv.textContent = `${nombre}, has suspendido con una nota de ${notaFinal.toFixed(2)}`;
    }
}

function borrar() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#ejercicios").value = "";
    document.querySelector("#teorico").value = "";
    document.querySelector("#practico").value = "";
    document.querySelector("#proyecto").value = "";
    let resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.style.display = "none";
}
