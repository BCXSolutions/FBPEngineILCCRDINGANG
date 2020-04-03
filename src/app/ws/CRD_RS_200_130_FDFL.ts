
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_130_FDFL.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_130_FDFL.sql
 * Fecha   : 03/03/2020 12:14:43
 */
@Injectable()
export class CRD_RS_200_130_FDFL 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_130_FDFL
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_D01_CODFORM Codigo de formulario
   * @param wss_opr_cod_cli Codigo del cliente
   * @param wss_opr_num Numero de operacion
   * @param wss_cod_ptr Codigo de template
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_D01_CODFORM: string // String
		, wss_opr_cod_cli: string // String
		, wss_opr_num: string // String
		, wss_cod_ptr: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_130_FDFL';  
   const data: any = {
    wss_D01_CODFORM: wss_D01_CODFORM, wss_opr_cod_cli: wss_opr_cod_cli, wss_opr_num: wss_opr_num, wss_cod_ptr: wss_cod_ptr, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
