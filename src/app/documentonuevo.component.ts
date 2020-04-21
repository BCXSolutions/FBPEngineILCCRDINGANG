// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 17/04/2020 10:22:54
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
import { CRD_RS_200_160_DOC_LCI } from './ws/CRD_RS_200_160_DOC_LCI';
import { CRD_RS_200_152_DOC_PRE } from './ws/CRD_RS_200_152_DOC_PRE';
import { CRD_RS_200_111_DOC } from './ws/CRD_RS_200_111_DOC';
import { CRD_RS_200_111_DOC_LCI } from './ws/CRD_RS_200_111_DOC_LCI';


@Component({
	selector: 'my-form',
	templateUrl: 'DocumentoNuevo.component.html'
})
/**
 * Form: Nuevo documento
 */
export class DocumentoNuevoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'DocumentoNuevo';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtOri :any;
	txtCopia :any;
	txtDescripcion :any;
	txtTextoLibre :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	WSS_D01_SGM:any;
	user_logueado:any; 
	corre:any;
	identificador:any;
	numOperacion:any;

	fun:any;
	ori:any;
	copia:any;
	codPais:any;
	glosa:any;
	opcion:any;
	maxlengthAux:any = 254;
	btnAceptar:any;
	refrescar:any;
	titleAux:any = "Nuevo documento";

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200160DocLci: CRD_RS_200_160_DOC_LCI
		, private crdRs200152DocPre: CRD_RS_200_152_DOC_PRE
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

		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.fun = this.contextService.getUserData("fun");
		this.corre = this.contextService.getUserData("corre");
		this.identificador = this.contextService.getUserData("identificador");
		this.glosa = this.contextService.getUserData("glosa");
		this.ori = this.contextService.getUserData("ori");
		this.copia = this.contextService.getUserData("copia");
		this.opcion = this.contextService.getUserData("opcion");
		this.codPais = this.contextService.getUserData("codPais");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");

		this.creation_complete();
		// Numericos y uppercase.
		this.valueChanges();
	}


	creation_complete() {
		if(this.identificador == 'OTHDOC'){
			this.maxlengthAux = 197;				
		}			
		if(this.opcion == 'C'){
			this.txtTextoLibre.disable();
			this.btnAceptar = 
			this.txtOri.disable();
			this.txtCopia.disable();
			this.txtDescripcion.disable();
		}

		this.ofunc_start();
	}

	ofunc_start():void{
		if(this.fun == 'D'){
			this.txtDescripcion.patchValue(this.glosa);
			this.txtOri.patchValue(this.ori);
			this.txtCopia.patchValue(this.copia);				
			this.txtDescripcion.disable();
			this.titleAux="Detalle documento";
		}
		if(this.opcion != 'C')
			this.crdRs200152DocPreCall();		
		else
			this.crdRs200160DocLciCall();
		
		//ofunc_cargar_textArea();
		//txtOri.setFocus();
	
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

		//this.txtTextoLibre
		let txtTextoLibre_array:any[] = [];
		let txtTextoLibreAux :string = "";
		let wss_result_msg:string;

		txtTextoLibre_array = wsResult.getTableRows();

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
		} else {
			for(let i=0; i< txtTextoLibre_array.length; i++){
				txtTextoLibreAux = txtTextoLibreAux + txtTextoLibre_array[i].wss_lin_txt+"\n";
			}	
			this.txtTextoLibre.patchValue(txtTextoLibreAux);
		}	
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200152DocPreCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_txt_cod :string = this.identificador;
		let wss_num_opr :string = this.numOperacion;
		let wss_txt_cor :string = this.corre;
		let wss_txt_ori :string = this.ori;
		let wss_txt_cop :string = this.copia;
		let wss_cod_pais :string = this.codPais;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200152DocPre.call(
			  (value) => this.crdRs200152DocPreResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_txt_cod
			, wss_num_opr
			, wss_txt_cor
			, wss_txt_ori
			, wss_txt_cop
			, wss_cod_pais
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200152DocPre.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152DocPreResult(wsResult :CmWsResult): void
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
		} else {
			this.crdRs200160DocLciCall();
			this.refrescar = true;	
			
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_cor_doc :string = this.corre;
		let wss_cod_doc :string = this.identificador;
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
		} else {
			this.contextService.setUserData("refrescar", true);
			this.cmdVolver_click();
		}	
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocLciCall(): void
	{

		if(this.identificador == 'OTHDOC')
			this.crdRs200111DocCall();		
		else {
			/* Mover los datos de la pantalla a los parametros del Web Service.  */
			let txtTextoLibreAux:string = this.txtTextoLibre.value;
			let wss_sw_itr :any = 1;
			let wss_cod_prd :string = this.WSS_D01_SGM;
			let wss_txt_cod :string = this.identificador;
			let wss_num_opr :string = this.numOperacion;
			let wss_lin_txt :string;

			if((txtTextoLibreAux.substr(0,1) == ' ') && (txtTextoLibreAux.length > 0)){
				wss_lin_txt = txtTextoLibreAux.substr(0,1).replace(" "," ")+(txtTextoLibreAux.substr(1,txtTextoLibreAux.length).toString().trim());				
			} else {
				wss_lin_txt = this.txtTextoLibre.value;
			}
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
			}		
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
		}else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
		} else {
			this.crdRs200111DocCall();
		}	
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.crdRs200111DocLciCall();
	}
	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{
		this.location.back();
	}

	//FUNCION QUE CONVIERTE A MAYUSCULA LOS TEXTOS
	ofunc_mayuscula(myTextArea:any):void{
		if(myTextArea.value != ''){
			//myTextArea.value = myTextArea.text.toUpperCase(); 
			this.utilService.toUpper(myTextArea);
		}
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
			txtDescripcion:'',
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
		this.txtDescripcion = this.form.controls['txtDescripcion'];
		this.txtTextoLibre = this.form.controls['txtTextoLibre'];
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
