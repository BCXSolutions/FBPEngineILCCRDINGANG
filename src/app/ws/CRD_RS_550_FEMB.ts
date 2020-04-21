
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_550_FEMB.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_550_FEMB.sql
 * Fecha   : 14/04/2020 14:07:05
 */
@Injectable()
export class CRD_RS_550_FEMB 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_550_FEMB
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_ind_cal indicador de calculo
   * @param wss_fec_exp Fecha Expiracion
   * @param wss_dia_pre Dias prentacion documentos
   * @param wss_fec_emb Ultima fecha de embarque
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_ind_cal: string // int
		, wss_fec_exp: string // Date
		, wss_dia_pre: string // int
		, wss_fec_emb: string // Date
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_550_FEMB';  
   const data: any = {
wss_ind_cal: wss_ind_cal, wss_fec_exp: wss_fec_exp, wss_dia_pre: wss_dia_pre, wss_fec_emb: wss_fec_emb, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
