
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_151_GNM_CTR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_151_GNM_CTR.sql
 * Fecha   : 18/02/2020 16:40:23
 */
@Injectable()
export class CRD_RS_200_151_GNM_CTR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_151_GNM_CTR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro operacion (compuesto)
   * @param wss_fam_prd Familia de producto
   * @param wss_cod_prd Codigo de producto
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_fam_prd: string // String
		, wss_cod_prd: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_151_GNM_CTR';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_fam_prd: wss_fam_prd, wss_cod_prd: wss_cod_prd, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
