
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_99_260_CLN.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_99_260_CLN.sql
 * Fecha   : 18/02/2020 16:01:41
 */
@Injectable()
export class BCX_RS_99_260_CLN 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_99_260_CLN
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_cli Codigo de cliente
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_cli: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_99_260_CLN';  
   const data: any = {
wss_cod_cli: wss_cod_cli, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
