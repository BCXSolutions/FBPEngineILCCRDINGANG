// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 08/01/2020 16:59:52
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MatDialog, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';
// Componentes y objetos Bcx
import { CmContextService
       , CmDialogAlertComponent
       , CmWsHostService
       , CmDateValidator
       , CmUtilService
       , CmWaitComponent
       , CmWsResult } from '@bcxang';
// Web Services
import { CRD_RS_111_GEN_CUO } from './ws/CRD_RS_111_GEN_CUO';

@Component({
	selector: 'my-form',
	templateUrl: 'generar_plan_de_pagos.component.html'
})
/**
 * Form: Generar Plan de Pagos
 */
export class GenerarPlanDePagosComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'GenerarPlanDePagos';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	bcxNumeroVencimientoCapital :any;
	txtFechaPrimerVencimiento :any;
	txtDiasVc :any;
	txtMesVc :any;
	txtYearVc :any;
	bcxNumeroVencimientoSoloInt :any;
	txtFechaPrimerVencimientoInt :any;
	txtDiasSi :any;
	txtMesSi :any;
	txtYearSi :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	numOperacion:any;
	user_logueado:any;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private dateAdapter: DateAdapter<Date>
		, private crdRs111GenCuo: CRD_RS_111_GEN_CUO
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		this.dateAdapter.setLocale('es-CL');
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();


		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.user_logueado = this.contextService.getUserData('user_logueado');
		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs111GenCuoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_cant_vto_cap :string; 
		if(this.bcxNumeroVencimientoCapital.value == '' || this.bcxNumeroVencimientoCapital.value == '0'){
			wss_cant_vto_cap = '0';
		} else {
			wss_cant_vto_cap = this.bcxNumeroVencimientoCapital.value;
		}

		let wss_cant_vto_int :string ;
		if(this.bcxNumeroVencimientoSoloInt.value == '' || this.bcxNumeroVencimientoSoloInt.value == '0'){
			wss_cant_vto_int = '0';
		} else {
			wss_cant_vto_int = this.bcxNumeroVencimientoSoloInt.value;
		}
		
		let wss_fec_pri_vto_cap :any;
		if(this.txtFechaPrimerVencimiento.value == ''){
			wss_fec_pri_vto_cap = '1753-01-01';
		} else {
			wss_fec_pri_vto_cap = this.utilService.toDate(this.txtFechaPrimerVencimiento.value);
		}

		let wss_fec_pri_vto_int :any;
		if(this.txtFechaPrimerVencimientoInt.value == ''){
			wss_fec_pri_vto_int = '1753-01-01';
		} else {
			wss_fec_pri_vto_int = this.utilService.toDate(this.txtFechaPrimerVencimientoInt.value);
		}		
		
		let wss_dia_per_cap :string;
		if(this.txtDiasVc.value == '' || this.txtDiasVc.value == '0'){
			wss_dia_per_cap = '0';
		} else {
			wss_dia_per_cap = this.txtDiasVc.value;
		}

		let wss_mes_per_cap :string;
		if(this.txtMesVc.value == '' || this.txtMesVc.value == '0'){
			wss_mes_per_cap = '0';
		} else {
			wss_mes_per_cap = this.txtMesVc.value;
		}

		let wss_ano_per_cap :string;
		if(this.txtYearVc.value == '' || this.txtYearVc.value == '0'){
			wss_ano_per_cap = '0';
		} else {
			wss_ano_per_cap = this.txtYearVc.value;
		}
		
		let wss_dia_per_int :string;
		if(this.txtDiasSi.value == '' || this.txtDiasSi.value == '0'){
			wss_dia_per_int = '0';
		} else {
			wss_dia_per_int = this.txtDiasSi.value;
		}
		
		let wss_mes_per_int :string = this.txtMesSi.value;
		if(this.txtMesSi.value == '' || this.txtMesSi.value == '0'){
			wss_mes_per_int = '0';
		} else {
			wss_mes_per_int = this.txtMesSi.value;
		}
		
		let wss_ano_per_int :string;
		if(this.txtYearSi.value == '' || this.txtYearSi.value == '0'){
			wss_ano_per_int = '0';
		} else {
			wss_ano_per_int = this.txtMesSi.value;
		}
						
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs111GenCuo.call(
			  (value) => this.crdRs111GenCuoResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_cant_vto_cap
			, wss_cant_vto_int
			, wss_fec_pri_vto_cap
			, wss_fec_pri_vto_int
			, wss_dia_per_cap
			, wss_mes_per_cap
			, wss_ano_per_cap
			, wss_dia_per_int
			, wss_mes_per_int
			, wss_ano_per_int
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs111GenCuo.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs111GenCuoResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg = wsResult.getResultString('wss_result_msg');

		if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.cmdCancelar_click();
		}


		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}
	}
	/**
	 * Evento click del boton cmdGenerar.
	 */
	cmdGenerar_click(): void
	{
		this.waitShow = false;
		this.crdRs111GenCuoCall();
	}
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.waitShow = false;
		this.location.back();
	}
	/**
	 * Helper para desplegar alertas.
	 */
	private openDialogAlert(msg: string): void
	{
		this.waitShow = false;
		this.utilService.alert(this.dialog, msg);
	}
	
	/**
	 * Callback para el caso de Fault en llamada a Web Service.
	 */
	private processFault(err: any): void
	{
		this.waitShow = false;
		this.utilService.alert(this.dialog, err.error);
	}
	/**
	 * Controles del formulario.
	 */
	private formDef(): void
	{
		this.form = this.formBuilder.group({
			bcxNumeroVencimientoCapital:'',
			txtFechaPrimerVencimiento:['', CmDateValidator()],
			txtDiasVc:'',
			txtMesVc:'',
			txtYearVc:'',
			bcxNumeroVencimientoSoloInt:'',
			txtFechaPrimerVencimientoInt:['', CmDateValidator()],
			txtDiasSi:'',
			txtMesSi:'',
			txtYearSi:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.bcxNumeroVencimientoCapital = this.form.controls['bcxNumeroVencimientoCapital'];
		this.txtFechaPrimerVencimiento = this.form.controls['txtFechaPrimerVencimiento'];
		this.txtDiasVc = this.form.controls['txtDiasVc'];
		this.txtMesVc = this.form.controls['txtMesVc'];
		this.txtYearVc = this.form.controls['txtYearVc'];
		this.bcxNumeroVencimientoSoloInt = this.form.controls['bcxNumeroVencimientoSoloInt'];
		this.txtFechaPrimerVencimientoInt = this.form.controls['txtFechaPrimerVencimientoInt'];
		this.txtDiasSi = this.form.controls['txtDiasSi'];
		this.txtMesSi = this.form.controls['txtMesSi'];
		this.txtYearSi = this.form.controls['txtYearSi'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
	}
}
