const VENTAS_BASE = 5

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE
        comision = ventasExtras * (precioProducto * 0.1)
    }

    return comision
}

function validarNumero(idInput) {
    let componente = document.getElementById(idInput);
    let valor = componente.value.trim();
    let idMensaje = idInput.replace("txt", "error");
    let mensaje = document.getElementById(idMensaje);

    if (valor === "") {
        mensaje.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    if (!/^\d+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números enteros.";
        return false;
    }

    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos permitidos.";
        return false;
    }

    mensaje.textContent = "";
    return true;
}

function validarVentas() {
    let ids = ["txtSueldoBase", "txtVentas", "txtPrecio"];
    let valido = true;

    for (let i = 0; i < ids.length; i++) {
        if (!validarNumero(ids[i])) {
            valido = false;
        }
    }

    return valido;
}



function calcular() {

    if (validarVentas() == false) {
        return;
    }
    //Recuperamos propiedades de las cajas de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    //Recuperamos los valores de las cajas de texto
    ///let sueldoBaseStr = componenteSueldoBase.value;

    //let sueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let precioProductoStr = recuperarTexto("txtPrecio");

    //let numeroVentasStr = componenteVentas.value;
    //let precioProductoStr = componentePrecio.value;

    //convertimos el teexto a numero
    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    //let spSueldoBase = document.getElementById("spSueldoBase");
    //let spComision = document.getElementById("spComision");
    //let spTotal = document.getElementById("spTotal");

    //spSueldoBase.textContent = sueldoBase;
    //spComision.textContent = comision;
    //spTotal.textContent = total;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}  