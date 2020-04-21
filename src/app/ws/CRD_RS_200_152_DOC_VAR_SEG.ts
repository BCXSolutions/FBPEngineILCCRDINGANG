
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_152_DOC_VAR_SEG.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_152_DOC_VAR_SEG.sql
 * Fecha   : 15/04/2020 10:50:20
 */
@Injectable()
export class CRD_RS_200_152_DOC_VAR_SEG 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_152_DOC_VAR_SEG
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro Operacion
   * @param wss_txt_cor Correlativo de documento
   * @param wss_txt_cod Codigo de documento
   * @param wss_cod_doc_seg P=POLIZA, C=CERTIFICADO, ' '= POLIZA/CERTIFICADO
   * @param wss_cod_bod_bod 0=N, 1=S
   * @param wss_cod_pais Codigo pais
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_txt_cor: string // int
		, wss_txt_cod: string // String
		, wss_cod_doc_seg: string // String
		, wss_cod_bod_bod: string // String
		, wss_cod_pais: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_152_DOC_VAR_SEG';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_txt_cor: wss_txt_cor, wss_txt_cod: wss_txt_cod, wss_cod_doc_seg: wss_cod_doc_seg, wss_cod_bod_bod: wss_cod_bod_bod, wss_cod_pais: wss_cod_pais, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
