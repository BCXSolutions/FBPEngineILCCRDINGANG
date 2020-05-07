
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_DLI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_DLI.sql
 * Fecha   : 23/04/2020 12:06:54
 */
@Injectable()
export class CRD_RS_200_112_DLI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_DLI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion orden en pantalla
   * @param wss_for_lc Forma carta de credito((i)revocable,(in)transferible)40
   * @param wss_cod_ucp Reglas UCP aplicables 42
   * @param wss_gls_ucp Glosa otra regla aplicable
   * @param wss_dia_val_ccr Dias validez c.credito 43
   * @param wss_fec_vto Fecha Vencimiento 44
   * @param wss_lug_vto Lugar Vencimiento 45
   * @param wss_nom_ben1 Nombre Beneficiario 48
   * @param wss_nom_ben2 Nombre Beneficiario 48
   * @param wss_dir_ben Direccion Beneficiario 48
   * @param wss_ciu_ben Ciudad Beneficiario 48
   * @param wss_pai_ben Pais BeneficiarioCodigo 48
   * @param wss_tol_pct_neg Tolerancia negativa porcentaje 51
   * @param wss_tol_pct_pos Tolerancia positiva porcentaje 51
   * @param wss_mto_adi1 Monto adicional cubierto 53
   * @param wss_gir_a Giros A - (42C) 56
   * @param wss_pag_mix Pago Mixto - Detalle (42M) (CRDTXT) 58
   * @param wss_pag_dif Pago Diferido - Detalle (42P) (CRDTXT) 59
   * @param wss_emb_par Embarque Parcial Permitido (43P) 60
   * @param wss_ind_trnsb Transbordos Permitidos (43T) 61
   * @param wss_via_tpt Via Transporte (43T) 62
   * @param wss_lug_desp Lugar Despacho (44A) 63
   * @param wss_pto_emb Puerto Embarque (44E) 64
   * @param wss_pto_desc Puerto Descarga (44F) 65
   * @param wss_lug_dest Lugar Destino (44B) 66
   * @param wss_pla_pre_doc Plazo presentacion documentos 67
   * @param wss_ult_fec_emb Ultima fecha embarque 68
   * @param wss_cls_comp Clausula de Compra 71
   * @param wss_fac_nom Factura a nombre de 72
   * @param wss_doc_emb_avi Embarque avisar a (S, O) 73
   * @param wss_otr_avi_emb Otro a avisar Embarque 73
   * @param wss_mar_esp_doc Marcas especiales documento embarque 74
   * @param wss_ind_gto Indicador gastos (B/S/O) 76
   * @param wss_exc_gto excepto gastos 77
   * @param wss_per_pres Periodo de presentacion - (48) 78
   * @param wss_ins_conf instrucciones de confirmacion (S:si, N:no, M:may add)79
   * @param wss_ind_urr Reglas URR aplicables (S/N) 82
   * @param wss_inf_rem_rec remitente a receptor, informacion 85
   * @param wss_ind_740 indic genera MT740 (S/N)
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_for_lc: string // String
		, wss_cod_ucp: string // String
		, wss_gls_ucp: string // String
		, wss_dia_val_ccr: string // int
		, wss_fec_vto: string // Date
		, wss_lug_vto: string // String
		, wss_nom_ben1: string // String
		, wss_nom_ben2: string // String
		, wss_dir_ben: string // String
		, wss_ciu_ben: string // String
		, wss_pai_ben: string // String
		, wss_tol_pct_neg: string // BigDecimal
		, wss_tol_pct_pos: string // BigDecimal
		, wss_mto_adi1: string // String
		, wss_gir_a: string // String
		, wss_pag_mix: string // String
		, wss_pag_dif: string // String
		, wss_emb_par: string // String
		, wss_ind_trnsb: string // String
		, wss_via_tpt: string // String
		, wss_lug_desp: string // String
		, wss_pto_emb: string // String
		, wss_pto_desc: string // String
		, wss_lug_dest: string // String
		, wss_pla_pre_doc: string // int
		, wss_ult_fec_emb: string // Date
		, wss_cls_comp: string // int
		, wss_fac_nom: string // String
		, wss_doc_emb_avi: string // String
		, wss_otr_avi_emb: string // String
		, wss_mar_esp_doc: string // String
		, wss_ind_gto: string // String
		, wss_exc_gto: string // String
		, wss_per_pres: string // String
		, wss_ins_conf: string // String
		, wss_ind_urr: string // String
		, wss_inf_rem_rec: string // String
		, wss_ind_740: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_DLI';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_for_lc: wss_for_lc, wss_cod_ucp: wss_cod_ucp, wss_gls_ucp: wss_gls_ucp, wss_dia_val_ccr: wss_dia_val_ccr, wss_fec_vto: wss_fec_vto, wss_lug_vto: wss_lug_vto, wss_nom_ben1: wss_nom_ben1, wss_nom_ben2: wss_nom_ben2, wss_dir_ben: wss_dir_ben, wss_ciu_ben: wss_ciu_ben, wss_pai_ben: wss_pai_ben, wss_tol_pct_neg: wss_tol_pct_neg, wss_tol_pct_pos: wss_tol_pct_pos, wss_mto_adi1: wss_mto_adi1, wss_gir_a: wss_gir_a, wss_pag_mix: wss_pag_mix, wss_pag_dif: wss_pag_dif, wss_emb_par: wss_emb_par, wss_ind_trnsb: wss_ind_trnsb, wss_via_tpt: wss_via_tpt, wss_lug_desp: wss_lug_desp, wss_pto_emb: wss_pto_emb, wss_pto_desc: wss_pto_desc, wss_lug_dest: wss_lug_dest, wss_pla_pre_doc: wss_pla_pre_doc, wss_ult_fec_emb: wss_ult_fec_emb, wss_cls_comp: wss_cls_comp, wss_fac_nom: wss_fac_nom, wss_doc_emb_avi: wss_doc_emb_avi, wss_otr_avi_emb: wss_otr_avi_emb, wss_mar_esp_doc: wss_mar_esp_doc, wss_ind_gto: wss_ind_gto, wss_exc_gto: wss_exc_gto, wss_per_pres: wss_per_pres, wss_ins_conf: wss_ins_conf, wss_ind_urr: wss_ind_urr, wss_inf_rem_rec: wss_inf_rem_rec, wss_ind_740: wss_ind_740, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
