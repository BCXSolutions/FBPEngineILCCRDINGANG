
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_ALI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_ALI.sql
 * Fecha   : 23/04/2020 11:53:38
 */
@Injectable()
export class CRD_RS_200_112_ALI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_ALI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion orden en pantalla
   * @param wss_for_pag Forma de Pago 18
   * @param wss_vis_pct porcentaje Vista 19
   * @param wss_pla_pct porcentaje Plazo 20
   * @param wss_fec_sol Fecha solicitud 21
   * @param wss_icp_ind interes proveedor indicador 24
   * @param wss_icp_tip tipo tasa interes proveedor 25
   * @param wss_icp_bas base tasa interes proveedor 26
   * @param wss_icp_spr spread tasa interes proveedor 27
   * @param wss_icp_mto Monto interes proveedor 28
   * @param wss_tas_ape_neg Tasa apertura a Negoc. 29
   * @param wss_tas_neg_vcp Tasa Negoc a Vencto cred proveedor. 30
   * @param wss_dsd_pzo_rig Plazo rige desde (E, N, F, O) 31
   * @param wss_int_bco_tip tipo tasa interes banco 32
   * @param wss_int_bco_bas base tasa interes banco 33
   * @param wss_int_bco_spr spread tasa interes banco 34
   * @param wss_pla_bco Plazo banco - dias. 35
   * @param wss_tip_reem Tipo Reembolso. G/A 36
   * @param wss_ind_zfr Ind ZFranca. N/D/H 37
   * @param wss_ind_eef Ind Enterada en efectivo S/N 38
   * @param wss_ind_dom Ind CCredDomestica S/N 38
   * @param wss_ind_tpais Ind terceros paises S/N 38
   * @param wss_ind_ref Ind Refinanciamiento. S/N 38
   * @param wss_iso_rec Banco Receptor corresponsal 39
   * @param wss_nom_rec nombre Receptor corresponsal 39
   * @param wss_dir_rec direcc Receptor corresponsal 39
   * @param wss_ciu_rec ciudad Receptor corresponsal 39
   * @param wss_pai_rec pais Receptor corresponsal 39
   * @param wss_iso_ord Banco Ordenante 46
   * @param wss_nom_ord Nombre Ordenante 46
   * @param wss_dir_ord direcc Ordenante 46
   * @param wss_ciu_ord ciudad Ordenante 46
   * @param wss_pai_ord pais Ordenante 46
   * @param wss_iso_nom Banco nominado ISO - utilizable con (41A)54
   * @param wss_gls_any utilizable cualquiera - (41D) 54
   * @param wss_iso_gdo Banco Girado ISO - (42A) 57
   * @param wss_nom_gdo Nombre Girado 57
   * @param wss_dir_gdo direcc Girado 57
   * @param wss_ciu_gdo ciudad Girado 57
   * @param wss_pai_gdo pais Girado 57
   * @param wss_iso_reem Banco Reembolsador 80
   * @param wss_nom_reem nombre Reembolsador 80
   * @param wss_dir_reem direcc Reembolsador 80
   * @param wss_ciu_reem ciudad Reembolsador 80
   * @param wss_pai_reem pais Reembolsador 80
   * @param wss_nro_ala Nro aladi convenio 81
   * @param wss_iso_avi Banco Avisador 84
   * @param wss_nom_avi nombre Avisador 84
   * @param wss_dir_avi direcc Avisador 84
   * @param wss_ciu_avi ciudad Avisador 84
   * @param wss_pai_avi pais Avisador 84
   * @param wss_tas_cp_cof Credito proveedor - Costo Fondo
   * @param wss_tas_cp_spr Credito proveedor - Spread
   * @param wss_tas_fb_cof Financiamiento banco - Costo Fondo
   * @param wss_tas_fb_spr Financiamiento banco - Spread
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_for_pag: string // int
		, wss_vis_pct: string // BigDecimal
		, wss_pla_pct: string // BigDecimal
		, wss_fec_sol: string // Date
		, wss_icp_ind: string // int
		, wss_icp_tip: string // int
		, wss_icp_bas: string // BigDecimal
		, wss_icp_spr: string // BigDecimal
		, wss_icp_mto: string // BigDecimal
		, wss_tas_ape_neg: string // BigDecimal
		, wss_tas_neg_vcp: string // BigDecimal
		, wss_dsd_pzo_rig: string // String
		, wss_int_bco_tip: string // int
		, wss_int_bco_bas: string // BigDecimal
		, wss_int_bco_spr: string // BigDecimal
		, wss_pla_bco: string // int
		, wss_tip_reem: string // String
		, wss_ind_zfr: string // String
		, wss_ind_eef: string // String
		, wss_ind_dom: string // String
		, wss_ind_tpais: string // String
		, wss_ind_ref: string // String
		, wss_iso_rec: string // String
		, wss_nom_rec: string // String
		, wss_dir_rec: string // String
		, wss_ciu_rec: string // String
		, wss_pai_rec: string // String
		, wss_iso_ord: string // String
		, wss_nom_ord: string // String
		, wss_dir_ord: string // String
		, wss_ciu_ord: string // String
		, wss_pai_ord: string // String
		, wss_iso_nom: string // String
		, wss_gls_any: string // String
		, wss_iso_gdo: string // String
		, wss_nom_gdo: string // String
		, wss_dir_gdo: string // String
		, wss_ciu_gdo: string // String
		, wss_pai_gdo: string // String
		, wss_iso_reem: string // String
		, wss_nom_reem: string // String
		, wss_dir_reem: string // String
		, wss_ciu_reem: string // String
		, wss_pai_reem: string // String
		, wss_nro_ala: string // String
		, wss_iso_avi: string // String
		, wss_nom_avi: string // String
		, wss_dir_avi: string // String
		, wss_ciu_avi: string // String
		, wss_pai_avi: string // String
		, wss_tas_cp_cof: string // BigDecimal
		, wss_tas_cp_spr: string // BigDecimal
		, wss_tas_fb_cof: string // BigDecimal
		, wss_tas_fb_spr: string // BigDecimal
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_ALI';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_for_pag: wss_for_pag, wss_vis_pct: wss_vis_pct, wss_pla_pct: wss_pla_pct, wss_fec_sol: wss_fec_sol, wss_icp_ind: wss_icp_ind, wss_icp_tip: wss_icp_tip, wss_icp_bas: wss_icp_bas, wss_icp_spr: wss_icp_spr, wss_icp_mto: wss_icp_mto, wss_tas_ape_neg: wss_tas_ape_neg, wss_tas_neg_vcp: wss_tas_neg_vcp, wss_dsd_pzo_rig: wss_dsd_pzo_rig, wss_int_bco_tip: wss_int_bco_tip, wss_int_bco_bas: wss_int_bco_bas, wss_int_bco_spr: wss_int_bco_spr, wss_pla_bco: wss_pla_bco, wss_tip_reem: wss_tip_reem, wss_ind_zfr: wss_ind_zfr, wss_ind_eef: wss_ind_eef, wss_ind_dom: wss_ind_dom, wss_ind_tpais: wss_ind_tpais, wss_ind_ref: wss_ind_ref, wss_iso_rec: wss_iso_rec, wss_nom_rec: wss_nom_rec, wss_dir_rec: wss_dir_rec, wss_ciu_rec: wss_ciu_rec, wss_pai_rec: wss_pai_rec, wss_iso_ord: wss_iso_ord, wss_nom_ord: wss_nom_ord, wss_dir_ord: wss_dir_ord, wss_ciu_ord: wss_ciu_ord, wss_pai_ord: wss_pai_ord, wss_iso_nom: wss_iso_nom, wss_gls_any: wss_gls_any, wss_iso_gdo: wss_iso_gdo, wss_nom_gdo: wss_nom_gdo, wss_dir_gdo: wss_dir_gdo, wss_ciu_gdo: wss_ciu_gdo, wss_pai_gdo: wss_pai_gdo, wss_iso_reem: wss_iso_reem, wss_nom_reem: wss_nom_reem, wss_dir_reem: wss_dir_reem, wss_ciu_reem: wss_ciu_reem, wss_pai_reem: wss_pai_reem, wss_nro_ala: wss_nro_ala, wss_iso_avi: wss_iso_avi, wss_nom_avi: wss_nom_avi, wss_dir_avi: wss_dir_avi, wss_ciu_avi: wss_ciu_avi, wss_pai_avi: wss_pai_avi, wss_tas_cp_cof: wss_tas_cp_cof, wss_tas_cp_spr: wss_tas_cp_spr, wss_tas_fb_cof: wss_tas_fb_cof, wss_tas_fb_spr: wss_tas_fb_spr, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
