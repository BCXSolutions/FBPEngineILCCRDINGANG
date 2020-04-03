
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_251_99_TIP_CMB.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_251_99_TIP_CMB.sql
 * Fecha   : 02/12/2019 10:13:52
 */
@Injectable()
export class BCX_RS_251_99_TIP_CMB 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_251_99_TIP_CMB
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_mon_opr Moneda Operacion
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_mon_opr: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_251_99_TIP_CMB';  
   const data: any = {
wss_mon_opr: wss_mon_opr, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
