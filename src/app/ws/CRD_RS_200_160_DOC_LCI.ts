
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_160_DOC_LCI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_160_DOC_LCI.sql
 * Fecha   : 15/04/2020 11:00:01
 */
@Injectable()
export class CRD_RS_200_160_DOC_LCI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_160_DOC_LCI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_prd Producto: CEX, LEX, etc
   * @param wss_txt_cod Codigo de documento
   * @param wss_num_opr Nro Operacion
   * @param wss_txt_cor Numero de correlativo
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_prd: string // String
		, wss_txt_cod: string // String
		, wss_num_opr: string // String
		, wss_txt_cor: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_160_DOC_LCI';  
   const data: any = {
wss_cod_prd: wss_cod_prd, wss_txt_cod: wss_txt_cod, wss_num_opr: wss_num_opr, wss_txt_cor: wss_txt_cor, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
