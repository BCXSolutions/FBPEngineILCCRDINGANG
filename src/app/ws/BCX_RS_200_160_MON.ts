
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_MON.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_MON.sql
 * Fecha   : 03/12/2019 09:55:41
 */
@Injectable()
export class BCX_RS_200_160_MON 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_MON
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
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_MON';  
   const data: any = {
wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
