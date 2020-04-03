
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_152_PI_ILC.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_152_PI_ILC.sql
 * Fecha   : 18/02/2020 17:24:04
 */
@Injectable()
export class CRD_RS_200_152_PI_ILC 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_152_PI_ILC
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_sol_num Nro solicitud
   * @param wss_opr_num Nro operacion
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_sol_num: string // String
		, wss_opr_num: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_152_PI_ILC';  
   const data: any = {
wss_sol_num: wss_sol_num, wss_opr_num: wss_opr_num, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
