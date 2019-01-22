
$("input[type=text]").focus(function () {
    this.select();
});

function CambiarEstado(id,msg) {

    var button = $('#btnstdo_' + id);
    if (button.attr('title') == "Habilitado") {
        button.removeClass('btn-success');
        button.addClass('btn-danger');
        button.attr('title', 'Deshabilitado');
        button.html('<strong><i class="fa fa-remove"></i></strong>');
    }
    else {
        button.removeClass('btn-danger');
        button.addClass('btn-success');
        button.attr('title', 'Habilitado');
        button.html('<strong><i class="fa fa-check"></i></strong>');
    }

    button = $('#btnstdoac_' + id);
    if (button.attr('title') == "Habilitar") {
        button.removeClass('btn-success');
        button.addClass('btn-danger');
        button.attr('title', 'Deshabilitar');
        button.html('<i class="fa fa-remove"></i>');
    }
    else {
        button.removeClass('btn-danger');
        button.addClass('btn-success');
        button.attr('title', 'Habilitar');
        button.html('<i class="fa fa-check"></i>');
    }
    setTimeout('Mensaje("'+msg+'")', 1000);

}

function CambiarEstadoPerfil(id, msg) {

    button = $('#btnstdoac_' + id);
    if (button.attr('title') == "Habilitar") {
        button.removeClass('btn-success');
        button.addClass('btn-danger');
        button.attr('title', 'Deshabilitar');
        button.html('<i class="fa fa-remove"></i> Deshabilitar');
    }
    else {
        button.removeClass('btn-danger');
        button.addClass('btn-success');
        button.attr('title', 'Habilitar');
        button.html('<i class="fa fa-check"></i> Habilitar');
    }
    setTimeout('Mensaje("' + msg + '")', 1000);

}



function MensajePeticion(msg) {
    
    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">' + msg + '</div>',
        'buttons': {
            'go': {
                'class': 'btn btn-default',
                'action': function () { }
            }
        }
    });

    return false;
}

function MensajeReload(msg) {

    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">' + msg + '</div>',
        'buttons': {
            'Entiendo': {
                'class': 'btn btn-default',
                'action': function () { Consultar(); }
            }
        }
    });

    return false;
}

function MensajeGasto(msg) {

    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">' + msg + '</div>',
        'buttons': {
            'Entiendo': {
                'class': 'btn btn-default',
                'action': function () { AC_Accion(); }
            }
        }
    });

    return false;
}

function MensajeTerminado(msg) {

    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">' + msg + '</div>',
        'buttons': {
            'Ir a consulta': {
                'class': 'btn btn-primary',
                'action': function () { Consultar(); }
            },
            'Permanecer aquí': {
                'class': 'btn btn-default',
                'action': function () { MensajePeticion('Cargando la página...'); location.reload(); }
            }
        }
    });

    return false;
}

function MensajeTerminadoPromocion(msg) {

    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">' + msg + '</div>',
        'buttons': {
            'Ir a consulta': {
                'class': 'btn btn-primary',
                'action': function () { Consultar(); }
            },
            'Permanecer aquí': {
                'class': 'btn btn-default',
                'action': function () { MensajePeticion('Cargando la página...'); location.reload(); }
            },
            'Ver': {
                'class': 'btn btn-success',
                'action': function () { Ver(); }
            }
        }
    });

    return false;
}

function Mensaje(msg)
{
    $('#confirmOverlay').remove();
    $.confirm({
        'title': '<section class="content-header"><h4><i class="glyphicon glyphicon-exclamation-sign"></i> Notificación<small> ' + Area + '</small></h4></section>',
        'message': '<div class="modal-body text-center">'+msg+'</div>',
        'buttons': {
            'Entiendo': {
                'class': 'btn btn-default',
                'action': function () { }
            }
        }
    });

    return false;
}

function Entiendo() {
    $('#confirmOverlay').remove();
}

function NuevaPeticion(msg) {
    
    MensajePeticion(msg)
    
}

function EnProceso(msg)
{
    MensajePeticion(msg)
}

function ProcesoTerminado(msg) {
    MensajeTerminado(msg)
}

function ProcesoTerminadoPromocion(msg) {
    MensajeTerminadoPromocion(msg)
}

function ErrorApp(error) {
    Mensaje('Ha sucedido un incidente en la petición solicitada<br/><p Style="color:darkred"><i class="fa fa-info-circle"></i> ' + error + '</p>');
}

function ErrorBase(error) {
    Mensaje(error + '<br/><p Style="color:darkred"><i class="fa fa-info-circle"></i> Ha sucedido un incidente externo a la aplicación</p>');
}

function Vacio(id) {
    if ($('#'+id).val() == '') { return true; } else { return false; }
}

function Numero(id) {

    var result = true;
    for (var i = 0; i < $('#' + id).val().length; i++) {
        if (isNaN(parseFloat($('#' + id).val()[i]))) {
            result = false;
            break;
        }
    }
    return result;
}

function Email(id) {
    if ($('#' + id).val().length > 0) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (expr.test($('#' + id).val())) { return true; } else { return false; }
    }
    return true;
}

function Longitud(id, len, precision) {
    switch (precision) {
        case 1: if ($('#' + id).val().length == len) { return true; } else { return false; }
        case 2: if ($('#' + id).val().length <= len) { return true; } else { return false; }
        case 3: if ($('#' + id).val().length >= len) { return true; } else { return false; }
    }
}

function Letra(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function KeyNumero(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || key == 8 || key == 0)
}

function KeyDecimal(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || key == 46 || key == 8 || key == 0)
}

function ConvertDecimal6(e) {
    if ($('#' + e.currentTarget.id).val() == "") { $('#' + e.currentTarget.id).val(0); }
    $('#' + e.currentTarget.id).val(parseFloat($('#' + e.currentTarget.id).val()).toFixed(6));
}

function ConvertDecimal3(e) {
    if ($('#' + e.currentTarget.id).val() == "") { $('#' + e.currentTarget.id).val(0); }
    $('#' + e.currentTarget.id).val(parseFloat($('#' + e.currentTarget.id).val()).toFixed(3));
}

function ConvertDecimal2(e) {
    if ($('#' + e.currentTarget.id).val() == "") { $('#' + e.currentTarget.id).val(0); }
    $('#' + e.currentTarget.id).val(parseFloat($('#' + e.currentTarget.id).val()).toFixed(2));
}

function Porc100_6(e) {
    if (parseFloat($('#' + e.currentTarget.id).val()) > 100) {
        $('#' + e.currentTarget.id).val('100.000000')
    }
}

function Porc100_3(e) {
    if (parseFloat($('#' + e.currentTarget.id).val()) > 100) {
        $('#' + e.currentTarget.id).val('100.000')
    }
}

function Porc100_2(e) {
    if (parseFloat($('#' + e.currentTarget.id).val()) > 100) {
        $('#' + e.currentTarget.id).val('100.00')
    }
}

function PrimeraEnMayuscula(e) {
    var Palabras = $('#' + e.currentTarget.id).val().split(' ');
    var Valor = "";
    for (var i = 0; i < Palabras.length; i++) {
        Valor += Palabras[i].charAt(0).toUpperCase() + Palabras[i].slice(1);
        if (Palabras.length > 1 && i < Palabras.length -1) { Valor += ' '; }
    }
    $('#' + e.currentTarget.id).val(Valor);
}