
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_ZLI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_ZLI.sql
 * Fecha   : 23/04/2020 14:06:58
 */
@Injectable()
export class CRD_RS_200_111_ZLI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_ZLI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_sw_itr switch iteracion: 1=primera vez, 0=siguientes
   * @param wss_num_opr Nro Operacion
   * @param wss_pct_pzo porcentaje plazo
   * @param wss_dia_pzo dias plazo
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_sw_itr: string // Boolean
		, wss_num_opr: string // String
		, wss_pct_pzo: string // BigDecimal
		, wss_dia_pzo: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_ZLI';  
   const data: any = {
wss_sw_itr: wss_sw_itr, wss_num_opr: wss_num_opr, wss_pct_pzo: wss_pct_pzo, wss_dia_pzo: wss_dia_pzo, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
