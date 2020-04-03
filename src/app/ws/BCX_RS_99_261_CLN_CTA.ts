
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_99_261_CLN_CTA.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_99_261_CLN_CTA.sql
 * Fecha   : 03/12/2019 09:53:39
 */
@Injectable()
export class BCX_RS_99_261_CLN_CTA 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_99_261_CLN_CTA
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_rut_cli Rut Cli
   * @param wss_cod_mon Moneda ISO de la cuenta
   * @param wss_ind_ori Indicador de Origen N = Nacional X = Extranjero
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_rut_cli: string // String
		, wss_cod_mon: string // String
		, wss_ind_ori: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_99_261_CLN_CTA';  
   const data: any = {
wss_rut_cli: wss_rut_cli, wss_cod_mon: wss_cod_mon, wss_ind_ori: wss_ind_ori, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
