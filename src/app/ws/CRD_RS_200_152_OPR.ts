
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_152_OPR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_152_OPR.sql
 * Fecha   : 03/12/2019 10:00:45
 */
@Injectable()
export class CRD_RS_200_152_OPR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_152_OPR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_cli Codigo de cliente
   * @param wss_fam_prd Familia de producto
   * @param wss_cod_ptr Codigo de plantilla
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_cli: string // String
		, wss_fam_prd: string // String
		, wss_cod_ptr: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_152_OPR';  
   const data: any = {
wss_cod_cli: wss_cod_cli, wss_fam_prd: wss_fam_prd, wss_cod_ptr: wss_cod_ptr, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
