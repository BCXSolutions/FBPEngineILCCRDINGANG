
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_152_DOC_PRE.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_152_DOC_PRE.sql
 * Fecha   : 15/04/2020 10:56:30
 */
@Injectable()
export class CRD_RS_200_152_DOC_PRE 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_152_DOC_PRE
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_prd Producto: CEX, LEX, etc
   * @param wss_txt_cod Codigo de documento
   * @param wss_num_opr Nro Operacion
   * @param wss_txt_cor Numero de correlativo
   * @param wss_txt_ori cantidad originales primer correo
   * @param wss_txt_cop cantidad copias primer correo
   * @param wss_cod_pais Codigo pais
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_prd: string // String
		, wss_txt_cod: string // String
		, wss_num_opr: string // String
		, wss_txt_cor: string // int
		, wss_txt_ori: string // int
		, wss_txt_cop: string // int
		, wss_cod_pais: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_152_DOC_PRE';  
   const data: any = {
wss_cod_prd: wss_cod_prd, wss_txt_cod: wss_txt_cod, wss_num_opr: wss_num_opr, wss_txt_cor: wss_txt_cor, wss_txt_ori: wss_txt_ori, wss_txt_cop: wss_txt_cop, wss_cod_pais: wss_cod_pais, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
