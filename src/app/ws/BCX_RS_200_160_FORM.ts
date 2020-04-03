
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_FORM.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_FORM.sql
 * Fecha   : 18/02/2020 15:30:35
 */
@Injectable()
export class BCX_RS_200_160_FORM 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_FORM
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param WSS_D01_CODFORM Codigo de formulario
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, WSS_D01_CODFORM: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_FORM';  
   const data: any = {
WSS_D01_CODFORM: WSS_D01_CODFORM, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
