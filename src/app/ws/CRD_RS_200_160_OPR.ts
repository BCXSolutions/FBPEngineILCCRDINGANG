
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_160_OPR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_160_OPR.sql
 * Fecha   : 18/02/2020 16:07:02
 */
@Injectable()
export class CRD_RS_200_160_OPR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_160_OPR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_rut_cli Rut cliente
   * @param wss_num_opr Nro Operacion (proximas)
   * @param wss_fec_des Fecha desde
   * @param wss_fec_has Fecha hasta
   * @param wss_est_lci Estado LCI: T:todas, N:negociadas, S:Sin negociar
   * @param wss_cod_cnl codigo canal
   * @param wss_cod_suc codigo sucursal
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_rut_cli: string // String
		, wss_num_opr: string // String
		, wss_fec_des: string // Date
		, wss_fec_has: string // Date
		, wss_est_lci: string // String
		, wss_cod_cnl: string // String
		, wss_cod_suc: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_160_OPR';  
   const data: any = {
wss_rut_cli: wss_rut_cli, wss_num_opr: wss_num_opr, wss_fec_des: wss_fec_des, wss_fec_has: wss_fec_has, wss_est_lci: wss_est_lci, wss_cod_cnl: wss_cod_cnl, wss_cod_suc: wss_cod_suc, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
