
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_151_CUO.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_151_CUO.sql
 * Fecha   : 18/02/2020 17:16:20
 */
@Injectable()
export class CRD_RS_151_CUO 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_151_CUO
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_ope Nro oper
   * @param wss_cod_fam Codigo de familia
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_ope: string // String
		, wss_cod_fam: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_151_CUO';  
   const data: any = {
wss_num_ope: wss_num_ope, wss_cod_fam: wss_cod_fam, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
