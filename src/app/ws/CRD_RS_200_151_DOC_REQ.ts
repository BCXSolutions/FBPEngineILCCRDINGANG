
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_151_DOC_REQ.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_151_DOC_REQ.sql
 * Fecha   : 17/04/2020 15:09:13
 */
@Injectable()
export class CRD_RS_200_151_DOC_REQ 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_151_DOC_REQ
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_151_DOC_REQ';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
