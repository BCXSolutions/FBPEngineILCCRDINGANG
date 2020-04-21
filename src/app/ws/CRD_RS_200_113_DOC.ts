
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_113_DOC.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_113_DOC.sql
 * Fecha   : 17/04/2020 18:39:29
 */
@Injectable()
export class CRD_RS_200_113_DOC 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_113_DOC
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro Operacion
   * @param wss_txt_cod Tipo de codigo
   * @param wss_txt_cor Correlativo de documento
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_txt_cod: string // String
		, wss_txt_cor: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_113_DOC';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_txt_cod: wss_txt_cod, wss_txt_cor: wss_txt_cor, wss_usercode: wss_usercode
	};
	  
   this.hostService.deleteRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
