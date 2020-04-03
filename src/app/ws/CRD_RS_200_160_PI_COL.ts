
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_160_PI_COL.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_160_PI_COL.sql
 * Fecha   : 18/02/2020 17:24:25
 */
@Injectable()
export class CRD_RS_200_160_PI_COL 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_160_PI_COL
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Numero Solicitud
   * @param wss_est_col Estado Solicitud
   * @param wss_fec_des Fecha desde
   * @param wss_fec_has Fecha hasta
   * @param wss_cod_cli Codigo Cliente
   * @param wss_cod_suc codigo sucursal
   * @param wss_cod_fam codigo familia producto
   * @param wss_cod_cnl codigo canal
   * @param wss_sol_cod_pro Producto
   * @param wss_sol_cod_eve Codigo del evento
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_est_col: string // String
		, wss_fec_des: string // Date
		, wss_fec_has: string // Date
		, wss_cod_cli: string // String
		, wss_cod_suc: string // int
		, wss_cod_fam: string // String
		, wss_cod_cnl: string // String
		, wss_sol_cod_pro: string // String
		, wss_sol_cod_eve: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_160_PI_COL';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_est_col: wss_est_col, wss_fec_des: wss_fec_des, wss_fec_has: wss_fec_has, wss_cod_cli: wss_cod_cli, wss_cod_suc: wss_cod_suc, wss_cod_fam: wss_cod_fam, wss_cod_cnl: wss_cod_cnl, wss_sol_cod_pro: wss_sol_cod_pro, wss_sol_cod_eve: wss_sol_cod_eve, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
