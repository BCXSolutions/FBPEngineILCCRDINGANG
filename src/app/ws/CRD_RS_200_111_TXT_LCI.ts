
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_TXT_LCI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_TXT_LCI.sql
 * Fecha   : 03/12/2019 09:59:04
 */
@Injectable()
export class CRD_RS_200_111_TXT_LCI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_TXT_LCI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_sw_itr switch iteracion: 1=primera vez, 0=siguientes
   * @param wss_cod_prd Producto: CEX, LEX, etcÓ
   * @param wss_tip_txt "MERCA", "INESP", "INREE", "LIBRE"
   * @param wss_num_opr Nro Operacion
   * @param wss_lin_txt linea de texto
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_sw_itr: string // Boolean
		, wss_cod_prd: string // String
		, wss_tip_txt: string // String
		, wss_num_opr: string // String
		, wss_lin_txt: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_TXT_LCI';  
   const data: any = {
wss_sw_itr: wss_sw_itr, wss_cod_prd: wss_cod_prd, wss_tip_txt: wss_tip_txt, wss_num_opr: wss_num_opr, wss_lin_txt: wss_lin_txt, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
