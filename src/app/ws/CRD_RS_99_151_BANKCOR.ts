
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_99_151_BANKCOR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_99_151_BANKCOR.sql
 * Fecha   : 03/12/2019 10:03:43
 */
@Injectable()
export class CRD_RS_99_151_BANKCOR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_99_151_BANKCOR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_mon Codigo de moneda
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_mon: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_99_151_BANKCOR';  
   const data: any = {
wss_cod_mon: wss_cod_mon, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
