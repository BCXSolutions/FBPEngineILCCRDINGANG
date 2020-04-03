
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : SCX_RS_200_191_SOL_OPR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de SCX_RS_200_191_SOL_OPR.sql
 * Fecha   : 03/12/2019 10:04:09
 */
@Injectable()
export class SCX_RS_200_191_SOL_OPR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a SCX_RS_200_191_SOL_OPR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_sol_num Nro de Solicitud
   * @param wss_ins_num Nro de Instruccion masiva
   * @param wss_usr_cod codigo de usuario
   * @param wss_obs_rch Observaciones Rechazo
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_sol_num: string // String
		, wss_ins_num: string // String
		, wss_usr_cod: string // String
		, wss_obs_rch: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/SCX_RS_200_191_SOL_OPR';  
   const data: any = {
wss_sol_num: wss_sol_num, wss_ins_num: wss_ins_num, wss_usr_cod: wss_usr_cod, wss_obs_rch: wss_obs_rch, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
