
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : BCX_RS_200_160_BANK.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de BCX_RS_200_160_BANK.sql
 * Fecha   : 18/02/2020 16:40:07
 */
@Injectable()
export class BCX_RS_200_160_BANK 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a BCX_RS_200_160_BANK
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_cod_ing Codigo ingreso CR= Codigo PL=Plaza PS=Pais
   * @param wss_cod_bus Codigo a buscar(plaza o pais)
   * @param wss_cod_bank Codigo swt
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_cod_ing: string // String
		, wss_cod_bus: string // int
		, wss_cod_bank: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/BCX_RS_200_160_BANK';  
   const data: any = {
wss_cod_ing: wss_cod_ing, wss_cod_bus: wss_cod_bus, wss_cod_bank: wss_cod_bank, wss_usercode: wss_usercode
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
