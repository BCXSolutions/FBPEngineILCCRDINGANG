
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_BCO_CNFR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_BCO_CNFR.sql
 * Fecha   : 14/04/2020 22:34:19
 */
@Injectable()
export class CRD_RS_200_112_BCO_CNFR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_BCO_CNFR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro operacion
   * @param wss_bco_cod_iso banco
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_bco_cod_iso: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_BCO_CNFR';  
   const data: any = {
    wss_opr_num: wss_opr_num, wss_bco_cod_iso: wss_bco_cod_iso, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
