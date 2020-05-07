
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_WS_200_112_REF.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_WS_200_112_REF.sql
 * Fecha   : 21/04/2020 11:00:39
 */
@Injectable()
export class CRD_WS_200_112_REF 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_WS_200_112_REF
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_num_opr Nro operacion
   * @param wss_tas_tip_tas Tipo de tasa
   * @param wss_tas_val_tas valor tasa
   * @param wss_tas_spr valor spread
   * @param wss_ali_pla_ref Dias Plazo Refinanciamiento
   * @param wss_ali_rgd_ref Plazo Refinanciamiento rige desde (E/N/V)
   * @param wss_ali_cnf_ref inform Refinanciamiento confirmada (S/N)
   * @param wss_fec_pro Fecha de proceso
   * @param wss_tas_spr_cof Spread - Costo Fondo
   * @param wss_tas_spr_spr Spread - Spread
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_num_opr: string // String
		, wss_tas_tip_tas: string // int
		, wss_tas_val_tas: string // BigDecimal
		, wss_tas_spr: string // BigDecimal
		, wss_ali_pla_ref: string // int
		, wss_ali_rgd_ref: string // String
		, wss_ali_cnf_ref: string // String
		, wss_fec_pro: string // Date
		, wss_tas_spr_cof: string // BigDecimal
		, wss_tas_spr_spr: string // BigDecimal
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/CRD_WS_200_112_REF/FBP/CRD_WS_200_112_REF';  
   const data: any = {
"wss_num_opr": wss_num_opr, "wss_tas_tip_tas": wss_tas_tip_tas, "wss_tas_val_tas": wss_tas_val_tas, "wss_tas_spr": wss_tas_spr, "wss_ali_pla_ref": wss_ali_pla_ref, "wss_ali_rgd_ref": wss_ali_rgd_ref, "wss_ali_cnf_ref": wss_ali_cnf_ref, "wss_fec_pro": wss_fec_pro, "wss_tas_spr_cof": wss_tas_spr_cof, "wss_tas_spr_spr": wss_tas_spr_spr
	};
	  
   this.hostService.getRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
