// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 17/04/2020 12:53:40
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
import { CRD_RS_200_111_DOC } from './ws/CRD_RS_200_111_DOC';
import { CRD_RS_200_111_DOC_LCI } from './ws/CRD_RS_200_111_DOC_LCI';

@Component({
	selector: 'my-form',
	templateUrl: 'documentoingresonuevo.component.html'
})
/**
 * Form: Nuevo documento
 */
export class DocumentoIngresoNuevoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'DocumentoNuevo';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtOri :any;
	txtCopia :any;
	txtTextoLibre :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	WSS_D01_SGM:any;
	numOperacion:any;
	fun:any;
	glosa:any;
	ori:any;
	copia:any;
	identificador:any;

	titlepag:string = 'Nuevo documento';
	user_logueado:any;
	refrescar:any = false;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200111Doc: CRD_RS_200_111_DOC
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

		this.fun = this.contextService.getUserData("fun");
		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.identificador = this.contextService.getUserData("identificador");
		this.user_logueado = this.contextService.getUserData("user_logueado");


		// Numericos y uppercase.
		this.valueChanges();
	}

	ofunc_start():void{
		if(this.fun == 'D'){
			this.txtTextoLibre.patchValue(this.glosa);
			this.txtOri.patchValue(this.ori);
			this.txtCopia.patchValue(this.copia);				
			this.txtTextoLibre.disable();
			this.titlepag="Detalle documento";
		}
		//txtOri.setFocus();
		
	}


	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocCall(): void
	{
		if(this.txtTextoLibre.value == ''){
			this.utilService.alert(this.dialog,"Debe ingresar detalle del documento.");
			return;
		}

		/* Mover los datos de la pantalla a los parametros del Web Service.  */
		let wss_num_opr :string = this.numOperacion;
		let wss_cor_doc :string = '0';
		let wss_cod_doc :string = 'OTHDOC';
		let wss_dsc_doc :string = this.utilService.toString(this.txtTextoLibre.value);
		let wss_ori_c1 :string = this.txtOri.value;
		let wss_cop_c1 :string = this.txtCopia.value;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111Doc.call(
			  (value) => this.crdRs200111DocResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_cor_doc
			, wss_cod_doc
			, wss_dsc_doc
			, wss_ori_c1
			, wss_cop_c1
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111Doc.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111DocResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:string;
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
			this.utilService.alert(this.dialog,wss_result_msg)
		} else {
			this.crdRs200111DocLciCall();
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocLciCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_sw_itr :any = 1;
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_txt_cod :string = this.identificador;
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = this.utilService.toString(this.txtTextoLibre.value);
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
			this.utilService.alert(this.dialog,wss_result_msg)
		} else {
			this.waitShow = false;
			this.cmdVolver_click();  
		}
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.crdRs200111DocCall();	
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
			txtOri:'',
			txtCopia:'',
			txtTextoLibre:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtOri = this.form.controls['txtOri'];
		this.txtCopia = this.form.controls['txtCopia'];
		this.txtTextoLibre = this.form.controls['txtTextoLibre'];
	}

	ofunc_textArea_mayuscula_txtArea(myTextArea:any){
		if(myTextArea.value == undefined || myTextArea.value == null || myTextArea.value == '') {
			return;
		} else {
			this.utilService.toUpper(myTextArea);
		}
		
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
