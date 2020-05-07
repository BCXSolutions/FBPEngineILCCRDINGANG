// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 21/04/2020 11:28:56
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MatDialog, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';
// Componentes y objetos Bcx
import { CmContextService
       , CmDialogAlertComponent
       , CmWsHostService
       , CmTextoComboValidator
       , CmUtilService
       , CmWaitComponent
       , CmWsResult } from '@bcxang';
// Web Services
import { CRD_RS_200_112_REF } from './ws/CRD_RS_200_112_REF';
import { CRD_RS_200_151_REF } from './ws/CRD_RS_200_151_REF';
import { CRD_RS_200_160_TXT_LCI } from './ws/CRD_RS_200_160_TXT_LCI';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { BCX_RS_200_160_TAS } from './ws/BCX_RS_200_160_TAS';

@Component({
	selector: 'my-form',
	templateUrl: 'refinanciamiento.component.html'
})
/**
 * Form: Refinanciamiento
 */
export class RefinanciamientoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'Refinanciamiento';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtTipoInteres :any;
	cbbTipoInteres :any;
	bcxValorBase :any;
	bcxCostoFondo :any;
	bcxSpread :any;
	txtDiasPlazo :any;
	optDescripcion :any;
	txtBic :any;
	optInformacionConfirmada :any;
	txt79 :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbTipoInteresArray: any[] = [];

	numOperacion:any;
	user_logueado:any;
	WSS_D01_SGM:any;
	opcion:any;
	fechaProceso:any;
	cIndicador:any;
	bFlagCambioEspecial:boolean = false;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200112Ref: CRD_RS_200_112_REF
		, private crdRs200151Ref: CRD_RS_200_151_REF
		, private crdRs200160TxtLci: CRD_RS_200_160_TXT_LCI
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private bcxRs200160Tas: BCX_RS_200_160_TAS
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();


		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");	
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.numOperacion = this.contextService.getUserData("numOperacion");	
		this.fechaProceso = this.contextService.getUserData("fechaProceso");
		this.opcion = this.contextService.getUserData("opcion");
		this.cIndicador = this.contextService.getUserData("cIndicador");


		// Combos llenados al inicio.
		this.waitShow = true;
		this.wsFin = [];

		// cbbTipoInteres
		this.wsFin.push(false);
		this.bcxRs200160Tas.call (
			  (value) => this.getComboData0(value)
			, (value) => this.processFault(value)
			,''   //wss_usercode
		);

		this.ofunc_start();
		// Validadores de Combo-Texto.
		this.validatorsDef();
	}

	ofunc_start(){
		this.crdRs200151RefCall();
		this.crdRs200160TxtLciCall('REFIN');
	}



	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200112RefCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_tas_tip_tas :string = this.txtTipoInteres.value;
		let wss_tas_val_tas :string = this.utilService.toDecimal(this.bcxValorBase.value);
		let valorBase:number = Number(this.utilService.toDecimal(this.bcxCostoFondo.value));
		let spreadSumar:number = Number(this.utilService.toDecimal(this.bcxSpread.value));
		let resultado:number = valorBase + spreadSumar;	
		let wss_tas_spr :any = resultado;
		let wss_ali_pla_ref :string = this.txtDiasPlazo.value;
		let wss_ali_rgd_ref :string;
		if(this.optDescripcion.value == '1'){
			wss_ali_rgd_ref = 'E';
		}else if(this.optDescripcion.value == '2'){
			wss_ali_rgd_ref = 'N';
		} else if(this.optDescripcion.value == '3'){
			wss_ali_rgd_ref = 'V';
		}
		let wss_ali_cnf_ref :string;
		if(this.optInformacionConfirmada.value == '1'){
			wss_ali_cnf_ref = 'S';
		} else {
			wss_ali_cnf_ref = 'N';
		}

		let wss_fec_pro :any = this.fechaProceso
		let wss_tas_spr_cof :string = this.utilService.toDecimal(this.bcxCostoFondo.value);
		let wss_tas_spr_spr :string = this.utilService.toDecimal(this.bcxSpread.value);
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112Ref.call(
			  (value) => this.crdRs200112RefResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_tas_tip_tas
			, wss_tas_val_tas
			, wss_tas_spr
			, wss_ali_pla_ref
			, wss_ali_rgd_ref
			, wss_ali_cnf_ref
			, wss_fec_pro
			, wss_tas_spr_cof
			, wss_tas_spr_spr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112Ref.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200112RefResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			let wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
			this.cmdVolver_click();
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151RefCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Ref.call(
			  (value) => this.crdRs200151RefResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151Ref.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151RefResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;

		//this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
			/* Mover los parametros de salida a la pantalla. */
			this.txtTipoInteres.patchValue(wsResult.getResultString('wss_tas_tip_tas').toString());
			this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_tas_val_tas', 6));
			//this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_spr', 6));
			this.txtDiasPlazo.patchValue(wsResult.getResultString('wss_ali_pla_ref'));
			// this.xyz.patchValue(wsResult.getResultString('wss_ali_rgd_ref'));
			// this.xyz.patchValue(wsResult.getResultString('wss_ali_cnf_ref'));
				
			if(wsResult.getResultString('wss_ali_rgd_ref').toString() == 'E')
				this.optDescripcion.patchValue('1');					
			else if(wsResult.getResultString('wss_ali_rgd_ref').toString() == 'N')
				this.optDescripcion.patchValue('2');
			else if(wsResult.getResultString('wss_ali_rgd_ref').toString() == 'V')
				this.optDescripcion.patchValue('3');

			if(wsResult.getResultString('wss_ali_cnf_ref').toString() == 'S')
				this.optInformacionConfirmada.patchValue('1');
			else 	
				this.optInformacionConfirmada.patchValue('');

			this.bcxCostoFondo.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_cof', 6));
			this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_spr', 6));
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160TxtLciCall(opcion:any): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */  
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = opcion;
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160TxtLci.call(
			  (value) => this.crdRs200160TxtLciResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160TxtLci.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200160TxtLciResult(wsResult :CmWsResult): void
	{

		let textLibreAux:any;
		let textLibreAux_array:any[]=[];
		let i:any = 0;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			let wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {

			
			textLibreAux_array = wsResult.getTableRows();

			while(i<textLibreAux_array.length){
				textLibreAux+=textLibreAux_array[i].wss_lin_txt;
				i++;
			}

			this.txt79.patchValue(textLibreAux);
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111TxtLciCall(cIndicador:any,myTexInput:any): void
	{

		if ((cIndicador == 'REFIN') && (this.bFlagCambioEspecial == false))
		return;		
	

		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = cIndicador;
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = this.utilService.toString(myTexInput.value);
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111TxtLci.call(
			  (value) => this.crdRs200111TxtLciResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_lin_txt
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111TxtLci.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111TxtLciResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			let wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
			this.bFlagCambioEspecial = false
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160TasCall(): void
	{
		
		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Tas.call(
			  (value) => this.bcxRs200160TasResult(value)
			, (value) => this.processFault(value)
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Tas.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TasResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			let wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
		}
	}

	/**
	 * Llenado de combo cbbTipoInteres
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbTipoInteresArray = wsResult.getTableRows();
		this.getComboDataFin(0, wsResult);
	}
	/**
	 * Comun para todos los Web Services que se ejecutan al inicio.
	 */
	private getComboDataFin(nro: number, wsResult: CmWsResult): void
	{
		this.wsFin[nro] = true;
		// Preguntamos si todos los Web Services respondieron.
		if (this.wsFin.every(function(x) { return x }))
		{
			this.waitShow = false;
			this.validatorsDef();
		}
		// A veces el Fault se viene por aca.
		let hayError : boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + '[' + code + ']');
		}
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.crdRs200112RefCall();
	}
	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{
		this.location.back();
	}


	focusout_txt79(myTexInput){
		this.crdRs200111TxtLciCall('REFIN',myTexInput);
	}

	change_txt79(){
		this.bFlagCambioEspecial=true
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
			txtTipoInteres:'',
			cbbTipoInteres:'',
			bcxValorBase:'0,000000',
			bcxCostoFondo:'0,000000',
			bcxSpread:'0,000000',
			txtDiasPlazo:'0',
			optDescripcion:'',
			txtBic:'',
			optInformacionConfirmada:'',
			txt79:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtTipoInteres = this.form.controls['txtTipoInteres'];
		this.cbbTipoInteres = this.form.controls['cbbTipoInteres'];
		this.bcxValorBase = this.form.controls['bcxValorBase'];
		this.bcxCostoFondo = this.form.controls['bcxCostoFondo'];
		this.bcxSpread = this.form.controls['bcxSpread'];
		this.txtDiasPlazo = this.form.controls['txtDiasPlazo'];
		this.optDescripcion = this.form.controls['optDescripcion'];
		this.txtBic = this.form.controls['txtBic'];
		this.optInformacionConfirmada = this.form.controls['optInformacionConfirmada'];
		this.txt79 = this.form.controls['txt79'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtTipoInteres.setValidators(CmTextoComboValidator(this.cbbTipoInteresArray, 'wss_tip_tas'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtTipoInteres.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbTipoInteres, value);
		});
		this.cbbTipoInteres.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtTipoInteres, value);
		});
		this.bcxValorBase.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxValorBase);
		});
		this.bcxCostoFondo.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxCostoFondo);
		});
		this.bcxSpread.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxSpread);
		});
	}
}
