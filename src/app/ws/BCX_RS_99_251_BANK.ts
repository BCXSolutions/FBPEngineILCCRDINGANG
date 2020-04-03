
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_99_251_BANK.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_99_251_BANK.sql
 * Fecha   : 03/03/2020 17:40:58
 */
@Injectable()
export class BCX_RS_99_251_BANK 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_99_251_BANK
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_bco_swf Direccion swift del banco
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_bco_swf: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_99_251_BANK';  
   const data: any = {
wss_bco_swf: wss_bco_swf, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
