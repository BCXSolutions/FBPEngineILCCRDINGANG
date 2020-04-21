
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_99_150_DOC.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_99_150_DOC.sql
 * Fecha   : 03/04/2020 13:37:40
 */
@Injectable()
export class CRD_RS_99_150_DOC 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_99_150_DOC
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro de Cobranza
   * @param wss_tip_pro Tipo de producto
   * @param wss_via_tpt Via de Transporte
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_tip_pro: string // String
		, wss_via_tpt: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_99_150_DOC';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_tip_pro: wss_tip_pro, wss_via_tpt: wss_via_tpt, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
