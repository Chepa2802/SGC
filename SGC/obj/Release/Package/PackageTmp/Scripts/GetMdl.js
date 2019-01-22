var M;
function Smodel()
{
    var MultiEntidad = []
    var MacroEntidad = []
    var Entidad = []
    var Atributo = []

    var p_MultiEntidad = 0
    var p_MacroEntidad = 0
    var p_Entidad = 0
    var p_Atributo = 0

    $('[atributo]').each(function () {
        console.log($(this))
        var item = $(this).attr('atributo').split('.');
        var nivel = item.length;
        switch (nivel) {
            case 2:
                p_Entidad = 0;
                p_Atributo = 1; break;

            case 3:
                p_MacroEntidad = 0;
                p_Entidad = 1;
                p_Atributo = 2; break;

            case 4:
                p_MultiEntidad = 0;
                p_MacroEntidad = 1;
                p_Entidad = 2;
                p_Atributo = 3; break;
        }

        if (nivel > 3) {
            var mm_find = true;
            for (var mm = 0; mm < MultiEntidad.length; mm++) {
                if (MultiEntidad[mm] == item[p_MultiEntidad]) { mm_find = false; break; }
            }
            if (mm_find) { MultiEntidad[MultiEntidad.length] = item[p_MultiEntidad]; }
        }

        if (nivel > 2) {
            var me_find = true;
            for (var me = 0; me < MacroEntidad.length; me++) {
                if (nivel > 3) {
                    if (MacroEntidad[me] == (item[p_MultiEntidad] + '>>>' + item[p_MacroEntidad])) { me_find = false; break; }
                }
                else {
                    if (MacroEntidad[me] == item[p_MacroEntidad]) { me_find = false; break; }
                }
            }
            if (me_find) {
                if (nivel > 3) {
                    MacroEntidad[MacroEntidad.length] = (item[p_MultiEntidad] + '>>>' + item[p_MacroEntidad]);
                }
                else {
                    MacroEntidad[MacroEntidad.length] = item[p_MacroEntidad];
                }
            }
        }

        var e_find = true;
        for (var e = 0; e < Entidad.length; e++) {
            if (nivel > 2) {
                if (Entidad[e] == (item[p_MacroEntidad] + '>>>' + item[p_Entidad])) { e_find = false; break; }
            }
            else {
                if (Entidad[e] == item[p_Entidad]) { e_find = false; break; }
            }
        }
        if (e_find) {
            if (nivel > 2) {
                Entidad[Entidad.length] = (item[p_MacroEntidad] + '>>>' + item[p_Entidad]);
            }
            else {
                Entidad[Entidad.length] = item[p_Entidad];
            }
        }

        var a_find = true;
        for (var a = 0; a < Atributo.length; a++) {
            if (nivel > 1) {
                if (Atributo[a] == (item[p_Entidad] + '>>>' + item[p_Atributo])) { a_find = false; break; }
            }
            else {
                if (Atributo[a] == item[p_Atributo]) { a_find = false; break; }
            }
        }
        if (a_find) {
            if (nivel > 1) {
                var cuenta = 0;
                var dato = '';
                for (var jj = 0; jj < $(this).val().length; jj++) {
                    if ($(this).val()[jj] == '"') { dato = dato + "''"; cuenta++; } else { dato = dato + $(this).val()[jj]; }
                }
                $(this).val(dato)
                Atributo[Atributo.length] = (item[p_Entidad] + '>>>' + item[p_Atributo] + ': "' + $(this).val().replace('"', "''").replace('CrearEntidad', '')) + '"';
            }
            else {
                Atributo[Atributo.length] = item[p_Atributo];
            }

        }
    });

    var script = '';
    for (var e = 0; e < Entidad.length; e++) {
        if (e > 0) { script = script + 'CrearEntidad'; }
        script = script + ' var ';
        var oEntidad = '';
        if (Entidad[e].split('>>>').length > 1) { oEntidad = Entidad[e].split('>>>')[1]; } else { oEntidad = Entidad[e].split('>>>')[0]; }
        script = script + oEntidad + ' = { ';

        for (var a = 0; a < Atributo.length; a++) {
            var oAtributo = '';
            var oEntidadAtributo = '';
            if (Atributo[a].split('>>>').length > 1) { oEntidadAtributo = Atributo[a].split('>>>')[0]; oAtributo = Atributo[a].split('>>>')[1]; } else { oAtributo = Atributo[a].split('>>>')[0]; }

            if (oEntidad == oEntidadAtributo) {
                script = script + oAtributo.split('\n').join(' ') + ', ';
            }
        }
        script = script + ' } ';
    }
    for (var c = 0; c < script.split('CrearEntidad').length; c++) {
        eval(script.split('CrearEntidad')[c]);
        //alert(script.split('CrearEntidad')[c]);
    }

    script = '';
    for (var me = 0; me < MacroEntidad.length; me++) {
        if (me > 0) { script = script + 'CrearMacroEntidad'; }
        script = script + ' var ';
        var oMacroEntidad = '';
        if (MacroEntidad[me].split('>>>').length > 1) { oMacroEntidad = MacroEntidad[me].split('>>>')[1]; } else { oMacroEntidad = MacroEntidad[me].split('>>>')[0]; }
        script = script + oMacroEntidad + ' = { ';

        for (var e = 0; e < Entidad.length; e++) {
            var oEntidad = '';
            var oMacroEntidadEntidad = '';
            if (Entidad[e].split('>>>').length > 1) { oMacroEntidadEntidad = Entidad[e].split('>>>')[0]; oEntidad = Entidad[e].split('>>>')[1]; } else { oEntidad = Entidad[e].split('>>>')[0]; }

            if (oMacroEntidad == oMacroEntidadEntidad) {
                script = script + oEntidad + ': ' + oEntidad + ', ';
            }
        }
        script = script + ' } ';
    }
    for (var c = 0; c < script.split('CrearMacroEntidad').length; c++) {
        eval(script.split('CrearMacroEntidad')[c]);
        //alert(script.split('CrearMacroEntidad')[c]);
    }

    script = '';
    for (var me = 0; me < MultiEntidad.length; me++) {
        if (me > 0) { script = script + 'CrearMultiEntidad'; }
        script = script + ' var ';
        var oMultiEntidad = '';
        if (MultiEntidad[me].split('>>>').length > 1) { oMultiEntidad = MultiEntidad[me].split('>>>')[1]; } else { oMultiEntidad = MultiEntidad[me].split('>>>')[0]; }
        script = script + oMultiEntidad + ' = { ';

        for (var e = 0; e < MacroEntidad.length; e++) {
            var oMacroEntidad = '';
            var oMultiEntidadEntidad = '';
            if (MacroEntidad[e].split('>>>').length > 1) { oMultiEntidadEntidad = MacroEntidad[e].split('>>>')[0]; oMacroEntidad = MacroEntidad[e].split('>>>')[1]; } else { oMacroEntidad = MacroEntidad[e].split('>>>')[0]; }

            if (oMultiEntidad == oMultiEntidadEntidad) {
                script = script + oMacroEntidad + ': ' + oMacroEntidad + ', ';
            }
        }
        script = script + ' } ';
    }
    for (var c = 0; c < script.split('CrearMultiEntidad').length; c++) {
        eval(script.split('CrearMultiEntidad')[c]);
        //alert(script.split('CrearMultiEntidad')[c]);
    }
    M = { mme: mme };
}