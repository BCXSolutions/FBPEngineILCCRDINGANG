
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_DOC_SEG.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_DOC_SEG.sql
 * Fecha   : 15/04/2020 10:52:36
 */
@Injectable()
export class CRD_RS_200_111_DOC_SEG 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_DOC_SEG
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro Operacion
   * @param wss_cor_doc correl docto (0=nuevo)
   * @param wss_cod_doc codigo documento (9999=otros docums)
   * @param wss_dsc_doc descripcion documento
   * @param wss_ori_c1 cantidad originales primer correo
   * @param wss_cop_c1 cantidad copias primer correo
   * @param wss_seg_tip_doc Tipo de documento
   * @param wss_seg_pct_mto porcentaje
   * @param wss_seg_dia_adu Dias en Aduana
   * @param wss_seg_ind_bab cubriendo traslado de bodega 1 = Si 0 = NO
   * @param wss_cls_comp Clausula de compra
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_cor_doc: string // int
		, wss_cod_doc: string // String
		, wss_dsc_doc: string // String
		, wss_ori_c1: string // int
		, wss_cop_c1: string // int
		, wss_seg_tip_doc: string // String
		, wss_seg_pct_mto: string // BigDecimal
		, wss_seg_dia_adu: string // int
		, wss_seg_ind_bab: string // int
		, wss_cls_comp: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_DOC_SEG';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_cor_doc: wss_cor_doc, wss_cod_doc: wss_cod_doc, wss_dsc_doc: wss_dsc_doc, wss_ori_c1: wss_ori_c1, wss_cop_c1: wss_cop_c1, wss_seg_tip_doc: wss_seg_tip_doc, wss_seg_pct_mto: wss_seg_pct_mto, wss_seg_dia_adu: wss_seg_dia_adu, wss_seg_ind_bab: wss_seg_ind_bab, wss_cls_comp: wss_cls_comp, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
