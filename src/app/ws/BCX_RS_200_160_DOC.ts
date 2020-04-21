
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_DOC.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_DOC.sql
 * Fecha   : 15/04/2020 10:23:59
 */
@Injectable()
export class BCX_RS_200_160_DOC 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_DOC
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_d01_sgm Codigo segmento segun formulario
   * @param wss_via_tpt VIA TRANSPORTE
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_d01_sgm: string // String
		, wss_via_tpt: string // int
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_DOC';  
   const data: any = {
wss_d01_sgm: wss_d01_sgm, wss_via_tpt: wss_via_tpt
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
