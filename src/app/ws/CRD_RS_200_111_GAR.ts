
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_GAR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_GAR.sql
 * Fecha   : 18/02/2020 17:02:00
 */
@Injectable()
export class CRD_RS_200_111_GAR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_GAR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion
   * @param wss_rut_aval Rut del aval
   * @param wss_ind_aval Indicador de aval
   * @param wss_ind_cod Indicador de codeudor
   * @param wss_gar_pct Porcentaje de garantia
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_rut_aval: string // String
		, wss_ind_aval: string // String
		, wss_ind_cod: string // String
		, wss_gar_pct: string // BigDecimal
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_GAR';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_rut_aval: wss_rut_aval, wss_ind_aval: wss_ind_aval, wss_ind_cod: wss_ind_cod, wss_gar_pct: wss_gar_pct, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
