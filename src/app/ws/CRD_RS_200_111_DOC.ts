
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_DOC.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_DOC.sql
 * Fecha   : 15/04/2020 10:32:41
 */
@Injectable()
export class CRD_RS_200_111_DOC 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_DOC
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro Operacion
   * @param wss_cor_doc correl docto (0=nuevo)
   * @param wss_cod_doc smallint -- codigo documento (9999=otros docums)--> OTHDOC
   * @param wss_dsc_doc descripcion documento
   * @param wss_ori_c1 cantidad originales primer correo
   * @param wss_cop_c1 cantidad copias primer correo
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_cor_doc: string // int
		, wss_cod_doc: string // String
		, wss_dsc_doc: string // String
		, wss_ori_c1: string // int
		, wss_cop_c1: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_DOC';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_cor_doc: wss_cor_doc, wss_cod_doc: wss_cod_doc, wss_dsc_doc: wss_dsc_doc, wss_ori_c1: wss_ori_c1, wss_cop_c1: wss_cop_c1, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
