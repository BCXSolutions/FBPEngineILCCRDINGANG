
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_99_260_ODF.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_99_260_ODF.sql
 * Fecha   : 03/12/2019 09:53:20
 */
@Injectable()
export class BCX_RS_99_260_ODF 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_99_260_ODF
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_tip_odf tipo de destino de los fondos
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_tip_odf: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_99_260_ODF';  
   const data: any = {
wss_tip_odf: wss_tip_odf, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
