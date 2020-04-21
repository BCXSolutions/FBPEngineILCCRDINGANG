// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 15/04/2020 22:28:37
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MatDialog, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';
// Componentes y objetos Bcx
import { CmContextService
       , CmDialogAlertComponent
       , CmWsHostService
       , CmUtilService
       , CmWaitComponent
       , CmWsResult } from '@bcxang';
// Web Services
import { CRD_RS_200_151_DOC_SEG } from './ws/CRD_RS_200_151_DOC_SEG';
import { CRD_RS_200_152_DOC_VAR_SEG } from './ws/CRD_RS_200_152_DOC_VAR_SEG';
import { CRD_RS_200_160_DOC_LCI } from './ws/CRD_RS_200_160_DOC_LCI';
import { CRD_RS_200_111_DOC_SEG } from './ws/CRD_RS_200_111_DOC_SEG';
import { CRD_RS_200_111_DOC_LCI } from './ws/CRD_RS_200_111_DOC_LCI';

@Component({
	selector: 'my-form',
	templateUrl: 'detalledocumentoseguro.component.html'
})
/**
 * Form: Detalle documento seguro
 */
export class DocumentoSeguroComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'DocumentoSeguro';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtOriginal :any;
	txtCopia :any;
	optDescripcion :any;
	txtMonto :any;
	txtDias :any;
	chkCubriendo :any;
	txtOtrasCondiciones :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	numOperacion:any;
	user_logueado:any;
	corre:any;
	identificador:any;
	nroPais:any
	WSS_D01_SGM:any;
	glosa:any
	varClausula:any;
	precarga:any;

	ori:any;
	copia:any;

	opcion:any;
	btnAceptar:any;
	refrescar:any = false;
	codPais:any

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200151DocSeg: CRD_RS_200_151_DOC_SEG
		, private crdRs200152DocVarSeg: CRD_RS_200_152_DOC_VAR_SEG
		, private crdRs200160DocLci: CRD_RS_200_160_DOC_LCI
		, private crdRs200111DocSeg: CRD_RS_200_111_DOC_SEG
		, private crdRs200111DocLci: CRD_RS_200_111_DOC_LCI
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();

		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.corre = this.contextService.getUserData("corre");
		this.identificador = this.contextService.getUserData("identificador");
		this.nroPais = this.contextService.getUserData("identificador");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");
		this.glosa = this.contextService.getUserData("glosa");
		this.varClausula = this.contextService.getUserData("varClausula");
		this.codPais = this.contextService.getUserData("codPais");
		this.ori = this.contextService.getUserData("ori");
		this.copia = this.contextService.getUserData("copia");

		this.ofunc_start();

		// Numericos y uppercase.
		this.valueChanges();
	}



	ofunc_start(){
		this.ofunc_enabled();
							
		this.txtOriginal.patchValue(this.ori);
		if(this.ori > 0)
			this.precarga = false;
		else
			this.precarga = true;
			
		this.txtCopia.patchValue(this.copia);	
		
		this.crdRs200151DocSegCall();

	}

	ofunc_limpiar():void{
		this.txtOriginal.patchValue(""+this.ori);
		this.txtCopia.value.patchValue(this.copia);
		this.optDescripcion.patchValue('P');
		this.txtMonto.patchValue('');
		this.txtDias.patchValue('');	
		this.chkCubriendo.patchValue(false);
		this.txtOtrasCondiciones.patchValue('');	 		
	}


	ofunc_enabled() {
		if(this.opcion == 'C'){
			this.txtCopia.disable();
			this.txtDias.disable();
			this.txtMonto.disable();
			this.txtOriginal.disable();;
			this.txtOtrasCondiciones.disable();
			this.optDescripcion.disable();
			this.btnAceptar = true;
			this.chkCubriendo.disable();
		}
	}


	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151DocSegCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_opr_num :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151DocSeg.call(
			  (value) => this.crdRs200151DocSegResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151DocSeg.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151DocSegResult(wsResult :CmWsResult): void
	{
		let ws_result_msg:any;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		//this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			ws_result_msg = wsResult.getResultString('ws_result_msg');
			this.utilService.alert(this.dialog,ws_result_msg);
		} else {

			if(wsResult.getResultString('wss_seg_tip_doc') == 'P'){
				this.optDescripcion.patchValue('1');
			} else if(wsResult.getResultString('wss_seg_tip_doc') == 'C'){
				this.optDescripcion.patchValue('2');
			} else {
				this.optDescripcion.patchValue('3');
			}
			this.txtMonto.patchValue(wsResult.getResultNumberFormat('wss_seg_pct_mto', 2));
			this.txtDias.patchValue(wsResult.getResultString('wss_seg_dia_adu'));
			if(wsResult.getResultString('wss_seg_ind_bab')=='1'){
				this.chkCubriendo.patchValue(true);
			}else {
				this.chkCubriendo.patchValue(false);
			} 
			this.crdRs200152DocVarSegCall();
			// Desactivamos el simbolo de progress.
			this.waitShow = false;
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200152DocVarSegCall(): void
	{

		if(this.precarga == true){
			/* Mover los datos de la pantalla a los parametros del Web Service. */ 
			let wss_num_opr :string = this.numOperacion;
			let wss_txt_cor :string = this.corre;
			let wss_txt_cod :string = this.identificador;
			let wss_cod_doc_seg :string;
			if(this.optDescripcion.value == '1')
				wss_cod_doc_seg = 'P';
			else if(this.optDescripcion.value == '2')
				wss_cod_doc_seg = 'C';
			else if(this.optDescripcion.value == '3')
				wss_cod_doc_seg = ' ';	
			let wss_cod_bod_bod :string;
			if(this.chkCubriendo.value == true)
				wss_cod_bod_bod = '1';
			else
				wss_cod_bod_bod = '0';
			let wss_cod_pais :string = this.codPais;
			let wss_usercode :string = this.user_logueado;
			
			// Activamos el simbolo de progress.
			this.waitShow = true;
			// Invocamos el WS.
			this.crdRs200152DocVarSeg.call(
				(value) => this.crdRs200152DocVarSegResult(value)
				, (value) => this.processFault(value)
				, wss_num_opr
				, wss_txt_cor
				, wss_txt_cod
				, wss_cod_doc_seg
				, wss_cod_bod_bod
				, wss_cod_pais
				, wss_usercode
			);
		} else {
			this.crdRs200160DocLciCall();
		}

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200152DocVarSeg.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152DocVarSegResult(wsResult :CmWsResult): void
	{
		let ws_result_msg:any;

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
		} else if(wsResult.getReturnValue()==0){
			ws_result_msg = wsResult.getResultString('ws_result_msg');
			this.utilService.alert(this.dialog,ws_result_msg);
		} else {
			this.precarga = false;
			this.crdRs200160DocLciCall();
			// Desactivamos el simbolo de progress.
			this.waitShow = false;
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160DocLciCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_txt_cod :string = this.identificador;
		let wss_num_opr :string = this.numOperacion;
		let wss_txt_cor :string = this.corre;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160DocLci.call(
			  (value) => this.crdRs200160DocLciResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_txt_cod
			, wss_num_opr
			, wss_txt_cor
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160DocLci.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200160DocLciResult(wsResult :CmWsResult): void
	{

		let txtOtrasCondiciones_array:any[] = [];
		let txtOtrasCondicionesAux :string = "";
		let wss_result_msg:string;

		txtOtrasCondiciones_array = wsResult.getTableRows();

		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			for(let i=0; i< txtOtrasCondiciones_array.length; i++){
				txtOtrasCondicionesAux = txtOtrasCondicionesAux + txtOtrasCondiciones_array[i].wss_lin_txt+"\n";
			}	
			this.txtOtrasCondiciones.patchValue(txtOtrasCondicionesAux);
		}	
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocSegCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */
		let wss_opr_num :string = this.numOperacion;
		let wss_cor_doc :string = this.corre;
		let wss_cod_doc :string = this.identificador;
		let wss_dsc_doc :string = this.glosa;
		let wss_ori_c1 :string = this.txtOriginal.value;
		let wss_cop_c1 :string = this.txtCopia.value;
		let wss_seg_tip_doc :string;
		if(this.optDescripcion.value == '1')
			wss_seg_tip_doc = 'P';
		else if(this.optDescripcion.value == '2')
			wss_seg_tip_doc = 'C';
		else if(this.optDescripcion.value == '3')
			wss_seg_tip_doc = ' ';	
		let wss_seg_pct_mto :string = this.utilService.toDecimal(this.txtMonto.value);
		let wss_seg_dia_adu :string = this.txtDias.value;
		let wss_seg_ind_bab :string;
		if(this.chkCubriendo.value == true)
			wss_seg_ind_bab = '1';
		else
			wss_seg_ind_bab = '0';
		let wss_cls_comp :string = this.varClausula;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111DocSeg.call(
			  (value) => this.crdRs200111DocSegResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_cor_doc
			, wss_cod_doc
			, wss_dsc_doc
			, wss_ori_c1
			, wss_cop_c1
			, wss_seg_tip_doc
			, wss_seg_pct_mto
			, wss_seg_dia_adu
			, wss_seg_ind_bab
			, wss_cls_comp
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111DocSeg.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111DocSegResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:any;
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
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.precarga = false;
			this.cmdVolver_click();
		}	

	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocLciCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */
		let wss_sw_itr :any = 1;
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_txt_cod :string = this.identificador;
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = this.utilService.toString(this.txtOtrasCondiciones.value);
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111DocLci.call(
			  (value) => this.crdRs200111DocLciResult(value)
			, (value) => this.processFault(value)
			, wss_sw_itr
			, wss_cod_prd
			, wss_txt_cod
			, wss_num_opr
			, wss_lin_txt
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111DocLci.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111DocLciResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:any;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs200111DocSegCall();
		}
	}


	change_optDescripcion(){
		this.precarga=true;
		this.crdRs200152DocVarSegCall();
	}

	change_chkCubriendo(){
		this.precarga=true;		
		this.crdRs200152DocVarSegCall();
	}

	ofunc_mayuscula(myTextArea:any):void{
		if(myTextArea.value != ''){
			//myTextArea.value = myTextArea.text.toUpperCase(); 
			this.utilService.toUpper(myTextArea);
		}
	}


	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.crdRs200111DocLciCall()
	}
	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{
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
			txtOriginal:'',
			txtCopia:'',
			optDescripcion:'',
			txtMonto:'',
			txtDias:'',
			chkCubriendo:'',
			txtOtrasCondiciones:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtOriginal = this.form.controls['txtOriginal'];
		this.txtCopia = this.form.controls['txtCopia'];
		this.optDescripcion = this.form.controls['optDescripcion'];
		this.txtMonto = this.form.controls['txtMonto'];
		this.txtDias = this.form.controls['txtDias'];
		this.chkCubriendo = this.form.controls['chkCubriendo'];
		this.txtOtrasCondiciones = this.form.controls['txtOtrasCondiciones'];
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
