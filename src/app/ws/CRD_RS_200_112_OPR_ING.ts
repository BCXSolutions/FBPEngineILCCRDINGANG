
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_OPR_ING.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_OPR_ING.sql
 * Fecha   : 03/12/2019 09:58:04
 */
@Injectable()
export class CRD_RS_200_112_OPR_ING 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_OPR_ING
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion
   * @param wss_fam_prd Familia de producto
   * @param wss_cod_prd Codigo de producto
   * @param wss_cod_cli Codigo de cliente
   * @param wss_ofi Suc cliente
   * @param wss_ref_cli Ref Cliente
   * @param wss_mon_ope moneda operacion
   * @param wss_mto_ori monto origen
   * @param wss_tas_tip tipo tasa interes
   * @param wss_tas_bas base tasa interes
   * @param wss_tas_spr spread tasa interes
   * @param wss_tas_tm2 Indicar Tasa T-2. 2:t-2, 1:t-1, 0:t0
   * @param wss_fec_otor Fecha Otorgamiento
   * @param wss_dias_pzo Dias Plazo
   * @param wss_fec_vto Fecha Vencimiento
   * @param wss_fec_ini_int Inicio Intereses
   * @param wss_opr_asoc Oper asociada
   * @param wss_corr_opr Correlativo Operacion
   * @param wss_ref_ext Ref externa
   * @param wss_opr_spr_cof Spread - Costo Fondo
   * @param wss_opr_spr_spr Spread - Spread
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_fam_prd: string // String
		, wss_cod_prd: string // String
		, wss_cod_cli: string // String
		, wss_ofi: string // int
		, wss_ref_cli: string // String
		, wss_mon_ope: string // String
		, wss_mto_ori: string // BigDecimal
		, wss_tas_tip: string // int
		, wss_tas_bas: string // BigDecimal
		, wss_tas_spr: string // BigDecimal
		, wss_tas_tm2: string // int
		, wss_fec_otor: string // Date
		, wss_dias_pzo: string // int
		, wss_fec_vto: string // Date
		, wss_fec_ini_int: string // Date
		, wss_opr_asoc: string // String
		, wss_corr_opr: string // int
		, wss_ref_ext: string // String
		, wss_opr_spr_cof: string // BigDecimal
		, wss_opr_spr_spr: string // BigDecimal
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_OPR_ING';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_fam_prd: wss_fam_prd, wss_cod_prd: wss_cod_prd, wss_cod_cli: wss_cod_cli, wss_ofi: wss_ofi, wss_ref_cli: wss_ref_cli, wss_mon_ope: wss_mon_ope, wss_mto_ori: wss_mto_ori, wss_tas_tip: wss_tas_tip, wss_tas_bas: wss_tas_bas, wss_tas_spr: wss_tas_spr, wss_tas_tm2: wss_tas_tm2, wss_fec_otor: wss_fec_otor, wss_dias_pzo: wss_dias_pzo, wss_fec_vto: wss_fec_vto, wss_fec_ini_int: wss_fec_ini_int, wss_opr_asoc: wss_opr_asoc, wss_corr_opr: wss_corr_opr, wss_ref_ext: wss_ref_ext, wss_opr_spr_cof: wss_opr_spr_cof, wss_opr_spr_spr: wss_opr_spr_spr, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
