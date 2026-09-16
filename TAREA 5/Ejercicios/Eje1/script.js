document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formRegistro");
  const tabla = document.getElementById("tablaRegistros");
  const modalElemento = document.getElementById("nuevoRegistroModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalElemento);
  const toast = bootstrap.Toast.getOrCreateInstance(
    document.getElementById("registroToast")
  );

  let contador = 5;

  function clasePrioridad(prioridad) {
    switch (prioridad) {
      case "Crítico":
        return "text-bg-danger";
      case "Advertencia":
        return "text-bg-warning";
      default:
        return "text-bg-success";
    }
  }

  function claseEstado(estado) {
    switch (estado) {
      case "Pendiente":
        return "text-bg-warning";
      case "En revisión":
        return "text-bg-info";
      default:
        return "text-bg-success";
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const evento = document.getElementById("evento").value.trim();
    const area = document.getElementById("area").value.trim();
    const prioridad = document.getElementById("prioridad").value;
    const estado = document.getElementById("estado").value;

    const ahora = new Date();
    const fecha = ahora.toLocaleString("es-PE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const numero = String(contador).padStart(3, "0");

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>#${numero}</td>
      <td>${evento}</td>
      <td>${area}</td>
      <td>${fecha}</td>
      <td><span class="badge ${clasePrioridad(prioridad)}">${prioridad}</span></td>
      <td><span class="badge ${claseEstado(estado)}">${estado}</span></td>
    `;

    tabla.prepend(fila);
    contador++;

    form.reset();
    form.classList.remove("was-validated");
    modal.hide();
    toast.show();
  });
});
