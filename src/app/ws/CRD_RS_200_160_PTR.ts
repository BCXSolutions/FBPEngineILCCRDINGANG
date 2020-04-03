
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_160_PTR.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_160_PTR.sql
 * Fecha   : 03/03/2020 13:14:52
 */
@Injectable()
export class CRD_RS_200_160_PTR 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_160_PTR
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_cli Codigo cliente
   * @param wss_cod_mod codigo modulo
   * @param wss_cod_ptr codigo plantilla (para PROXIMAS)
   * @param wss_fil_mon filtro Moneda
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_cli: string // String
		, wss_cod_mod: string // String
		, wss_cod_ptr: string // String
		, wss_fil_mon: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_160_PTR';  
   const data: any = {
wss_cod_cli: wss_cod_cli, wss_cod_mod: wss_cod_mod, wss_cod_ptr: wss_cod_ptr, wss_fil_mon: wss_fil_mon, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
