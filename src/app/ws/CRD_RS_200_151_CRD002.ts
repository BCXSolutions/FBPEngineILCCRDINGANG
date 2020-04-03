
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_151_CRD002.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_151_CRD002.sql
 * Fecha   : 01/04/2020 11:34:32
 */
@Injectable()
export class CRD_RS_200_151_CRD002 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_151_CRD002
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_fam_prd Indicador de familia de producto
   * @param wss_for_pag Formas de pago
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_fam_prd: string // int
		, wss_for_pag: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_151_CRD002';  
   const data: any = {
wss_fam_prd: wss_fam_prd, wss_for_pag: wss_for_pag, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
