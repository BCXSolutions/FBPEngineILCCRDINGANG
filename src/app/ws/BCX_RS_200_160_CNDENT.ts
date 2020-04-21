
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_CNDENT.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_CNDENT.sql
 * Fecha   : 15/04/2020 10:31:28
 */
@Injectable()
export class BCX_RS_200_160_CNDENT 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_CNDENT
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_CNDENT';  
   const data: any = {

	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
