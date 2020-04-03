// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 06/01/2020 13:21:56
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild, ElementRef} from '@angular/core';
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
	   , CmDateValidator	  
	   , CmWsResult
	   , CmFocusEmitterService} from '@bcxang';
// Web Services
import { BCX_RS_200_160_BANK } from './ws/BCX_RS_200_160_BANK';
import { CRD_RS_200_151_GNM_CTR } from './ws/CRD_RS_200_151_GNM_CTR';
import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
import { CRD_RS_200_112_GNM_CTR } from './ws/CRD_RS_200_112_GNM_CTR';
import { BCX_RS_200_160_TAS } from './ws/BCX_RS_200_160_TAS';
import { CRD_RS_200_160_TXT_LCI } from './ws/CRD_RS_200_160_TXT_LCI';
import { BCX_RS_200_160_PAIS } from './ws/BCX_RS_200_160_PAIS';
import { BCX_RS_200_160_CLACOM } from './ws/BCX_RS_200_160_CLACOM';
import { BCX_RS_200_160_VIAT } from './ws/BCX_RS_200_160_VIAT';
import { BCX_RS_200_160_FPAG } from './ws/BCX_RS_200_160_FPAG';
import { BCX_RS_200_160_RUCP } from './ws/BCX_RS_200_160_RUCP';
import { BCX_RS_200_160_FLC } from './ws/BCX_RS_200_160_FLC';
import { BCX_RS_200_160_RIG_DSD } from './ws/BCX_RS_200_160_RIG_DSD';
import { CRD_RS_200_130_FDFL } from './ws/CRD_RS_200_130_FDFL';
import { CRD_RS_200_151_ALI } from './ws/CRD_RS_200_151_ALI';
import { CRD_RS_200_151_BCO_CNFR } from './ws/CRD_RS_200_151_BCO_CNFR';
import { BCX_RS_99_251_BANK } from './ws/BCX_RS_99_251_BANK';
import { CRD_RS_200_151_DLI } from './ws/CRD_RS_200_151_DLI';
import { CRD_RS_550_PZO } from './ws/CRD_RS_550_PZO';
import { CRD_RS_200_151_CRD002 } from './ws/CRD_RS_200_151_CRD002';
import { CRD_RS_200_152_TXT_LCI_INI } from './ws/CRD_RS_200_152_TXT_LCI_INI';
import { CRD_RS_200_152_TXT_LCI } from './ws/CRD_RS_200_152_TXT_LCI';


@Component({
	selector: 'my-form',
	templateUrl: 'datosadicionales.component.html'
})
/**
 * Form: Buscar
 */
export class DatosAdicionalesComponent implements OnInit
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

	txtFormaPagoBenef:any;
	cbbFormaPagoBenef:any;
	cbbFormaPagoBenefArray:any[]=[];

	bcxPorcentajeVista:any;
	bcxPorcentajePlazo:any;

	txtPlazoRigeDesde:any;
	cbbPlazoRigeDesde:any;
	cbbPlazoRigeDesdeArray:any[] = [];
	
	txtFechaSolicitud:any;

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

	chbkInteresCreditoProveedor:any;

	txtTasaProveedor:any;
	cbbTasaProveedor:any;
	cbbTasaProveedorArray:any[]=[];

	bcxValorBase:any;
	bcxCostoFondo:any;
	bcxMonto:any;

	txtDesdeApeANego:any;
	txtDesdeNegoAVcto:any;


	txtTasaFinanciamiento:any;
	cbbTasaFinanciamiento:any;
	cbbTasaFinanciamientoArray:any[]=[]

	bcxValorBaseBco:any;
	bcxCostoFondoBco:any;
	bcxSpreadBco:any;
	txtDiasPlazoBco:any;

	txtReembolso:any;
	varReembolso:any;
	cbbReembolso:any;
	cbbReembolsoArray:any[]=[];
	cbbReembolsoAuxArray:any[]=[];

	txtZonaFranca:any;
	cbbZonaFranca:any;
	cbbZonaFrancaArray:any[]=[];
	cbbZonaFrancaAuxArray:any[]=[];

	chbkEnteradaEfectivo:any;
	chbkDomestica:any;
	chbkTercerosPaises:any;
	chbkRefinanciamiento:any;

	txtBicRecep:any;
	
	txtDireCorre:any;
	txtCiuCorre:any;
	txtPaisCorre:any;

	txtFlc:any;
	cbbFlc:any;
	cbbFlcArray:any[]=[];

	txtNumeroCartaCredito:any;
	txtFechaEmision:any;

	txtUcp:any;
	cbbUcp:any;
	cbbUcpArray:any[]=[];
	txtUcpOtra:any;

	txtDiasValidez:any;
	txtFechaExpiracion:any;
	txtLugarExpiracion:any;

	txtBicBancoOrdenante:any;
	txtDireOrdenante:any;
	txtCiuOrdenante:any;
	txtPaisOrdenante:any;

	txtBicOrde50:any;
	txtOrdeNom50:any;
	txtOrdeDire50:any;
	txtOrCiuPa50:any;

	txtPais:any;
	cbbPais:any;
	cbbPaisArray:any[]=[];
	
	txtCodMonMonto:any;
	txtporcentaje:any;
	txtTolerancia:any;

	txtMontoAdicionalCubierto:any;
	txtUtilizableCon:any;
	txtUtilizableConCualquiera:any;

	txtPor:any;
	txtGirosATenor:any;
	txtBicGirado:any;
	txtGirNom:any;
	txtGirDire:any;
	txtGirCiu:any;
	txtGirPais:any;
	txtDetallePagoMixto:any;
	txtDetallePagoDiferido:any;
	optEmbarqueParcial:any;
	optTransbordo:any;

	txtViaTransporte:any;
	cbbViaTransporte:any;
	cbbViaTransporteArray:any[]=[];

	txtLugarDespacho:any;
	txtPuertoEmbarque:any;
	txtPuertoDescarga:any;
	txtLugarDestino44:any;
	txtDiasPresentacionDoc:any;

	txtFechaEmbarque:any;
	txtPeriodoEmbarque44:any;
	txtMercaderias:any;

	txtClausulaCompra:any;
	cbbClausulaCompra:any;
	cbbClausulaCompraArray:any[]=[];

	txtFacturasANombre:any;

	optGrpDcto:any;
	txtDocOtro:any;
	optInstruccionConfirmacion:any;
	txtCondicionesAdicio47:any;
	txtCondicionesEspecialesPagoBeneficiario:any;
	txtCondicionesEspecialesPagoBancoReceptor:any;

	optGrpGst:any;
	txtExcepto:any;

	txtNumeroPeriodoPresentacion:any;
	chkPeriodoPresentacion:any;
	txtPeriodoPresentacion:any;

	chk740:any;

	txtBicReembolso:any;
	txtReemDire:any;
	txtReemCiu:any;
	txtReemPais:any;

	optURR:any;
	txtNumeroAladi78:any;

	txtBicAvisador:any;
	txtAviDire:any;
	txtAviCiu:any;
	txtAviPais:any;
	
	txtBicParticipante:any;
	txtParticipanteDire:any;
	txtParticipanteCiu:any;
	txtParticipantePais:any;

	txtInfoRemitente72:any;
	txtInstrucciones78:any;

	arrReemArray:any[]=[];

	WSS_D01_SGM:any;
	fechaProceso:any;

	btnBicReembolso:boolean;
	bicCor:any;
	myText:any;

	varInicio:any;
	varInicioGlobal:any;
	financiamiento_indicador_opcion:any;

	varFpag:any;
	varBancoCorr:any;
	varBanReem:any;
	varPais:any;
	varPlantillaGlobal:any;
	varCondicion:any;
	varCodTemplateGlobal:any;
	

	txtUcpVisible:boolean;
	txtBeneBic59:any;
	txtBeneNombre59:any;
	txtBeneDire59:any;
	txtBeneCiu59:any;
	txtMarcasEspe:any;
	consulta:any;

	periodoPresentacionEnabled:boolean;
	
	cleanGrilla:any;
	myTextArea:any;
	arrAutomata:any[]=[];

	@ViewChild('grd', {static: true}) table: any;
	@ViewChild('rightTmpl', {static: true})  rightTmpl: TemplateRef<any>;
	@ViewChild('centerTmpl', {static: true}) centerTmpl: TemplateRef<any>;
	
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
		, private bcxRs200160TxtLci: CRD_RS_200_160_TXT_LCI
		, private bcxRs200160Pais: BCX_RS_200_160_PAIS
		, private bcxRs200160Clacom: BCX_RS_200_160_CLACOM
		, private bcxRs200160Viat: BCX_RS_200_160_VIAT
		, private bcxRs200160Fpag: BCX_RS_200_160_FPAG
		, private bcxRs200160Rucp: BCX_RS_200_160_RUCP
		, private bcxRs200160RigDsd: BCX_RS_200_160_RIG_DSD
		, private bcxRs200160Flc: BCX_RS_200_160_FLC
		, private bcxRs200130Fdfl: CRD_RS_200_130_FDFL
		, private crdRs200151Ali: CRD_RS_200_151_ALI
		, private crdRs200151BcoCnfr: CRD_RS_200_151_BCO_CNFR
		, private bcxRs99251Bank: BCX_RS_99_251_BANK
		, private focusEmitterService: CmFocusEmitterService
		, private crdRs200151Dli: CRD_RS_200_151_DLI
		, private crdRs550Pzo: CRD_RS_550_PZO
		, private crdRs200151Crd002: CRD_RS_200_151_CRD002
		, private crdRs200152TxtLciIni: CRD_RS_200_152_TXT_LCI_INI
		, private crdRs200152TxtLci: CRD_RS_200_152_TXT_LCI

		

		){}

		@ViewChild("txtBicReembolso") txtBicReembolsoNative: ElementRef; 
		@ViewChild("txtBicParticipante") txtBicParticipanteNative: ElementRef; 
		@ViewChild("txtDireCorre") txtDireCorreNative: ElementRef; 
		@ViewChild("txtDireOrdenante") txtDireOrdenanteNative: ElementRef; 
		

	
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();

		this.valueChanges();
		// Definicion de columnas.
		this.tableCols = [
			{ prop:'col1', name:'Porcentaje', width:'140', headerClass:'gridHeader'},
			{ prop:'col2', name:'Días plazo', width:'160', headerClass:'gridHeader'},
		];

		this.txtNombre.disable();
		this.txtNombreBanco.disable();
		this.btnBancoComyGas = true;
		this.btnBicReembolso = true;

		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.txtBcxRut = this.contextService.getUserData("bcxRut");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");
		this.familiaProducto = this.contextService.getUserData("familiaProducto");
		this.fechaProceso = this.contextService.getUserData("fechaProceso");
		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.bicCor = this.contextService.getUserData("bicCor");
		this.varPlantillaGlobal = this.contextService.getUserData("varPlantillaGlobal");
		this.varInicioGlobal = this.contextService.getUserData("varInicioGlobal");
		this.varCodTemplateGlobal = this.contextService.getUserData("varCodTemplateGlobal");		
		this.financiamiento_indicador_opcion = this.contextService.getUserData("financiamiento_indicador_opcion");
		this.txtNumeroCartaCredito.patchValue(this.numOperacion);
		this.txtNumeroCartaCredito.disable();

		this.consulta='C';

		this.varInicio = 0;
		
		//this.cargar_primeros_datos();

		this.txtUcpVisible = false;
	


		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);

		if(!ctxSw) {

			if(this.financiamiento_indicador_opcion == 'Nueva'){
				console.log("this.financiamiento_indicador_opcion: " + this.financiamiento_indicador_opcion);
				this.Cargar_arreglos_();

			} else if (this.financiamiento_indicador_opcion == 'Detalle'){	
			
				this.Cargar_arreglos_();
			} else {
				console.log("this.financiamiento_indicador_opcion: " + this.financiamiento_indicador_opcion);
			}
		}
		// if (!ctxSw)
		// {
		// 	// Combos llenados al inicio.
		// 	this.waitShow = true;
		// 	this.wsFin = [];

		// 	//cbbTasa
		// 	this.wsFin.push(false);
		// 	this.bcxRs200160Tas.call (
		// 		  (value) => this.getComboData0(value)
		// 		, (value) => this.processFault(value)
		// 		, this.user_logueado   //wss_usercode
		// 	);
			
			//this.cargar_primeros_datos();
	//	}
				// Numericos y uppercase.
		
	
		this.validatorsDef();
		

	}


	Cargar_arreglos_() {
		
		this.cbbReembolsoAuxArray = [
			{Cod:"G", Nom: "General"},
			{Cod:"A", Nom: "Aladi"},
		];

		this.cbbZonaFrancaAuxArray = [
			{Cod:"N", Nom:"No"},
			{Cod:"H", Nom:"Hacia"},
			{Cod:"D", Nom:"Desde"}
		];

		this.cbbReembolsoArray = this.cbbReembolsoAuxArray;
		this.cbbZonaFrancaArray = this.cbbZonaFrancaAuxArray;

		this.ofunc_INREM();
		this.ofunc_PARTCOFREQ();
	}


	ofunc_PARTCOFREQ() {

		let wss_opr_num:string = this.numOperacion;
		let wss_usercode:string = this.user_logueado;

		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151BcoCnfr.call(
			  (value) => this.crdRs200151BcoCnfrResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

	}

	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151BcoCnfrResult(wsResult :CmWsResult): void
	{
	
		
		

		// if(document.getElementById("txtBicRecep")){	
		// 	console.log("document.getElementById(txtBicRecep) -> " + document.getElementById("txtBicRecep").id);
		// }

		//console.log('txtBicParticipanteName -> ' + txtBicParticipanteName.formControlName());
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			this.txtBicParticipante.patchValue(wsResult.getResultString('wss_bco_cod_iso').toString().trim());
			this.myText = this.txtBicParticipante;
			console.log('this.myText.value -> ' + this.myText.value)
			this.ofunc_banco_bic();
		}
	}

	ofunc_banco_bic() {

		let myTextAux:string;
		
		if(document.getElementById("txtBicRecep")){	
			myTextAux = this.txtBicRecep.value;				
			//this.txtBicRecep.patchValue("");
			this.txtCiuCorre.patchValue("");
			this.txtDireCorre.patchValue("");
			this.txtPaisCorre.patchValue("");
		 }		     		
		 if(document.getElementById("txtBicBancoOrdenante")){	
			myTextAux = this.txtBicRecep.value;     			
			//this.txtBicBancoOrdenante.patchValue("");
			this.txtDireOrdenante.patchValue("");
			this.txtCiuOrdenante.patchValue("");
			this.txtPaisOrdenante.patchValue("");	     		
		 }
		 if(document.getElementById("txtBicGirado")){	
			myTextAux = this.txtBicGirado.value;    			
			this.txtGirNom.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirPais.patchValue("");
		 }
		 if(document.getElementById("txtBicReembolso")){
			myTextAux = this.txtBicReembolso.value;	     			
			//this.txtReemNom.text="";
			this.txtReemCiu.patchValue("");
			this.txtReemDire.patchValue("");
			this.txtReemPais.patchValue("");
		 }
		 if(document.getElementById("txtBicAvisador")){	   
			myTextAux = this.txtBicAvisador.value;  			
			//this.txtAviNom.text="";
			this.txtAviCiu.patchValue("");
			this.txtAviDire.patchValue("");
			this.txtAviPais.patchValue("");
		 }	
		 
		 if(document.getElementById("txtBicParticipante")){	 
			myTextAux = this.txtBicParticipante.value;     			
			//this.txtParticipanteNom.patchValue("");
			this.txtParticipanteCiu.patchValue("");
			this.txtParticipanteDire.patchValue("");
			this.txtParticipantePais.patchValue("");
		}						


		// console.log("aux -> " + aux);
		if(this.myText!=null){
			if(this.myText.value!=''){
				let wss_bco_swf:string = myTextAux;
				let wss_usercode:string = this.user_logueado;
		
				// Activamos el simbolo de progress.
				this.waitShow = true;
				// Invocamos el WS.
				this.bcxRs99251Bank.call(
					(value) => this.bcxRs99251BankResult(value)
					, (value) => this.processFault(value)
					, wss_bco_swf
					, wss_usercode
				);
			}	
		}
	}

	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99251BankResult(wsResult :CmWsResult): void
	{
	
	
		//console.log('txtBicParticipanteName -> ' + txtBicParticipanteName.formControlName());
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			
     		if(document.getElementById("txtBicRecep")){						
				//this.txtNomCorre.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtCiuCorre.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtDireCorre.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtPaisCorre.patchValue(wsResult.getResultString('wss_paigls'));
				//this.ofunc_carga_bic(txtBicRecep);
     		}		     		
     		if(document.getElementById("txtBicBancoOrdenante")){				
				//this.txtBanOrNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtDireOrdenante.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtCiuOrdenante.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtPaisOrdenante.patchValue(wsResult.getResultString('wss_paigls'));
			   			
     		}
     		if(document.getElementById("txtBicGirado")){	     						 
				//this.txtGirNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtGirCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtGirDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtGirPais.patchValue(wsResult.getResultString('wss_paigls'));
     		}
     		if(document.getElementById("txtBicReembolso")){	   				 
				//this.txtReemNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtReemCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtReemDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtReemPais.patchValue(wsResult.getResultString('wss_paigls'));	
				//ofunc_valida_740();
				//ofunc_carga_bic(txtBicReembolso);
     		}
     		if(document.getElementById("txtBicAvisador")){	     					 
				//this.txtAviNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtAviCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtAviDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtAviPais.patchValue(wsResult.getResultString('wss_paigls'));

     		}  		
     		if(document.getElementById("txtBicParticipante")){				 
				//this.txtParticipanteNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtParticipanteCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtParticipanteDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtParticipantePais.patchValue(wsResult.getResultString('wss_paigls'));
     		}  	
  			//ScreenBlocker.unblockScreen();
		}
		
	}



	ofunc_INREM() {

		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'INREM';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);
	}

	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciResult(wsResult :CmWsResult): void
	{
	
		let txtInstrucciones78_array:any[] = [];
		let txtInstrucciones78Aux :string = "";

		txtInstrucciones78_array = wsResult.getTableRows();

		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtInstrucciones78_array.length; i++){
				txtInstrucciones78Aux = txtInstrucciones78Aux + txtInstrucciones78_array[i].wss_lin_txt+"\n";
			}	
			this.txtInstrucciones78.patchValue(txtInstrucciones78Aux);
		
			this.ofunc_cargar_CONADICIO()
		}
	}



	ofunc_cargar_CONADICIO() {
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'CONAD';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciConadResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	} 
	
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciConadResult(wsResult :CmWsResult): void
	{
	
		let txtCondicionesAdicio47_array:any[] = [];
		let txtCondicionesAdicio47Aux:string = '';

		txtCondicionesAdicio47_array = wsResult.getTableRows();

		

	 	 //wsResult.getTableRows();
		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtCondicionesAdicio47_array.length; i++){
				txtCondicionesAdicio47Aux = txtCondicionesAdicio47Aux + txtCondicionesAdicio47_array[i].wss_lin_txt;
			}	
			this.txtCondicionesAdicio47.patchValue(txtCondicionesAdicio47Aux);
			this.ofunc_cargar_PEEMBARQUE();
		}
	}


	ofunc_cargar_PEEMBARQUE() {
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'PEEMB';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciPeembResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	} 
	
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciPeembResult(wsResult :CmWsResult): void
	{
	
		let txtPeriodoEmbarque44_array:any[] = [];
		let txtPeriodoEmbarque44Aux:string = '';

		txtPeriodoEmbarque44_array = wsResult.getTableRows();

		

	 	 //wsResult.getTableRows();
		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtPeriodoEmbarque44_array.length; i++){
				txtPeriodoEmbarque44Aux = txtPeriodoEmbarque44Aux + txtPeriodoEmbarque44_array[i].wss_lin_txt;
			}	
			this.txtPeriodoEmbarque44.patchValue(txtPeriodoEmbarque44Aux);
			this.ofunc_cargar_SCONB();
		}
	}



	ofunc_cargar_SCONB() {
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'SCONB';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciSconbResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	} 
	
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciSconbResult(wsResult :CmWsResult): void
	{
	
		
		let txtCondicionesEspecialesPagoBeneficiario_array:any[] = [];
		let txtCondicionesEspecialesPagoBeneficiarioAux:string = '';

		txtCondicionesEspecialesPagoBeneficiario_array = wsResult.getTableRows();

		

	 	 //wsResult.getTableRows();
		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtCondicionesEspecialesPagoBeneficiario_array.length; i++){
				txtCondicionesEspecialesPagoBeneficiarioAux = txtCondicionesEspecialesPagoBeneficiarioAux + txtCondicionesEspecialesPagoBeneficiario_array[i].wss_lin_txt;
			}	
			this.txtCondicionesEspecialesPagoBeneficiario.patchValue(txtCondicionesEspecialesPagoBeneficiarioAux);
			this.ofunc_cargar_SCONR();
		}
	}

	ofunc_cargar_SCONR() {
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'SCONR';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciSconrResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	} 
	
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciSconrResult(wsResult :CmWsResult): void
	{
	
		let txtCondicionesEspecialesPagoBancoReceptor_array:any[] = [];
		let txtCondicionesEspecialesPagoBancoReceptorAux:string = '';

		txtCondicionesEspecialesPagoBancoReceptor_array = wsResult.getTableRows();

		

	 	 //wsResult.getTableRows();
		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtCondicionesEspecialesPagoBancoReceptor_array.length; i++){
				txtCondicionesEspecialesPagoBancoReceptorAux = txtCondicionesEspecialesPagoBancoReceptorAux + txtCondicionesEspecialesPagoBancoReceptor_array[i].wss_lin_txt;
			}	
			this.txtCondicionesEspecialesPagoBancoReceptor.patchValue(txtCondicionesEspecialesPagoBancoReceptorAux);
			this.ofunc_cargar_MERCA();
		}
	}

	ofunc_cargar_MERCA() {
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'MERCA';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;


		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.bcxRs200160TxtLciMercaResult(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	} 
	
	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TxtLciMercaResult(wsResult :CmWsResult): void
	{

		this.txtMercaderias
	
		let txtMercaderias_array:any[] = [];
		let txtMercaderiasAux:string = '';

		txtMercaderias_array = wsResult.getTableRows();

		

	 	 //wsResult.getTableRows();
		
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			for(let i=0; i< txtMercaderias_array.length; i++){
				txtMercaderiasAux = txtMercaderiasAux + txtMercaderias_array[i].wss_lin_txt;
			}	
			this.txtCondicionesEspecialesPagoBeneficiario.patchValue(txtMercaderiasAux);

			if(!this.chk740.value == true){


				this.txtBicReembolso.patchValue("");
				//this.txtReemNom.patchValue("");
				this.txtReemCiu.patchValue("");
				this.txtReemDire.patchValue("");
				this.txtReemPais.patchValue("");
				
				this.txtBicReembolso.disable();
				this.btnBicReembolso = false;
				this.optURR.patchValue('');
				this.optURR.disable();
				// rdRurrNo.selected = false;
				// rdRurrSi.selected = false
				// rdRurrNo.enabled = false
				// rdRurrSi.enabled = false
				this.ofunc_inhi_rurr();
				this.ofunc_urr();

				
			} else {


				//this.myText = this.txtBicReembolsoNative.nativeElement.getAttribute('formControlName');
				
				//bFlagCambioEspecial=true;
				
				this.txtBicReembolso.patchValue(this.bicCor);				
				//ofunc_event_focus_banco(Application.application.bicCorr,'Cobrador');
				
				this.txtBicReembolso.enable();
				this.btnBicReembolso = true;
				this.ofunc_inhi_rurr();				
				this.ofunc_urr();	
				
			}
			this.ofunc_cargar_pais();
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
	//	this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr', 6));
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

	ofunc_cargar_pais() {

		this.bcxRs200160Pais.call(
			(value) => this.bcxRs200160PaisResult(value)
		  , (value) => this.processFault(value)
	  );
	}

		/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160PaisResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbPaisArray = wsResult.getTableRows();
			this.ofunc_carg_Clau();
		}
	}

	ofunc_carg_Clau() {

		this.bcxRs200160Clacom.call(
			(value) => this.bcxRs200160ClacomResult(value)
		  , (value) => this.processFault(value)
		  , this.user_logueado
	  );
	}

		/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160ClacomResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbClausulaCompraArray = wsResult.getTableRows();
			this.ofunc_carg_viaT();
		}
	}

	ofunc_carg_viaT() {

		this.bcxRs200160Viat.call(
			(value) => this.bcxRs200160ViatResult(value)
		  , (value) => this.processFault(value)
		  
	  );
	}

		/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160ViatResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbViaTransporteArray = wsResult.getTableRows();
			this.ofunc_carg_tipTas();
		}
	}

	ofunc_carg_tipTas(){
		this.bcxRs200160Tas.call (
			(value) => this.bcxRs200160TasResult(value)
		  , (value) => this.processFault(value)
		  , this.user_logueado   //wss_usercode
	  );
	  
	} 
			/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160TasResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbTasaProveedorArray = wsResult.getTableRows();

			this.cbbTasaFinanciamientoArray = wsResult.getTableRows();
			this.ofunc_carg_fPago();
		}
	}


	ofunc_carg_fPago(){

		this.bcxRs200160Fpag.call (
			(value) => this.bcxRs200160FpagResult(value)
		  , (value) => this.processFault(value)
		 
	  );

	}

				/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160FpagResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbFormaPagoBenefArray = wsResult.getTableRows();
			this.ofunc_carg_plazo();
		}
	}

	ofunc_carg_plazo(){

		this.bcxRs200160RigDsd.call (
			(value) => this.bcxRs200160RigDsdResult(value)
		  , (value) => this.processFault(value)
		);		
	}


	/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160RigDsdResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbPlazoRigeDesdeArray = wsResult.getTableRows();
			this.ofunc_carg_ucp();
		}
	}

	ofunc_carg_ucp(){
		this.bcxRs200160Rucp.call (
			(value) => this.bcxRs200160RucpResult(value)
		  , (value) => this.processFault(value)
		 
	  );
	}

				/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160RucpResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.cbbUcpArray = wsResult.getTableRows();
			this.ofunc_carg_flc();
		}
	}

	ofunc_carg_flc(){

		this.bcxRs200160Flc.call (
			(value) => this.bcxRs200160FlcResult(value)
		  , (value) => this.processFault(value)
		 
	  );

	}

				/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160FlcResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
		//	debugger
			
			let cbbFlcAuxArray:any[]=[];
			cbbFlcAuxArray = wsResult.getTableRows();
			cbbFlcAuxArray = cbbFlcAuxArray.filter(v => {
				return v.wss_cod_flc = v.wss_cod_flc.toString().trim(); 
			});

			this.cbbFlcArray = cbbFlcAuxArray;

			this.txtFechaSolicitud.patchValue(this.fechaProceso);

			if(this.financiamiento_indicador_opcion == 'Nueva') {
				if(this.varInicioGlobal == 0){
					this.ofunc_default();
				} else {
					this.ofunc_carga();	
				}
			} else if(this.financiamiento_indicador_opcion == 'Detalle'){
				this.ofunc_carga();	
			} else {
				this.ofunc_carga();	
			}

			//this.ofunc_carg_tipTas();
		}
	}
	

	ofunc_default():void{

		let wss_D01_CODFORM: string // String
		let wss_opr_cod_cli: string // String
		let wss_opr_num: string // String
		let wss_cod_ptr: string // String
		let wss_usercode: string // String

		
		wss_D01_CODFORM = 'CRDI1';
		wss_opr_cod_cli = this.utilService.toRut(this.txtBcxRut);
		wss_opr_num = this.numOperacion;
		wss_cod_ptr = this.varCodTemplateGlobal;
		wss_usercode = this.user_logueado;


		this.bcxRs200130Fdfl.call (
			(value) => this.bcxRs200130FdflResult(value)
		  , (value) => this.processFault(value)
		  , wss_D01_CODFORM
		  , wss_opr_cod_cli
		  , wss_opr_num
		  , wss_cod_ptr
		  , wss_usercode
		 
	  );
	}

					/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200130FdflResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let cargaDefaultArray:any[]=[];
		let wss_result_msg:any;

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
		}	
		else {
			debugger
			cargaDefaultArray = wsResult.getTableRows();
			
			// this.txtFormaPagoBenef.patchValue(cargaDefaultArray[0].wss_TAB_COD_DFL);
			if(cargaDefaultArray[0].wss_TAB_COD_DFL.toString() == 'BY PAYMENT'){
				this.txtFormaPagoBenef.patchValue('1');
			} else {
			this.txtFormaPagoBenef.patchValue(cargaDefaultArray[0].wss_TAB_COD_DFL.toString().trim()); 
			}

			this.bcxPorcentajeVista.patchValue(this.utilService.editNumber(cargaDefaultArray[1].wss_TAB_COD_DFL,6));		
			this.bcxPorcentajePlazo.patchValue(this.utilService.editNumber(cargaDefaultArray[2].wss_TAB_COD_DFL,6));
			this.txtPlazoRigeDesde.patchValue(cargaDefaultArray[3].wss_TAB_COD_DFL.toString());
			if(cargaDefaultArray[6].wss_TAB_COD_DFL.toString() == "S")
				this.chbkInteresCreditoProveedor.patchValue(false);
			else if(cargaDefaultArray[6].wss_TAB_COD_DFL.toString() == "N") 
				this.chbkInteresCreditoProveedor.patchValue(false);

			this.txtTasaProveedor.patchValue(cargaDefaultArray[7].wss_TAB_COD_DFL.toString());			
			this.bcxValorBase.patchValue(this.utilService.editNumber(cargaDefaultArray[8].wss_TAB_COD_DFL,6));
			this.bcxSpread.patchValue(this.utilService.editNumber(cargaDefaultArray[9].wss_TAB_COD_DFL,6)); 
			this.bcxCostoFondo.patchValue(this.utilService.editNumber(cargaDefaultArray[9].wss_TAB_COD_DFL,6)); 
			this.bcxMonto.patchValue(this.utilService.editNumber(cargaDefaultArray[10].wss_TAB_COD_DFL,6));			
			this.txtDesdeApeANego.patchValue(this.utilService.editDate(cargaDefaultArray[11].wss_TAB_COD_DFL));		
			this.txtDesdeNegoAVcto.patchValue(this.utilService.editDate(cargaDefaultArray[12].wss_TAB_COD_DFL));									
			this.txtTasaFinanciamiento.patchValue(cargaDefaultArray[13].wss_TAB_COD_DFL.toString());
			this.bcxValorBaseBco.patchValue(this.utilService.editNumber(cargaDefaultArray[14].wss_TAB_COD_DFL,6));
			this.bcxCostoFondoBco.patchValue(this.utilService.editNumber(cargaDefaultArray[15].wss_TAB_COD_DFL,6));	
			this.bcxSpreadBco.patchValue(this.utilService.editNumber(cargaDefaultArray[15].wss_TAB_COD_DFL,6));				
			this.txtDiasPlazoBco.patchValue(cargaDefaultArray[16].wss_TAB_COD_DFL.tostring())
			this.txtReembolso.patchValue(cargaDefaultArray[17].wss_TAB_COD_DFL.tostring())						
			this.txtZonaFranca.patchValue(cargaDefaultArray[18].wss_TAB_COD_DFL.tostring())
	
			if(cargaDefaultArray[20].wss_TAB_COD_DFL.tostring() == "S")
				this.chbkDomestica.patchValue(true); 
			else if(cargaDefaultArray[20].wss_TAB_COD_DFL.tostring() == "N") 
				this.chbkDomestica.patchValue(false); 

			if(cargaDefaultArray[21].wss_TAB_COD_DFL.tostring() == "S")
				this.chbkTercerosPaises.patchValue(true); 
			else if(cargaDefaultArray[21].wss_TAB_COD_DFL.tostring()  == "N") 
				this.chbkTercerosPaises.patchValue(false); 

			if(cargaDefaultArray[22].wss_TAB_COD_DFL.tostring() == "S"){
				this.chbkRefinanciamiento.patchValue(true);
				this.chbkRefinanciamiento.enable();
			} else if(cargaDefaultArray[22].wss_TAB_COD_DFL.tostring() == "N") 
				this.chbkRefinanciamiento.patchValue(false);

			this.txtBicRecep.patchValue(cargaDefaultArray[23].wss_TAB_COD_DFL.tostring());			
			//this.txtNomCorre.text=externalXML.file.item[24];
			this.txtDireCorre.patchValue(cargaDefaultArray[25].wss_TAB_COD_DFL.tostring());
			this.txtCiuCorre.patchValue(cargaDefaultArray[26].wss_TAB_COD_DFL.tostring());
			this.txtPaisCorre.patchValue(cargaDefaultArray[27].wss_TAB_COD_DFL.tostring());
			this.txtFlc.patchValue(cargaDefaultArray[28].wss_TAB_COD_DFL.tostring());		 
			this.txtUcp.patchValue(cargaDefaultArray[31].wss_TAB_COD_DFL.tostring());	 
			this.txtDiasValidez.patchValue(cargaDefaultArray[32].wss_TAB_COD_DFL.tostring());

			










			// this.

		}
	}





	ofunc_carga():void{
		
		let wss_opr_num:string = this.numOperacion;
		let wss_usercode:string = this.user_logueado;

		this.crdRs200151Ali.call (
			  (value) => this.crdRs200151AliResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);
	} 

						/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151AliResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let cargaArray:any[]=[];
		let wss_result_msg:any;

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
		}	
		else {
			
			this.txtFormaPagoBenef.patchValue(wsResult.getResultString('wss_for_pag').toString());
			this.varFpag= wsResult.getResultString('wss_for_pag');
			// if(this.txtFormaPagoBenef.value == 0){
			// 	this.txtFormaPagoBenef.patchValue('');
			// }
			this.txtPor.patchValue(this.cbbFormaPagoBenef.value)
			this.bcxPorcentajeVista.patchValue(wsResult.getResultNumberFormat('wss_vis_pct'));
			this.bcxPorcentajePlazo.patchValue(wsResult.getResultNumberFormat('wss_pla_pct'));
			this.txtFechaSolicitud.patchValue(wsResult.getResultDate('wss_fec_sol'));

			if( wsResult.getResultString('wss_icp_ind') == 'S') this.chbkInteresCreditoProveedor = true ;
			this.txtTasaProveedor.patchValue(wsResult.getResultString('wss_icp_tip').toString());
			//this.bcxSpread.patchValue(wsResult.getResultString('wss_icp_spr'));
			this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_icp_bas'),6);
			this.bcxMonto.patchValue(wsResult.getResultNumberFormat('wss_icp_mto'),2);

			this.txtDesdeApeANego.patchValue(wsResult.getResultNumberFormat('wss_tas_ape_neg'),6);
			this.txtDesdeNegoAVcto.patchValue(wsResult.getResultNumberFormat('wss_tas_neg_vcp'),6);
			this.txtPlazoRigeDesde.patchValue(wsResult.getResultString('wss_dsd_pzo_rig'));
			this.txtTasaFinanciamiento.patchValue(wsResult.getResultString('wss_int_bco_tip').toString());
			this.bcxValorBaseBco.patchValue(wsResult.getResultNumberFormat('wss_int_bco_bas'));
			//this.bcxSpreadBco.patchValue(wsResult.getResultNumberFormat('wss_int_bco_spr'));
			this.txtDiasPlazoBco.patchValue(wsResult.getResultString('wss_pla_bco'));
			this.txtReembolso.patchValue(wsResult.getResultString('wss_tip_reem').toString());
			this.varReembolso = wsResult.getResultString('wss_tip_reem').toString();
			this.txtZonaFranca.patchValue(wsResult.getResultString('wss_ind_zfr').toString());

			if(wsResult.getResultString('wss_ind_zfr')=='S') this.chbkEnteradaEfectivo.patchValue(true);
			if(wsResult.getResultString('wss_ind_dom')=='S') this.chbkDomestica.patchValue(true);
			if(wsResult.getResultString('wss_ind_tpais')=='1') this.chbkTercerosPaises.patchValue(true);
			if(wsResult.getResultString('wss_ind_ref')=='S') this.chbkRefinanciamiento.patchValue(true);

			//Banco Receptor	 
			this.txtBicRecep.patchValue(wsResult.getResultString('wss_iso_rec'));
			this.txtDireCorreNative.nativeElement.focus();
			//this.txtBicRecep.focusEmitterService.focusout();

			this.varBancoCorr = wsResult.getResultString('wss_iso_rec');
			//this.txtNomCorre.patchValue(wsResult.getResultString('wss_nom_rec'));
			this.txtDireCorre.patchValue(wsResult.getResultString('wss_dir_rec'));
			this.txtCiuCorre.patchValue(wsResult.getResultString('wss_ciu_rec'));
			this.txtPaisCorre.patchValue(wsResult.getResultString('wss_pai_rec'));
			//Banco Ordenante
			this.txtBicBancoOrdenante.patchValue(wsResult.getResultString('wss_iso_bord'));
			this.txtDireOrdenanteNative.nativeElement.focus(); 
			this.txtDireOrdenante.patchValue(wsResult.getResultString('wss_dir_bord').toString().trim());
			this.txtCiuOrdenante.patchValue(wsResult.getResultString('wss_ciu_bord'));
			this.txtPaisOrdenante.patchValue(wsResult.getResultString('wss_pai_bord'));
			//Banco Girado
			this.txtBicGirado.patchValue(wsResult.getResultString('wss_iso_gdo'));
			//this.txtGirNom.patchValue(wsResult.getResultString('wss_nom_gdo'));
			this.txtGirDire.patchValue(wsResult.getResultString('wss_dir_gdo'));
			this.txtGirCiu.patchValue(wsResult.getResultString('wss_ciu_gdo'));
			this.txtGirPais.patchValue(wsResult.getResultString('wss_pai_gdo'));	
			//DATOS UTILIZABLE
			this.txtUtilizableCon.patchValue(wsResult.getResultString('wss_iso_nom'));
			this.txtUtilizableConCualquiera.patchValue(wsResult.getResultString('wss_gls_any'));
			//Banco Reembolsador
			this.txtBicReembolso.patchValue(wsResult.getResultString('wss_iso_reem'));
			this.varBanReem = this.txtBicReembolso.value;
			//this.txtReemNom.patchValue(wsResult.getResultString(wss_nom_reem;
			this.txtReemDire.patchValue(wsResult.getResultString('wss_dir_reem'));
			this.txtReemCiu.patchValue(wsResult.getResultString('wss_ciu_reem'));
			this.txtReemPais.patchValue(wsResult.getResultString('wss_pai_reem'));
			//Banco Avisador
			this.txtBicAvisador.patchValue(wsResult.getResultString('wss_iso_avi'));	    	
			//this.txtAviNom.text=externalXML.itemout[0].wss_nom_avi;
			this.txtAviDire.patchValue(wsResult.getResultString('wss_dir_avi'));
			this.txtAviCiu.patchValue(wsResult.getResultString('wss_ciu_avi'));
			this.txtAviPais.patchValue(wsResult.getResultString('wss_pai_avi'));


			//ALADI	
			this.txtNumeroAladi78.patchValue(wsResult.getResultString('wss_num_aladi'));	    

			this.bcxCostoFondo.patchValue(wsResult.getResultNumberFormat('wss_tas_cp_cof',6));
			this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_cp_spr',6));		    
			
			this.bcxCostoFondoBco.patchValue(wsResult.getResultNumberFormat('wss_tas_fb_cof',6));
			this.bcxSpreadBco.patchValue(wsResult.getResultNumberFormat('wss_tas_fb_spr',6));			    		    	
			
			//var myArray:Array=new Array;			
			//myArray[0]=Application.application.numOpe;
			this.ofunc_carga_DLI(this.numOperacion);

		}
	}


	ofunc_carga_DLI(wss_opr_num:string):void{
		
	
		this.crdRs200151Dli.call (
			  (value) => this.crdRs200151DliResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, this.user_logueado
			
		);
	} 

							/*
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151DliResult(wsResult :CmWsResult): void
	{
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			
			if(wsResult.getResultString('wss_ind_740') == 'S'){
				this.chk740 = true;
			}
			this.txtFlc.patchValue(wsResult.getResultString('wss_for_ccr').toString().trim());
			this.txtUcp.patchValue(wsResult.getResultString('wss_reg_ucp').toString().trim());
			this.txtUcpOtra.patchValue(wsResult.getResultString('wss_gls_ucp'));
			if(wsResult.getResultString('wss_reg_ucp').toString() =='OTHR')this.txtUcpVisible=true;
			if(this.txtUcp.value == '0')this.txtUcp.patchValue('');
			this.txtDiasValidez.patchValue(wsResult.getResultString('wss_dia_val_ccr'));
			

			var fechaExp:string=wsResult.getResultDate('wss_fec_vto').toString();
	    	this.txtFechaExpiracion.patchValue(fechaExp);
	    	if(this.txtDiasValidez.value!='' && fechaExp=='' || fechaExp=='01/01/1753')
				this.ofunc_calc_fecha(2);
			else 
				this.txtFechaExpiracion.patchValue(fechaExp);
			this.txtLugarExpiracion.patchValue(wsResult.getResultString('wss_lug_vto'));
			//DATOS BENEFICIARIO
			this.txtBeneBic59.patchValue(wsResult.getResultString('wss_nom_ben1'));
	    	this.txtBeneNombre59.patchValue(wsResult.getResultString('wss_nom_ben2'));
	    	this.txtBeneDire59.patchValue(wsResult.getResultString('wss_dir_ben'));
	    	this.txtBeneCiu59.patchValue(wsResult.getResultString('wss_ciu_ben')); 
	    	this.txtPais.patchValue(wsResult.getResultString('wss_pai_ben').toString().trim());
			this.varPais=wsResult.getResultString('wss_pai_ben').toString().trim();
			//DATOS EXTRA	    
			this.txtCodMonMonto.patchValue(wsResult.getResultString('wss_mon_mto'));
		//	this.txtporcentaje.text=""+Math.floor(int(externalXML.itemout[0].wss_tol_pct_pos));
		//	this.txtTolerancia.text=""+Math.floor(int(externalXML.itemout[0].wss_tol_pct_neg));
			this.txtporcentaje.patchValue(wsResult.getResultNumberFormat('wss_tol_pct_pos'));
			this.txtTolerancia.patchValue(wsResult.getResultNumberFormat('wss_tol_pct_neg'));		
			//txtMontoMaximoCredito.text=externalXML.itemout[0].wss_ind_mto_max;
			this.txtMontoAdicionalCubierto.patchValue(wsResult.getResultString('wss_mto_adi1'));
			this.txtGirosATenor.patchValue(wsResult.getResultString('wss_gir_a'));
			this.txtDetallePagoMixto.patchValue(wsResult.getResultString('wss_pag_mix'));

			if(wsResult.getResultString('wss_emb_par').toString()=='S'){	    	    	
	    		this.optEmbarqueParcial.patchValue('S');
	    	}
	    	else if (wsResult.getResultString('wss_emb_par').toString()=='N'){
	    		this.optEmbarqueParcial.patchValue('N');
	    	}
	    	else{
	    		this.optEmbarqueParcial.patchValue('C');
	    	}
			
			if(wsResult.getResultString('wss_ind_trnsb').toString()=='S'){	    	    	
	    		this.optTransbordo.patchValue('S');
	    	}
	    	if(wsResult.getResultString('wss_ind_trnsb').toString()=='N'){	
	    		this.optTransbordo.patchValue('N');
	    	}
	    	else{
	    		this.optTransbordo.patchValue('C');
			}
			
			this.txtViaTransporte.patchValue(wsResult.getResultString('wss_via_tpt'));
	    	if(this.txtViaTransporte.value == '0')this.txtViaTransporte.patchValue('');else this.txtViaTransporte.patchValue(wsResult.getResultString('wss_via_tpt'));
	    	this.txtLugarDespacho.patchValue(wsResult.getResultString('wss_lug_desp'));
	    	this.txtPuertoEmbarque.patchValue(wsResult.getResultString('wss_pto_emb'));
	    	this.txtPuertoDescarga.patchValue(wsResult.getResultString('wss_pto_desc'));
	    	this.txtLugarDestino44.patchValue(wsResult.getResultString('wss_lug_dest'));
	    	this.txtDiasPresentacionDoc.patchValue(wsResult.getResultString('.wss_pla_pre_doc'));
			this.txtNumeroPeriodoPresentacion.patchValue(wsResult.getResultString('wss_pla_pre_doc'));
			
			if(wsResult.getResultDate('wss_ult_fec_emb') != '1753-01-01')
			this.txtFechaEmbarque.patchValue(wsResult.getResultDate('wss_ult_fec_emb').toString());
			
			this.txtClausulaCompra.patchValue(wsResult.getResultString('wss_cls_comp').toString());
		
			this.txtFacturasANombre.patchValue(wsResult.getResultString('wss_fac_nom'));
			if(wsResult.getResultString('wss_doc_emb_avi').toString()=='S')this.optGrpDcto.patchValue('S');
			else if(wsResult.getResultString('wss_doc_emb_avi').toString()=='O'){
				this.optGrpDcto.patchValue('O');
				this.txtDocOtro.enable();
			}	

			this.txtDocOtro.patchValue(wsResult.getResultString('wss_otr_avi_emb'));    		
	    	this.txtMarcasEspe.patchValue(wsResult.getResultString('wss_mar_esp_doc'));    	
	    	if(wsResult.getResultString('wss_ind_gto').toString()=='B')this.optGrpGst.patchValue('B');
	    	else if(wsResult.getResultString('wss_ind_gto').toString()=='S')this.optGrpGst.patchValue('S');	
	    	else if(wsResult.getResultString('wss_ind_gto').toString()=='N')this.optGrpGst.patchValue('N');
	    	this.txtExcepto.patchValue(wsResult.getResultString('wss_exc_gto'));
			this.txtPeriodoPresentacion.patchValue(wsResult.getResultString('wss_per_pres'));

			if(this.consulta=='C'){
	    		this.chkPeriodoPresentacion.patchValue(false);
	    		this.txtPeriodoPresentacion.patchValue(false);
	    		
	    		if((this.txtPeriodoPresentacion.value.trim()).length > 0){
	    			this.chkPeriodoPresentacion.patchValue(true);
	    		}
	    		else{
	    			this.chkPeriodoPresentacion.patchValue(false);
	    		}	    		
	    	}else if((this.txtPeriodoPresentacion.value.trim()).length > 0){
	    		this.chkPeriodoPresentacion.patchValue(true);
	    		this.txtPeriodoPresentacion.enable();
	    	}
	    	else{
	    		this.chkPeriodoPresentacion.patchValue(false);
	    		this.txtPeriodoPresentacion.disable();
			}
			
			if(wsResult.getResultString('wss_ins_conf').toString()=='S'){this.optInstruccionConfirmacion.patchValue('S');this.varCondicion='Confirm';}
	    	else if(wsResult.getResultString('wss_ins_conf').toString()=='N'){this.optInstruccionConfirmacion.patchValue('N');this.varCondicion='Without';}	
	    	else if(wsResult.getResultString('wss_ins_conf').toString()=='M'){this.optInstruccionConfirmacion.patchValue('M');this.varCondicion='May Add';}	    	
	    	if(wsResult.getResultString('wss_reg_urr').toString()=='N')this.optURR.patchValue('N');
	    	else if(wsResult.getResultString('wss_reg_urr').toString()=='S')this.optURR.patchValue('S');	
	    	this.txtInfoRemitente72.patchValue(wsResult.getResultString('wss_inf_rem_rec'));	    	
	    		   
	    	if(this.txtUtilizableCon.value=="" && this.txtUtilizableConCualquiera.value=="" && this.optInstruccionConfirmacion.value=='N'){
	    		
	    		this.txtUtilizableConCualquiera.patchValue("ANY BANK");
	    		
			}	
			


		}
	}



	//CALCULA FECHA
	 ofunc_calc_fecha(indicador:any):void{
		
	
		let wss_ind_cal: string = indicador; 
		let wss_fec_oto: string = this.utilService.toDate(this.txtFechaEmision.value);
		let wss_dia_pzo: string = this.txtDiasValidez.value;
		let wss_fec_vto: string = this.utilService.toDate(this.txtFechaExpiracion.value); 
		let wss_usercode: string  = this.user_logueado;


		this.crdRs550Pzo.call (
			(value) => this.crdRs550PzoResult(value)
		  , (value) => this.processFault(value)
		  , wss_ind_cal
		  , wss_fec_oto
		  , wss_dia_pzo
		  , wss_fec_vto
		  , wss_usercode
		  
	  );
	}

	/*
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs550PzoResult(wsResult :CmWsResult): void
	{
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:any;

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
		}	
		else {
			this.txtDiasValidez.patchValue('out_dia_pzo').toString();
			this.txtFechaExpiracion.patchValue('out_fec_vto').toString(); 	
		}
	}


	ofunc_cargar_porcentaje():void{
		
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
			bcxTasaFinal:'',
			txtFormaPagoBenef:'',
			cbbFormaPagoBenef:'',
			bcxPorcentajeVista:'',
			bcxPorcentajePlazo:'',
			txtPlazoRigeDesde:'',
			cbbPlazoRigeDesde:'',
			txtFechaSolicitud:['', CmDateValidator()],
			chbkInteresCreditoProveedor:'',
			txtTasaProveedor:'',
			cbbTasaProveedor:'',
			bcxValorBase:'',
			bcxCostoFondo:'',
			bcxSpread:'',
			bcxMonto:'',
			txtDesdeApeANego:'',
			txtDesdeNegoAVcto:'',			
			txtTasaFinanciamiento:'',
			cbbTasaFinanciamiento:'',
			bcxValorBaseBco:'',
			bcxCostoFondoBco:'',
			bcxSpreadBco:'',
			txtDiasPlazoBco:'',
			txtReembolso:'',
			cbbReembolso:'',
			txtZonaFranca:'',
			cbbZonaFranca:'',
			chbkEnteradaEfectivo:'',
			chbkDomestica:'',
			chbkTercerosPaises:'',
			chbkRefinanciamiento:'',
			txtBicRecep:'',
			txtDireCorre:'',
			txtCiuCorre:'',
			txtPaisCorre:'',
			txtFlc:'',
			cbbFlc:'',
			txtNumeroCartaCredito:'',
			txtFechaEmision:'',
			txtUcp:'',
			cbbUcp:'', 
			txtDiasValidez:'',
			txtFechaExpiracion:['', CmDateValidator()],
			txtLugarExpiracion:'',
			txtBicBancoOrdenante:'',
			txtDireOrdenante:'',
			txtCiuOrdenante:'',
			txtPaisOrdenante:'',
			txtBicOrde50:'',
			txtOrdeNom50:'',
			txtOrdeDire50:'',
			txtOrCiuPa50:'',
			txtPais:'',
			cbbPais:'',
			txtCodMonMonto:'',
			txtporcentaje:'',
			txtTolerancia:'',
			txtMontoAdicionalCubierto:'',
			txtUtilizableCon:'',
			txtUtilizableConCualquiera:'',
			txtPor:'',
			txtGirosATenor:'',
			txtBicGirado:'',
			txtGirNom:'',
			txtGirDire:'',
			txtGirCiu:'',
			txtGirPais:'',
			txtDetallePagoMixto:'',
			txtDetallePagoDiferido:'',
			optEmbarqueParcial:'S',
			optTransbordo:'S',
			txtViaTransporte:'',
			cbbViaTransporte:'',
			txtLugarDespacho:'',
			txtPuertoEmbarque:'',
			txtPuertoDescarga:'',
			txtLugarDestino44:'',
			txtDiasPresentacionDoc:'',
			txtFechaEmbarque:'',
			txtPeriodoEmbarque44:'',
			txtMercaderias:'',
			txtClausulaCompra:'',
			cbbClausulaCompra:'',
			txtFacturasANombre:'',
			optGrpDcto:'',
			txtDocOtro:'',
			optInstruccionConfirmacion:'',
			txtCondicionesAdicio47:'',
			txtCondicionesEspecialesPagoBeneficiario:'',
			txtCondicionesEspecialesPagoBancoReceptor:'',
			optGrpGst:'',
			txtExcepto:'',
			txtNumeroPeriodoPresentacion:'',
			chkPeriodoPresentacion:'',
			txtPeriodoPresentacion:'',
			chk740:'',
			txtBicReembolso:'',
			txtReemDire:'',
			txtReemCiu:'',
			txtReemPais:'',
			optURR:'',
			txtNumeroAladi78:'',
			txtInstrucciones78:'',
			txtBicAvisador:'',
			txtAviDire:'',
			txtAviCiu:'',
			txtAviPais:'',
			txtBicParticipante:'',
			txtParticipanteDire:'',
			txtParticipanteCiu:'',
			txtParticipantePais:'',
			txtInfoRemitente72:'',
			myText:'',
			txtUcpOtra:'',
			txtBeneBic59:'',
			txtBeneNombre59:'',
			txtBeneDire59:'',
			txtBeneCiu59:'',
			txtMarcasEspe:'',
			myTextArea:''

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
		this.bcxTasaFinal = this.form.controls['bcxTasaFinal'];
		this.txtFormaPagoBenef = this.form.controls['txtFormaPagoBenef'];
		this.cbbFormaPagoBenef = this.form.controls['cbbFormaPagoBenef'];
		this.bcxPorcentajeVista = this.form.controls['bcxPorcentajeVista'];
		this.bcxPorcentajePlazo = this.form.controls['bcxPorcentajePlazo'];
		this.txtPlazoRigeDesde = this.form.controls['txtPlazoRigeDesde'];
		this.cbbPlazoRigeDesde = this.form.controls['cbbPlazoRigeDesde'];
		this.txtFechaSolicitud = this.form.controls['txtFechaSolicitud'];
		this.chbkInteresCreditoProveedor = this.form.controls['chbkInteresCreditoProveedor'];
		this.txtTasaProveedor = this.form.controls['txtTasaProveedor'];
		this.cbbTasaProveedor = this.form.controls['cbbTasaProveedor'];
		this.bcxValorBase = this.form.controls['bcxValorBase'];
		this.bcxCostoFondo = this.form.controls['bcxCostoFondo'];
		this.bcxSpread = this.form.controls['bcxSpread'];
		this.bcxMonto = this.form.controls['bcxSpread'];
		this.txtDesdeApeANego = this.form.controls['txtDesdeApeANego'];
		this.txtDesdeNegoAVcto =  this.form.controls['txtDesdeNegoAVcto'];
		this.txtTasaFinanciamiento =  this.form.controls['txtTasaFinanciamiento'];
		this.cbbTasaFinanciamiento =  this.form.controls['cbbTasaFinanciamiento'];
		this.bcxValorBaseBco =  this.form.controls['bcxValorBaseBco'];
		this.bcxCostoFondoBco =  this.form.controls['bcxCostoFondoBco'];
		this.bcxSpreadBco =  this.form.controls['bcxSpreadBco'];
		this.txtDiasPlazoBco =  this.form.controls['txtDiasPlazoBco'];
		this.txtReembolso = this.form.controls['txtReembolso'];
		this.cbbReembolso = this.form.controls['cbbReembolso'];
		this.txtZonaFranca = this.form.controls['txtZonaFranca'];
		this.cbbZonaFranca = this.form.controls['cbbZonaFranca'];
		this.chbkEnteradaEfectivo = this.form.controls['chbkEnteradaEfectivo'];
		this.chbkDomestica = this.form.controls['chbkDomestica'];
		this.chbkTercerosPaises = this.form.controls['chbkTercerosPaises'];
		this.chbkRefinanciamiento = this.form.controls['chbkRefinanciamiento'];
		this.txtBicRecep = this.form.controls['txtBicRecep'];
		this.txtDireCorre = this.form.controls['txtDireCorre'];
		this.txtCiuCorre = this.form.controls['txtCiuCorre'];
		this.txtPaisCorre = this.form.controls['txtPaisCorre'];
		this.txtFlc = this.form.controls['txtFlc'];
		this.cbbFlc = this.form.controls['cbbFlc'];
		this.txtNumeroCartaCredito = this.form.controls['txtNumeroCartaCredito'];
		this.txtFechaEmision = this.form.controls['txtFechaEmision'];
		this.txtUcp = this.form.controls['txtUcp'];
		this.cbbUcp = this.form.controls['cbbUcp'];
		this.txtDiasValidez = this.form.controls['txtDiasValidez'];
		this.txtFechaExpiracion = this.form.controls['txtFechaExpiracion'];
		this.txtLugarExpiracion = this.form.controls['txtLugarExpiracion'];
		this.txtBicBancoOrdenante = this.form.controls['txtBicBancoOrdenante'];
		this.txtDireOrdenante = this.form.controls['txtDireOrdenante'];
		this.txtCiuOrdenante = this.form.controls['txtCiuOrdenante'];
		this.txtPaisOrdenante = this.form.controls['txtPaisOrdenante'];
		this.txtBicOrde50 = this.form.controls['txtBicOrde50'];
		this.txtOrdeNom50 = this.form.controls['txtOrdeNom50'];
		this.txtOrdeDire50 = this.form.controls['txtOrdeDire50'];
		this.txtOrCiuPa50 = this.form.controls['txtOrCiuPa50'];
		this.txtPais = this.form.controls['txtPais'];
		this.cbbPais = this.form.controls['cbbPais'];
		this.txtCodMonMonto = this.form.controls['txtCodMonMonto'];
		this.txtporcentaje = this.form.controls['txtporcentaje'];
		this.txtTolerancia = this.form.controls['txtTolerancia'];
		this.txtMontoAdicionalCubierto = this.form.controls['txtMontoAdicionalCubierto'];
		this.txtUtilizableCon = this.form.controls['txtUtilizableCon'];
		this.txtUtilizableConCualquiera = this.form.controls['txtUtilizableConCualquiera'];
		this.txtPor = this.form.controls['txtPor'];
		this.txtGirosATenor = this.form.controls['txtGirosATenor'];
		this.txtBicGirado = this.form.controls['txtBicGirado'];
		this.txtGirNom = this.form.controls['txtGirNom'];
		this.txtGirDire = this.form.controls['txtGirDire'];
		this.txtGirCiu = this.form.controls['txtGirCiu'];
		this.txtGirPais = this.form.controls['txtGirPais'];
		this.txtDetallePagoMixto = this.form.controls['txtDetallePagoMixto'];
		this.txtDetallePagoDiferido = this.form.controls['txtDetallePagoDiferido'];
		this.optEmbarqueParcial = this.form.controls['optEmbarqueParcial'];
		this.optTransbordo = this.form.controls['optTransbordo'];
		this.txtViaTransporte = this.form.controls['txtViaTransporte'];
		this.cbbViaTransporte = this.form.controls['cbbViaTransporte'];
		this.txtLugarDespacho = this.form.controls['txtLugarDespacho'];
		this.txtPuertoEmbarque = this.form.controls['txtPuertoEmbarque'];
		this.txtPuertoDescarga = this.form.controls['txtPuertoDescarga'];
		this.txtDiasPresentacionDoc = this.form.controls['txtDiasPresentacionDoc'];
		this.txtFechaEmbarque = this.form.controls['txtFechaEmbarque'];
		this.txtPeriodoEmbarque44 = this.form.controls['txtPeriodoEmbarque44'];
		this.txtMercaderias = this.form.controls['txtMercaderias'];
		this.txtClausulaCompra = this.form.controls['txtClausulaCompra'];
		this.cbbClausulaCompra = this.form.controls['cbbClausulaCompra'];
		this.txtFacturasANombre = this.form.controls['txtFacturasANombre'];
		this.optGrpDcto = this.form.controls['optGrpDcto'];
		this.txtDocOtro = this.form.controls['txtDocOtro'];
		this.optInstruccionConfirmacion = this.form.controls['optInstruccionConfirmacion'];
		this.txtCondicionesAdicio47 = this.form.controls['txtCondicionesAdicio47'];
		this.txtCondicionesEspecialesPagoBeneficiario = this.form.controls['txtCondicionesEspecialesPagoBeneficiario'];
		this.txtCondicionesEspecialesPagoBancoReceptor = this.form.controls['txtCondicionesEspecialesPagoBancoReceptor'];
		this.optGrpGst = this.form.controls['optGrpGst'];
		this.txtExcepto = this.form.controls['txtExcepto'];
		this.txtNumeroPeriodoPresentacion = this.form.controls['txtNumeroPeriodoPresentacion'];
		this.chkPeriodoPresentacion = this.form.controls['chkPeriodoPresentacion'];
		this.txtPeriodoPresentacion = this.form.controls['txtPeriodoPresentacion'];
		this.chk740 = this.form.controls['chk740'];
		this.txtBicReembolso = this.form.controls['txtBicReembolso'];
		this.txtReemDire = this.form.controls['txtReemDire'];
		this.txtReemCiu = this.form.controls['txtReemCiu'];
		this.txtReemPais = this.form.controls['txtReemPais'];
		this.optURR = this.form.controls['optURR'];
		this.txtNumeroAladi78 = this.form.controls['txtNumeroAladi78'];
		this.txtBicAvisador = this.form.controls['txtBicAvisador'];
		this.txtAviDire = this.form.controls['txtAviDire'];
		this.txtAviCiu = this.form.controls['txtAviCiu'];
		this.txtAviPais = this.form.controls['txtAviPais'];		
		this.txtBicParticipante = this.form.controls['txtBicParticipante'];
		this.txtParticipanteDire = this.form.controls['txtParticipanteDire'];
		this.txtParticipanteCiu = this.form.controls['txtParticipanteCiu'];
		this.txtParticipantePais = this.form.controls['txtParticipantePais'];
		this.txtInfoRemitente72 = this.form.controls['txtInfoRemitente72'];
		this.txtInstrucciones78 = this.form.controls['txtInstrucciones78'];
		this.myText = this.form.controls['myText'];
		this.txtUcpOtra = this.form.controls['txtUcpOtra'];
		this.txtBeneBic59 = this.form.controls['txtBeneBic59'];
		this.txtBeneNombre59 = this.form.controls['txtBeneNombre59'];
		this.txtBeneDire59 = this.form.controls['txtBeneDire59'];
		this.txtBeneCiu59 = this.form.controls['txtBeneCiu59'];
		this.txtMarcasEspe = this.form.controls['txtMarcasEspe'];
		this.txtLugarDestino44 = this.form.controls['txtLugarDestino44'];
		this.myTextArea = this.form.controls['myTextArea'];

	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtTasa.setValidators(CmTextoComboValidator(this.cbbTasaArray, 'wss_tip_tas'));

		this.txtReembolso.setValidators(CmTextoComboValidator(this.cbbReembolsoArray, 'Cod'));
		this.txtZonaFranca.setValidators(CmTextoComboValidator(this.cbbZonaFrancaArray, 'Cod'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtCodigoBancoAcreedor.valueChanges.subscribe((value) => {
			this.utilService.toUpper(this.txtCodigoBancoAcreedor);
		});
		this.txtReembolso.valueChanges.subscribe((value) => {	
			this.utilService.textoCombo_change(this.cbbReembolso, value);	
			this.utilService.toUpper(this.txtReembolso);		
		});
		this.cbbReembolso.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtReembolso, value);
		});
		this.txtZonaFranca.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbZonaFranca, value);
			this.utilService.toUpper(this.txtZonaFranca);
		});
		this.cbbZonaFranca.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtZonaFranca, value);
		});
		this.txtPais.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbPais, value);	
		});
		this.cbbPais.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtPais, value);
		});

		this.txtFormaPagoBenef.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbFormaPagoBenef, value);	
		});
		this.cbbFormaPagoBenef.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtFormaPagoBenef, value);
		});
		this.txtViaTransporte.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbViaTransporte, value);	
		});
		this.cbbViaTransporte.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtViaTransporte, value);
		});
		this.txtClausulaCompra.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbClausulaCompra, value);	
		});
		this.cbbClausulaCompra.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtClausulaCompra, value);
		});
		this.txtTasa.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbTasa, value);	
		});
		this.cbbTasa.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtTasa, value);
		});
		this.txtTasaProveedor.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbTasaProveedor, value);	
		});
		this.cbbTasaProveedor.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtTasaProveedor, value);
		});	
		this.txtTasaFinanciamiento.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbTasaFinanciamiento, value);	
		});
		this.cbbTasaFinanciamiento.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtTasaFinanciamiento, value);
		});
		this.txtPlazoRigeDesde.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbPlazoRigeDesde, value);	
		});
		this.cbbPlazoRigeDesde.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtPlazoRigeDesde, value);
		});

		this.txtFlc.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbFlc, value);	
		});
		this.cbbFlc.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtFlc, value);
		});

		this.txtUcp.valueChanges.subscribe((value) =>{
			this.utilService.textoCombo_change(this.cbbUcp, value);	
		});
		this.cbbUcp.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtUcp, value);
		});

		this.txtFlc.valueChanges.subscribe((value) =>{			
			this.utilService.textoCombo_change(this.cbbFlc, value);
			this.utilService.toUpper(this.txtFlc);	
		});
		this.cbbFlc.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtFlc, value);
		});



	}


	focusout_rut(){
		this.bcxRs99260ClnCall();
	}

	focusout_banco() {
		this.bcxRs200160BankCall();
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
			//this.cmdAceptar_click();
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
	}

	cmdDocumentosRequeridos_click():void {

	}

	ofunc_urr(){
		if(this.optURR.value == 'S'){
			this.txtUcp.patchValue('UCP');
		}
		else if(this.optURR.value == 'N'){
	
			this.txtUcp.patchValue('UCPURR');
		}	
	}

	ofunc_inhi_rurr(){
		if((this.txtBicReembolso.value == 'BCECCLRMXXX') || (this.txtBicReembolso.value == this.txtBicRecep.value)
		|| (this.txtBicReembolso.value == '')){
			this.optURR.disable();
			this.optURR.patchValue('');
			
			// rdRurrNo.enabled=false;
			// rdRurrSi.enabled=false;
			// rdRurrNo.selected=false;
			// rdRurrSi.selected=false;
		}
		else{
			this.optURR.enable();
			// rdRurrNo.enabled=true;
			// rdRurrSi.enabled=true;
			if(!(this.optURR.value == 'S')==true){
				this.optURR.patchValue('N');
			}
		}	
		
	}

	
	ofunc_txtFormaPagoBenef_focusout(event){
		
		if(event.type == "focusout"){
			this.txtPor.patchValue(this.cbbFormaPagoBenef.value);
			this.ofunc_forma_de_pago();
		}
		this.ofun_busca_automata_evento(event);
		
	}


	cbbFormaPagoBenef_openedChange(event){
		this.cleanGrilla = 1;
		this.txtPor.patchValue(this.cbbFormaPagoBenef.value);
		this.ofunc_forma_de_pago();
		this.ofun_busca_automata();
		//this.ofun_busca_automata_evento(event);
	}


	//EJECUCION CUANDO CAMBIA FORMA DE PAGO
	ofunc_precarga_pago():void{			
		if((this.txtPais.value=="") || (this.txtPais.value == '0'))				
			return;
		if((this.varFpag != this.txtFormaPagoBenef.value) || (this.varCondicion != this.optInstruccionConfirmacion.value) 
		|| (this.varPais != this.txtPais.value) || (this.varBancoCorr != this.txtBicRecep.value) || (this.varBanReem != this.txtBicReembolso.value)
		|| (this.txtReembolso.value != this.varReembolso)){							
			let myArray:any[]=[];
			let indi:String="";
			
			if(this.optInstruccionConfirmacion.value == 'M')
				indi='M';
			if(this.optInstruccionConfirmacion.value == 'S')
				indi='S';
			if(this.optInstruccionConfirmacion.value == 'N')
				indi='N';
				
			myArray[0]=this.numOperacion;
			if(this.cbbFormaPagoBenef.value != '')
				myArray[1]=this.txtFormaPagoBenef.value;
			else
				myArray[1]='0';
			myArray[2]=indi;
			myArray[3]=this.txtPais.value;
			myArray[4]=this.txtReembolso.value;
			myArray[5]=this.txtBicRecep.value;
			myArray[6]=this.txtBicReembolso.value;
			if(this.varPlantillaGlobal) {	
				if(this.varInicio == 0){	
	
					this.crdRs200152TxtLciIni.call(
						(value) => this.crdRs200152TxtLciIniResult(value)
					  , (value) => this.processFault(value)
					  , myArray[0]
					  , myArray[1]
					  , myArray[2]
					  , myArray[3]
					  , myArray[4]
					  , myArray[5]
					  , myArray[6]
					  , this.user_logueado
				  );
				}
				else{
					this.crdRs200152TxtLci.call(
						(value) => this.crdRs200152TxtLciResult(value)
					  , (value) => this.processFault(value)
					  , myArray[0]
					  , myArray[1]
					  , myArray[2]
					  , myArray[3]
					  , myArray[4]
					  , myArray[5]
					  , myArray[6]
					  , this.user_logueado
				  );
					
				}
			}else{
				this.crdRs200152TxtLci.call(
					(value) => this.crdRs200152TxtLciResult(value)
				  , (value) => this.processFault(value)
				  , myArray[0]
				  , myArray[1]
				  , myArray[2]
				  , myArray[3]
				  , myArray[4]
				  , myArray[5]
				  , myArray[6]
				  , this.user_logueado
			  );
			}
		}
	}

	/**
	 * Callback invocado por this.crdRs200152TxtLciIni.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152TxtLciIniResult(wsResult :CmWsResult): void
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			// var myXML:XML;
			// wsCarCreServices.wbService.CRD_WS_200_152_TXT_LCI_INI.removeEventListener(ResultEvent.RESULT, ofunc_result_prec_ini);
			// myXML=XML(event.result.toString());
			
			this.varInicioGlobal = 1;
			
			if(this.optInstruccionConfirmacion.value == 'M')
				this.varCondicion='May Add';
			if(this.optInstruccionConfirmacion.value == 'S')
				this.varCondicion='Confirm';
			if(this.optInstruccionConfirmacion.value == 'N')
				this.varCondicion='Without';
			if(this.cbbFormaPagoBenef.value != '')
				this.varFpag=this.txtFormaPagoBenef.value;
			else
				this.varFpag='0';
			this.varPais=this.txtPais.value;
			this.varBancoCorr = this.txtBicRecep.value;
			this.varBanReem = this.txtBicReembolso.value;
			this.varReembolso = this.txtReembolso.value;
			
			this.ofunc_cargar_inrem(this.txtInstrucciones78.value);
		}
	}

	/**
	 * Callback invocado por this.crdRs200152TxtLciIni.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152TxtLciResult(wsResult :CmWsResult): void
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
						
			if(this.optInstruccionConfirmacion.value == 'M')
				this.varCondicion='May Add';
			if(this.optInstruccionConfirmacion.value == 'S')
				this.varCondicion='Confirm';
			if(this.optInstruccionConfirmacion.value == 'N')
				this.varCondicion='Without';
			if(this.cbbFormaPagoBenef.value != '')
				this.varFpag=this.txtFormaPagoBenef.value;
			else
				this.varFpag='0';
			this.varPais=this.txtPais.text;
			this.varBancoCorr = this.txtBicRecep.value;
			this.varBanReem = this.txtBicReembolso.value;
			this.varReembolso = this.txtReembolso.value;
			
			this.ofunc_cargar_conad(this.txtCondicionesAdicio47.value);
		}
	}


	ofunc_cargar_conad(myTextArea:any){

		this.myTextArea=myTextArea;
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'CONAD';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.ofunc_cargar_conad_Result(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	}

	/**
	 * Callback invocado por this.crdRs200152TxtLciIni.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	ofunc_cargar_conad_Result(wsResult :CmWsResult): void
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			this.myTextArea.patchValue(wsResult.getResultString('texto'));
			this.ofunc_cargar_inrem(this.txtInstrucciones78.value);
		}
	}


	
	ofunc_cargar_inrem(myTextArea:any){

		this.myTextArea=myTextArea;
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'INREM';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.ofunc_cargar_inrem_Result(value)
			, (value) => this.processFault(value)
			, wss_cod_prd
			, wss_tip_txt
			, wss_num_opr
			, wss_usercode
		);

	}

	/**
	 * Callback invocado por this.crdRs200152TxtLciIni.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	ofunc_cargar_inrem_Result(wsResult :CmWsResult): void
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			this.myTextArea.patchValue("");
			this.myTextArea.patchValue(wsResult.getResultString('texto'));
		}
	}




	ofunc_forma_de_pago():void{
		if(this.txtFormaPagoBenef.value == '4'){ // 'by Acceptance';
			this.bcxPorcentajePlazo.value= "100.000000";
			if(this.cleanGrilla == 1){					
				this.ofunc_clean_grid();
				this.cleanGrilla=0;
			}							
			this.txtGirosATenor.patchValue("");
			this.txtBicGirado.patchValue("");
			this.txtGirNom.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirPais.patchValue("");	
			this.txtDetallePagoDiferido.patchValue("");
			this.txtDetallePagoMixto.patchValue("");	
			this.bcxPorcentajeVista.patchValue("");	
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("");
			this.bcxCostoFondo.patchValue("");
			this.bcxMonto.patchValue("");		
			this.chbkInteresCreditoProveedor.patchValue(false);	
			this.ofunc_hab();		
		}
		if(this.txtFormaPagoBenef.value == '2'){ //'by Def payment'
			this.bcxPorcentajePlazo.patchValue("100.000000");	
			if(this.cleanGrilla == 1){					
				this.ofunc_clean_grid();
				this.cleanGrilla=0;
			}						
			this.txtGirosATenor.patchValue("");
			this.txtBicGirado.patchValue("");
			this.txtGirNom.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirPais.patchValue("");	
			this.txtDetallePagoDiferido.patchValue("");
			this.txtDetallePagoMixto.patchValue("");
			this.bcxPorcentajeVista.patchValue("");	
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");											
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("")
			this.bcxCostoFondo.patchValue("")
			this.bcxMonto.patchValue("");		
			this.chbkInteresCreditoProveedor.patchValue(false);	
			this.ofunc_hab();			
		}
		if(this.txtFormaPagoBenef.value == '3'){ //'by Mixed payment'
			this.bcxPorcentajePlazo.patchValue("");
			this.bcxPorcentajeVista.patchValue("");
			if(this.cleanGrilla == 1){					
				this.ofunc_clean_grid();
				this.cleanGrilla=0;
			}			
			
			this.txtGirosATenor.patchValue("");
			this.txtBicGirado.patchValue("");
			this.txtGirNom.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirPais.patchValue("");	
			this.txtDetallePagoDiferido.patchValue("");
			this.txtDetallePagoMixto.patchValue("");
			this.bcxPorcentajeVista.patchValue("");	
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");											
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("")
			this.bcxCostoFondo.patchValue("")
			this.bcxMonto.patchValue("");		
			this.chbkInteresCreditoProveedor.patchValue(false);		
			this.ofunc_hab();			
		}
		if(this.txtFormaPagoBenef.value == '5'){ //'by Negotiation'
			this.bcxPorcentajePlazo.patchValue("100.000000");		
			if(this.cleanGrilla == 1){					
				this.ofunc_clean_grid();
				this.cleanGrilla=0;
			}			
			
			this.txtGirosATenor.patchValue("");
			this.txtBicGirado.patchValue("");
			this.txtGirNom.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirPais.patchValue("");	
			this.txtDetallePagoDiferido.patchValue("");
			this.txtDetallePagoMixto.patchValue("");
			this.bcxPorcentajeVista.patchValue("");	
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");											
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("")
			this.bcxCostoFondo.patchValue("")
			this.bcxMonto.patchValue("");		
			this.chbkInteresCreditoProveedor.patchValue(false);		
			this.ofunc_hab();	
		}
		if(this.txtFormaPagoBenef.text == '1'){ //'by Payment'
			this.bcxPorcentajePlazo.patchValue("100.000000");	
			if(this.cleanGrilla == 1){					
				this.ofunc_clean_grid();
				this.cleanGrilla=0;
			}					
			
			this.txtGirosATenor.patchValue("");
			this.txtBicGirado.patchValue("");
			this.txtGirNom.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirPais.patchValue("");	
			this.txtDetallePagoDiferido.patchValue("");
			this.txtDetallePagoMixto.patchValue("");
			this.bcxPorcentajeVista.patchValue("");	
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");											
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("")
			this.bcxCostoFondo.patchValue("")
			this.bcxMonto.patchValue("");		
			this.chbkInteresCreditoProveedor.patchValue(false);	
			this.ofunc_hab();		
		}
	}


	ofunc_hab(){

	}

	ofunc_clean_grid(){

	}

	ofun_busca_automata_evento(event:any):void{
		if(event.type == "focusout")
			this.ofun_busca_automata();
	}
	ofun_busca_automata():void{
		if(this.txtFormaPagoBenef.value == "0")
			return;
		if(this.txtFormaPagoBenef.value != ""){
			//ScreenBlocker.blockScreen(this);
			//let codigo:int=Application.application.getFmlPrd();	
			let codigo:any = this.familiaProducto;									
			let wss_fam_prd: string = this.familiaProducto// int
			let wss_for_pag: string = this.txtFormaPagoBenef.value// int
			let wss_usercode: string = this.user_logueado// String

			this.crdRs200151Crd002.call (
				(value) => this.crdRs200151Crd002Result(value)
			  , (value) => this.processFault(value)
			  , wss_fam_prd
			  , wss_for_pag
			  , wss_usercode
		  );

		}	
	}

	/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151Crd002Result(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let cargaArray:any[]=[];
		let wss_result_msg:any;

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
		}	
		else {

			let str:string = wsResult.getResultString('wss_vis_02');
			for(let i:number=0 ; i< str.length; i++){
				if(str.substring(i,(i+1)).toUpperCase() == 'W'){
					this.arrAutomata[i] = true;
				} else {
					this.arrAutomata[i] = false;
				}
				//console.log(" this.arrAutomata["+ i +"]: " + this.arrAutomata[i]);
			}
	
			this.automata_habilita_campos(this.arrAutomata);
		}
	}

	 automata_habilita_campos(arrAutomata:any[]):void{

		if(arrAutomata[0] == true){
			this.txtFormaPagoBenef.enable();
			this.cbbFormaPagoBenef.enable();
		} else {
			this.txtFormaPagoBenef.disable();
			this.cbbFormaPagoBenef.disable();
		}
		// this.txtFormaPagoBenef.enabled=arrAutomata[0];
		// this.cbbFormaPagoBenef.enabled=arrAutomata[0];
		//this.txtporcentaje.enabled=arrAutomata[1];
		if(arrAutomata[1] == true){
			this.bcxPorcentajeVista.enable();
		} else {
			this.bcxPorcentajeVista.disable();
		}
		//this.bcxPorcentajeVista=arrAutomata[1];
		if(arrAutomata[2] == true){
			this.bcxPorcentajePlazo.enable();
		} else {
			this.bcxPorcentajePlazo.disable();
		}
		// this.bcxPorcentajePlazo.enabled=arrAutomata[2];
		if(arrAutomata[3] == true){
			this.txtPlazoRigeDesde.enable();
			this.cbbPlazoRigeDesde.enable();
		} else {
			this.txtPlazoRigeDesde.disable();
			this.cbbPlazoRigeDesde.disable();
		}

		if(arrAutomata[4] == true){
			this.txtFechaSolicitud.enable();
		} else {
			this.txtFechaSolicitud.disable();
		}
		//this.tblPorDias.enabled=arrAutomata[5];
		if(arrAutomata[6] == true){
			this.chbkInteresCreditoProveedor.enable();
		} else {
			this.chbkInteresCreditoProveedor.disable();
		}

		if(arrAutomata[11] == true){
			this.txtDesdeApeANego.enable();
		} else {
			this.txtDesdeApeANego.disable();
		}

		if(arrAutomata[12] == true){
			this.txtDesdeNegoAVcto.enable();
		} else {
			this.txtDesdeNegoAVcto.disable();
		}

		if(arrAutomata[13] == true){
			this.txtTasaFinanciamiento.enable();
			this.cbbTasaFinanciamiento.enable();
		} else {
			this.txtTasaFinanciamiento.disable();
			this.cbbTasaFinanciamiento.disable();
		}

		if(arrAutomata[14] == true){
			this.bcxValorBaseBco.enable();
		} else {
			this.bcxValorBaseBco.disable();
		}

		if(arrAutomata[15] == true){
			this.bcxSpreadBco.enable();
			this.bcxCostoFondoBco.enable();
		} else {
			this.bcxSpreadBco.disable();
			this.bcxCostoFondoBco.disable();
		}

		if(arrAutomata[16] == true){
			this.txtDiasPlazoBco.enable();
		} else {
			this.txtDiasPlazoBco.disable();
		}

		if(arrAutomata[17] == true){
			this.txtReembolso.enable();
			this.cbbReembolso.enable();
		} else {
			this.txtReembolso.disable();
			this.cbbReembolso.disable();
		}

		if(arrAutomata[18] == true){
			this.txtZonaFranca.enable();
			this.cbbZonaFranca.enable();
		} else {
			this.txtZonaFranca.disable();
			this.cbbZonaFranca.disable();
		}

		if(arrAutomata[19] == true){
			this.chbkEnteradaEfectivo.enable();
		} else {
			this.chbkEnteradaEfectivo.disable();
		}

		if(arrAutomata[20] == true){
			this.chbkDomestica.enable();
		} else {
			this.chbkDomestica.disable();
		}

		if(arrAutomata[21] == true){
			this.chbkTercerosPaises.enable();
		} else {
			this.chbkTercerosPaises.disable();
		}

		if(arrAutomata[22] == true){
			this.chbkRefinanciamiento.enable();
		} else {
			this.chbkRefinanciamiento.disable();
		}

		if(arrAutomata[23] == true){
			this.txtBicRecep.enable();
		} else {
			this.txtBicRecep.disable();
		}
		//this.btnBicRecep.enabled=arrAutomata[23];
		//this.txtNombre.enabled=arrAutomata[24];
		if(arrAutomata[25] == true){
			this.txtDireCorre.enable();
		} else {
			this.txtDireCorre.disable();
		}

		if(arrAutomata[26] == true){
			this.txtCiuCorre.enable();
		} else {
			this.txtCiuCorre.disable();
		}

		if(arrAutomata[27] == true){
			this.txtPaisCorre.enable();
		} else {
			this.txtPaisCorre.disable();
		}

		if(arrAutomata[28] == true){
			this.txtFlc.enable();
		} else {
			this.txtFlc.disable();
		}

		if(arrAutomata[29] == true){
			this.txtNumeroCartaCredito.enable();
		} else {
			this.txtNumeroCartaCredito.disable();
		}

		if(arrAutomata[30] == true){
			this.txtFechaEmision.enable();
		} else {
			this.txtFechaEmision.disable();
		}

		if(arrAutomata[31] == true){
			this.txtUcp.enable();
		} else {
			this.txtUcp.disable();
		}

		if(arrAutomata[32] == true){
			this.txtDiasValidez.enable();
		} else {
			this.txtDiasValidez.disable();
		}

		if(arrAutomata[33] == true){
			this.txtFechaExpiracion.enable();
		} else {
			this.txtFechaExpiracion.disable();
		}

		if(arrAutomata[34] == true){
			this.txtLugarExpiracion.enable();
		} else {
			this.txtLugarExpiracion.disable();
		}

		if(arrAutomata[35] == true){
			this.txtBicBancoOrdenante.enable();
		} else {
			this.txtBicBancoOrdenante.disable();
		}

		//this.txtBanOrNom.enabled=arrAutomata[36];
		if(arrAutomata[37] == true){
			this.txtDireOrdenante.enable();
		} else {
			this.txtDireOrdenante.disable();
		}

		if(arrAutomata[38] == true){
			this.txtCiuOrdenante.enable();
		} else {
			this.txtCiuOrdenante.disable();
		}

		if(arrAutomata[39] == true){
			this.txtPaisOrdenante.enable();
		} else {
			this.txtPaisOrdenante.disable();
		}	

		if(arrAutomata[40] == true){
			this.txtBicOrde50.enable();
		} else {
			this.txtBicOrde50.disable();
		}	
		
		if(arrAutomata[41] == true){
			this.txtOrdeNom50.enable();
		} else {
			this.txtOrdeNom50.disable();
		}		

		if(arrAutomata[42] == true){
			this.txtOrdeDire50.enable();
		} else {
			this.txtOrdeDire50.disable();
		}	
		
		if(arrAutomata[43] == true){
			this.txtOrCiuPa50.enable();
		} else {
			this.txtOrCiuPa50.disable();
		}		

		if(arrAutomata[44] == true){
			this.txtBeneBic59.enable();
		} else {
			this.txtBeneBic59.disable();
		}	
				
		if(arrAutomata[45] == true){
			this.txtBeneDire59.enable();
		} else {
			this.txtBeneDire59.disable();
		}	

		if(arrAutomata[46] == true){
			this.txtBeneCiu59.enable();
		} else {
			this.txtBeneCiu59.disable();
		}	
		
		if(arrAutomata[47] == true){
			this.txtPais.enable();
		} else {
			this.txtPais.disable();
		}	

		if(arrAutomata[48] == true){
			this.txtCodMonMonto.enable();
		} else {
			this.txtCodMonMonto.disable();
		}	

		if(arrAutomata[49] == true){
			this.txtTolerancia.enable();
			this.txtporcentaje.enable();
		} else {
			this.txtTolerancia.disable();
			this.txtporcentaje.disable();
		}	
		//txtMontoMaximoCredito.enabled=arrAutomata[50];

		if(arrAutomata[51] == true){
			this.txtMontoAdicionalCubierto.enable();
		} else {
			this.txtMontoAdicionalCubierto.disable();
		}	

		if(arrAutomata[52] == true){
			this.txtUtilizableCon.enable();
		} else {
			this.txtUtilizableCon.disable();
		}	
		//this.btnUtilizableCon.enabled=arrAutomata[52];
		if(arrAutomata[53] == true){
			this.txtUtilizableConCualquiera.enable();
		} else {
			this.txtUtilizableConCualquiera.disable();
		}	

		if(arrAutomata[54] == true){
			this.txtPor.enable();
		} else {
			this.txtPor.disable();
		}	

		if(arrAutomata[55] == true){
			this.txtGirosATenor.enable();
		} else {
			this.txtGirosATenor.disable();
		}	

		if(arrAutomata[56] == true){
			this.txtBicGirado.enable();
		} else {
			this.txtBicGirado.disable();
		}	
		//this.btnBicGirado.enabled=arrAutomata[56];
		if(arrAutomata[57] == true){
			this.txtGirNom.enable();
		} else {
			this.txtGirNom.disable();
		}	

		if(arrAutomata[58] == true){
			this.txtGirDire.enable();
		} else {
			this.txtGirDire.disable();
		}	

		if(arrAutomata[59] == true){
			this.txtGirCiu.enable();
		} else {
			this.txtGirCiu.disable();
		}			

		if(arrAutomata[60] == true){
			this.txtGirPais.enable();
		} else {
			this.txtGirPais.disable();
		}		

		if(arrAutomata[61] == true){
			this.txtDetallePagoMixto.enable();
		} else {
			this.txtDetallePagoMixto.disable();
		}	

		if(arrAutomata[62] == true){
			this.txtDetallePagoDiferido.enable();
		} else {
			this.txtDetallePagoDiferido.disable();
		}	

		if(arrAutomata[63] == true){
			this.optEmbarqueParcial.enable();
		} else {
			this.optEmbarqueParcial.disable();
		}	
		// rdEmbarqueParcialPermitido.enabled=arrAutomata[63];
		// rdEmbarqueParcialNoPermitido.enabled=arrAutomata[63];
		// rdEmbarqueParcialCondicional.enabled=arrAutomata[63];
		if(arrAutomata[64] == true){
			this.optTransbordo.enable();
		} else {
			this.optTransbordo.disable();
		}	
		//this.optTransbordo.enabled=arrAutomata[64];
		// rdTransbordoPermitido.enabled=arrAutomata[64];
		// rdTransbordoNoPermitido.enabled=arrAutomata[64];
		// rdTransbordoCondicional.enabled=arrAutomata[64];	
		if(arrAutomata[65] == true){
			this.txtViaTransporte.enable();
			this.cbbViaTransporte.enable();
		} else {
			this.txtViaTransporte.disable();
			this.cbbViaTransporte.disable();
		}	

		if(arrAutomata[65] == true){
			this.txtViaTransporte.enable();
			this.cbbViaTransporte.enable();
		} else {
			this.txtViaTransporte.disable();
			this.cbbViaTransporte.disable();
		}	

		if(arrAutomata[66] == true){
			this.txtLugarDespacho.enable();
		} else {
			this.txtLugarDespacho.disable();
		}	

		if(arrAutomata[67] == true){
			this.txtPuertoEmbarque.enable();
		} else {
			this.txtPuertoEmbarque.disable();
		}	
		
		if(arrAutomata[68] == true){
			this.txtPuertoDescarga.enable();
		} else {
			this.txtPuertoDescarga.disable();
		}	

		if(arrAutomata[69] == true){
			this.txtLugarDestino44.enable();
		} else {
			this.txtLugarDestino44.disable();
		}	

		if(arrAutomata[70] == true){
			this.txtDiasPresentacionDoc.enable();
		} else {
			this.txtDiasPresentacionDoc.disable();
		}	

		if(arrAutomata[71] == true){
			this.txtFechaEmbarque.enable();
		} else {
			this.txtFechaEmbarque.disable();
		}

		if(arrAutomata[72] == true){
			this.txtPeriodoEmbarque44.enable();
		} else {
			this.txtPeriodoEmbarque44.disable();
		}

		
		if(arrAutomata[73] == true){
			this.txtMercaderias.enable();
		} else {
			this.txtMercaderias.disable();
		}

		if(arrAutomata[74] == true){
			this.txtClausulaCompra.enable();
			this.cbbClausulaCompra.enable();
		} else {
			this.txtClausulaCompra.disable();
			this.cbbClausulaCompra.disable();
		}
		//this.btnDocuReque.enabled=arrAutomata[75];

		if(arrAutomata[76] == true){
			this.txtFacturasANombre.enable();
		} else {
			this.txtFacturasANombre.disable();
		}

		if(arrAutomata[77] == true){
			this.optGrpDcto.enable();
		} else {
			this.optGrpDcto.disable();
		}

		if(arrAutomata[78] == true){
			this.txtMarcasEspe.enable();
		} else {
			this.txtMarcasEspe.disable();
		}

		if(arrAutomata[79] == true){
			this.txtCondicionesAdicio47.enable();
		} else {
			this.txtCondicionesAdicio47.disable();
		}

		if(arrAutomata[80] == true){
			this.optGrpGst.enable();
		} else {
			this.optGrpGst.disable();
		}
		// rdGastosBenef.enabled=arrAutomata[80];
		// rdGastosSolici.enabled=arrAutomata[80];
		// rdGastosNinguno.enabled=arrAutomata[80];
		if(arrAutomata[81] == true){
			this.txtExcepto.enable();
		} else {
			this.txtExcepto.disable();
		}
		//txtPeriodoPresentacion.enabled= arrAutomata[82];
		if(arrAutomata[83] == true){
			this.optInstruccionConfirmacion.enable();
		} else {
			this.optInstruccionConfirmacion.disable();
		}
		// rdWith.enabled=arrAutomata[83];
		// rdWithout.enabled=arrAutomata[83];
		// rdMyadd.enabled=arrAutomata[83];
		if(arrAutomata[84] == true){
			this.chk740.enable();
			//this.chk740.enabled=true;
		} else {
			this.chk740.disable();
			//this.chk740.enabled=false;
		}

		if(arrAutomata[85] == true){
			this.txtBicReembolso.enable();		
		} else {
			this.txtBicReembolso.disable();		
		}
		//btnBicReembolso.enabled=arrAutomata[85];
		if(arrAutomata[90] == true){
			this.optURR.enable();		
		} else {
			this.optURR.disable();		
		}
		// rdRurrSi.enabled=arrAutomata[90];
		// rdRurrNo.enabled=arrAutomata[90];
		if(arrAutomata[91] == true){
			this.txtNumeroAladi78.enable();		
		} else {
			this.txtNumeroAladi78.disable();		
		}

		if(arrAutomata[92] == true){
			this.txtInstrucciones78.enable();		
		} else {
			this.txtInstrucciones78.disable();		
		}

		if(arrAutomata[93] == true){
			this.txtBicAvisador.enable();		
		} else {
			this.txtBicAvisador.disable();		
		}
		//btnBicAvisador.enabled=arrAutomata[93];
		//txtAviNom.enabled=arrAutomata[94];
		//txtAviDire.enabled=arrAutomata[95];
		//txtAviCiu.enabled=arrAutomata[96];
		//txtAviPais.enabled=arrAutomata[97];
		if(arrAutomata[98] == true){
			this.txtInfoRemitente72.enable();		
		} else {
			this.txtInfoRemitente72.disable();		
		}
		//this.btnAceptar.enabled=arrAutomata[0];
		//btnAceptar0.enabled=arrAutomata[0];
		//btnVolver.enabled=arrAutomata[0];
		//btnVolver0.enabled=arrAutomata[0];
		//ScreenBlocker.unblockScreen();
	}

	//FUNCION VALIDADORA DE TASA Y SPREAD
	ofunc_validar_tasa(myText:any):void{
		
		if(myText.value != '0.000000'){
			if(Number(myText.value > Number('100.000000'))){
				this.utilService.alert(this.dialog, "Valor ingresado fuera de rango","Carta de crédito")
				myText.patchValue('0.000000');
				myText.setFocus();
			}
		}
	}

}
