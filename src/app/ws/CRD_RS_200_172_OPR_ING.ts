
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_172_OPR_ING.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_172_OPR_ING.sql
 * Fecha   : 03/12/2019 10:34:46
 */
@Injectable()
export class CRD_RS_200_172_OPR_ING 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_172_OPR_ING
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_usr_cod Codigo del usuario
   * @param wss_opr_num Nro operacion
   * @param wss_fam_prd Familia de producto
   * @param wss_cod_prd Codigo de producto
   * @param wss_odf_opr_ind Indic Origen Fondos Operacion ("N":MN, "X":MX)
   * @param wss_odf_opr_cod Origen Fondos Operacion
   * @param wss_odf_opr_suc Sucursal Origen Fondos Operacion
   * @param wss_odf_opr_ccte Cuenta Corriente cargo Operacion
   * @param wss_odf_opr_tc Tipo Cambio Origen Fondos Operacion
   * @param wss_odf_opr_bco Corresponsal O/D Fondos Operacion
   * @param wss_odf_cyg_ind Indic Origen Fondos Comisiones y Gastos ("N":MN, "X":MX)
   * @param wss_odf_cyg_cod Origen Fondos Comisiones y Gastos
   * @param wss_odf_cyg_suc Sucursal Origen Fondos Comisiones y Gastos
   * @param wss_odf_cyg_ccte Cuenta Corriente cargo Comisiones y Gastos
   * @param wss_odf_cyg_tc Tipo Cambio Origen Fondos Comisiones y Gastos
   * @param wss_odf_cyg_bco Corresponsal O/D Fondos Gastos
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_usr_cod: string // String
		, wss_opr_num: string // String
		, wss_fam_prd: string // String
		, wss_cod_prd: string // String
		, wss_odf_opr_ind: string // String
		, wss_odf_opr_cod: string // int
		, wss_odf_opr_suc: string // int
		, wss_odf_opr_ccte: string // String
		, wss_odf_opr_tc: string // BigDecimal
		, wss_odf_opr_bco: string // String
		, wss_odf_cyg_ind: string // String
		, wss_odf_cyg_cod: string // int
		, wss_odf_cyg_suc: string // int
		, wss_odf_cyg_ccte: string // String
		, wss_odf_cyg_tc: string // BigDecimal
		, wss_odf_cyg_bco: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_172_OPR_ING';  
   const data: any = {
wss_usr_cod: wss_usr_cod, wss_opr_num: wss_opr_num, wss_fam_prd: wss_fam_prd, wss_cod_prd: wss_cod_prd, wss_odf_opr_ind: wss_odf_opr_ind, wss_odf_opr_cod: wss_odf_opr_cod, wss_odf_opr_suc: wss_odf_opr_suc, wss_odf_opr_ccte: wss_odf_opr_ccte, wss_odf_opr_tc: wss_odf_opr_tc, wss_odf_opr_bco: wss_odf_opr_bco, wss_odf_cyg_ind: wss_odf_cyg_ind, wss_odf_cyg_cod: wss_odf_cyg_cod, wss_odf_cyg_suc: wss_odf_cyg_suc, wss_odf_cyg_ccte: wss_odf_cyg_ccte, wss_odf_cyg_tc: wss_odf_cyg_tc, wss_odf_cyg_bco: wss_odf_cyg_bco, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
