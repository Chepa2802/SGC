using System;
using System.Runtime.Serialization;

namespace Entidad.Sistema
{
    [Serializable]
    [DataContract]
    public partial class E_Transaccion
    {
        [DataMember]public int?         nu_tran_ruta            { get; set; } //> Ruta de petición
        [DataMember]public int?         nu_tran_stdo            { get; set; } //> Estado de transacción
        [DataMember]public Decimal?     nu_tran_pkey            { get; set; } //> Nueva llave primaria generada        
        [DataMember]public string       vc_tran_codi            { get; set; } //> Nuevo código generado o asignado                
        [DataMember]public String       tx_tran_mnsg            { get; set; } //> Mensaje de transacción        
        [DataMember]public string       vc_tran_clve_find       { get; set; } //> Palabra clave de búsqueda general        
        [DataMember]public string       vc_tran_usua_regi       { get; set; } //> Usuario que realiza la acción de registro        
        [DataMember]public DateTime?    dt_tran_fech_regi       { get; set; } //> Fecha en la que se realiza una acción de registro        
        [DataMember]public string       vc_tran_usua_modi       { get; set; } //> Usuario que realiza la acción de modificación        
        [DataMember]public DateTime?    dt_tran_fech_modi       { get; set; } //> Fecha en que se realiza una acción de modificación
        [DataMember]public string       vc_tran_usua_ptcn       { get; set; } //> Usuario que realiza la acción de consulta        
        [DataMember]public int?         nu_tran_regs_pagn       { get; set; } //> Número de registros por página
        [DataMember]public Int32?       nu_tran_pagn            { get; set; } //> Número de página
        [DataMember]public string       ch_tran_stdo_regi       { get; set; } //> Estado de registro


        [DataMember]public Decimal?     nu_erro_pcdo_pkey       { get; set; } //> Llave primaria de un error de procedimiento        
        [DataMember]public Decimal?     nu_erro_pcdo_nmro       { get; set; } //> Número de un error de procedimiento        
        [DataMember]public string       vc_erro_pcdo_pcdo       { get; set; } //> Nombre de procedimiento que originó el error        
        [DataMember]public Decimal?     nu_erro_pcdo_line       { get; set; } //> Línea del procedimiento donde se originó el error        
        [DataMember]public int?         nu_erro_pcdo_rsgo       { get; set; } //> Indicador de riesgo del error de procedimiento        
        [DataMember]public String       tx_erro_pcdo_mnsg       { get; set; } //> Mensaje de error de procedimiento        
        [DataMember]public DateTime?    dt_erro_pcdo_fech       { get; set; } //> Fecha en que se generó el error        
        [DataMember]public int?         nu_erro_pcdo_stdo       { get; set; } //> Estado de error de procedimiento        
        [DataMember]public String       tx_erro_pcdo_caus       { get; set; } //> Causa del error de procedimiento        
        [DataMember]public String       tx_erro_pcdo_efec       { get; set; } //> Efecto del error de procedimiento
        [DataMember]public String       tx_erro_pcdo_hrsl       { get; set; } //> Historial de soluciones del error de procedimiento
        [DataMember]public string       ch_erro_pcdo_stdo_slcn  { get; set; } //> Estado de solución

        [DataMember]public DateTime?    dt_tran_fech_inic       { get; set; }
        [DataMember]public DateTime?    dt_tran_fech_fina       { get; set; }
        [DataMember]public string       vc_find_gene            { get; set; } //> Conexión

        [DataMember]public string       vc_conexion_origen      { get; set; } //> Conexión
        [DataMember]public string       vc_master               { get; set; } //> Conexión
        [DataMember]public string       vc_error_vista          { get; set; } //> Conexión
        [DataMember]public decimal?     nu_cant_procesados      { get; set; } //> Cantidad de elementos procesados
        [DataMember]public decimal?     nu_cant_exito           { get; set; } //> Cantidad de elementos procesados con exito
        [DataMember]public decimal?     nu_cant_error           { get; set; } //> Cantidad de elementos procesados con error
        [DataMember]public decimal?     nu_nro_fila_excel       { get; set; } //> Nro de fila del excel procesado
        [DataMember]public string       ch_estado               { get; set; } //> Conexión
        [DataMember]public string       ch_nivel                { get; set; } //> Conexión
        [DataMember]public string       ch_accion               { get; set; } //> 

        public E_Transaccion()
        {
            nu_cant_procesados  = 0;
            nu_cant_exito       = 0;
            nu_cant_error       = 0;
        }
    }
}
