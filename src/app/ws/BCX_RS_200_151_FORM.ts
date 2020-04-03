
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_151_FORM.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_151_FORM.sql
 * Fecha   : 03/12/2019 09:54:32
 */
@Injectable()
export class BCX_RS_200_151_FORM 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_151_FORM
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_form_ind_secc Indicador de entrada
   * @param wss_form_cod_ent Codigo de entrada
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_form_ind_secc: string // String
		, wss_form_cod_ent: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_151_FORM';  
   const data: any = {
wss_form_ind_secc: wss_form_ind_secc, wss_form_cod_ent: wss_form_cod_ent, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
