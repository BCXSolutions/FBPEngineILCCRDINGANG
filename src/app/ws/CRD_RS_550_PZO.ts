
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_550_PZO.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_550_PZO.sql
 * Fecha   : 06/03/2020 11:59:58
 */
@Injectable()
export class CRD_RS_550_PZO 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_550_PZO
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_ind_cal indicador de calculo
   * @param wss_fec_oto Fecha desde
   * @param wss_dia_pzo dias plazo
   * @param wss_fec_vto Fecha vencimiento
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_ind_cal: string // int
		, wss_fec_oto: string // Date
		, wss_dia_pzo: string // int
		, wss_fec_vto: string // Date
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_550_PZO';  
   const data: any = {
wss_ind_cal: wss_ind_cal, wss_fec_oto: wss_fec_oto, wss_dia_pzo: wss_dia_pzo, wss_fec_vto: wss_fec_vto, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
