
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_200_152_TXT_LCI_INI.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_200_152_TXT_LCI_INI.sql
 * Fecha   : 02/04/2020 11:49:28
 */
@Injectable()
export class CRD_RS_200_152_TXT_LCI_INI 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_200_152_TXT_LCI_INI
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion
   * @param wss_for_pag Forma de pago
   * @param wss_ins_cnf Instrucciones de confirmacion
   * @param wss_pai_ben pais del beneficiario
   * @param wss_tip_reem Tipo de reembolso Aladi/General
   * @param wss_iso_cor BIC Banco Corresponsal
   * @param wss_iso_ree BIC Banco Reembolsador
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_for_pag: string // int
		, wss_ins_cnf: string // String
		, wss_pai_ben: string // String
		, wss_tip_reem: string // String
		, wss_iso_cor: string // String
		, wss_iso_ree: string // String
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_200_152_TXT_LCI_INI';  
   const data: any = {
wss_num_opr: wss_num_opr, wss_for_pag: wss_for_pag, wss_ins_cnf: wss_ins_cnf, wss_pai_ben: wss_pai_ben, wss_tip_reem: wss_tip_reem, wss_iso_cor: wss_iso_cor, wss_iso_ree: wss_iso_ree, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
