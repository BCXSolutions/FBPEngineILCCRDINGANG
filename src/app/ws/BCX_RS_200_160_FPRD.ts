
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_FPRD.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_FPRD.sql
 * Fecha   : 03/12/2019 09:55:33
 */
@Injectable()
export class BCX_RS_200_160_FPRD 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_FPRD
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param WSS_D01_AREA Area de producto
   * @param WSS_D01_SGM Segmento de producto
   * @param WSS_D01_TIP Tipo de producto
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, WSS_D01_AREA: string // String
		, WSS_D01_SGM: string // String
		, WSS_D01_TIP: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_FPRD';  
   const data: any = {
WSS_D01_AREA: WSS_D01_AREA, WSS_D01_SGM: WSS_D01_SGM, WSS_D01_TIP: WSS_D01_TIP, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
