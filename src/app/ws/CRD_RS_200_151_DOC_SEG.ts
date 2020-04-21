
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_151_DOC_SEG.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_151_DOC_SEG.sql
 * Fecha   : 15/04/2020 10:48:06
 */
@Injectable()
export class CRD_RS_200_151_DOC_SEG 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_151_DOC_SEG
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro Operacion
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_151_DOC_SEG';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
