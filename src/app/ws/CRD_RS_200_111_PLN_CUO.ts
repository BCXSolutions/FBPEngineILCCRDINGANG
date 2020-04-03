
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_111_PLN_CUO.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_111_PLN_CUO.sql
 * Fecha   : 18/02/2020 16:56:36
 */
@Injectable()
export class CRD_RS_200_111_PLN_CUO 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_111_PLN_CUO
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_lci_num Numero de operacion LCI
   * @param wss_ngi_num correlativo NGI
   * @param wss_vto_cuo0 Vcto cuota 0
   * @param wss_mto_cuo0 Mto cuota 0
   * @param wss_vto_cuo1 Vcto cuota 1
   * @param wss_mto_cuo1 Mto cuota 1
   * @param wss_vto_cuo2 Vcto cuota 2
   * @param wss_mto_cuo2 Mto cuota 2
   * @param wss_vto_cuo3 Vcto cuota 3
   * @param wss_mto_cuo3 Mto cuota 3
   * @param wss_vto_cuo4 Vcto cuota 4
   * @param wss_mto_cuo4 Mto cuota 4
   * @param wss_vto_cuo5 Vcto cuota 5
   * @param wss_mto_cuo5 Mto cuota 5
   * @param wss_vto_cuo6 Vcto cuota 6
   * @param wss_mto_cuo6 Mto cuota 6
   * @param wss_vto_cuo7 Vcto cuota 7
   * @param wss_mto_cuo7 Mto cuota 7
   * @param wss_vto_cuo8 Vcto cuota 8
   * @param wss_mto_cuo8 Mto cuota 8
   * @param wss_vto_cuo9 Vcto cuota 9
   * @param wss_mto_cuo9 Mto cuota 9
   * @param wss_vto_cuo10 Vcto cuota 10
   * @param wss_mto_cuo10 Mto cuota 10
   * @param wss_vto_cuo11 Vcto cuota 11
   * @param wss_mto_cuo11 Mto cuota 11
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_lci_num: string // String
		, wss_ngi_num: string // int
		, wss_vto_cuo0: string // Date
		, wss_mto_cuo0: string // BigDecimal
		, wss_vto_cuo1: string // Date
		, wss_mto_cuo1: string // BigDecimal
		, wss_vto_cuo2: string // Date
		, wss_mto_cuo2: string // BigDecimal
		, wss_vto_cuo3: string // Date
		, wss_mto_cuo3: string // BigDecimal
		, wss_vto_cuo4: string // Date
		, wss_mto_cuo4: string // BigDecimal
		, wss_vto_cuo5: string // Date
		, wss_mto_cuo5: string // BigDecimal
		, wss_vto_cuo6: string // Date
		, wss_mto_cuo6: string // BigDecimal
		, wss_vto_cuo7: string // Date
		, wss_mto_cuo7: string // BigDecimal
		, wss_vto_cuo8: string // Date
		, wss_mto_cuo8: string // BigDecimal
		, wss_vto_cuo9: string // Date
		, wss_mto_cuo9: string // BigDecimal
		, wss_vto_cuo10: string // Date
		, wss_mto_cuo10: string // BigDecimal
		, wss_vto_cuo11: string // Date
		, wss_mto_cuo11: string // BigDecimal
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_111_PLN_CUO';  
   const data: any = {
wss_lci_num: wss_lci_num, wss_ngi_num: wss_ngi_num, wss_vto_cuo0: wss_vto_cuo0, wss_mto_cuo0: wss_mto_cuo0, wss_vto_cuo1: wss_vto_cuo1, wss_mto_cuo1: wss_mto_cuo1, wss_vto_cuo2: wss_vto_cuo2, wss_mto_cuo2: wss_mto_cuo2, wss_vto_cuo3: wss_vto_cuo3, wss_mto_cuo3: wss_mto_cuo3, wss_vto_cuo4: wss_vto_cuo4, wss_mto_cuo4: wss_mto_cuo4, wss_vto_cuo5: wss_vto_cuo5, wss_mto_cuo5: wss_mto_cuo5, wss_vto_cuo6: wss_vto_cuo6, wss_mto_cuo6: wss_mto_cuo6, wss_vto_cuo7: wss_vto_cuo7, wss_mto_cuo7: wss_mto_cuo7, wss_vto_cuo8: wss_vto_cuo8, wss_mto_cuo8: wss_mto_cuo8, wss_vto_cuo9: wss_vto_cuo9, wss_mto_cuo9: wss_mto_cuo9, wss_vto_cuo10: wss_vto_cuo10, wss_mto_cuo10: wss_mto_cuo10, wss_vto_cuo11: wss_vto_cuo11, wss_mto_cuo11: wss_mto_cuo11, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
