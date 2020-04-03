
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : SCX_RS_200_160_EST.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de SCX_RS_200_160_EST.sql
 * Fecha   : 18/02/2020 17:25:58
 */
@Injectable()
export class SCX_RS_200_160_EST 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a SCX_RS_200_160_EST
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/SCX_RS_200_160_EST';  
   const data: any = {
wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
