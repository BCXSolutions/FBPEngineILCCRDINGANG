
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_112_CLIAM.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_112_CLIAM.sql
 * Fecha   : 28/04/2020 11:10:09
 */
@Injectable()
export class BCX_RS_200_112_CLIAM 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_112_CLIAM
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cli_cod_cli Rut cliente
   * @param wss_opr_num Numero de operacion
   * @param wss_cod_mod Modulo
   * @param wss_cli_ind_dsc_avi Indicador de generacion de mensaje S=SI N=NO
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cli_cod_cli: string // String
		, wss_opr_num: string // String
		, wss_cod_mod: string // String
		, wss_cli_ind_dsc_avi: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_112_CLIAM';  
   const data: any = {
wss_cli_cod_cli: wss_cli_cod_cli, wss_opr_num: wss_opr_num, wss_cod_mod: wss_cod_mod, wss_cli_ind_dsc_avi: wss_cli_ind_dsc_avi, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
