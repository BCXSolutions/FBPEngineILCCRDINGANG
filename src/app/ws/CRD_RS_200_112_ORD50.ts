
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_112_ORD50.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_112_ORD50.sql
 * Fecha   : 22/04/2020 10:42:08
 */
@Injectable()
export class CRD_RS_200_112_ORD50 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_112_ORD50
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Nro operacion
   * @param wss_txt_ord1 Linea1 texto tag50 ordenante
   * @param wss_txt_ord2 Linea2 texto tag50 ordenante
   * @param wss_txt_ord3 Linea3 texto tag50 ordenante
   * @param wss_txt_ord4 Linea4 texto tag50 ordenante
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_txt_ord1: string // String
		, wss_txt_ord2: string // String
		, wss_txt_ord3: string // String
		, wss_txt_ord4: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_112_ORD50';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_txt_ord1: wss_txt_ord1, wss_txt_ord2: wss_txt_ord2, wss_txt_ord3: wss_txt_ord3, wss_txt_ord4: wss_txt_ord4, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
