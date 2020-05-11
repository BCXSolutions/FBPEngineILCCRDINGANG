// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 02/12/2019 13:34:32
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
	   , CmTextoComboValidator
       , CmWsResult } from '@bcxang';
// Web Services
import { BCX_RS_200_160_DOC } from './ws/BCX_RS_200_160_DOC';
import { CRD_RS_200_151_DOC } from './ws/CRD_RS_200_151_DOC';
import { BCX_RS_200_160_CNDENT } from './ws/BCX_RS_200_160_CNDENT';
import { CRD_RS_200_111_DOC } from './ws/CRD_RS_200_111_DOC';
import { CRD_RS_200_113_DOC } from './ws/CRD_RS_200_113_DOC';
import { CRD_RS_200_112_DOC_REQ } from './ws/CRD_RS_200_112_DOC_REQ';
import { CRD_RS_200_151_DOC_REQ } from './ws/CRD_RS_200_151_DOC_REQ';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { CRD_RS_200_160_TXT_LCI } from './ws/CRD_RS_200_160_TXT_LCI';
import { FBP_RS_AUTH_SERVER } from '../../@bcxang/lib/ws/FBP_RS_AUTH_SERVER';
import { interval } from 'rxjs';
import { stringify } from 'querystring';


@Component({
	selector: 'my-form',
	templateUrl: 'documentosrequeridos.component.html'
})
/**
 * Form: Buscar
 */
export class DocumentosRequeridosComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = 'DocumentosRequeridos';
	// Estructura con los datos del form.
	form: FormGroup;	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de la tabla.
	tableRows: any[] = [];
	tableCols: any[] = [];
	// Datos para el filtro de la tabla.
	tableRowsTemp: any[] = [];
	// Filas seleccionadas.
	tableSelected: any[] = [];
	// Sort vigente.
	tableSort: any = {};
	// Posicion del scroll vertical.
	tableScroll: number;
	// Indicador.
	tableAfterView: boolean;

	WSS_D01_SGM:any;

	txtDoc:any;
	cmbDoc:any;
	cmbDocArray:any[]=[];

	txtCondicion:any;
	cmbCondicion:any;
	cmbCondicionArray:any[]=[];

	txtOtro:any;
	chkDocumento:any;
	txtTextoLibre:any;

	nroTransporte:any;
	numOperacion:any;
	user_logueado:any;
	precarga:any;
	opcion:any;

	codPais:any;
	refrescar:any;
	varClausula:any

	ignoredFirstEvent = false;
	initValue;
	myDate:any;

	btnBack:any;
	btnBackDisabled:any;
	btnGo:any;
	btnOtro:any;

	bloqueoGrilla:any;

	@ViewChild('grd', {static: true}) table: any;
	// @ViewChild('rightTmpl', {static: true})  rightTmpl: TemplateRef<any>;
	// @ViewChild('centerTmpl', {static: true}) centerTmpl: TemplateRef<any>;
	@ViewChild('eliminarDocumento', {static: true})  eliminarDocumentoTmpl: TemplateRef<any>;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private dateAdapter: DateAdapter<Date>
		, private bcxRs200160Doc: BCX_RS_200_160_DOC
		, private crdRs200151Doc: CRD_RS_200_151_DOC
		, private bcxRs200160Cndent: BCX_RS_200_160_CNDENT
		, private crdRs200111Doc: CRD_RS_200_111_DOC
		, private crdRs200113Doc: CRD_RS_200_113_DOC
		, private crdRs200151DocReq: CRD_RS_200_151_DOC_REQ
		, private crdRs200112DocReq: CRD_RS_200_112_DOC_REQ
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private crdRs200160TxtLci: CRD_RS_200_160_TXT_LCI

		){
			this.initValue = this.myDate;
		}


	ngOnInit() {
		this.formDef();
		this.controlesDef();

	// Definicion de columnas.
		this.tableCols = [
			{ prop:'wss_txt_gls', name:'Documento', width:'240', headerClass:'gridHeader'},
			{ prop:'wss_txt_ori', name:'Original', width:'80', headerClass:'gridHeader'},
			{ prop:'wss_txt_cop', name:'Copia', width:'80', headerClass:'gridHeader'},
			{ width:'80', headerClass:'gridHeader', cellTemplate: this.eliminarDocumentoTmpl},
		];



		// this.tableRows = [
		// 	{ wss_txt_cor:'1', wss_txt_cod:'ANLCTF', wss_txt_gls:'Certificado de Analisis',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'BBLDOC', wss_txt_gls:'Conocimiento de Embarque',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'COMINV', wss_txt_gls:'Factura Comercial',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'HLTCTF', wss_txt_gls:'Certificado Sanitario',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'ORGCTF', wss_txt_gls:'Certificado de Origen',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'OTHDOC', wss_txt_gls:'PRUEBA1',wss_txt_ori: '1', wss_txt_cop:'1', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'PCKLST', wss_txt_gls:'Lista de Empaque',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'PHYCTF', wss_txt_gls:'Certificado Fitosanitario',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'POCINS', wss_txt_gls:'Documento de Seguro',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'QLTCTF', wss_txt_gls:'Certificado de Calidad',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'1', wss_txt_cod:'WGTCTF', wss_txt_gls:'Certificado de Peso',wss_txt_ori: '0', wss_txt_cop:'0', wss_txt_ind:'0'},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},
		// 	{ wss_txt_cor:'', wss_txt_cod:'', wss_txt_gls:'',wss_txt_ori: '', wss_txt_cop:'', wss_txt_ind:''},

		//   ];

		
		this.nroTransporte = this.contextService.getUserData("nroTransporte");
		this.numOperacion = this.contextService.getUserData("numOperacion");	
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");	
		this.user_logueado = this.contextService.getUserData("user_logueado");	
		this.precarga = this.contextService.getUserData("precarga");
		this.opcion = this.contextService.getUserData("opcion");
		this.refrescar = this.contextService.getUserData("refrescar");
		this.codPais = this.contextService.getUserData("codPais");
		this.varClausula = this.contextService.getUserData("varClausula");


		this.txtOtro.disable();
		this.txtTextoLibre.disable()
		// Mensajes a desplegar por la grilla.
		//this.utilService.setTableMsg(this.table);
		this.dateAdapter.setLocale('es-CL');

		this.btnBack = true;
		this.btnBackDisabled = false;
		this.btnGo = false;
		this.btnOtro = false;

		// Numericos y uppercase.
		this.valueChanges();	
	

		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);

		// if (!ctxSw)
		// {
			
			// Combos llenados al inicio.
			this.wsFin = [];
			this.wsFin.push(false);

			// cbbCodSucursal
			this.wsFin.push(false);
		    this.bcxRs200160Doc.call (
				  (value) => this.getComboData0(value)
				, (value) => this.openDialogAlert(value)
				, this.WSS_D01_SGM
				, this.nroTransporte
			);

			// cbbCodCanal
			this.wsFin.push(false);
			this.bcxRs200160Cndent.call (
				  (value) => this.getComboData1(value)
				, (value) => this.openDialogAlert(value)			
			);

			this.crdRs200151DocCall();
			this.ofunc_leer_documentos();
			this.ofunc_cargar_textArea(this.txtTextoLibre,'DOCIM')
		// }		
		this.validatorsDef();
	}

	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151DocCall(): void
	{
		this.ofunc_enabled(false);
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_num_opr: string  = this.numOperacion;
		let wss_usercode: string = this.user_logueado;
	
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Doc.call(
			  (value) => this.crdRs200151DocResult(value)
		//	, (value) => this.openDialogAlert(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdWs200160Col.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs200151DocResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:any;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// Creamos columnas adicionales formateadas.
		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg)
		} else {
			this.waitShow = false;
			// Obtenemos las filas.
			this.tableRows = wsResult.getTableRows();
			this.tableRowsTemp = this.tableRows;
			
		}



		// Primera pagina.
		this.table.offset = 0;
	}

	ofunc_insertar_doc():void{
		if(this.cmbDoc.value == '' || this.txtDoc.value == '' || this.txtDoc.value == null || this.cmbDoc.value == null){
			this.utilService.alert(this.dialog,"Debe seleccionar un tipo de documento");
			return;
		}
		else{

			let wss_num_opr: string = this.numOperacion;
			let wss_cor_doc: string = '0';
			let wss_cod_doc: string = this.txtDoc.value;
			let wss_dsc_doc: string = this.cmbDoc.value;
			let wss_ori_c1: string = '0';
			let wss_cop_c1: string = '0';
			let wss_usercode: string = this.user_logueado;


			this.crdRs200111Doc.call(
				(value) => this.ofunc_result_insert(value)
		  //	, (value) => this.openDialogAlert(value)
			  , (value) => this.processFault(value)
			  , wss_num_opr
			  , wss_cor_doc
			  , wss_cod_doc
			  , wss_dsc_doc
			  , wss_ori_c1
			  , wss_cop_c1
			  , wss_usercode
		  );
  

		}
		
	}
	ofunc_result_insert(wsResult :CmWsResult):void{

		let wss_result_msg:string;		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {
			// Desactivamos el simbolo de progress.		
			this.crdRs200151DocCall();
			this.waitShow = false;
		}
		// Primera pagina.
		this.table.offset = 0;
	 }
	 
	 
	 ofunc_eliminar_documento(row:any):void{
		

			let wss_num_opr: string = this.numOperacion;
			let wss_txt_cod: string = row.wss_txt_cod;
			let wss_txt_cor: string = row.wss_txt_cor.toString();
			let wss_usercode: string = this.user_logueado;

			this.crdRs200113Doc.call(
				(value) => this.ofunc_result_eliminar(value)
		  //	, (value) => this.openDialogAlert(value)
			  , (value) => this.processFault(value)
			  , wss_num_opr
			  , wss_txt_cod
			  , wss_txt_cor
			  , wss_usercode
		  );
		
		
	}
	ofunc_result_eliminar(wsResult :CmWsResult):void{
							
		let wss_result_msg:string;		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {
			// Desactivamos el simbolo de progress.		
			this.crdRs200151DocCall();
			this.waitShow = false;
		}
		// Primera pagina.
		this.table.offset = 0;
	 }

	

	/**
	 * Posicion de scroll.
	 */
	ngAfterViewChecked()
	{
		this.tableAfterView = this.utilService.scrollPos(this.table, this.tableScroll, this.tableAfterView);
	}

	/**
	 * Llenado de combo cbbCodSucursal
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cmbDocArray = wsResult.getTableRows();
		this.getComboDataFin(0, wsResult);
	}

	/**
	 * Llenado de combo cbbCodCanal
	 */
	private getComboData1(wsResult: CmWsResult): void
	{
		this.cmbCondicionArray = wsResult.getTableRows();
		this.getComboDataFin(1, wsResult);
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



	//INGRESO DE DOCUMENTOS
	ofunc_guardar_documentos():void{

		let wss_num_opr: string = this.numOperacion;
		let wss_cnd_ent: string;
		if(this.cmbCondicion.value == '' || this.txtCondicion.value == ''){
			wss_cnd_ent = '0';
		} else {
			wss_cnd_ent = this.txtCondicion.value;
		}
		let wss_otr_ent: string = this.txtOtro.value;
		let wss_ori_imp: string;
		if(this.chkDocumento.value == true){
			wss_ori_imp = 'S';
		} else {
			wss_ori_imp = 'N';
		}

		let wss_usercode: string = this.user_logueado;

		this.crdRs200112DocReq.call(
			(value) => this.ofunc_result_agregar_datos(value)
	  //	, (value) => this.openDialogAlert(value)
		  , (value) => this.processFault(value)
		  , wss_num_opr
		  , wss_cnd_ent
		  , wss_otr_ent
		  , wss_ori_imp
		  , wss_usercode
	  );
	
		
	}
	ofunc_result_agregar_datos(wsResult :CmWsResult):void{			
		let wss_result_msg:string;		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {
			// Desactivamos el simbolo de progress.					
			this.waitShow = false;

		}
		// Primera pagina.
		this.table.offset = 0;	
	}

	//METODO QUE GUARDA LOS TEXTAREA
	ofunc_grabar_texto(cIndicador:any,cTexto:any):void{

		

		let wss_cod_prd: string = this.WSS_D01_SGM;
		let wss_tip_txt: string = cIndicador;
		let wss_num_opr: string = this.numOperacion;
		let wss_lin_txt: string;
		
		if(cTexto.value == '' || cTexto.value == null || cTexto.value == undefined)
			wss_lin_txt = ' '
		else 
			wss_lin_txt = cTexto.value;
		
		let wss_usercode: string = this.user_logueado;

		
		this.crdRs200111TxtLci.call(
			(value) => this.ofunc_result_texto(value)
	  //	, (value) => this.openDialogAlert(value)
		  , (value) => this.processFault(value)
		  , wss_cod_prd
		  , wss_tip_txt
		  , wss_num_opr
		  , wss_lin_txt
		  , wss_usercode
	  );

	}

	ofunc_result_texto(wsResult :CmWsResult):void{
		let wss_result_msg:string;		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {
			// Desactivamos el simbolo de progress.					
			this.waitShow = false;

		}
		// Primera pagina.
		this.table.offset = 0;	
	}



	//LEE DOCUMENTOS
	ofunc_leer_documentos():void{			

		let wss_num_opr: string = this.numOperacion;
		let wss_usercode: string = this.user_logueado;

		this.crdRs200151DocReq.call(
			(value) => this.ofunc_result_leer_documentos(value)
		//	, (value) => this.openDialogAlert(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

	}
	ofunc_result_leer_documentos(wsResult :CmWsResult):void{

		
		let wss_result_msg:string;		

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {


			this.txtCondicion.patchValue(wsResult.getResultString('wss_cnd_ent').toString());
		
			this.txtOtro.patchValue(wsResult.getResultString('wss_otr_ent'));
			if(wsResult.getResultString('wss_cnd_ent').toString() == '9' )
				this.txtOtro.enable();
			if(wsResult.getResultString('wss_ori_imp').toString() == 'S'){
				this.chkDocumento.patchValue(true);
				this.txtTextoLibre.enable();
			}
			else
				this.chkDocumento.patchValue(false);

			// Desactivamos el simbolo de progress.					
			this.waitShow = false;

		}
		// Primera pagina.
		this.table.offset = 0;
	}


	ofunc_cargar_textArea(myTextArea:any,opcion:any):void{

		if(myTextArea.value == '' || myTextArea.value == undefined || myTextArea.value == null){
			return;
		} else {

			let wss_cod_prd: string = this.WSS_D01_SGM;
			let wss_tip_txt: string = opcion;
			let wss_num_opr: string = this.numOperacion;
			let wss_usercode: string = this.user_logueado;


			this.crdRs200160TxtLci.call(
				(value) => this.ofunc_result_cargar_textArea(value)
			//	, (value) => this.openDialogAlert(value)
				, (value) => this.processFault(value)
				, wss_cod_prd
				, wss_tip_txt
				, wss_num_opr
				, wss_usercode
			);
		}		

	}
	ofunc_result_cargar_textArea(wsResult :CmWsResult):void{
		
		let wss_result_msg:string;		
		let txtTextoLibreAux:any;
		let txtTextoLibreAux_array:any[]=[];

		txtTextoLibreAux_array = wsResult.getTableRows();

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);

		} else {
			// Desactivamos el simbolo de progress.					
			this.waitShow = false;

			// for(let i=0; i< txtTextoLibreAux_array.length; i++){
			// 	txtTextoLibreAux = txtTextoLibreAux + txtTextoLibreAux_array[i].wss_lin_txt+"\n";
			// }	
			// this.txtTextoLibre.patchValue(txtTextoLibreAux);
			this.txtTextoLibre.patchValue(txtTextoLibreAux_array[0].wss_lin_txt);	

		}
		// Primera pagina.
		this.table.offset = 0;

	}




	cmdDetalle_click(){
		debugger
		if(this.tableSelected[0] != null){
			if(this.tableSelected[0].wss_txt_ind.toString() =='1'){
				this.contextService.store(this);
				this.contextService.setUserData("numOperacion", this.numOperacion);
				this.contextService.setUserData("corre", this.tableSelected[0].wss_txt_cor);
				this.contextService.setUserData("identificador", this.tableSelected[0].wss_txt_cod);
				this.contextService.setUserData("glosa", this.tableSelected[0].wss_txt_gls);
				this.contextService.setUserData("ori", this.tableSelected[0].wss_txt_ori);
				this.contextService.setUserData("copia", this.tableSelected[0].wss_txt_cop);
				this.contextService.setUserData("opcion", this.opcion);
				this.contextService.setUserData("codPais", this.codPais);
				this.contextService.setUserData("user_logueado", this.user_logueado);
				this.contextService.setUserData("varClausula", this.varClausula);
				this.router.navigate(['/detalledocumentoseguro']);

			}
			else if(this.tableSelected[0].wss_txt_ind.toString() =='2'){				
				this.contextService.store(this);
				this.contextService.setUserData("fun", 'D');
				this.contextService.setUserData("numOperacion", this.numOperacion);
				this.contextService.setUserData("corre", this.tableSelected[0].wss_txt_cor);
				this.contextService.setUserData("identificador", this.tableSelected[0].wss_txt_cod);
				this.contextService.setUserData("glosa", this.tableSelected[0].wss_txt_gls);
				this.contextService.setUserData("ori", this.tableSelected[0].wss_txt_ori);
				this.contextService.setUserData("copia", this.tableSelected[0].wss_txt_cop);
				this.contextService.setUserData("opcion", this.opcion);
				this.contextService.setUserData("codPais", this.codPais);
				this.contextService.setUserData("user_logueado", this.user_logueado);
				this.router.navigate(['/documentotransporte']);
			}
			else{					
				this.contextService.store(this);
				this.contextService.setUserData("fun", 'D');
				this.contextService.setUserData("numOperacion", this.numOperacion);
				this.contextService.setUserData("corre", this.tableSelected[0].wss_txt_cor);
				this.contextService.setUserData("identificador", this.tableSelected[0].wss_txt_cod);
				this.contextService.setUserData("glosa", this.tableSelected[0].wss_txt_gls);
				this.contextService.setUserData("ori", this.tableSelected[0].wss_txt_ori);
				this.contextService.setUserData("copia", this.tableSelected[0].wss_txt_cop);
				this.contextService.setUserData("opcion", this.opcion);
				this.contextService.setUserData("codPais", this.codPais);
				this.contextService.setUserData("user_logueado", this.user_logueado);
				this.router.navigate(['/documentonuevo']);
			}
		}
		else
			this.utilService.alert(this.dialog,"Debe seleccionar un documento");	




		// this.contextService.store(this);
		// this.contextService.setUserData("precarga", this.precarga);
		// this.router.navigate(['/detalledocumentoseguro']);
	}

	cmdIngresarDoc_click(){
		this.contextService.store(this);
		this.contextService.setUserData("fun", 'N');
		this.contextService.setUserData("numOperacion", this.numOperacion);
		this.contextService.setUserData("identificador", '0');
		this.contextService.setUserData("user_logueado", this.user_logueado);

		this.router.navigate(['/documentoingresonuevo']);
	}

	cargar_formulario_detalle() {
		this.waitShow=true;
		this.contextService.store(this);
		this.contextService.setUserData("pageName","Detalle Carta de crédito");
		this.contextService.setUserData('numOperacion', this.tableSelected[0].wss_num_ope);
		this.contextService.setUserData("WSS_D01_AREA","CRDI0");
		this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);
		this.contextService.setUserData("WSS_D01_TIP","CRD");
		this.contextService.setUserData("WSS_D01_CODNUM", '');
		this.contextService.setUserData("financiamiento_indicador_opcion", 'Detalle');

		this.router.navigate(['/ingresocartacredito']);
	}

	cargar_formulario_preingreso() {

	}




	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.waitShow = false;
		this.ofunc_guardar_documentos();
		this.ofunc_grabar_texto('DOCIM',this.txtTextoLibre);
		this.location.back();
	}
	/**
	 * Callback para el caso de error en llamada a Web Service.
	 */
	private openDialogAlert(msg: string): void
	{
		this.waitShow = false;
	//	this.utilService.alert(this.dialog, msg);
	}
	/**
	 * Filtro de la tabla.
	 */
	private tableFilter(value :string): void
	{
		const val :string = value.toLowerCase();
		const temp = this.tableRowsTemp.filter(d => {
			return !val
				 || this.utilService.hayVal(d.wss_opr_num_out, val)
				 || this.utilService.hayVal(d.wss_sol_num, val)
				 || this.utilService.hayVal(d.wss_cod_cli_out, val)
				 || this.utilService.hayVal(d.wss_nom_cli, val)
				 || this.utilService.hayVal(d.wss_opr_mon, val)
				 || this.utilService.hayVal(d.wss_mto_ori_format, val)
				 || this.utilService.hayVal(d.wss_mto_sdo_format, val)
				 || this.utilService.hayVal(d.wss_nom_suc, val)
				 || this.utilService.hayVal(d.wss_cod_plc, val)
				 || this.utilService.hayVal(d.wss_nom_plc, val)
				 || this.utilService.hayVal(d.wss_cod_est, val)
				 || this.utilService.hayVal(d.wss_fec_cont, val)
				;
			});
		this.tableRows = temp;
		// Volvemos a la primera pagina.
		this.table.offset = 0;
	}
	/**
	 * Click o dobleclick en la grilla.
	 * @param event click, dblclick, etc.
	 */
	onTableActivate(event): void
	{
		if (event.type == 'dblclick')
		{
			this.waitShow = false;
			this.cmdDetalle_click();
		}
	}
	/**
	 * Sort de la grilla. Para salvar el estado.
	 * @param event Datos del Sort (Columna y direccion).
	 */
	onTableSort(event): void
	{
		 this.tableSort['prop'] = event.sorts[0].prop;
		 this.tableSort['dir'] = event.sorts[0].dir;
	}
	/**
	 * Scroll de la grilla. Para salvar el estado.
	 * @param event Contiene la posicion del scroll.
	 */
	onTableScroll(event): void
	{
		 this.tableScroll = event.offsetY;
	}

	/**
	 * Seleccion de fila de la grilla. 
	 * Para manejar enabled/disabled de botones y otros.
	 * @param selected Arreglo de Filas seleccionadas.
	 */	
	onTableSelect({ selected }): void
	{
		 const fila = selected[0];
		// this.tableSelected.splice(0, this.tableSelected.length);
	}
	/**
	 * Controles del formulario.
	 */
	private formDef(): void
	{
		this.form = this.formBuilder.group({
			txtTableFilter: '',
			txtDoc:'',
			cmbDoc:'',
			txtOtro:'',
			chkDocumento:'',
			txtTextoLibre:'',
			txtCondicion:'',
			cmbCondicion:'',

		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtDoc = this.form.controls['txtDoc'];
		this.cmbDoc = this.form.controls['cmbDoc'];
		this.txtOtro = this.form.controls['txtOtro'];
		this.chkDocumento = this.form.controls['chkDocumento'];
		this.txtTextoLibre = this.form.controls['txtTextoLibre'];
		this.txtCondicion = this.form.controls['txtCondicion'];
		this.cmbCondicion = this.form.controls['cmbCondicion'];
	

	}


	validatorsDef () {

	}

	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{

		this.form.controls['txtTableFilter'].valueChanges.subscribe((value) => {
			this.tableFilter(value)
		});

		this.txtDoc.valueChanges.subscribe((value) => {		
			this.utilService.comboTexto_changeSelect(this.cmbDoc,value);
			//this.utilService.toUpper(this.txtDoc);			
		});
		
		this.cmbDoc.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtDoc,value);
		});

		this.txtCondicion.valueChanges.subscribe((value) => {		
			this.utilService.comboTexto_changeSelect(this.cmbCondicion,value);		
		});
		
		this.cmbCondicion.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtCondicion,value);
		});
	}

	btnGo_click(){
		this.ofunc_insertar_doc();
	} 

	btnBack_click(row:any){		
		this.waitShow = false;
		if(this.tableSelected[0]=="" || this.tableSelected[0] == null) {
			this.utilService.alert(this.dialog, 'Debe seleccionar un documento para eliminar');
		} else {
			this.waitShow = false;

			let objName: string = "Documento";
			this.utilService.deleteConfirm(this.dialog
							, objName 
							, (res) => this.deleteResult(res, row) );
		}		
	}

	/**
   * 
   * @param result Respuesta de la confirmacion de eliminacion.
   */
  private deleteResult(result: number, row:any) :void  {
		if (result == this.utilService.YES)
		{
			this.ofunc_eliminar_documento(row);
		}
 	}

	ofunc_textArea_mayuscula_txtArea(myTextArea:any){
		if(myTextArea.value == undefined || myTextArea.value == null || myTextArea.value == '') {
			return;
		} else {
			this.utilService.toUpper(myTextArea);
		}
		
	}

	focusout_txtCondicion(){
		if(this.txtCondicion.value == '9'){
			this.txtOtro.enable();
			//this.txtOtro.setFocus();
		}else 
			this.txtOtro.disable();
	}

	change_txtCondicion(){
		if(this.txtCondicion.value != '9')
			this.txtOtro.disable();
	}

	cmbCondicion_openedChange(){
		if(this.txtCondicion.value == '9'){
			this.txtOtro.enable();
			//txtOtro.setFocus();
		}else 
			this.txtOtro.disable();
	}

	change_chkDocumento(){
		if(this.chkDocumento.value == true)
			this.txtTextoLibre.enable(); 
		else{ 
			this.txtTextoLibre.disable();
			this.txtTextoLibre.patchValue('');
		}
	}


	ofunc_enabled(op:Boolean):void{
		
		if(this.opcion == 'C'){
			this.btnBack = false;
			this.btnBackDisabled = true;
			this.btnGo = true;
			this.btnOtro = true;
			this.txtCondicion.disable();
			this.txtCondicion.disable();
			this.txtDoc.disable();
			this.txtOtro.disable();
			this.cmbCondicion.disable();
			this.cmbDoc.disable();
			this.chkDocumento.disable();
			this.bloqueoGrilla = true;
			//dtDocReq.doubleClickEnabled=false;
		}
	}



	/**
	 * Callback para el caso de error en llamada a Web Service.
	 */
	private processFault(err: any): void
	{
		this.waitShow = false;
		this.utilService.alert(this.dialog, err.error);
	}


		
	
}
