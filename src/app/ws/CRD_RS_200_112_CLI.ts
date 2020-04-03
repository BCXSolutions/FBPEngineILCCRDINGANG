
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_CLI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_CLI.sql
 * Fecha   : 03/12/2019 09:57:37
 */
@Injectable()
export class CRD_RS_200_112_CLI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_CLI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_cli rut
   * @param wss_opr_num Nro operacion
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_cli: string // String
		, wss_opr_num: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_CLI';  
   const data: any = {
wss_opr_cli: wss_opr_cli, wss_opr_num: wss_opr_num, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
