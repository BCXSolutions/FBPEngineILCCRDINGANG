
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_DOC_LCI_BL.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_DOC_LCI_BL.sql
 * Fecha   : 15/04/2020 10:58:33
 */
@Injectable()
export class CRD_RS_200_111_DOC_LCI_BL 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_DOC_LCI_BL
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_sw_itr switch iteracion: 1=primera vez, 0=siguientes
   * @param wss_cod_prd Producto: CEX, LEX, etcÓ
   * @param wss_txt_cod Codigo de documento
   * @param wss_num_opr Nro Operacion
   * @param wss_lin_lar Descripcion de a la orden de
   * @param wss_lin_txt linea de texto
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_sw_itr: string // Boolean
		, wss_cod_prd: string // String
		, wss_txt_cod: string // String
		, wss_num_opr: string // String
		, wss_lin_lar: string // String
		, wss_lin_txt: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_DOC_LCI_BL';  
   const data: any = {
wss_sw_itr: wss_sw_itr, wss_cod_prd: wss_cod_prd, wss_txt_cod: wss_txt_cod, wss_num_opr: wss_num_opr, wss_lin_lar: wss_lin_lar, wss_lin_txt: wss_lin_txt, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
