
import { Injectable }      from '@angular/core';
import {CmWsHostService
       , CmWsResult } from '@bcxang';
/*
 * Service : CRD_RS_111_GEN_CUO.ts 
 * Objetivo: Llamado a Web Service REST
 * Autor   : Generado por BcxWSql (BCX Solutions) a partir de CRD_RS_111_GEN_CUO.sql
 * Fecha   : 18/02/2020 16:46:34
 */
@Injectable()
export class CRD_RS_111_GEN_CUO 
{
    constructor (private hostService: CmWsHostService) {}
  /**
   * Invoca a CRD_RS_111_GEN_CUO
   * @param responseFunc Callback de respuesta
   * @param errFunc Callback de error
   * @param wss_opr_num Numero de operacion
   * @param wss_cant_vto_cap Cantidad de vencimientos capital
   * @param wss_cant_vto_int Cantidad de vencimientos intereses
   * @param wss_fec_pri_vto_cap Primer vencimiento de capital
   * @param wss_fec_pri_vto_int Primer vencimiento de intereses
   * @param wss_dia_per_cap Peridiocidad dias capital
   * @param wss_mes_per_cap Peridiocidad Meses capital
   * @param wss_ano_per_cap Peridiocidad Anos capital
   * @param wss_dia_per_int Peridiocidad dias intereses
   * @param wss_mes_per_int Peridiocidad Meses intereses
   * @param wss_ano_per_int Peridiocidad Anos intereses
   * @param wss_usercode Usuario
   */                
    call (responseFunc : ( r: CmWsResult) => void
        , errFunc : ( r: string) => void
		, wss_opr_num: string // String
		, wss_cant_vto_cap: string // int
		, wss_cant_vto_int: string // int
		, wss_fec_pri_vto_cap: string // Date
		, wss_fec_pri_vto_int: string // Date
		, wss_dia_per_cap: string // int
		, wss_mes_per_cap: string // int
		, wss_ano_per_cap: string // int
		, wss_dia_per_int: string // int
		, wss_mes_per_int: string // int
		, wss_ano_per_int: string // int
		, wss_usercode: string // String
	): void 
	{
   // URL to web Service
    const url: string        = this.hostService.getRuta() + '/FBP/CRD_RS_111_GEN_CUO';  
   const data: any = {
wss_opr_num: wss_opr_num, wss_cant_vto_cap: wss_cant_vto_cap, wss_cant_vto_int: wss_cant_vto_int, wss_fec_pri_vto_cap: wss_fec_pri_vto_cap, wss_fec_pri_vto_int: wss_fec_pri_vto_int, wss_dia_per_cap: wss_dia_per_cap, wss_mes_per_cap: wss_mes_per_cap, wss_ano_per_cap: wss_ano_per_cap, wss_dia_per_int: wss_dia_per_int, wss_mes_per_int: wss_mes_per_int, wss_ano_per_int: wss_ano_per_int, wss_usercode: wss_usercode
	};
	  
   this.hostService.postRest(url, data)
   						.subscribe(
                       result => responseFunc(result),
                       error =>  errFunc(error));
    }
}
