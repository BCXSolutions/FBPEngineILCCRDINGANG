// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 06/01/2020 13:21:56
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
import { BCX_RS_200_160_BANK } from './ws/BCX_RS_200_160_BANK';
import { CRD_RS_200_151_GNM_CTR } from './ws/CRD_RS_200_151_GNM_CTR';
import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
import { CRD_RS_200_112_GNM_CTR } from './ws/CRD_RS_200_112_GNM_CTR';
import { BCX_RS_200_160_TAS } from './ws/BCX_RS_200_160_TAS';

@Component({
	selector: 'my-form',
	templateUrl: 'contraparte.component.html'
})
/**
 * Form: Buscar
 */
export class ContraParteComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	bcxRut :any;
	txtNombre :any;
	txtCodigoBancoAcreedor :any;
	txtNombreBanco :any;
	txtTasa :any;
	cbbTasa :any;
	bcxSpread :any;
	bcxTasaFinal :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbTasaArray: any[] = [];

	indicadorHabContraparte:any;
	opcion:any;
	numOperacion:any;
	familiaProducto:any;
	codigoProducto:any;
	user_logueado:any;
	sucursal:any;
	moneda:any;
	monto:any;
	diasPlazo:any;
	fechaVencimiento:any;
	inicioIntereses:any;
	otorgamiento:any;

	btnBancoComyGas:any;
	btnNuevo:any;
	btnBicCorr:any;
	txtBcxRut:any;



	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private bcxRs200160Bank: BCX_RS_200_160_BANK
		, private crdRs200151GnmCtr: CRD_RS_200_151_GNM_CTR
		, private bcxRs99260Cln: BCX_RS_99_260_CLN
		, private crdRs200112GnmCtr: CRD_RS_200_112_GNM_CTR
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
		// Validadores de Combo-Texto.


		// indicadorHabContraparte:any;
		// opcion:any;
		// numOperacion:any;
		// familiaProducto:any;
		// codigoProducto:any;
		this.txtNombre.disable();
		this.txtNombreBanco.disable();
		this.btnBancoComyGas = true;


		this.txtBcxRut = this.contextService.getUserData("bcxRut");
		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.indicadorHabContraparte = this.contextService.getUserData("indicadorHabContraparte");
		this.opcion = this.contextService.getUserData("opcion");
		this.familiaProducto = this.contextService.getUserData("familiaProducto");
		this.codigoProducto = this.contextService.getUserData("codigoProducto");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.sucursal = this.contextService.getUserData("sucursal");
		this.moneda = this.contextService.getUserData("moneda");
		this.monto = this.contextService.getUserData("monto");
		this.diasPlazo = this.contextService.getUserData("diasPlazo");
		this.fechaVencimiento = this.contextService.getUserData("fechaVencimiento");
		this.inicioIntereses = this.contextService.getUserData("inicioIntereses");
		this.otorgamiento = this.contextService.getUserData("otorgamiento");

		
		//this.cargar_primeros_datos();



		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
		if (!ctxSw)
		{
			// Combos llenados al inicio.
			this.waitShow = true;
			this.wsFin = [];

			//cbbTasa
			this.wsFin.push(false);
			this.bcxRs200160Tas.call (
				  (value) => this.getComboData0(value)
				, (value) => this.processFault(value)
				, this.user_logueado   //wss_usercode
			);
			
			this.cargar_primeros_datos();
		}
		this.validatorsDef();
	}


	cargar_primeros_datos() {


		if(this.indicadorHabContraparte == "N" && this.opcion == ''){
			return;
		}
			
		else if(this.indicadorHabContraparte == "C" && this.opcion == "A") {
			this.crdRs200151GnmCtrCall();			
		}
			
		else if(this.indicadorHabContraparte == "C" && this.opcion == "C" ) {
			this.btnNuevo = true;	
			this.bcxRut.disable();
			this.btnBicCorr = true;
			this.txtTasa.disable();
			this.cbbTasa.disable();
			this.bcxSpread.disable();
			this.bcxTasaFinal.disable();
	
			this.crdRs200151GnmCtrCall();	
			//return;
		} 
			
		else {
			this.crdRs200151GnmCtrCall();	
		} 

	}


	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160BankCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_ing :string = 'CR';
		let wss_cod_bus :string = '0';
		let wss_cod_bank :string = this.txtCodigoBancoAcreedor.value;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Bank.call(
			  (value) => this.bcxRs200160BankResult(value)
			, (value) => this.processFault(value)
			, wss_cod_ing
			, wss_cod_bus
			, wss_cod_bank
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160BankResult(wsResult :CmWsResult): void
	{
		let sucursal_banco_array:any[] = [];

		sucursal_banco_array = wsResult.getTableRows();

		this.txtNombreBanco.patchValue(sucursal_banco_array[0].fld_cor_nom_suc);
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
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
	 * Llamamos al Web Service.
	 */
	private crdRs200151GnmCtrCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_opr_num :string = this.numOperacion;
		let wss_fam_prd :string = this.familiaProducto;
		let wss_cod_prd :string = this.codigoProducto;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151GnmCtr.call(
			  (value) => this.crdRs200151GnmCtrResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_fam_prd
			, wss_cod_prd
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151GnmCtrResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla.  */
		if(wsResult.getResultString('wss_cod_cli').trim()=='-'){
			this.bcxRut.patchValue(this.txtBcxRut);
		} else {
			this.bcxRut.patchValue(wsResult.getResultString('wss_cod_cli'));
		}
		
		this.bcxRs99260ClnCall();
		this.txtCodigoBancoAcreedor.patchValue(wsResult.getResultString('wss_iso_acr').trim());
		//this.bcxRs200160BankCall();
		this.txtTasa.patchValue(wsResult.getResultString('wss_tas_tip').toString());
		this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_tas_bas', 6));
		this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr', 6));
		//this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		
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
	 * Llamamos al Web Service.
	 */
	private bcxRs99260ClnCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_cod_cli :string = this.utilService.toRut(this.bcxRut.value);
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260Cln.call(
			  (value) => this.bcxRs99260ClnResult(value)
			, (value) => this.processFault(value)
			, wss_cod_cli
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99260Cln.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260ClnResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
	
		this.xyz.patchValue(wsResult.getResultString('wss_cod_act'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_ori_sec'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_grp_eco'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_suc'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_eje_cta'));
		this.xyz.patchValue(wsResult.getResultString('wss_rut_eje_cta'));
		this.xyz.patchValue(wsResult.getResultString('wss_cla_sup'));
		this.xyz.patchValue(wsResult.getResultDate('wss_fec_cla'));
		this.xyz.patchValue(wsResult.getResultString('wss_tip_cln'));
		this.xyz.patchValue(wsResult.getResultString('wss_cen_cos'));
		this.xyz.patchValue(wsResult.getResultString('wss_dir_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_ciu_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_ctacte_mon'));
		this.xyz.patchValue(wsResult.getResultString('wss_ctacte_num'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		



		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg :any;
			wss_result_msg	=  wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);
		 } else {			
			this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli'));
		 }
	}

		/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160TasCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 
		let wss_usercode :string = this.utilService.toString(this.xyz.value);
		 */ 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Tas.call(
			  (value) => this.bcxRs200160TasResult(value)
			, (value) => this.processFault(value)
			, this.user_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Tas.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TasResult(wsResult :CmWsResult): void
	{


		this.cbbTasaArray = wsResult.getTableRows();

		// Desactivamos el simbolo de progress.
		this.waitShow = false;
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
	 * Llamamos al Web Service.
	 */
	private crdRs200112GnmCtrCall(): void
	{

		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_num_opr :string = this.utilService.toString(this.numOperacion);
		let wss_fam_prd :string = this.utilService.toString(this.familiaProducto);
		let wss_cod_prd :string = this.utilService.toString(this.codigoProducto);
		let wss_cod_cli :string = this.utilService.toRut(this.bcxRut.value);
		let wss_iso_acr :string = this.utilService.toString(this.txtCodigoBancoAcreedor.value);
		let wss_ofi :string = this.sucursal;
		let wss_mon_ope :string = this.moneda;
		let wss_mto_ori :string = this.utilService.toDecimal(this.monto);
		let wss_dias_pzo :string = this.diasPlazo;
		let wss_fec_vto :any = this.utilService.toDate(this.fechaVencimiento);
		let wss_fec_ini_int :any = this.utilService.toDate(this.inicioIntereses);
		let wss_tas_tip :string = this.txtTasa.value;
		let wss_tas_bas :string = this.utilService.toDecimal(this.bcxTasaFinal.value);
		let wss_tas_spr :string = this.utilService.toDecimal(this.bcxSpread.value);
		let wss_fec_otor :any = this.utilService.toDate(this.otorgamiento);
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112GnmCtr.call(
			  (value) => this.crdRs200112GnmCtrResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_fam_prd
			, wss_cod_prd
			, wss_cod_cli
			, wss_iso_acr
			, wss_ofi
			, wss_mon_ope
			, wss_mto_ori
			, wss_dias_pzo
			, wss_fec_vto
			, wss_fec_ini_int
			, wss_tas_tip
			, wss_tas_bas
			, wss_tas_spr
			, wss_fec_otor
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200112GnmCtrResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

		if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.contextService.setUserData("indicadorDeOpcion",'G');
			this.location.back();
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
	 * Llenado de combo cbbTasa
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbTasaArray = wsResult.getTableRows();
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
	 * Evento click del boton cmdAgregar.
	 */
	cmdAgregar_click(): void
	{
	
		this.crdRs200112GnmCtrCall();
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
			bcxRut:'',
			txtNombre:'',
			txtCodigoBancoAcreedor:'',
			txtNombreBanco:'',
			txtTasa:'',
			cbbTasa:'',
			bcxSpread:'0,000000',
			bcxTasaFinal:'0,000000',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.bcxRut = this.form.controls['bcxRut'];
		this.txtNombre = this.form.controls['txtNombre'];
		this.txtCodigoBancoAcreedor = this.form.controls['txtCodigoBancoAcreedor'];
		this.txtNombreBanco = this.form.controls['txtNombreBanco'];
		this.txtTasa = this.form.controls['txtTasa'];
		this.cbbTasa = this.form.controls['cbbTasa'];
		this.bcxSpread = this.form.controls['bcxSpread'];
		this.bcxTasaFinal = this.form.controls['bcxTasaFinal'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtTasa.setValidators(CmTextoComboValidator(this.cbbTasaArray, 'wss_tip_tas'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtTasa.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbTasa, value);
		});
		this.cbbTasa.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtTasa, value);
		});
		this.bcxSpread.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxSpread);
		});
		this.bcxTasaFinal.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxTasaFinal);
		});
		this.txtCodigoBancoAcreedor.valueChanges.subscribe((value) => {
			this.utilService.toUpper(this.txtCodigoBancoAcreedor);
		});
	}


	focusout_rut(){
		this.bcxRs99260ClnCall();
	}

	focusout_banco() {
		this.bcxRs200160BankCall();
	}

	
}
