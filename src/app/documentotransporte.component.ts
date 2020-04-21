// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 16/04/2020 15:10:11
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
import { CRD_RS_200_160_DOC_LCI_BL } from './ws/CRD_RS_200_160_DOC_LCI_BL';
import { CRD_RS_200_152_DOC_PRE } from './ws/CRD_RS_200_152_DOC_PRE';
import { CRD_RS_200_111_DOC } from './ws/CRD_RS_200_111_DOC';
import { CRD_RS_200_111_DOC_LCI_BL } from './ws/CRD_RS_200_111_DOC_LCI_BL';

@Component({
	selector: 'my-form',
	templateUrl: 'documentotransporte.component.html'
})
/**
 * Form: Documento de transporte
 */
export class DocumentoTransporteComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'DocumentoTransporte';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtOri :any;
	txtCopia :any;
	txtOrden:any;
	txtGlosa:any;
	txtTextoLibre :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	WSS_D01_SGM:any;
	identificador:any;
	numOperacion:any;
	corre:any;
	user_logueado:any;
	precarga:any;
	opcion:any;
	ori:any
	copia:any
	codPais:any
	fun:any;
	glosa:any;
	btnAceptar:any;
	maxlengthAux:any;
	titleAux:any = 'Documento de transporte';


	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200160DocLciBl: CRD_RS_200_160_DOC_LCI_BL
		, private crdRs200152DocPre: CRD_RS_200_152_DOC_PRE
		, private crdRs200111Doc: CRD_RS_200_111_DOC
		, private crdRs200111DocLciBl: CRD_RS_200_111_DOC_LCI_BL
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();


		//this.nroTransporte = this.contextService.getUserData("nroTransporte");
		this.numOperacion = this.contextService.getUserData("numOperacion");	
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");	
		this.user_logueado = this.contextService.getUserData("user_logueado");	
		this.precarga = this.contextService.getUserData("precarga");
		this.opcion = this.contextService.getUserData("opcion");
		this.ori = this.contextService.getUserData("ori");
		this.copia = this.contextService.getUserData("copia");
		this.codPais = this.contextService.getUserData("codPais");
		this.corre = this.contextService.getUserData("corre");
		this.identificador = this.contextService.getUserData("identificador");
		this.fun = this.contextService.getUserData("fun");
		this.glosa = this.contextService.getUserData("glosa");

		this.creation_complate() 

		// Numericos y uppercase.
		this.valueChanges();


	}

	creation_complate() {
		if(this.identificador == 'OTHDOC'){
			this.maxlengthAux = 197;				
		}			
		if(this.opcion == 'C'){
			this.txtTextoLibre.disable();
			this.btnAceptar.disable();
			this.txtOri.disable();
			this.txtCopia.disable();
			this.txtGlosa.disable();
			this.txtOrden.disable();
		}

		this.ofunc_start();
	}

	ofunc_start(){
		if(this.fun == 'D'){
			this.txtGlosa.patchValue(this.glosa);
			this.txtOri.patchValue(this.ori);
			this.txtCopia.patchValue(this.copia);				
			this.txtGlosa.disable();
			this.titleAux="Detalle documento";
		}
		if(this.opcion != 'C')
			this.crdRs200152DocPreCall();
		else
			this.crdRs200160DocLciBlCall();
		
		//ofunc_cargar_textArea();
		//this.txtOri.setFocus();
		
	}

	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160DocLciBlCall(): void
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
		this.crdRs200160DocLciBl.call(
			  (value) => this.crdRs200160DocLciBlResult(value)
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
	 * Callback invocado por this.crdRs200160DocLciBl.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200160DocLciBlResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:string;
		// Desactivamos el simbolo de progress.
	
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_lin_lar'));
		 */
		let txtTextoLibre_array:any[] = [];
		let txtTextoLibreAux :string = "";
		txtTextoLibre_array = wsResult.getTableRows();


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
			this.txtOrden.patchValue(wsResult.getResultString('wss_lin_lar'));
			this.waitShow = false;
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string;
			wss_result_msg = wsResult.getResultString('wss_result_msg');
		} else {
			this.crdRs200160DocLciBlCall()
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocCall(): void
	{

		/* Mover los datos de la pantalla a los parametros del Web Service. */
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
			let wss_result_msg:string;
			wss_result_msg = wsResult.getResultString('wss_result_msg');
		} else {
			this.contextService.setUserData("refrescar", true);
			this.cmdVolver_click();
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111DocLciBlCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let txtTextoLibreAux:string = this.txtTextoLibre.value;
		let wss_sw_itr :any = true;
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_txt_cod :string = this.identificador;
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_lar :string = this.txtOrden.value;
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
		this.crdRs200111DocLciBl.call(
			  (value) => this.crdRs200111DocLciBlResult(value)
			, (value) => this.processFault(value)
			, wss_sw_itr
			, wss_cod_prd
			, wss_txt_cod
			, wss_num_opr
			, wss_lin_lar
			, wss_lin_txt
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111DocLciBl.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111DocLciBlResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:string;
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
			this.crdRs200111DocCall();
		}
	}


	//FUNCION QUE CONVIERTE A MAYUSCULA LOS TEXTOS
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
		this.crdRs200111DocLciBlCall();
		
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
			txtMonto:'',
			txtDias:'',
			txtTextoLibre:'',
			txtOrden:'',
			txtGlosa:''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtOri = this.form.controls['txtOri'];
		this.txtCopia = this.form.controls['txtCopia'];
		this.txtOrden = this.form.controls['txtOrden'];
		this.txtGlosa = this.form.controls['txtGlosa'];
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
