@model Siscom.Web.Areas.Sistemas.Models.EmpleadoModel

@{
    ViewBag.Title = "Edicion Empleado";
}

<div class="pageheader">
    <h1>
        @if(Model.Action == Siscom.Web.Models.BaseModel.ActionType.Create)
        { @("Nuevo Registro "); }
        else
        { @("Editar Registro"); }
    </h1>
    <div class="breadcrumb-wrapper hidden-xs">
        <span class="label">Ud esta aquí:</span>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">Archivo</a>
            </li>
            <li>Mantenimiento</li>
            <li class="active">Empleados</li>            
        </ol>
    </div>
</div>
<section id="main-content" class="animated fadeInUp">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Datos Personales</h3>
                    <div class="actions pull-right">
                        <i class="fa fa-chevron-down"></i>
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal form-border" id="form">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Codigo</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.CodEmpleadoVc,
                                    new
                                    {
                                        maxLength = "8",
                                        propertyname = "Empleado.CodEmpleadoVc",
                                        @class = "form-control",
                                        placeholder="Codigo de Empleado",
                                        @readonly="readonly"
                                    })
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">Nombres</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.NombreVc,
                                    new
                                    {
                                        maxLength = "90",
                                        propertyname = "Empleado.NombreVc",
                                        @class = "form-control",
                                        placeholder="Nombres"
                                    })
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">Apellidos</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.ApellidosVc,
                                    new
                                    {
                                        maxLength = "90",
                                        propertyname = "Empleado.ApellidosVc",
                                        @class = "form-control",
                                        placeholder="Apellidos"
                                    })
                            </div>
                        </div>

                        <div class="form-group">
                        <label class="col-sm-3 control-label">Tipo Doc Identidad</label>
                        <div class = "col-sm-2">
                                @Html.DropDownListFor(m => m.CmbTDocIdentidadEmple, 
                                new SelectList(Model.CmbTDocIdentidadEmple, "Value", "Text", Model.CmbTDocIdentidadEmple.First().Selected), 
                                new 
                                { 
                                    propertyname = "Model.CmbTDocIdentidadEmple", 
                                    @class = "form-control" 
                                })
                        </div>
                        <div class="col-sm-4">
                                @Html.TextBoxFor(m => m.Empleado.NroDocIdentidadVc,
                                    new
                                    {
                                        maxLength = "11",
                                        propertyname = "Empleado.NroDocIdentidadVc",
                                        @class = "form-control",
                                        placeholder="Nro Documento de Identidad"
                                    })
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-sm-3 control-label">Estado</label>
                        <div class = "col-sm-2">
                                @Html.DropDownListFor(m => m.CmbTEstadoEmple, 
                                new SelectList(Model.CmbTEstadoEmple, "Value", "Text", Model.CmbTEstadoEmple.First().Selected), 
                                new 
                                { 
                                    propertyname = "Model.CmbTEstadoEmple", 
                                    @class = "form-control" 
                                })
                        </div>
                        <label class="col-sm-1 control-label">Sucursal</label>
                        <div class = "col-sm-3">
                                @Html.DropDownListFor(m => m.CmbTSucursalEmple, 
                                new SelectList(Model.CmbTSucursalEmple, "Value", "Text", Model.CmbTSucursalEmple.First().Selected), 
                                new 
                                { 
                                    propertyname = "Model.CmbTSucursalEmple", 
                                    @class = "form-control" 
                                })
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-sm-3 control-label">Tipo</label>
                        <div class = "col-sm-2">
                                @Html.DropDownListFor(m => m.CmbTipoEmple, 
                                new SelectList(Model.CmbTipoEmple, "Value", "Text", Model.CmbTipoEmple.First().Selected), 
                                new 
                                { 
                                    propertyname = "Model.CmbTipoEmple", 
                                    @class = "form-control" 
                                })
                        </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="main-content" class="animated fadeInUp">
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Dirección Legal</h3>
                    <div class="actions pull-right">
                        <i class="fa fa-chevron-down"></i>
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal form-border" id="form">
                        <div class="form-group">
                            <label class="col-sm-4 control-label">Telefono</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.TelefonoVc,
                                    new
                                    {
                                        maxLength = "9",
                                        propertyname = "Empleado.TelefonoVc",
                                        @class = "form-control",
                                        placeholder="Telefono"
                                    })
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-4 control-label">Email</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.EmailVc,
                                    new
                                    {
                                        maxLength = "100",
                                        propertyname = "Empleado.EmailVc",
                                        @class = "form-control",
                                        placeholder="Email",
                                        type="email"
                                    })
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-4 control-label">Direccion</label>
                            <div class="col-sm-6">
                                @Html.TextBoxFor(m => m.Empleado.DireccionVc,
                                    new
                                    {
                                        maxLength = "50",
                                        propertyname = "Empleado.DireccionVc",
                                        @class = "form-control",
                                        placeholder="Dirección"
                                    })
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Otros Datos</h3>
                    <div class="actions pull-right">
                        <i class="fa fa-chevron-down"></i>
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal form-border" id="form">
                        <div class="form-group">
                        <label class="col-sm-5 control-label">Transporte</label>
                        <div class = "col-sm-5">
                                @Html.DropDownListFor(m => m.CmbTransporteEmple, 
                                new SelectList(Model.CmbTransporteEmple, "Value", "Text", Model.CmbTransporteEmple.First().Selected), 
                                new 
                                { 
                                    propertyname = "Model.CmbTransporteEmple", 
                                    @class = "form-control" 
                                })
                        </div>
                        </div>

                        <div class="form-group">
                        <label class="col-sm-5 control-label">Placa</label>
                            <div class="col-sm-5">
                                @Html.TextBoxFor(m => m.Empleado.PlacaVehiculoVc,
                                    new
                                    {
                                        maxLength = "50",
                                        propertyname = "Empleado.PlacaVehiculoVc",
                                        @class = "form-control",
                                        placeholder="N° de Placa"
                                    })
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="panel-body text-center">
    <button id="guardarBtn" type="button" class="btn btn-success"><i class="fa  fa-save"></i> Guardar</button>                    
    <button id="agregarBtn" type="button" class="btn btn-default"><i class="fa fa-reply"></i> Cancelar</button>
</div>
<!--Load these page level functions-->
@section Scripts {
    @Scripts.Render("~/plugins/validate")    
    <script type="text/javascript" src="@Url.Content("~/Scripts/UpdateField.js")"></script>   
    <script type="text/javascript" src="@Url.Content("~/Scripts/BindingInput.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/BindingOutput.js")"></script>

    <script>
        var guid = "@Model.Id";
        var mainAction = "@Model.Action";

        $(document).ready(function () {
            SetupControls();
        });

        function SetupControls() {
            $("[propertyname]").change(function () { UpdateField(this, "Empleado"); });
            SetValidation("Empleado");
        }

    </script>
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ﻿@model  Siscom.Web.Areas.Global.Models.ProductoModel

@{
    ViewBag.Title = "Productos";
}

<div class="pageheader">
<!--Region Cabecera de la Pagina-->
    <h1>Buscar IMEI, ICC, serie</h1>
    <div>
        <span class="label" style="color:rgb(144, 157, 163);padding:0px">USTED ESTÁ AQUÍ: </span>
        <ol class="breadcrumb">
            <li>
                <a href="#">Almacén</a>
            </li>
            <li>
                <a href="#">Consultas</a>
            </li>
            <li>
                <a href="#" class="active">IMEI, ICC, serie</a>
            </li>
        </ol>
    </div>
</div>
<!--Region Cuerpo de la Pagina-->
<section id="main-content" class="animated fadeInUp">
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><h4><strong>Buscar producto</strong></h4></h3>
                    <div class="actions pull-right">                        
                        <i class="fa fa-chevron-down"></i>
                    </div>
                </div>
                <div class="panel-body">
                    <div class="form-horizontal form-border" role="form">
                        <div class="col-sm-12 form-group">
                            <div class="col-sm-5">
                                <input id="claveProducto" type="text" class="form-control" placeholder="Ingrese IMEI, ICC, serie" maxlength="25"/>
                            </div>
                            <div class="col-sm-3">
                                <button id="btnBuscar" class="btn btn-info" onclick="Buscar();">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>        
    </div>

    <!--Lista de Traslados-->
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div id="Productos" class="panel-body data-toggle="collapse">
                    @Html.Partial("VP_GrillaListaProductos", Model)
                </div>
            </div>
        </div>
    </div>

</section>

<!--Modal para mensajes-->
<div class="modal fade" id="ModalSave" style="overflow: scroll;" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title" id="myModalLabel" style="color:#0D588E">Mensaje de IMEI/ICC/serie</h3>
            </div>
            <div class="modal-body" id="SaveMensaje">
            </div>
        </div>
    </div>
</div>
<!--FIN-->

@section Styles {
    @Styles.Render("~/plugins/dataTablesCSS")
}

<!--Load these page level functions-->
@section Scripts {
    @Scripts.Render("~/plugins/dataTables")
    @Scripts.Render("~/plugins/dataTables-bootstrap")

    <script>
        var guid = "@Model.Id";
        var mainAction = "@Model.Action";

        $(document).ready(function () {
            $('#claveProducto').keypress(enterBuscarProducto);
            $('#ProductosTable').dataTable();
        });

        function enterBuscarProducto(evt) {
            if (evt.which == 13)
            {
                Buscar();
                return false;
            }
            return Numbers(evt);
        }

        function Numbers(evt) { if (evt.which == 13) { return true; } if (!/^[0-9]+$/.test(String.fromCharCode((evt.which) ? evt.which : event.keyCode))) { return false; } }

        function Buscar() {
            $("#SaveMensaje").html('<i class="fa fa-refresh" style="color:darkgreen"></i> Buscando productos, espere un momento...');
            $("#ModalSave").modal('show');
            var data = { criterio: $('#claveProducto').val() };
            $.ajax({
                type: "POST",
                url: window.GetControllerUrl("Buscar", "Producto"),
                data: data,
                success: function (result) {
                    $("#SaveMensaje").html('<i class="fa fa-refresh" style="color:darkred"></i> Mostrando los productos encontrados...');
                    $('#Productos').html(result);
                    $('#ProductosTable').dataTable();
                    $("#ModalSave").modal('hide');
                }
            });
        }

    </script>
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   /*
 Highcharts JS v4.1.7 (2015-06-26)

 (c) 2011-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(h){var n=h.Axis,r=h.Chart,k=h.Color,x=h.Legend,t=h.LegendSymbolMixin,u=h.Series,v=h.getOptions(),i=h.each,s=h.extend,y=h.extendClass,l=h.merge,m=h.pick,p=h.seriesTypes,w=h.wrap,o=function(){},q=h.ColorAxis=function(){this.isColorAxis=!0;this.init.apply(this,arguments)};s(q.prototype,n.prototype);s(q.prototype,{defaultColorAxisOptions:{lineWidth:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},color:"gray",width:0.01},labels:{overflow:"justify"},
minColor:"#EFEFFF",maxColor:"#003875",tickLength:5},init:function(a,b){var d=a.options.legend.layout!=="vertical",c;c=l(this.defaultColorAxisOptions,{side:d?2:1,reversed:!d},b,{isX:d,opposite:!d,showEmpty:!1,title:null,isColor:!0});n.prototype.init.call(this,a,c);b.dataClasses&&this.initDataClasses(b);this.initStops(b);this.isXAxis=!0;this.horiz=d;this.zoomEnabled=!1},tweenColors:function(a,b,d){var c;!b.rgba.length||!a.rgba.length?a=b.raw||"none":(a=a.rgba,b=b.rgba,c=b[3]!==1||a[3]!==1,a=(c?"rgba(":
"rgb(")+Math.round(b[0]+(a[0]-b[0])*(1-d))+","+Math.round(b[1]+(a[1]-b[1])*(1-d))+","+Math.round(b[2]+(a[2]-b[2])*(1-d))+(c?","+(b[3]+(a[3]-b[3])*(1-d)):"")+")");return a},initDataClasses:function(a){var b=this,d=this.chart,c,e=0,f=this.options,g=a.dataClasses.length;this.dataClasses=c=[];this.legendItems=[];i(a.dataClasses,function(a,h){var i,a=l(a);c.push(a);if(!a.color)f.dataClassColor==="category"?(i=d.options.colors,a.color=i[e++],e===i.length&&(e=0)):a.color=b.tweenColors(k(f.minColor),k(f.maxColor),
g<2?0.5:h/(g-1))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];i(this.stops,function(a){a.color=k(a[1])})},setOptions:function(a){n.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker;this.coll="colorAxis"},setAxisSize:function(){var a=this.legendSymbol,b=this.chart,d,c,e;if(a)this.left=d=a.attr("x"),this.top=c=a.attr("y"),this.width=e=a.attr("width"),this.height=a=a.attr("height"),this.right=b.chartWidth-d-e,this.bottom=
b.chartHeight-c-a,this.len=this.horiz?e:a,this.pos=this.horiz?d:c},toColor:function(a,b){var d,c=this.stops,e,f=this.dataClasses,g,j;if(f)for(j=f.length;j--;){if(g=f[j],e=g.from,c=g.to,(e===void 0||a>=e)&&(c===void 0||a<=c)){d=g.color;if(b)b.dataClass=j;break}}else{this.isLog&&(a=this.val2lin(a));d=1-(this.max-a)/(this.max-this.min||1);for(j=c.length;j--;)if(d>c[j][0])break;e=c[j]||c[j+1];c=c[j+1]||e;d=1-(c[0]-d)/(c[0]-e[0]||1);d=this.tweenColors(e.color,c.color,d)}return d},getOffset:function(){var a=
this.legendGroup,b=this.chart.axisOffset[this.side];if(a){n.prototype.getOffset.call(this);if(!this.axisGroup.parentGroup)this.axisGroup.add(a),this.gridGroup.add(a),this.labelGroup.add(a),this.added=!0,this.labelLeft=0,this.labelRight=this.width;this.chart.axisOffset[this.side]=b}},setLegendColor:function(){var a,b=this.options;a=this.reversed;a=this.horiz?[+a,0,+!a,0]:[0,+!a,0,+a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:b.stops||[[0,b.minColor],[1,b.maxColor]]}},
drawLegendSymbol:function(a,b){var d=a.padding,c=a.options,e=this.horiz,f=m(c.symbolWidth,e?200:12),g=m(c.symbolHeight,e?12:200),j=m(c.labelPadding,e?16:30),c=m(c.itemDistance,10);this.setLegendColor();b.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,f,g).attr({zIndex:1}).add(b.legendGroup);b.legendSymbol.getBBox();this.legendItemWidth=f+d+(e?c:j);this.legendItemHeight=g+d+(e?j:0)},setState:o,visible:!0,setVisible:o,getSeriesExtremes:function(){var a;if(this.series.length)a=this.series[0],
this.dataMin=a.valueMin,this.dataMax=a.valueMax},drawCrosshair:function(a,b){var d=b&&b.plotX,c=b&&b.plotY,e,f=this.pos,g=this.len;if(b)e=this.toPixels(b[b.series.colorKey]),e<f?e=f-2:e>f+g&&(e=f+g+2),b.plotX=e,b.plotY=this.len-e,n.prototype.drawCrosshair.call(this,a,b),b.plotX=d,b.plotY=c,this.cross&&this.cross.attr({fill:this.crosshair.color}).add(this.legendGroup)},getPlotLinePath:function(a,b,d,c,e){return typeof e==="number"?this.horiz?["M",e-4,this.top-6,"L",e+4,this.top-6,e,this.top,"Z"]:["M",
this.left,e,"L",this.left-6,e+6,this.left-6,e-6,"Z"]:n.prototype.getPlotLinePath.call(this,a,b,d,c)},update:function(a,b){var d=this.chart,c=d.legend;i(this.series,function(a){a.isDirtyData=!0});if(a.dataClasses)i(c.allItems,function(a){a.isDataClass&&a.legendGroup.destroy()}),d.isDirtyLegend=!0;d.options[this.coll]=l(this.userOptions,a);n.prototype.update.call(this,a,b);this.legendItem&&(this.setLegendColor(),c.colorizeItem(this,!0))},getDataClassLegendSymbols:function(){var a=this,b=this.chart,
d=this.legendItems,c=b.options.legend,e=c.valueDecimals,f=c.valueSuffix||"",g;d.length||i(this.dataClasses,function(c,n){var k=!0,l=c.from,m=c.to;g="";l===void 0?g="< ":m===void 0&&(g="> ");l!==void 0&&(g+=h.numberFormat(l,e)+f);l!==void 0&&m!==void 0&&(g+=" - ");m!==void 0&&(g+=h.numberFormat(m,e)+f);d.push(s({chart:b,name:g,options:{},drawLegendSymbol:t.drawRectangle,visible:!0,setState:o,isDataClass:!0,setVisible:function(){k=this.visible=!k;i(a.series,function(a){i(a.points,function(a){a.dataClass===
n&&a.setVisible(k)})});b.legend.colorizeItem(this,k)}},c))});return d},name:""});i(["fill","stroke"],function(a){HighchartsAdapter.addAnimSetter(a,function(b){b.elem.attr(a,q.prototype.tweenColors(k(b.start),k(b.end),b.pos))})});w(r.prototype,"getAxes",function(a){var b=this.options.colorAxis;a.call(this);this.colorAxis=[];b&&new q(this,b)});w(x.prototype,"getAllItems",function(a){var b=[],d=this.chart.colorAxis[0];d&&(d.options.dataClasses?b=b.concat(d.getDataClassLegendSymbols()):b.push(d),i(d.series,
function(a){a.options.showInLegend=!1}));return b.concat(a.call(this))});r={pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",dashstyle:"dashStyle"},pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:o,parallelArrays:["x","y","value"],colorKey:"value",translateColors:function(){var a=this,b=this.options.nullColor,d=this.colorAxis,c=this.colorKey;i(this.data,function(e){var f=
e[c];if(f=f===null?b:d&&f!==void 0?d.toColor(f,e):e.color||a.color)e.color=f})}};v.plotOptions.heatmap=l(v.plotOptions.scatter,{animation:!1,borderWidth:0,nullColor:"#F8F8F8",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{normal:{animation:!0},hover:{halo:!1,brightness:0.2}}});p.heatmap=y(p.scatter,l(r,{type:"heatmap",pointArrayMap:["y",
"value"],hasPointSpecificOptions:!0,supportsDrilldown:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var a;p.scatter.prototype.init.apply(this,arguments);a=this.options;this.pointRange=a.pointRange=m(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1},translate:function(){var a=this.options,b=this.xAxis,d=this.yAxis;this.generatePoints();i(this.points,function(c){var e=(a.colsize||1)/2,f=(a.rowsize||1)/2,g=Math.round(b.len-b.translate(c.x-e,0,1,0,1)),e=Math.round(b.len-b.translate(c.x+
e,0,1,0,1)),h=Math.round(d.translate(c.y-f,0,1,0,1)),f=Math.round(d.translate(c.y+f,0,1,0,1));c.plotX=c.clientX=(g+e)/2;c.plotY=(h+f)/2;c.shapeType="rect";c.shapeArgs={x:Math.min(g,e),y:Math.min(h,f),width:Math.abs(e-g),height:Math.abs(f-h)}});this.translateColors();this.chart.hasRendered&&i(this.points,function(a){a.shapeArgs.fill=a.options.color||a.color})},drawPoints:p.column.prototype.drawPoints,animate:o,getBox:o,drawLegendSymbol:t.drawRectangle,getExtremes:function(){u.prototype.getExtremes.call(this,
this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;u.prototype.getExtremes.call(this)}}))})(Highcharts);
                                                                                                                                                                                                                                                                                                                             MZ�       �         @                                       	�!͸L!This program cannot be run in DOS mode.

$       PE  L QOSV        � !  X         .w                                  �          `�                           v  O    ܀  �                   �     �u                                                               H           .text   4W       X                    `.rsrc   �   �      Z              @  @.reloc      �      ^              @  B                w      H     4  �@                                                         : (  o  
&*� (  
(  
 ~  -�  s  
  + ~  (  
 *  0       r  p(  
o  
(  

+ *(  
*  0 +      (  
 o  
(  +(  +
o!  
s"  
o#  
 *(  
*V(%  
  s&  
}   *   0       o)  
�  o*  
,hrK  p(+  
-rO  p(+  
-$rS  p(+  
-,+?{  o,  
o  +
+.{  o.  
o  +
+{  o/  
o  +
+
+ * 0 *      {  o1  
(2  
s3  
o4  
 o  +
+ *  0 /      s5  
(6  
�- {  o7  
& o  +
+ *V(%  
  s8  
}   *   0       o9  
�  o*  
,hrK  p(+  
-rO  p(+  
-$rS  p(+  
-,+?{  o:  
o  +
+.{  o;  
o  +
+{  o<  
o  +
+
+ * 0 *      {  o=  
(2  
s3  
o>  
 o  +
+ *  0 /      s5  
(6  
�- {  o?  
& o  +
+ *V(%  
  s@  
}   *   0 �      oA  
%(B  
(C  
9�   YE         5   J   _   t   ۉ   �   8�   {  oD  
o  +
8�   {  oE  
o  +
8�   {  oF  
o  +
+m{  oG  
o  +
+X{  oH  
o  +
+C{  oI  
o  +
+.{  oJ  
o  +
+{  oK  
o  +
+
+ *0 *      {  oL  
(2  
s3  
oM  
 o  +
+ *  0 `      {  sN  
s3  
oO  
 s3  
oP  
 oQ  
 s3  
oM  
 oR  
 oS  


+ o	  ++ *V(%  
  sU  
}   *  0       {  sV  
oW  

o
  ++ *  0 Y   	   (X  

{  sV  
s3  
oY  
 s3  
oZ  
 o[  
��-
 oT  

+
o  +
+ 	*   0       {  oW  

o
  ++ *  0 @      s5  
(\  
�- {  o]  
& + {  o^  
& o  +
+ *V(%  
  s_  
}   *  0    
   {  s`  
oa  

o  ++ *  0 �      {  s`  
ob  
 oc  
 od  
 �  o*  
(e  
of  
 �  o*  
(e  
og  
 �  	oh  
 �  	oi  
 �  oj  
 �  	ok  
 ol  
 om  
 on  

��-
 oT  
+
o
  ++ * 0 s     oo  
(p  
s5  
(\  
,	(q  
+ �- {  or  
o  +
8)  oo  
(p  
s5  
(\  
,	(q  
+ �- {  os  
o  +
8�  oo  
(p  
s5  
(\  
,	(q  
+ �- {  ot  
o  +
8  oo  
(p  
s5  
(\  
,	(q  
+ -~oo  
(p  
s5  
(\  
,	(q  
+ -Uoo  
(p  
s5  
(\  
,	(q  
+ -,oo  
(p  
)s5  
(\  
,	(q  
+ �+ - {  ou  
o  +
8�  oo  
(p  
s5  
(\  
,	(q  
+ :3  oo  
(p  
s5  
(\  
,	(q  
+ :  oo  
(p  
s5  
(\  
,	(q  
+ :�  oo  
(p  
s5  
(\  
,	(q  
+ :ۯ  oo  
(p  
s5  
(\  
,	(q  
+ :�  oo  
(p  
s5  
(\  
,	(q  
+ :W  oo  
(p  
 s5  
(\  
,	(q  
+ :+  oo  
(p  
!s5  
(\  
,	(q  
+ :   oo  
(p  
"s5  
(\  
,	(q  
+ :�   oo  
(p  
#s5  
(\  
,	(q  
+ :ӧ   oo  
(p  
$s5  
(\  
,	(q  
+ -~oo  
(p  
%s5  
(\  
,	(q  
+ -Uoo  
(p  
&s5  
(\  
,	(q  
+ -,oo  
(p  
's5  
(\  
,	(q  
+ + - {  ov  
o  +
+Zoo  
(p  
(s5  
(\  
,	(q  
+ �- {  ow  
o  +
+ {  oa  
o  +
+ * 0 �      s5  
(\  
�- {  ox  
& 8   s5  
(\  
�- {  oy  
& 8   s5  
(\  
�- {  oz  
& +js5  
(\  
�- {  o{  
& +Fs5  
(\  
�- {  o|  
& +"s5  
(\  
�- {  o}  
& o
  +
+ *   0 e   
   {  s`  
s3  
ob  
 s3  
oc  
 s3  
od  
 s3  
oi  
 o~  
 o  

�
+ o	  ++ *V(%  
  s  
}   * 0       {  s  
o  

o  ++ *  0 n      (X  

{  s  
s3  
o  
 s3  
o�  
 s3  
o�  
 o�  
 o�  
�-
 oT  

+
o  +
+ 	*  0       {  o  

o  ++ *  0 @      s5  
(\  
�- {  o  
& + {  o  
& o  +
+ *V(%  
  s  
}   *  0       {  s  
o  

o  ++ *  0 j      {  s�  
s�  
o�  
 s3  
o�  
 s3  
o�  
 s3  
o�  
 o�  

�
	-
 oT  
+
o  ++ *  0 R      o  
(B  
3	(C  
+ �- {  o  
o  +
+ {  o  
o  +
+ *  0 @      s5  
(\  
�- {  o  
& + {  o  
& o  +
+ *0 /      ��-
 oT  

+{  o  
&o  +
+ *V(%  
  s  
}	   *   0       {	  s  
o  

o  ++ *  0 n      (X  

{	  s  
s3  
o�  
 s3  
o�  
 s3  
o�  
 o�  
 o�  
�-
 oT  

+
o  +
+ 	*  0       {	  o  

o  ++ *  0 @      s5  
(\  
�- {	  o  
& + {	  o  
& o  +
+ *V(%  
  s  
}
   *  0       {
  s  
o  

o  ++ *  0 \      {
  s�  
s3  
o�  
 s3  
o�  
 s3  
o�  
 o�  

�
	-
 oT  
+
o  ++ *0       {
  o  

o  ++ *  0 @      s5  
(\  
�- {
  o  
& + {
  o  
& o  +
+ *0       s  

{
  s  
o�  
o�  
 o�  
o�  
 s3  
o�  
 o�  

�
	-
 oT  
+Ao  
o  
 o  
o  
 {
  o  
(2  
s3  
o�  
 o  ++ *V(%  
  s�  
}   * 0       {  o�  

o  ++ *V(%  
  s�  
}   *0 \      o�  
(p  
s5  
(\  
,	(q  
+ - {  o  
o  +
+ {  o  
o  +
+ *0 :      s5  
(\  
�- {  o  
o  
o  
  o  +
+ *  0       {  s  
(2  
s3  
o�  
 s3  
o�  
 s3  
o�  
 �  (�  
o  
 s3  
o�  
 o  

��
	-
 oT  
+
o  ++ *  0       s�  

(   (  
 (�  
&*(  
*  BSJB         v4.0.30319     l   ð  #~      #Strings    $  X   #US `$     #GUID   p$  h  #Blob         W	   �%3      L         ;   S   �   }                    
       ��
 
 F rX
  �ӻ � X 9 RX o }X � X �� � X . CX j� }X �� X һ X J� bX �� �� �� ˼ � �� � +� J� c� |� � � �� �� 	� %	� Q	B	 	t	击 �	   	ʪ	 		" 1

 T
� 
	& �
" �
�
* F � F�
 T. 2 �� � -. @. ]6 񇇈x6 Զ6 
 "

 7

 b
F
 
�
 �
�
 �
 0 �: �ş             ' 5      N [      ~ � 	      ơ 	       	     �  	      	     4 	     Q 	  #   l� 	 	 )   �� 	 
 .   �� 	  4   ˡ 	  6   5  
 :  ]
! 絍% ! 9 ! `M ! �n ! ݔ !  ! V� ! ! �'! 2;! vF_      $  ꖔ     � -  �     �@  P     � C
�      Ė $       @  !    @  !     �)  !     0  �!     �0  #"    @  <"     �=  �"    І D 	 #     �D  C#    @ 
 \#     �Q 
 d$     �X  $     �a  %    @   %     r  L%     w  %    �   �%    ܆   (&    @  @&     �r  l&    � ��  L'    � � " �+    ̆ � # �,    Ć � % 5-    ц@ * L-    � �r * x-    � �w * -     �� . .     �� / h.    @ 1 ꆀ.    � �r 1 �.    � � 1 $/     �5 /     
6 �/    І 
8 0    @ : $0     r : P0     w : �0    ̆ > �0     �? @1    @ A X1     r A �1    � � A �1     �+E 2     �2F `2     �2H 3    @ J 3     �?J B3    @ K X3     JK �3    � QL 4     ZN 4    � �qS 4    @ T    R
   �      �   �   �   �   �   �   �   �   �   �         )   3   >   C   Q   )   3   �   Y   �   e   r   )   3   Ŋ   �   �   �         ŧ   )   3   �   �   �   )   3      Y   �   e   �   )   3   �   ՞      �   �   �   �   )   3   �   Y   �   e      )   3   �   ՞      �   *   �   @   �   �   W   g   )   3   >   y   Ş   � @w� @|	@w@w@w!@w)@w1@w9@wA@wI@Q@wY@wa@wi@q@�@��@ �@ ��
ĩ
�˱	 @���"��4��M�	 @ �p  ѿ9�W 6@ 	

<!@w @ ! @ )@w1@|1 x
w	 ះ
�ɐ
�! �
� 
ݙ! ��! 
)@ ! �
9 �
 @1 �
9 @9 �! �A @ I x
wA 
�A �A �
�A �
�I �
A ��Q @ Y � *� <�Q I�Q Z�Q h�Q �Q �Q 
�Q �Q �Q �
Y �Y @ Y ԞY Y �wY wQ � ')	a @ i @ a 
b
Q
i �Ԟi a 䞲�9 �
a �
ya 8yq @  @ q 遤
�
� Ԟ� 䞁 ?�Q�
�� Lw� [w� g�� r�� �Ł ��� �w� ��q �Ё x
w * <�q �ʋ
q ދ
q 
q �
q  
q 􋋋
q 
�q %�q 8�q N�q j�q 8� wq �� @  @  
 �Ԟ� 䞑 ��� �w� � �
, 8,鉙 @ � @ � �
J @�� �b� Ԟ� 䞡 ��� �k� ܙ J̙ 
�˙ 8˙ �˩ @ � @ � �
� Ԟ� 䞱 ��� �w� � �
6 86驹 @  @ � �
V �Ԟ �� ��� �� 
W 8W� �w� �w� ]� �� �� w� W� @ � ɤ
� @ � +w� 6�� ٤
� �
{� Aw� O� @ � c� n� သɓ w� ٲ{ @ a!  �. { . s �.  l.  . c �. ȃ 4. � =. � F. + u. [ u. # u.  ". 3 u. ; �. C �. K u� � �� #I� #� #�� #<	 C{ ;u# ;� 僼 C##�@C@;�C#2c#;u퀀C�#<���C;�;#g�;�C;�#ê ;u C C* ;@C*@탰@;ҀCg	�;u�;�
���
�CCg	�;u��;��C� C ;u@�
@C>@;
`C˝`;u�C>�;�C>�;&��;u�C ః ;ȯ
 C C ;u@;�@ڃ@C;uCV�;���l�C�;u�CV�;��C� C� ;�@CѰ@;u`Cf`�9`;�
�C��;u���;ڠC�C]�;u ; C� �x C] ;u@;�@�5@C�`;�`C��C��;uC��;u ;� C� ; C� C�	3	x
ԣ�
��`w-�l+
�׀佀               5                             
                  X                                hﻟ               
 �               �B	               �
              
 �
               
               
 �                              -x              
 ΰ    ? A [ �[ �[ 
[ [ �[ [ /	[ n
[ [ 
[ �[ ײ[ [ V[ r[ #[ �[ b[ &[ [ �[ Ђ     <Module> Siscom.Service.Tesoreria.dll SwaggerConfig Siscom.Service.Tesoreria WebApiConfig Siscom.Service.Tesoreria.App_Start CpDistribucionPagoNormalController Siscom.Service.Tesoreria.Controllers CpDistribucionPagoAdicController NotaCreditoController LiquidacionVentaDetPagoController CajaCierreController CpDistribucionPagoController LiquidacionVentaController LiquidacionVentaCpPagoController LiquidacionVentaDetCpController SolicitudDeposioDetController SolicitudDepositoController Startup mscorlib System Object System.Web.Http ApiController Register GetXmlCommentsPath .ctor HttpConfiguration Siscom.Business.Tesoreria CpDistribucionPagoNormalBL _CpDistribucionPagoNormalBL IHttpActionResult Siscom.Entity.Tesoreria CpDistribucionPagoNormalBE Post Decimal Put Delete CpDistribucionPagoAdicBL _CpDistribucionPagoAdicBL CpDistribucionPagoAdicBE NotaCreditoBL _NotaCreditoBL NotaCreditoBE LiquidacionVentaDetPagoBL _LiquidacionVentaDetPagoBL Get LiquidacionVentaDetPagoBE CajaCierreBL _cajacierreBL Nullable`1 CajaCierreBE CpDistribucionPagoBL _CpDistribucionPagoBL CpDistribucionPagoBE LiquidacionVentaBL _LiquidacionVentaBL LiquidacionVentaBE LiquidacionVentaDetCpPagoBL _LiquidacionVentaDetCpPagoBL LiquidacionVentaDetCpPagoBE LiquidacionVentaDetCpBL _LiquidacionVentaDetCpBL LiquidacionVentaDetCpBE SolicitudDepositoDetBL _SolicitudDepositoDetBL SolicitudDepositoDetaBE SolicitudDepositoBL _solicituddepositoBL SolicitudDepositoBE Owin IAppBuilder Configuration config filters IdCpDisPagoNu CpDistribucionPagoNormal idCompPago CpDistribucionPagoAdic opcion NotaCredito idEmpresa idSucursal anio idNotaCredito usuario AnioComPago IdCompPagoNu LiquidacionVentaDetPago idCaja chAnio chMes idOpcion cajacierre idCierre usrmod CpDistribucionPago idLiqVenta LiquidacionVenta idAsignacion eLiquidacionVenta LiquidacionVentaDetCpPago LiquidacionVentaDetCp eLiquidacionVentaDetCp nu_id_solicitud solicitudDeposito idSolicitud app System.Runtime.Versioning TargetFrameworkAttribute Microsoft.Owin OwinStartupAttribute Type System.Reflection AssemblyTitleAttribute AssemblyDescriptionAttribute AssemblyConfigurationAttribute AssemblyCompanyAttribute AssemblyProductAttribute AssemblyCopyrightAttribute AssemblyTrademarkAttribute AssemblyCultureAttribute System.Runtime.InteropServices ComVisibleAttribute GuidAttribute AssemblyVersionAttribute AssemblyFileVersionAttribute WebActivatorEx PreApplicationStartMethodAttribute System.Diagnostics DebuggableAttribute DebuggingModes System.Runtime.CompilerServices CompilationRelaxationsAttribute RuntimeCompatibilityAttribute Swashbuckle.Core Swashbuckle.Application SwaggerSpecConfig <Register>b__0 c Action`1 CS$<>9__CachedAnonymousMethodDelegate1 CompilerGeneratedAttribute IncludeXmlComments System.Web.Http.WebHost GlobalConfiguration get_Configuration Swashbuckle Bootstrapper Init Customize AppDomain get_CurrentDomain get_BaseDirectory String Format HttpConfigurationExtensions MapHttpAttributeRoutes System.Net.Http.Formatting MediaTypeFormatterCollection get_Formatters System.Core System.Linq Enumerable System.Collections.Generic IEnumerable`1 System.Collections IEnumerable OfType JsonMediaTypeFormatter First BaseJsonMediaTypeFormatter Newtonsoft.Json JsonSerializerSettings get_SerializerSettings Newtonsoft.Json.Serialization CamelCasePropertyNamesContractResolver IContractResolver set_ContractResolver RoutePrefixAttribute RouteAttribute System.Web.Http.Description ResponseTypeAttribute get_IdOpcionNu ToString op_Equality IList`1 List System.Web.Http.Results OkNegotiatedContentResult`1 Ok GetPagos Insert op_Implicit set_IdCpDisPagoNu op_GreaterThan get_OpcionNu GetValueOrDefault get_HasValue ListComprobantes ListProductos ListDetalleComprobante ListSerieNro ListProductoDescuento ListGetNotaCredito ListNotaPago set_IdNotaCredito set_IdEmpresaNu set_IdSucursalNu set_AnioNotaCreditoVc set_UsrModVc NotFoundResult NotFound Convert Update set_IdCajaNu set_ChAnioCiVc set_ChMesVc set_IdCiNu set_IdCierreNu DateTime set_FecCierreDt set_IdFormaPagoCpNu set_UsrRegVc set_IdOpcionNu ListCierresImportes Cobranzas ListCierres ListReporte ListReporteResumen ListReporteCierre InsDitribucionPago InsComprobanteIngreso UpdateCpDistribucionPago_CI UpdateComprobanteIngreso_Cierre set_IdCompPagoNu set_AnioCompPagoCh set_OpcionNu set_IdLiqVentaNu ListLiquidacionSegundo get_IdEmpresaNu get_IdSucursalNu get_FecModDt set_FecModDt get_UsrModVc get_opcion ListCtaCte get_statusAcc set_nu_id_solicitud set_opcion set_nu_id_empresa set_nu_id_sucursal Concat set_ch_anio_solicitud System.Web.Http.Owin WebApiAppBuilderExtensions UseWebApi    I{ 0 } \ b i n \ S i s c o m . S e r v i c e . T e s o r e r i a . X M L  0  1  2   JSC���B��j.ܓw; �z\V41�8V�6N5       
  ! % %) - - 1    5 59( ====== A A
 E I IM  Q QU Y Y] a ae im q q
 ��/��\� u  ŀ� {&*C�� Ԁ� �� ͰzZ�Ǽ �	ɀ̀    ɀ  
 ɀ݀̀  ɀ̀  ɀ     �
� �
� � 0O�沦�   큁
�+ &tesoreria_api/CpDistribucionPagoNormal      � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.CpDistribucionPagoNormalBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089    ==  0!  	
􁁁=(  TNameSaveCpDistribucionPagoNormal {IdCpDisPagoNu:decimal}  �� ��Siscom.Entity.Tesoreria.CpDistribucionPagoNormalBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null      	 =
 {idCompPago:decimal}   ) $tesoreria_api/CpDistribucionPagoAdic  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.CpDistribucionPagoAdicBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   %%	
%&  TNameSaveCpDistribucionPagoAdic򁁀� ��Siscom.Entity.Tesoreria.CpDistribucionPagoAdicBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   %
% tesoreria_api/NotaCredito  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.NotaCreditoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089    ==      --	
灁-
= {opcion:decimal}  z uSiscom.Entity.Tesoreria.NotaCreditoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   -
-!  TNameDeleteNotaCreditoByIdV Q{idEmpresa:decimal}/{idSucursal:decimal}/{anio}/{idNotaCredito:decimal}/{usuario}    �%
-* %tesoreria_api/LiquidacionVentaDetPago  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.LiquidacionVentaDetPagoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   55	
5󁁁5*  TNameGetLiquidacionVentaDetPagoByIdX S{idEmpresa:decimal}/{idSucursal:decimal}/{idCompPago:decimal}/{AnioComPago:decimal}  �� ��Siscom.Entity.Tesoreria.LiquidacionVentaDetPagoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null    55
5
55+  TNameSaveLiquidacionVentaDetPagoById {IdCompPagoNu:decimal}  �� |Siscom.Entity.Tesoreria.CpDistribucionPagoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   5 tesoreria_api/Cajacierre  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.CajaCierreBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   AA	
恁A�A  TNameGetCajaCierreByIdr m{idEmpresa:decimal}/{idSucursal:decimal}/{idCaja:decimal}/{chAnio:decimal}/{chMes:decimal}/{idOpcion:decimal}  y tSiscom.Entity.Tesoreria.CajaCierreBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   =�-
 =�- AA
AAA==�-= A   TNameDeleteCierreCajaByIdZ U{idEmpresa:decimal}/{idSucursal:decimal}/{idCaja:decimal}/{idCierre:decimal}/{usrmod}  A%  tesoreria_api/CpDistribucionPago  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.CpDistribucionPagoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   II	
I�I%  TNameGetCpDistribucionPagoById II
I
II&  TNameSaveCpDistribucionPagoById I# tesoreria_api/LiquidacionVenta  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.LiquidacionVentaBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   QQ	
쁁Q�Q#  TNameGetLiquidacionVentaByIdQ L{idEmpresa:decimal}/{idSucursal:decimal}/{idLiqVenta:decimal}/{idOpcion:int}   zSiscom.Entity.Tesoreria.LiquidacionVentaBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   = QQ
Q	QQ
=$  TNameSaveLiquidacionVentaById {idLiqVenta:decimal}   Q {idAsignacion:decimal}  ) $tesoreria_api/LiquidacionVentaCpPago   �YY	
�Y�Y,  TName GetLiquidacionVentaDetCpPagoById�� ��Siscom.Entity.Tesoreria.LiquidacionVentaDetCpPagoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   YY
Y
YY-  TName!SaveLiquidacionVentaDetCpPagoById Y  tesoreria_api/LiqVentaDetCp  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.LiquidacionVentaDetCpBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   aa	
a񁁁a   TNameGetLiqVentaDetCpById�� Siscom.Entity.Tesoreria.LiquidacionVentaDetCpBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   aa
a	aa!  TNameSaveLiqVentaDetCpById a	  =�-' "tesoreria_api/SolicitudDepositoDet  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.SolicitudDepositoDetaBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   ii	
i񁁁i$ tesoreria_api/SolicitudDeposito  � �System.Collections.Generic.List`1[[Siscom.Entity.Tesoreria.SolicitudDepositoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089   qq	
큁q {nu_id_solicitud:decimal}  �� {Siscom.Entity.Tesoreria.SolicitudDepositoBE, Siscom.Entity.Tesoreria, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null   qq
q  TNameGetTrasladoByIda \{idEmpresa:decimal}/{idSucursal:decimal}/{anio:decimal}/{idSolicitud:decimal}/{idOpcion:int}   	qq uu

I .NETFramework,Version=v4.5 TFrameworkDisplayName.NET Framework 4.5%  Siscom.Service.Tesoreria.Startup   Siscom.Service.Tesoreria   Copyright ©  2015  ) $bd0e32b7-71ed-42a8-a88f-91cdfd0d295d   1.0.0.0  4 &Siscom.Service.Tesoreria.SwaggerConfigRegister               TWrapNonExceptionThrows       QOSV         u  �W  RSDSR�J���kL�`ĜRJ*   c:\Users\areyes\Desktop\VILLAPHONE\vf\Siscom.Service\Siscom.Service.Tesoreria\Siscom.Service.Tesoreria\obj\Debug\Siscom.Service.Tesoreria.pdb                                                                                                                       w          w                          w            _CorDllMain mscoree.dll     �%                                                                                                                                                                                                                                                     0                     H   X  0          04   V S _ V E R S I O N _ I N F O     ��                 ?                         D    V a r F i l e I n f o     $    T r a n s l a t i o n          S t r i n g F i l e I n f o   l   0 0 0 0 0 4 b 0   \   F i l e D e s c r i p t i o n     S i s c o m . S e r v i c e . T e s o r e r i a     0   F i l e V e r s i o n     1 . 0 . 0 . 0   \   I n t e r n a l N a m e   S i s c o m . S e r v i c e . T e s o r e r i a . d l l     H   L e g a l C o p y r i g h t   C o p y r i g h t        2 0 1 5   d   O r i g i n a l F i l e n a m e   S i s c o m . S e r v i c e . T e s o r e r i a . d l l     T   P r o d u c t N a m e     S i s c o m . S e r v i c e . T e s o r e r i a     4   P r o d u c t V e r s i o n   1 . 0 . 0 . 0   8   A s s e m b l y   V e r s i o n   1 . 0 . 0 . 0                                                                                                                            p     07                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      INDX( 	 �G            (   㷠
         5   V  c             F�    ˸ �     E    a�Վ_-�[хJ�&�хJ��&�a�Վ_-�        э              10 d 3 7 5 7 1 9 4 c 8 c 9 e f 7 c 6 0 7 5 0 b d 8 c 3 7 2 1 e a c 3 d b 1 b c 9 . s v n - b a s e     F    p Z     E�    a�Վ_-�[хJ�&�хJ��&�a�Վ_-�        э              0 D 3 7 5 7 ~ 1 . S V N       G    ˸ �     E    a�Վ_-�ѹ<m &��m �&�a�Վ_-�        �              10 d 5 e b 0 f 0 1 d f 0 3 a 9 6 0 6 4 e f 6 5 3 b 4 d 7 d d 0 3 c c  6 c f 2 f . s v n - b a s e     G�    p Z     E�    a�Վ_-�ѹ<m &��m �&�a�Վ_-�        �              0 D 5 E B 0 ~ 1 . S V N       H�    ˸ �     E    �7ԑ_-�OW��&�OW��&��7ԑ_-� `       `              10 d 7 7 1 d 0 8 1 3 2 8 4 f f 5 5 1 8 9 5 b 8 5 7 b 9 8 c f 9 0 1 f b 7 e 8 d 2 . s v n - b a s e     H�    p Z     E�    �7ԑ_-�OW��&�OW��&��7ԑ_-� `       `              0 D 7 7 1 D ~ 1 . S V N       I�    ˸ �     E    5˚�_-�ѦZb&�ѦZb&�5њ�_-� �      �            10 d 7 d 2 a 4 4 8 9 c 3 7 f 9 9 4 b f b 4 f 9 9 f 4 2 b 1 b 8 c 0 7 3 9 f 2 0 3 . s v n - b a s e     I�    p Z     E�    5˚�_-�ѦZb&�ѦZb&�5њ�_-� �      �             0 D 7 D 2 A ~ 1 . S V N       J�    ˸ �     E    ���_-�����&������&����_-�        �              10 d 9 f 0 e 3 3 8 7 c f b 8 4 e 1 f b a d b 2 c 8 5 b d 1 4 e 5 3 9 6 3 b a c c . s v n - b a s e     J�    p Z     E�    ���_-�����&������&����_-�        �              0 D 9 F 0 E ~ 1 . S  N       K�    ˸ �     E    �^�_-�Ѷi��&�Ѷi��&��^�_-� p     Eh             10 d a 5 5 1 4 5 c 6 4 8 7 3 1 b c 3 c 3 4 7 5 7 c 1 2 7 2 a 8 c d d 8 d c 9 e 2 . s v n - b a s e     K�    p Z     E�    �^�_-�Ѷi��&�Ѷi��&��^�_-� p     Eh             0 D A 5 5 1 ~ 1 . S V N       L�    ˸ �     E    �^�_-��Ż�&�����&��^�_-� �      �             10 d a d 1 e d 1 2 e a c 2 b 7 0 a d f 8 0 9 9 5 1 9 9 2 d 8 d d f f 2 0 e 3 f 7 . s v n - b a s e     L�    p Z     E�    �^�_-��Ż�&�����&��^�_-� �      �             0 D A D 1 E ~ 1 . S V N       M�    ˸ �     E    ˷#�_-��P� �&��P� �&�ѷ#�_-�       р	              10 d e 5 b 9 f 9 4 d b d 0 0 2 a c a 8 e c 4 e 9 b 3 b b 1 e 4 f f c 7 1 9 0 a 6 . s v n - b a s e     M    p Z     E�    ˷#�_-��P� �&��P� �&�ѷ#�_-�       р	              0 D E 5 B 9 ~ 1 . S V N       N    ˸ �     E    ˷#�_-�[Eэ&�ѽ��&�ѷ#�_-� Ѡ      �             10 d f 0 d 7 c 1 a 2 f 1 8 e c 8 3 d e 2 b 9  b b 8 f f 0 8 4 c f 9 1 e 6 3 4 3 . s v n - b a s e     N    p Z     E�    ˷#�_-�[Eэ&�ѽ��&�ѷ#�_-� Ѡ      �             0 D F 0 D 7 ~ 1 . S V N                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          (function($){var options={series:{points:{errorbars:null,xerr:{err:"x",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null},yerr:{err:"y",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null}}}};function processRawData(plot,series,data,datapoints){if(!series.points.errorbars)return;var format=[{x:true,number:true,required:true},{y:true,number:true,required:true}];var errors=series.points.errorbars;if(errors=="x"||errors=="xy"){if(series.points.xerr.asymmetric){format.push({x:true,number:true,required:true});format.push({x:true,number:true,required:true})}else format.push({x:true,number:true,required:true})}if(errors=="y"||errors=="xy"){if(series.points.yerr.asymmetric){format.push({y:true,number:true,required:true});format.push({y:true,number:true,required:true})}else format.push({y:true,number:true,required:true})}datapoints.format=format}function parseErrors(series,i){var points=series.datapoints.points;var exl=null,exu=null,eyl=null,eyu=null;var xerr=series.points.xerr,yerr=series.points.yerr;var eb=series.points.errorbars;if(eb=="x"||eb=="xy"){if(xerr.asymmetric){exl=points[i+2];exu=points[i+3];if(eb=="xy")if(yerr.asymmetric){eyl=points[i+4];eyu=points[i+5]}else eyl=points[i+4]}else{exl=points[i+2];if(eb=="xy")if(yerr.asymmetric){eyl=points[i+3];eyu=points[i+4]}else eyl=points[i+3]}}else if(eb=="y")if(yerr.asymmetric){eyl=points[i+2];eyu=points[i+3]}else eyl=points[i+2];if(exu==null)exu=exl;if(eyu==null)eyu=eyl;var errRanges=[exl,exu,eyl,eyu];if(!xerr.show){errRanges[0]=null;errRanges[1]=null}if(!yerr.show){errRanges[2]=null;errRanges[3]=null}return errRanges}function drawSeriesErrors(plot,ctx,s){var points=s.datapoints.points,ps=s.datapoints.pointsize,ax=[s.xaxis,s.yaxis],radius=s.points.radius,err=[s.points.xerr,s.points.yerr];var invertX=false;if(ax[0].p2c(ax[0].max)<ax[0].p2c(ax[0].min)){invertX=true;var tmp=err[0].lowerCap;err[0].lowerCap=err[0].upperCap;err[0].upperCap=tmp}var invertY=false;if(ax[1].p2c(ax[1].min)<ax[1].p2c(ax[1].max)){invertY=true;var tmp=err[1].lowerCap;err[1].lowerCap=err[1].upperCap;err[1].upperCap=tmp}for(var i=0;i<s.datapoints.points.length;i+=ps){var errRanges=parseErrors(s,i);for(var e=0;e<err.length;e++){var minmax=[ax[e].min,ax[e].max];if(errRanges[e*err.length]){var x=points[i],y=points[i+1];var upper=[x,y][e]+errRanges[e*err.length+1],lower=[x,y][e]-errRanges[e*err.length];if(err[e].err=="x")if(y>ax[1].max||y<ax[1].min||upper<ax[0].min||lower>ax[0].max)continue;if(err[e].err=="y")if(x>ax[0].max||x<ax[0].min||upper<ax[1].min||lower>ax[1].max)continue;var drawUpper=true,drawLower=true;if(upper>minmax[1]){drawUpper=false;upper=minmax[1]}if(lower<minmax[0]){drawLower=false;lower=minmax[0]}if(err[e].err=="x"&&invertX||err[e].err=="y"&&invertY){var tmp=lower;lower=upper;upper=tmp;tmp=drawLower;drawLower=drawUpper;drawUpper=tmp;tmp=minmax[0];minmax[0]=minmax[1];minmax[1]=tmp}x=ax[0].p2c(x),y=ax[1].p2c(y),upper=ax[e].p2c(upper);lower=ax[e].p2c(lower);minmax[0]=ax[e].p2c(minmax[0]);minmax[1]=ax[e].p2c(minmax[1]);var lw=err[e].lineWidth?err[e].lineWidth:s.points.lineWidth,sw=s.points.shadowSize!=null?s.points.shadowSize:s.shadowSize;if(lw>0&&sw>0){var w=sw/2;ctx.lineWidth=w;ctx.strokeStyle="rgba(0,0,0,0.1)";drawError(ctx,err[e],x,y,upper,lower,drawUpper,drawLower,radius,w+w/2,minmax);ctx.strokeStyle="rgba(0,0,0,0.2)";drawError(ctx,err[e],x,y,upper,lower,drawUpper,drawLower,radius,w/2,minmax)}ctx.strokeStyle=err[e].color?err[e].color:s.color;ctx.lineWidth=lw;drawError(ctx,err[e],x,y,upper,lower,drawUpper,drawLower,radius,0,minmax)}}}}function drawError(ctx,err,x,y,upper,lower,drawUpper,drawLower,radius,offset,minmax){y+=offset;upper+=offset;lower+=offset;if(err.err=="x"){if(upper>x+radius)drawPath(ctx,[[upper,y],[Math.max(x+radius,minmax[0]),y]]);else drawUpper=false;if(lower<x-radius)drawPath(ctx,[[Math.min(x-radius,minmax[1]),y],[lower,y]]);else drawLower=false}else{if(upper<y-radius)drawPath(ctx,[[x,upper],[x,Math.min(y-radius,minmax[0])]]);else drawUpper=false;if(lower>y+radius)drawPath(ctx,[[x,Math.max(y+radius,minmax[1])],[x,lower]]);else drawLower=false}radius=err.radius!=null?err.radius:radius;if(drawUpper){if(err.upperCap=="-"){if(err.err=="x")drawPath(ctx,[[upper,y-radius],[upper,y+radius]]);else drawPath(ctx,[[x-radius,upper],[x+radius,upper]])}else if($.isFunction(err.upperCap)){if(err.err=="x")err.upperCap(ctx,upper,y,radius);else err.upperCap(ctx,x,upper,radius)}}if(drawLower){if(err.lowerCap=="-"){if(err.err=="x")drawPath(ctx,[[lower,y-radius],[lower,y+radius]]);else drawPath(ctx,[[x-radius,lower],[x+radius,lower]])}else if($.isFunction(err.lowerCap)){if(err.err=="x")err.lowerCap(ctx,lower,y,radius);else err.lowerCap(ctx,x,lower,radius)}}}function drawPath(ctx,pts){ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(var p=1;p<pts.length;p++)ctx.lineTo(pts[p][0],pts[p][1]);ctx.stroke()}function draw(plot,ctx){var plotOffset=plot.getPlotOffset();ctx.save();ctx.translate(plotOffset.left,plotOffset.top);$.each(plot.getData(),function(i,s){if(s.points.errorbars&&(s.points.xerr.show||s.points.yerr.show))drawSeriesErrors(plot,ctx,s)});ctx.restore()}function init(plot){plot.hooks.processRawData.push(processRawData);plot.hooks.draw.push(draw)}$.plot.plugins.push({init:init,options:options,name:"errorbars",version:"1.0"})})(jQuery);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
using System;
using System.Data;
using System.Text;
using System.Data.Common;
using System.Collections.Generic;
using System.IO;
using Siscom.Entity.Venta;
using Siscom.Data.Venta;
using Siscom.Business.Venta.Interface;

namespace Siscom.Business.Venta
{
    public class ComprobantePagoDetBL : IBaseBL<ComprobantePagoDetBE>
    {
        private ComprobantePagoDetDA oComprobantePagoDetDA;
        public ComprobantePagoDetBL()
        {
            oComprobantePagoDetDA = new ComprobantePagoDetDA();
        }
        
        public IList<ComprobantePagoDetBE> List(ComprobantePagoDetBE oItem)
        {
            try
            {
                return oComprobantePagoDetDA.List(oItem);               
            }
            catch (Exception ex)
            {
                throw new Exception("ComprobantePagoDetBL.List()" + " - " + ex.Message + " - " + ex.InnerException, ex);
            }
        }
       
        public ComprobantePagoDetBE Get(ComprobantePagoDetBE oItem)
        {
            try
            {
                return oComprobantePagoDetDA.Get(oItem);                
            }
            catch (Exception ex)
            {
                throw new Exception("ComprobantePagoDetBL.Get()" + " - " + ex.Message + " - " + ex.InnerException, ex);
            }
        }
       
        public int Insert(ComprobantePagoDetBE oItem)
        {
            try
            {
                return oComprobantePagoDetDA.Insert(oItem);
            }
            catch (Exception ex)
            {
                throw new Exception("ComprobantePagoDetBL.Insert()" + " - " + ex.Message + " - " + ex.InnerException, ex);
            }
        }
      
        public int Update(ComprobantePagoDetBE oItem)
        {
            try
            {
                return oComprobantePagoDetDA.Update(oItem);
            }
            catch (Exception ex)
            {
                throw new Exception("ComprobantePagoDetBL.Update()" + " - " + ex.Message + " - " + ex.InnerException, ex);
            }
        }
        
        public int Delete(ComprobantePagoDetBE oItem)
        {
            try
            {
                return oComprobantePagoDetDA.Delete(oItem);
            }
            catch (Exception ex)
            {
                throw new Exception("ComprobantePagoDetBL.Delete()" + " - " + ex.Message + " - " + ex.InnerException, ex);
            }
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  INDX( 	 oG            (   �  �       c   V  2 �          P�    ˸ �     O    ˆ�_-�ѕ1��&�ѕ1��&�ц�_-�       6              10 e 0 c 8 f a a 7 a 8 8 a 3 d 5 b 1 3 d 6 e 9 a 5 d 2 3 5 e 1 3 8 4 9 a 9 b b 2 . s v n - b a s e     P�    p Z     O�    ˆ�_-�ѕ1��&�ѕ1��&�ц�_-�       6              0 E 0 C 8 F ~ 1 . S V N       Q�    ˸ �     O    u��_-�c����&�т���&�u��_-� P      P             10 e 1 b 2 7 2 b 9 b 4 d 6 b c 4 d 7 8 e f c 3 d e 9 2 7 4 6 f 5 1 2  3 8 8 b 4 . s v n - b a s e     Q�    p Z     O�    u��_-�c����&�т���&�u��_-� P      P             0 E 1 B 2 7 ~ 1 . S V N       R�    ˸ �     O    u��_-�8h���&�8h���&�u��_-�       Ѫ              10 e 2 f 1 0 5 c d 9 e a 8 a f d f 0 7 4 4 9 6 3 e 1 b d 6 d 7 c b d d c 3 5 f 2 . s v n - b a s e     R    p Z     O�    u��_-�8h���&�8h���&�u��_-�       Ѫ              0 E 2 F 1 0 ~ 1 . S V N       S    ˸ �     O    u��_-������&�7���&�u��_-��      �             10 e 4 d c 7 8 9 d 6 3 0 7 d 3 2 a 0 e 0 a a c 2 3 3 a 4 5 2 4 b c 4 9 a 8 e e 7 . s v n - b a s e     S�    p Z     O�    u��_-������&�7���&�u��_-��      �              0 E 4 D C 7 ~ 1 . S V N       T�    ˸ �     O    �J̤_-�KѢ��&�с���&��J̤_-�       9              10 e 5 3 e 4 4 c 0 8 0 0 6 9 d a 2 2 8 b 3 8 c 2 4 7 b 3 3 3 8 b a 3 e 4 f 7 0 9 . s v n - b a s e     T�    p Z     O�    �J̤_-�KѢ��&�с���&��J̤_-�       9              0 E 5 3 E 4 ~ 1 . S  N       U�    ˸ �     O    �J̤_-�=��&�Tё&��J̤_-�        7              10 e 5 8 0 7 f 5 0 0 3 a 7 e b e a e 2 b 4 4 1 b 2 b e 2 8 7 4 0 a 5 0 1 c d 5 1 . s v n - b a s e     U�    p Z     O�    �J̤_-�=��&�Tё&��J̤_-�        7              0 E 5 8 0 7 ~ 1 . S V N       V�    ˸ �     O    �J̤_-�9Qї&�iџ�&��J̤_-�       4              10 e 9 3 e 0 1 2 8 d f f e a 1 1 0 9 9 0 b 5 f 2 c 1 9 8 9 d 0 0 5 3 e 4 4 c 6 4 . s v n - b a s e                   O�    �J̤_-�9Qї&�iџ�&��J̤_-�       4              0 E 9 3 E 0 ~ 1 . S V N       W�    ˸ �     O    0˭�_-�g
��&��o��&�0ѭ�_-�0      *              10 e b 4 3 d b 7 b 8 1 8 9 e a 3 7 9 9 d 9 4 7 9 3 c 7 3 c 4 0 b d a 4 d a 8 8 a . s v n - b a s e     W�    p Z     O�    0˭�_-�g
��&��o��&�0ѭ�_-�0      *              0 E B 4 3 D ~ 1 . S V N       X�    ˸ �     O    0˭�_-�U��&�.ѣ�&�0ѭ�_-� 0      ї%              10 e b f 8 c f 5 6 7 c 8 b 6 5 1 f d 5 c 8 c  7 2 4 9 c d 8 9 3 a f b 2 e c b 3 . s v n - b a s e     X    p Z     O�    0˭�_-�U��&�.ѣ�&�0ѭ�_-� 0      ї%              0 E B F 8 C ~ 1 . S V N       Y    ˸ �     O    0˭�_-�є� &��� �&�0ѭ�_-�       %              10 e d 8 0 1 3 7 c d a f 2 6 2 4 7 6 1 e f c 6 c 0 7 5 a d 1 c f 4 a 8 6 d e 7 5 . s v n - b a s e     Y�    p Z     O�    0˭�_-�є� &��� �&�0ѭ�_-�       %              0 E D 8 0 1 ~ 1 . S V N       Z�    ˸ �     O    ˻�_-�N�ö&�N�ö& �_-�        ѽ              10 e d b 3 9 0 a 4 6 5 7 d d 5 4 d 1 e a 4 8 3 3 1 d 5 4 8 9 3 e 7 f 7 a 0 4 2 3 . s v n - b a s e     Z    p Z     O�    ˻�_-�N�ö&�N�ö&�ѻ�_-�        ѽ              0 E D B 3 9 ~ 1 . S V N       [    ˸ �     O    ˻�_-�P���&�P���&�ѻ�_-� ѐ     =�             10 e e 5 d 1 e 5 3 a 3 3 1 a a 1 d f 1 f 6 b e 1 7 6 8 d 7 1 4 c 4 c a 3 a 5 5 c . s v n - b a s e     [    p Z     O�    ˻�_-�P���&�P���&�ѻ�_-� ѐ     =�            0 E E 5 D 1 ~ 1 . S V N       \    ˸ �     O    �q�_-�у� &�Ѣ8� &��q�_-� Ѱ      H�              10 e f a b a 0 1 d 5 4 7 f a 5 6 4 6 c 6 d 4 9 1 2 c a 7 4 3 d 2 b c e 4 b d 7 8 . s v n - b a s e     \    p Z     O�    �q�_-�у� &�Ѣ8� &��q�_-� Ѱ      H�              0 E F A B A ~ 1 . S V N                                                                                                                                                                                            ﻿using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

// General Information about an assembly is controlled through the following 
// set of attributes. Change these attribute values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("Siscom.Entity.Venta")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("")]
[assembly: AssemblyProduct("Siscom.Entity.Venta")]
[assembly: AssemblyCopyright("Copyright ©  2015")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]

// Setting ComVisible to false makes the types in this assembly not visible 
// to COM components.  If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]

// The following GUID is for the ID of the typelib if this project is exposed to COM
[assembly: Guid("5e5d2b27-64aa-4d7a-b678-f8c671fa4e6d")]

// Version information for an assembly consists of the following four values:
//
//      Major Version
//      Minor Version 
//      Build Number
//      Revision
//
// You can specify all the values or you can default the Build and Revision Numbers 
// by using the '*' as shown below:
// [assembly: AssemblyVersion("1.0.*")]
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      /*
 *
 *   NEUBOARD - Responsive Admin Theme
 *   Copyright 2014 Authentic Goods Co. http://authenticgoods.co
 *
*/
 

// Variables, Mixins
@import "../../../LESS/_variables.less";
@import "../../../LESS/_mixins.less";  

@import "../../../LESS/_base.less";
@import "../../../LESS/_page-loader.less";
@import "../../../LESS/_header.less";
@import "../../../LESS/_left-sidebar.less";
@import "../../../LESS/_main-content.less";
@import "../../../LESS/_right-sidebar.less";
@import "../../../LESS/_profile-status.less"; 
@import "../../../LESS/_buttons.less";
@import "../../../LESS/_progress.less";
@import "../../../LESS/_panels.less";
@import "../../../LESS/_widgets.less"; 
@import "../../../LESS/_tabs.less";
@import "../../../LESS/_badge.less";
@import "../../../LESS/_misc.less";
@import "../../../LESS/_sliders.less"; 
@import "../../../LESS/_charts.less"; 
@import "../../../LESS/_nested-sortable.less";  
@import "../../../LESS/_icons.less"; 
@import "../../../LESS/_forms.less"; 
@import "../../../LESS/_pages.less";
@import "../../../LESS/_calendar.less";
@import "../../../LESS/_preloader.less";
@import "../../../LESS/_modals.less"; 
@import "../../../LESS/_mail.less"; 
@import "../../../LESS/_theme-colors.less";
@import "../../../LESS/_demo-settings.less";                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ���          dMicrosoft.VisualStudio.CommonIDE, Version=11.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a   8Microsoft.VisualStudio.Build.ComInteropWrapper.RarInputs   allowedAssemblyExtensions
appConfigFilecandidateAssemblyFilesfullFrameworkAssemblyTablesfullFrameworkFoldersfullTargetFrameworkSubsetNames$ignoreDefaultInstalledAssemblyTables*ignoreDefaultInstalledAssemblySubsetTablesinstalledAssemblyTablesinstalledAssemblySubsetTables latestTargetFrameworkDirectoriespdtarSearchPathsgdtarSearchPathsprofileNameregistrySearchPath	stateFiletargetFrameworkDirectoriestargetFrameworkMoniker!targetFrameworkMonikerDisplayNametargetFrameworkVersiontargetProcessorArchitecturetargetedRuntimeVersiontargetFrameworkSubsets  System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]   	   
	   	   	   	     	   		   	
   	   
    
   B{Registry:Software\Microsoft\.NETFramework,v4.5,AssemblyFoldersEx}   C:\Users\areyes\Desktop\VILLAPHONE\vf\Siscom.WebLib\Siscom.WebLib.PropertySetter\obj\Release\DesignTimeResolveAssemblyReferences.cache	      .NETFramework,Version=v4.5   .NET Framework 4.5   v4.5   msil   
v4.0.30319	            .winmd   .dll   .exe   	      gC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\Microsoft.CSharp.dll   _C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\mscorlib.dll   sC:\Users\areyes\Desktop\VILLAPHONE\vf\Siscom.WebLib\Siscom.WebLib.Validator\bin\Release\Siscom.WebLib.Validator.dll   bC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Core.dll   tC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Data.DataSetExtensions.dll   bC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Data.dll   ]C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.dll    aC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Xml.dll!   fC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Xml.Linq.dll   System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]   _items_size_version  System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]][]	"                 #   SC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\      $   Full      	"           	      	"           
             &   {CandidateAssemblyFiles}'   {HintPathFromItem}(   {TargetFrameworkDirectory})   B{Registry:Software\Microsoft\.NETFramework,v4.5,AssemblyFoldersEx}*   
{RawFileName}+   ]C:\Users\areyes\Desktop\VILLAPHONE\vf\Siscom.WebLib\Siscom.WebLib.PropertySetter\bin\Release\      ,   SC:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\-   [C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\Facades\       "           �System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Collections.Generic.List`1[[System.Collections.Generic.KeyValuePair`2[[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.String, mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]], mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089]]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         param($installPath, $toolsPath, $package, $project)

. (Join-Path $toolsPath common.ps1)

# VS 11 and above supports the new intellisense JS files
$vsVersion = [System.Version]::Parse($dte.Version)
$supportsJsIntelliSenseFile = $vsVersion.Major -ge 11

if (-not $supportsJsIntelliSenseFile) {
    $displayVersion = $vsVersion.Major
    Write-Host "IntelliSense JS files are not supported by your version of Visual Studio: $displayVersion"
    exit
}

if ($scriptsFolderProjectItem -eq $null) {
    # No Scripts folder
    Write-Host "No Scripts folder found"
    exit
}

# Delete the vsdoc file from the project
try {
    $vsDocProjectItem = $scriptsFolderProjectItem.ProjectItems.Item("jquery-$ver-vsdoc.js")
    Delete-ProjectItem $vsDocProjectItem
}
catch {
    Write-Host "Error deleting vsdoc file: " + $_.Exception -ForegroundColor Red
    exit
}

# Copy the intellisense file to the project from the tools folder
$intelliSenseFileSourcePath = Join-Path $toolsPath $intelliSenseFileName
try {
    $scriptsFolderProjectItem.ProjectItems.AddFromFileCopy($intelliSenseFileSourcePath)
}
catch {
    # This will throw if the file already exists, so we need to catch here
}

# Update the _references.js file
AddOrUpdate-Reference $scriptsFolderProjectItem $jqueryFileNameRegEx $jqueryFileName                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            n.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    this.$dropdownContainer.width();

    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function () {
      self._handleSelectOnClose();
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function () {
    var $highlightedResults = this.getHighlightedResults();

    if ($highlightedResults.length < 1) {
      return;
    }

    this.trigger('select', {
        data: $highlightedResults.data('data')
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close');
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend({}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is noThing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anyThing
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
	$element.attr('aria-hidden', 'true');
	
    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this._sync = Utils.bind(this._syncAttributes, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._sync);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._sync);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener('DOMAttrModified', self._sync, false);
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('focus', function () {
      self.$container.addClass('select2-container--focus');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open');
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ENTER) {
          self.trigger('results:select');

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle');

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous');

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next');

          evt.preventDefault();
        } else if (key === KEYS.ESC || key === KEYS.TAB) {
          self.close();

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            ((key === KEYS.DOWN || key === KEYS.UP) && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable');
    } else {
      this.trigger('enable');
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});

    this.trigger('open');
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close');
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._sync);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._sync, false);
    }

    this._sync = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
	this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('jquery.select2',[
  'jquery',
  'require',

  './select2/core',
  './select2/defaults'
], function ($, require, Select2, Defaults) {
  // Force jQuery.mousewheel to be loaded if it hasn't already
  require('jquery.mousewheel');

  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend({}, options, true);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var instance = this.data('select2');

        if (instance == null && window.console && console.error) {
          console.error(
            'The select2(\'' + options + '\') method was called on an ' +
            'element that is not using Select2.'
          );
        }

        var args = Array.prototype.slice.call(arguments, 1);

        var ret = instance[options](args);

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery.mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, noThing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the Things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
