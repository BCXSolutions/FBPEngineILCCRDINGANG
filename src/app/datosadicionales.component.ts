// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 06/01/2020 13:21:56
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild, ElementRef} from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControlName, AbstractControl } from '@angular/forms';
import { DateAdapter, MatDialog, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';
import { SharedService } from './SharedService.service';
import { interval } from 'rxjs';	
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
import { CRD_RS_99_150_DOC } from './ws/CRD_RS_99_150_DOC';
import { CRD_RS_200_118_ALD } from './ws/CRD_RS_200_118_ALD';
import { CRD_RS_550_FEMB } from './ws/CRD_RS_550_FEMB';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { CRD_RS_200_112_BCO_CNFR } from './ws/CRD_RS_200_112_BCO_CNFR';
import { CRD_RS_200_151_ORD50 } from './ws/CRD_RS_200_151_ORD50';
import { CRD_RS_200_112_ORD50 } from './ws/CRD_RS_200_112_ORD50';
import { CRD_RS_200_112_ALI } from './ws/CRD_RS_200_112_ALI';
import { CRD_RS_200_112_DLI } from './ws/CRD_RS_200_112_DLI';
import { CRD_RS_200_111_ZLI } from './ws/CRD_RS_200_111_ZLI';
import { CRD_RS_200_160_ZLI } from './ws/CRD_RS_200_160_ZLI';
import { CRD_RS_200_172_OPR_ING } from './ws/CRD_RS_200_172_OPR_ING';
import { CRD_RS_200_112_OPR_ING } from './ws/CRD_RS_200_112_OPR_ING';
import { BCX_RS_200_112_CLIAM } from './ws/BCX_RS_200_112_CLIAM';
import { CRD_RS_99_130_MONMTO } from './ws/CRD_RS_99_130_MONMTO';
import { CRD_RS_200_152_TXT_LCI_T78 } from './ws/CRD_RS_200_152_TXT_LCI_T78';

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
	pageName: string = 'Datos adicionales';
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
	txtNomCorre:any;
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
	txtNombreOrdenante:any;
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
	txtReemNom:any;
	txtReemDire:any;
	txtReemCiu:any;
	txtReemPais:any;

	optURR:any;
	txtNumeroAladi78:any;

	txtBicAvisador:any;
	txtAviNom:any;
	txtAviDire:any;
	txtAviCiu:any;
	txtAviPais:any;
	
	txtBicParticipante:any;
	txtParticipanteNom:any;
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

	varInicioPadre:any;
	varInicio:any;
	financiamiento_indicador_opcion:any;

	varFpag:any;
	varBancoCorr:any;
	varBanReem:any;
	varPais:any;
	varPlantillaGlobal:any;
	varCondicion:any;
	varCodTemplateGlobal:any;
	varTransporte:any;
	varManda:any;
	varValor:any;
	

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
	editing:any;

	ColumnMode = ColumnMode; 
	evenGrl:any;
	arrayTag50:any[]=[];

	habBtnRefinanciamiento:any = true;
	bloquearBtnUtilizableCon:any;
	txtOtroVia:any;

	visTxtOtroVia:any = false;
	bFlagCambioEspecial:any = false;

	varCount:any = 0;
	varClausula:any;
	codPais:any;
	precarga:any;
	cOrde:any;
	chkEnterada:any;

	numFilas:any=0;
	arrTest:any[]=[];
	evalFilas:any=0;

	identificador:any;

	url:string = '';
	objetoPadre:any;
	ttlNueva:any;
	varDatosadicionales:any;

	habBotonDocumentos:any;
	habBotonOrdenante:any;
	habPorcentajeGrilla:any;
	habDiasPlazoGrilla:any;
	habScrollVertical:any;

	habTxtBicRecep:any;
	habTxtBicBancoOrdenante:any;
	habTxtUtilizableCon:any;
	habTxtBicGirado:any;
	habTxtBicReembolso:any;
	habTxtBicAvisador:any;
	habTxtBicParticipante:any;

	ignoredFirstEvent = false;
	initValue;
	myDate:any;

	@ViewChild('grd', {static: true}) table: any;
	@ViewChild('rightTmpl', {static: true})  rightTmpl: TemplateRef<any>;
	@ViewChild('centerTmpl', {static: true})
	 centerTmpl: TemplateRef<any>;
	@ViewChild('editable1Tmpl',{static: true}) editable1Tmpl: TemplateRef<any>;
	@ViewChild('editable2Tmpl',{static: true}) editable2Tmpl: TemplateRef<any>;
	
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
		, private crdRs99150Doc: CRD_RS_99_150_DOC
		, private crdRs200118Ald: CRD_RS_200_118_ALD
		, private crdRs550Femb: CRD_RS_550_FEMB
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private crdRs200112BcoCnfr: CRD_RS_200_112_BCO_CNFR
		, private crdRs200151Ord50: CRD_RS_200_151_ORD50
		, private crdRs200112Ord50: CRD_RS_200_112_ORD50
		, private crdRs200112Ali: CRD_RS_200_112_ALI
		, private crdRs200112Dli: CRD_RS_200_112_DLI
		, private crdRs200111Zli: CRD_RS_200_111_ZLI
		, private crdRs200160Zli: CRD_RS_200_160_ZLI
		, private sharedService: SharedService
		, private crdRs200172OprIng: CRD_RS_200_172_OPR_ING
		, private crdRs200112OprIng: CRD_RS_200_112_OPR_ING
		, private bcxRs200112Cliam: BCX_RS_200_112_CLIAM
		, private crdRs99130Monmto: CRD_RS_99_130_MONMTO
		, private crdRs200152TxtLciT78: CRD_RS_200_152_TXT_LCI_T78

	
		){    

			this.initValue = this.myDate;
			  
			if (this.sharedService.clickEventsubscription == undefined) {
			this.sharedService.clickEventsubscription = this.sharedService.getClickEvent().subscribe((object)=> {
				
				if(object[0] == 'Nueva'){
					this.txtCondicionesAdicio47.value += object[1];					
					this.bFlagCambioEspecial = object[2];
					this.ofunc_grabar_texto(object[3],this.txtCondicionesAdicio47);
				}if(object[0] == 'Detalle'){
					this.txtCondicionesAdicio47.value += object[1];					
					this.bFlagCambioEspecial = object[2];
					this.ofunc_grabar_texto(object[3],this.txtCondicionesAdicio47)	
				}if(object[0] == 'Preingreso'){
					this.txtCondicionesAdicio47.value += object[1];					
					this.bFlagCambioEspecial = object[2];
					this.ofunc_grabar_texto(object[3],this.txtCondicionesAdicio47)	
				}if(object == 'ofunc_tag_50'){
					this.ofunc_tag50();
				}

				//this.cmdCursar_click();
			})
		  }
		}

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

		this.editing = {};
		// Definicion de columnas.
		this.tableCols = [
			{ prop:'wss_pct_pzo', name:'Porcentaje', width:'6', headerClass:'gridHeader', cellTemplate: this.editable1Tmpl},
			{ prop:'wss_dia_pzo', name:'Días plazo', width:'6', headerClass:'gridHeader', cellTemplate: this.editable2Tmpl}
		];

		debugger
		this.txtNombre.disable();
		this.txtNombreBanco.disable();
		this.btnBancoComyGas = true;
		this.btnBicReembolso = true;
		this.arrayTag50 = this.contextService.getUserData("arrayTag50");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.txtBcxRut = this.contextService.getUserData("bcxRut");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");
		this.familiaProducto = this.contextService.getUserData("familiaProducto");
		this.fechaProceso = this.contextService.getUserData("fechaProceso");
		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.bicCor = this.contextService.getUserData("bicCor");
		this.varPlantillaGlobal = this.contextService.getUserData("varPlantillaGlobal");
		this.varInicio = this.contextService.getUserData("varInicio");
		this.varInicioPadre = this.contextService.getUserData("varInicioPadre");
		this.varCodTemplateGlobal = this.contextService.getUserData("varCodTemplateGlobal");		
		this.financiamiento_indicador_opcion = this.contextService.getUserData("financiamiento_indicador_opcion");
		this.txtNumeroCartaCredito.patchValue(this.numOperacion);
		this.txtFechaEmision.patchValue(this.fechaProceso);
		this.txtNumeroCartaCredito.disable();
		this.precarga = this.contextService.getUserData("precarga");
		this.cOrde = this.contextService.getUserData("cOrde");
		this.chkEnterada = this.contextService.getUserData("chkEnterada");
		this.objetoPadre = this.contextService.getUserData("objetoPadre");
		this.ttlNueva = this.contextService.getUserData("objetoPadre");
		this.varDatosadicionales = this.contextService.getUserData("varDatosadicionales");

		this.consulta = this.contextService.getUserData("consulta");

		//this.consulta='C';

		//this.varInicio = 0;
		
		//this.cargar_primeros_datos();

		this.txtUcpVisible = false;
	


		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);

		if(this.financiamiento_indicador_opcion == 'Nueva'){
			if(!ctxSw) {		
				this.deshabilitar_campos();
				this.Cargar_arreglos_();
			}
		} else if (this.financiamiento_indicador_opcion == 'Detalle'){	
			if(!ctxSw) {	
				this.deshabilitar_campos();
				this.Cargar_arreglos_();
			}
		} else if(this.financiamiento_indicador_opcion == 'Preingreso'){
			if(!ctxSw) {
				this.deshabilitar_campos();
				this.Cargar_arreglos_();
			}
		}
			
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

		this.tableRowsTemp = [
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},

		  ];

		this.tableRows =this.tableRowsTemp; 		  
		this.cbbReembolsoArray = this.cbbReembolsoAuxArray;
		this.cbbZonaFrancaArray = this.cbbZonaFrancaAuxArray;
		this.chbkEnteradaEfectivo.patchValue(this.chkEnterada);

		this.ofunc_INREM();
		this.ofunc_PARTCOFREQ();
	}


	ofunc_PARTCOFREQ() {

		let wss_opr_num:string = this.numOperacion;
		let wss_usercode:string = this.user_logueado;

		// Activamos el simbolo de progress.
		//this.waitShow = true;
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
		//this.waitShow = false;
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
			this.ofunc_banco_bic(this.txtBicParticipante);
		}
	}

	ofunc_banco_bic(codigoCampo:any) {
		
		let myTextAux:string;
		
		if(codigoCampo == "txtBicRecep"){	
			myTextAux = this.txtBicRecep.value;				
			//this.txtBicRecep.patchValue("");
			this.txtNomCorre.patchValue("");
			this.txtCiuCorre.patchValue("");
			this.txtDireCorre.patchValue("");
			this.txtPaisCorre.patchValue("");
		 }		     		
		 if(codigoCampo == "txtBicBancoOrdenante"){	
			myTextAux = this.txtBicBancoOrdenante.value;     			
			//this.txtBicBancoOrdenante.patchValue("");
			this.txtNombreOrdenante.patchValue("");
			this.txtDireOrdenante.patchValue("");
			this.txtCiuOrdenante.patchValue("");
			this.txtPaisOrdenante.patchValue("");	     		
		 }
		 if(codigoCampo == "txtBicGirado"){	
			myTextAux = this.txtBicGirado.value;    			
			this.txtGirNom.patchValue("");
			this.txtGirCiu.patchValue("");
			this.txtGirDire.patchValue("");
			this.txtGirPais.patchValue("");
		 }
		 if(codigoCampo == "txtBicReembolso"){
			myTextAux = this.txtBicReembolso.value;	     			
			this.txtReemNom.patchValue("");
			this.txtReemCiu.patchValue("");
			this.txtReemDire.patchValue("");
			this.txtReemPais.patchValue("");
		 }
		 if(codigoCampo == "txtBicAvisador"){	   
			myTextAux = this.txtBicAvisador.value;  			
			this.txtAviNom.patchValue("");
			this.txtAviCiu.patchValue("");
			this.txtAviDire.patchValue("");
			this.txtAviPais.patchValue("");
		 }	
		 
		 if(codigoCampo == "txtBicParticipante"){	 
			myTextAux = this.txtBicParticipante.value;     			
			this.txtParticipanteNom.patchValue("");
			this.txtParticipanteCiu.patchValue("");
			this.txtParticipanteDire.patchValue("");
			this.txtParticipantePais.patchValue("");
		}						


		// console.log("aux -> " + aux);
		// if(this.myText!=null){
		// 	if(this.myText.value!=''){
			if(this.myText.value!='' || this.myText.value!=null){
				let wss_bco_swf:string = myTextAux;
				let wss_usercode:string = this.user_logueado;
		
				// Activamos el simbolo de progress.
				//this.waitShow = true;
				// Invocamos el WS.
				this.bcxRs99251Bank.call(
					(value) => this.bcxRs99251BankResult(value,codigoCampo)
					, (value) => this.processFault(value)
					, wss_bco_swf
					, wss_usercode
				);
			//}	
		}
	}

	/**
	 * Callback invocado por this.bcxRs200160Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99251BankResult(wsResult :CmWsResult,codigoCampo:any): void
	{
	
		
		//console.log('txtBicParticipanteName -> ' + txtBicParticipanteName.formControlName());
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		// } else if(wsResult.getReturnValue()==0){
		// 	let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
		// 	this.utilService.alert(this.dialog, wss_result_msg)
		} else {
			
     		if(codigoCampo == "txtBicRecep"){						
				this.txtNomCorre.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtCiuCorre.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtDireCorre.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtPaisCorre.patchValue(wsResult.getResultString('wss_paigls'));
				//this.ofunc_carga_bic(txtBicRecep);
     		}		     		
     		if(codigoCampo == "txtBicBancoOrdenante"){				
				this.txtNombreOrdenante.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtDireOrdenante.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtCiuOrdenante.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtPaisOrdenante.patchValue(wsResult.getResultString('wss_paigls'));
			   			
     		}
     		if(codigoCampo == "txtBicGirado"){	     						 
				this.txtGirNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtGirCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtGirDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtGirPais.patchValue(wsResult.getResultString('wss_paigls'));
     		}
     		if(codigoCampo == "txtBicReembolso"){	   				 
				this.txtReemNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtReemCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtReemDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtReemPais.patchValue(wsResult.getResultString('wss_paigls'));	
				//ofunc_valida_740();
				//ofunc_carga_bic(txtBicReembolso);
     		}
     		if(codigoCampo == "txtBicAvisador"){	     					 
				this.txtAviNom.patchValue(wsResult.getResultString('wss_bco_nom'));
				this.txtAviCiu.patchValue(wsResult.getResultString('wss_bco_ciu'));
				this.txtAviDire.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtAviPais.patchValue(wsResult.getResultString('wss_paigls'));

     		}  		
     		if(codigoCampo == "txtBicParticipante"){				 
				this.txtParticipanteNom.patchValue(wsResult.getResultString('wss_bco_nom'));
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
		//this.waitShow = true;
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
		//this.waitShow = false;
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
		//this.waitShow = false;
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
		//this.waitShow = true;
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
		//this.waitShow = false;
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
		//this.waitShow = false;
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
		//this.waitShow = true;
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
		//this.waitShow = false;
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
		//this.waitShow = true;
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
		//this.waitShow = false;
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
			this.txtMercaderias.patchValue(txtMercaderiasAux);

			if(!this.chk740.value == true){


				this.txtBicReembolso.patchValue("");
				this.txtReemNom.patchValue("");
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
				
				this.bFlagCambioEspecial=true;
				
				this.txtBicReembolso.patchValue(this.bicCor);				
				this.ofunc_event_focus_banco(this.bicCor);
				
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
			this.contextService.setUserData("varDatosadicionales",'dasnormal');
			
			//this.location.back();
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
		//this.waitShow = false;
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
			this.txtPais.setValidators(CmTextoComboValidator(this.cbbPaisArray, 'wss_cod_pais'));
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
		//this.waitShow = false;
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
			this.txtClausulaCompra.setValidators(CmTextoComboValidator(this.cbbClausulaCompraArray, 'wss_cod_clacom'));
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
		//this.waitShow = false;
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
			this.txtViaTransporte.setValidators(CmTextoComboValidator(this.cbbViaTransporteArray, 'wss_cod_viat'));
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
		//this.waitShow = false;
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
			this.txtTasaProveedor.setValidators(CmTextoComboValidator(this.cbbTasaProveedorArray, 'wss_tip_tas'));
			this.cbbTasaFinanciamientoArray = wsResult.getTableRows();
			this.txtTasaFinanciamiento.setValidators(CmTextoComboValidator(this.cbbTasaFinanciamientoArray, 'wss_tip_tas'));
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
		//this.waitShow = false;
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
			this.txtFormaPagoBenef.setValidators(CmTextoComboValidator(this.cbbFormaPagoBenefArray, 'wss_cod_fpag'));
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
		//this.waitShow = false;
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
			this.txtPlazoRigeDesde.setValidators(CmTextoComboValidator(this.cbbPlazoRigeDesdeArray, 'wss_cod_rdd'));
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
		//this.waitShow = false;
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
			this.txtUcp.setValidators(CmTextoComboValidator(this.cbbUcpArray, 'wss_cod_rucp'));
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
		//this.waitShow = false;
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
			
			let cbbFlcAuxArray:any[]=[];
			cbbFlcAuxArray = wsResult.getTableRows();
			cbbFlcAuxArray = cbbFlcAuxArray.filter(v => {
				return v.wss_cod_flc = v.wss_cod_flc.toString().trim(); 
			});

			this.cbbFlcArray = cbbFlcAuxArray;
			this.txtFlc.setValidators(CmTextoComboValidator(this.cbbFlcArray, 'wss_cod_flc'));
			this.txtFechaSolicitud.patchValue(this.fechaProceso);

			if(this.financiamiento_indicador_opcion == 'Nueva') {
				if(this.varInicio == 0){
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
		//this.waitShow = false;

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
				this.chbkInteresCreditoProveedor.patchValue(true);
			else if(cargaDefaultArray[6].wss_TAB_COD_DFL.toString() == "N") 
				this.chbkInteresCreditoProveedor.patchValue(false);

			this.txtTasaProveedor.patchValue(cargaDefaultArray[7].wss_TAB_COD_DFL.toString());			
			this.bcxValorBase.patchValue(this.utilService.editNumber(cargaDefaultArray[8].wss_TAB_COD_DFL,6));
			this.bcxSpread.patchValue(this.utilService.editNumber(cargaDefaultArray[9].wss_TAB_COD_DFL,6)); 
			this.bcxCostoFondo.patchValue(this.utilService.editNumber(cargaDefaultArray[9].wss_TAB_COD_DFL,6)); 
			this.bcxMonto.patchValue(this.utilService.editNumber(cargaDefaultArray[10].wss_TAB_COD_DFL,6));			
			this.txtDesdeApeANego.patchValue(this.utilService.editNumber(cargaDefaultArray[11].wss_TAB_COD_DFL,6));		
			this.txtDesdeNegoAVcto.patchValue(this.utilService.editNumber(cargaDefaultArray[12].wss_TAB_COD_DFL,6));									
			this.txtTasaFinanciamiento.patchValue(cargaDefaultArray[13].wss_TAB_COD_DFL.toString());
			this.bcxValorBaseBco.patchValue(this.utilService.editNumber(cargaDefaultArray[14].wss_TAB_COD_DFL,6));
			this.bcxCostoFondoBco.patchValue(this.utilService.editNumber(cargaDefaultArray[15].wss_TAB_COD_DFL,6));	
			this.bcxSpreadBco.patchValue(this.utilService.editNumber(cargaDefaultArray[15].wss_TAB_COD_DFL,6));				
			this.txtDiasPlazoBco.patchValue(cargaDefaultArray[16].wss_TAB_COD_DFL.toString())
			this.txtReembolso.patchValue(cargaDefaultArray[17].wss_TAB_COD_DFL.toString())						
			this.txtZonaFranca.patchValue(cargaDefaultArray[18].wss_TAB_COD_DFL.toString())
	
			if(cargaDefaultArray[20].wss_TAB_COD_DFL.toString() == "S")
				this.chbkDomestica.patchValue(true); 
			else if(cargaDefaultArray[20].wss_TAB_COD_DFL.toString() == "N") 
				this.chbkDomestica.patchValue(false); 

			if(cargaDefaultArray[21].wss_TAB_COD_DFL.toString() == "S")
				this.chbkTercerosPaises.patchValue(true); 
			else if(cargaDefaultArray[21].wss_TAB_COD_DFL.toString() == "N") 
				this.chbkTercerosPaises.patchValue(false); 

			if(cargaDefaultArray[22].wss_TAB_COD_DFL.toString() == "S"){
				this.chbkRefinanciamiento.patchValue(true);
				this.chbkRefinanciamiento.enable();
			} else if(cargaDefaultArray[22].wss_TAB_COD_DFL.toString()== "N") 
				this.chbkRefinanciamiento.patchValue(false);

			this.txtBicRecep.patchValue(cargaDefaultArray[23].wss_TAB_COD_DFL.toString());			
			this.txtNomCorre.patchValue(cargaDefaultArray[24].wss_TAB_COD_DFL.toString());
			this.txtDireCorre.patchValue(cargaDefaultArray[25].wss_TAB_COD_DFL.toString());
			this.txtCiuCorre.patchValue(cargaDefaultArray[26].wss_TAB_COD_DFL.toString());
			this.txtPaisCorre.patchValue(cargaDefaultArray[27].wss_TAB_COD_DFL.toString());
			this.txtFlc.patchValue(cargaDefaultArray[28].wss_TAB_COD_DFL.toString().trim());		 
			this.txtUcp.patchValue(cargaDefaultArray[31].wss_TAB_COD_DFL.toString().trim());	 
			this.txtDiasValidez.patchValue(cargaDefaultArray[32].wss_TAB_COD_DFL.toString());

			this.ofunc_calc_fecha_desde_nueva(2);

			let fechaExp:String = cargaDefaultArray[33].wss_TAB_COD_DFL.toString();

			if(fechaExp != '01/01/1753')
					this.txtFechaExpiracion.patchValue(fechaExp);
 						
			this.txtLugarExpiracion.patchValue(cargaDefaultArray[34].wss_TAB_COD_DFL.toString());			
			this.txtBicBancoOrdenante.patchValue(cargaDefaultArray[35].wss_TAB_COD_DFL.toString());		
			//this.txtBanOrNom.text=externalXML.file.item[36];
			this.txtDireOrdenante.patchValue(cargaDefaultArray[37].wss_TAB_COD_DFL.toString());
			this.txtCiuOrdenante.patchValue(cargaDefaultArray[38].wss_TAB_COD_DFL.toString());
			this.txtPaisOrdenante.patchValue(cargaDefaultArray[39].wss_TAB_COD_DFL.toString());

			this.txtBeneBic59.patchValue(cargaDefaultArray[44].wss_TAB_COD_DFL.toString());
			this.txtBeneNombre59.patchValue(cargaDefaultArray[45].wss_TAB_COD_DFL.toString());
			this.txtBeneDire59.patchValue(cargaDefaultArray[46].wss_TAB_COD_DFL.toString());
			this.txtBeneCiu59.patchValue(cargaDefaultArray[47].wss_TAB_COD_DFL.toString());
			this.txtPais.patchValue(cargaDefaultArray[48].wss_TAB_COD_DFL.toString());
			
			this.txtTolerancia.patchValue(cargaDefaultArray[49].wss_TAB_COD_DFL.toString());
			this.txtporcentaje.patchValue(cargaDefaultArray[49].wss_TAB_COD_DFL.toString());
			//txtMontoMaximoCredito.text=externalXML.file.item[50];
			this.txtMontoAdicionalCubierto.patchValue(cargaDefaultArray[51].wss_TAB_COD_DFL.toString());
			this.txtUtilizableCon.patchValue(cargaDefaultArray[52].wss_TAB_COD_DFL.toString());			
			this.txtUtilizableConCualquiera.patchValue(cargaDefaultArray[53].wss_TAB_COD_DFL.toString());
			this.txtPor.patchValue(cargaDefaultArray[54].wss_TAB_COD_DFL.toString());
			this.txtGirosATenor.patchValue(cargaDefaultArray[55].wss_TAB_COD_DFL.toString());

			this.txtBicGirado.patchValue(cargaDefaultArray[56].wss_TAB_COD_DFL.toString());			
			this.txtGirNom.patchValue(cargaDefaultArray[57].wss_TAB_COD_DFL.toString());
			this.txtGirDire.patchValue(cargaDefaultArray[58].wss_TAB_COD_DFL.toString());
			this.txtGirCiu.patchValue(cargaDefaultArray[59].wss_TAB_COD_DFL.toString());
			this.txtGirPais.patchValue(cargaDefaultArray[60].wss_TAB_COD_DFL.toString());

			this.txtDetallePagoMixto.patchValue(cargaDefaultArray[61].wss_TAB_COD_DFL.toString());
			this.txtDetallePagoDiferido.patchValue(cargaDefaultArray[62].wss_TAB_COD_DFL.toString());
			
			if(cargaDefaultArray[63].wss_TAB_COD_DFL.toString() == "PROHIBIDOS"){
				this.optEmbarqueParcial.patchValue('N') 		
			}
			else if(cargaDefaultArray[63].wss_TAB_COD_DFL.toString() == "PERMITIDOS"){
				this.optEmbarqueParcial.patchValue('S') 				
			}
			else{
				this.optEmbarqueParcial.patchValue('C') 
			}

			if(cargaDefaultArray[64].wss_TAB_COD_DFL.toString() == "PROHIBIDOS"){
				this.optTransbordo.patchValue('S');		
			} else if(cargaDefaultArray[64].wss_TAB_COD_DFL.toString() == "PERMITIDOS"){
				this.optTransbordo.patchValue('N');		
			}
			else{
				this.optTransbordo.patchValue('C');			
			}

			this.txtViaTransporte.patchValue(cargaDefaultArray[65].wss_TAB_COD_DFL.toString());
			this.txtLugarDespacho.patchValue(cargaDefaultArray[66].wss_TAB_COD_DFL.toString());
			this.txtPuertoEmbarque.patchValue(cargaDefaultArray[67].wss_TAB_COD_DFL.toString());
			this.txtPuertoDescarga.patchValue(cargaDefaultArray[68].wss_TAB_COD_DFL.toString());
			this.txtLugarDestino44.patchValue(cargaDefaultArray[69].wss_TAB_COD_DFL.toString());
			this.txtDiasPresentacionDoc.patchValue(cargaDefaultArray[70].wss_TAB_COD_DFL.toString().trim());
			this.txtNumeroPeriodoPresentacion.patchValue(cargaDefaultArray[70].wss_TAB_COD_DFL.toString());

			let fechaEmb:String = this.utilService.editDate(cargaDefaultArray[71].wss_TAB_COD_DFL.toString());
			if(fechaEmb != '01/01/1753')
				this.txtFechaEmbarque.text = fechaEmb;
			this.txtPeriodoEmbarque44.patchValue(cargaDefaultArray[72].wss_TAB_COD_DFL.toString());
			this.txtClausulaCompra.patchValue(cargaDefaultArray[74].wss_TAB_COD_DFL.toString());					
			this.txtDocOtro.patchValue(cargaDefaultArray[77].wss_TAB_COD_DFL.toString());
			this.txtMarcasEspe.patchValue(cargaDefaultArray[78].wss_TAB_COD_DFL.toString());

			if(cargaDefaultArray[80].wss_TAB_COD_DFL.toString() == 'BENEFICIARIO')this.optGrpGst.patchValue('B'); 
			else if(cargaDefaultArray[80].wss_TAB_COD_DFL.toString() == 'SOLICITANTE')this.optGrpGst.patchValue('S');
			else if(cargaDefaultArray[80].wss_TAB_COD_DFL.toString() == 'NINGUNO')this.optGrpGst.patchValue('N'); 

			this.txtExcepto.patchValue(cargaDefaultArray[81].wss_TAB_COD_DFL.toString());
			this.txtPeriodoPresentacion.patchValue(cargaDefaultArray[82].wss_TAB_COD_DFL.toString().trim());
			
			if((this.txtPeriodoPresentacion.value).length > 0){
				this.chkPeriodoPresentacion.patchValue(true);
	    		this.txtPeriodoPresentacion.enable();
	    	}
	    	else{
	    		this.chkPeriodoPresentacion.patchValue(false);
	    		this.txtPeriodoPresentacion.disable();
			}
			
			if(cargaDefaultArray[83].wss_TAB_COD_DFL.toString() == 'CONFIRM')this.optInstruccionConfirmacion.patchValue('S'); 
			else if(cargaDefaultArray[83].wss_TAB_COD_DFL.toString() == 'WHITOUT')this.optInstruccionConfirmacion.patchValue('N');
			else if(cargaDefaultArray[83].wss_TAB_COD_DFL.toString() == 'MAY ADD')this.optInstruccionConfirmacion.patchValue('M');

			this.txtBicReembolso.patchValue(cargaDefaultArray[84].wss_TAB_COD_DFL.toString().trim());
			this.txtReemNom.patchValue(cargaDefaultArray[85].wss_TAB_COD_DFL.toString().trim());
			this.txtReemDire.patchValue(cargaDefaultArray[86].wss_TAB_COD_DFL.toString().trim());
			this.txtReemCiu.patchValue(cargaDefaultArray[87].wss_TAB_COD_DFL.toString().trim());		
			this.txtReemPais.patchValue(cargaDefaultArray[88].wss_TAB_COD_DFL.toString().trim());

			this.txtNumeroAladi78.patchValue(cargaDefaultArray[90].wss_TAB_COD_DFL.toString().trim());
			
			this.txtBicAvisador.patchValue(cargaDefaultArray[92].wss_TAB_COD_DFL.toString().trim());		
			this.txtAviNom.patchValue(cargaDefaultArray[93].wss_TAB_COD_DFL.toString().trim());
			this.txtAviDire.patchValue(cargaDefaultArray[94].wss_TAB_COD_DFL.toString().trim());
			this.txtAviCiu.patchValue(cargaDefaultArray[95].wss_TAB_COD_DFL.toString().trim());
			this.txtAviPais.patchValue(cargaDefaultArray[96].wss_TAB_COD_DFL.toString().trim());

			this.myText = this.txtBicReembolso;
			this.ofunc_get_tag50_Da();								
			//this.txtCodMonMonto.text=Application.application.modMOn;
			this.ofun_busca_automata();	 
			
			this.ofunc_precarga_pago();
			this.ofunc_doc_trans(); 	
			this.habilitaParticipante();
				
		}
	}

	ofunc_get_tag50_Da(){
		this.txtBicOrde50.patchValue(this.arrayTag50[0]);
		this.txtOrdeNom50.patchValue(this.arrayTag50[1]);
		this.txtOrdeDire50.patchValue(this.arrayTag50[2]);
		this.txtOrCiuPa50.patchValue(this.arrayTag50[3]);
	}

	habilitaParticipante():void{
		if(this.optInstruccionConfirmacion.value == 'S' || this.optInstruccionConfirmacion.value == 'N'){
			this.txtBicParticipante.enable();
			//btnBicReembolso0.enabled = true;
		}
		else{
			//this.btnBicReembolso0.enabled = false;
			this.txtBicParticipante.disable();
			this.txtBicParticipante.patchValue("");
			this.txtParticipanteNom.patchValue("");
			this.txtParticipanteDire.patchValue("");
			this.txtParticipanteCiu.patchValue("");
			this.txtParticipantePais.patchValue("");
		}

		this.waitShow = false;
	}


	
		//EJECUCION DOCUMENTOS POR VIA DE TRANSPORTE
	ofunc_doc_trans():void{	
			if(!this.varTransporte)
				return;
					
			let wss_opr_num: string = this.numOperacion;
			let wss_tip_pro: string = this.WSS_D01_SGM;
			let wss_via_tpt: string = this.txtViaTransporte.value;
			let wss_usercode: string = this.user_logueado;

			this.crdRs99150Doc.call(
				(value) => this.crdRs99150DocResult(value)
				, (value) => this.processFault(value)
				, wss_opr_num
				, wss_tip_pro
				, wss_via_tpt
				, wss_usercode
			);
	}				
	/**
	 * Callback invocado por this.crdRs200112GnmCtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs99150DocResult(wsResult :CmWsResult):void{

		// Desactivamos el simbolo de progress.
		this.waitShow = false;
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
			this.varTransporte=false;
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
		//this.waitShow = false;
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
			this.txtNomCorre.patchValue(wsResult.getResultString('wss_nom_rec'));
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
			this.txtGirNom.patchValue(wsResult.getResultString('wss_nom_gdo'));
			this.txtGirDire.patchValue(wsResult.getResultString('wss_dir_gdo'));
			this.txtGirCiu.patchValue(wsResult.getResultString('wss_ciu_gdo'));
			this.txtGirPais.patchValue(wsResult.getResultString('wss_pai_gdo'));	
			//DATOS UTILIZABLE
			this.txtUtilizableCon.patchValue(wsResult.getResultString('wss_iso_nom'));
			this.txtUtilizableConCualquiera.patchValue(wsResult.getResultString('wss_gls_any'));
			//Banco Reembolsador
			this.txtBicReembolso.patchValue(wsResult.getResultString('wss_iso_reem'));
			this.varBanReem = this.txtBicReembolso.value;
			this.txtReemNom.patchValue(wsResult.getResultString('wss_nom_reem'));
			this.txtReemDire.patchValue(wsResult.getResultString('wss_dir_reem'));
			this.txtReemCiu.patchValue(wsResult.getResultString('wss_ciu_reem'));
			this.txtReemPais.patchValue(wsResult.getResultString('wss_pai_reem'));
			//Banco Avisador
			this.txtBicAvisador.patchValue(wsResult.getResultString('wss_iso_avi'));	    	
			this.txtAviNom.patchValue(wsResult.getResultString('wss_nom_avi'));
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
		//this.waitShow = false;
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
			this.txtporcentaje.patchValue(wsResult.getResultString('wss_tol_pct_pos'));
			this.txtTolerancia.patchValue(wsResult.getResultString('wss_tol_pct_neg'));		
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
	    	this.txtDiasPresentacionDoc.patchValue(wsResult.getResultString('wss_pla_pre_doc'));
			this.txtNumeroPeriodoPresentacion.patchValue(wsResult.getResultString('wss_pla_pre_doc'));
			
			if(wsResult.getResultDate('wss_ult_fec_emb') != '1753-01-01')
			this.txtFechaEmbarque.patchValue(wsResult.getResultDate('wss_ult_fec_emb').toString());
			
			this.txtClausulaCompra.patchValue(wsResult.getResultString('wss_cls_comp').toString());
		
			this.txtFacturasANombre.patchValue(wsResult.getResultString('wss_fac_nom'));
			if(wsResult.getResultString('wss_doc_emb_avi').toString()=='S')
				this.optGrpDcto.patchValue('S');
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
			this.txtPeriodoPresentacion.patchValue(wsResult.getResultString('wss_per_pres').toString().trim());
	
	
			if(this.consulta=='C'){
	    		this.chkPeriodoPresentacion.disable();
	    		this.txtPeriodoPresentacion.disable();
	    		
	    		if((this.txtPeriodoPresentacion.value).length > 0){
	    			this.chkPeriodoPresentacion.patchValue(true);
	    		}
	    		else{
	    			this.chkPeriodoPresentacion.patchValue(false);
	    		}	    		
	    	}else if((this.txtPeriodoPresentacion.value).length > 0){
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
			
			this.ofunc_cargar_porcentaje()

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
			this.txtDiasValidez.patchValue(wsResult.getResultString('out_dia_pzo').toString());
			this.txtFechaExpiracion.patchValue(wsResult.getResultString('out_fec_vto').toString()); 
		}
	}


		//CALCULA FECHA
		ofunc_calc_fecha_desde_nueva(indicador:any):void{
		
	
			let wss_ind_cal: string = indicador; 
			let wss_fec_oto: string = this.utilService.toDate(this.txtFechaEmision.value);
			let wss_dia_pzo: string = this.txtDiasValidez.value;
			let wss_fec_vto: string = this.utilService.toDate(this.txtFechaExpiracion.value); 
			let wss_usercode: string  = this.user_logueado;
	
	
			this.crdRs550Pzo.call (
				(value) => this.crdRs550PzoDesdeNuevaResult(value)
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
		crdRs550PzoDesdeNuevaResult(wsResult :CmWsResult): void
		{
			
			// Desactivamos el simbolo de progress.
			//this.waitShow = false;
			/* Mover los parametros de salida a la pantalla. 
			this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
			this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
			 */
			let wss_result_msg:any;
			let object:any[]=[];
	
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
				
				let fechaExp:String = wsResult.getResultDate('out_fec_vto').toString();
				//let fechaExp:String = '01/01/1753';
				this.txtDiasValidez.patchValue(wsResult.getResultString('out_dia_pzo').toString());
				if(fechaExp != '01/01/1753')	
					this.txtFechaExpiracion.patchValue(fechaExp);	



				object[0] = 'fechaVencimiento';
				object[1] = fechaExp;
				object[2] = this.txtDiasValidez.value;

				this.sharedService.sendClickEvent(object);	
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

	cmdCursar_click(){
		this.identificador='C';
		this.varInicio = 1;
		this.crdRs200112AliCall();

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
		this.identificador='N';
		this.waitShow = false;
		this.crdRs200112AliCall();
		this.contextService.setUserData('varInicioPadre',1);
		this.contextService.setUserData('varInicio',1);
		this.contextService.setUserData('varPantalla','');
		this.contextService.setUserData("varDatosadicionales",'dasnormal');
		this.location.back();
	}
	/**
	 * Evento click del boton cmdRefinanciamiento.
	 */
	cmdRefinanciamiento_click(){
		this.waitShow = false;
		this.contextService.store(this);
		this.contextService.setUserData("numOperacion",this.numOperacion);	
		this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);	
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("opcion", this.opcion);
		this.contextService.setUserData("codPais", this.codPais);
		this.contextService.setUserData("fechaProceso", this.fechaProceso);
		this.router.navigate(['/refinanciamiento']);
	}

	cmdCampo_click(){
		this.varManda=true;
		this.varValor='SEE FIELD 47A';
	
		this.waitShow = false;
		if(this.cOrde == 0) {
			let myArrayDos:any[]=[];
			myArrayDos[0]=this.txtBicOrde50.value;
			myArrayDos[1]=this.txtOrdeNom50.value;
			myArrayDos[2]=this.txtOrdeDire50.value;
			myArrayDos[3]=this.txtOrCiuPa50.value;
			this.cOrde=1;

			
			this.contextService.store(this);
			this.contextService.setUserData("numOperacion",this.numOperacion);	
			this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);	
			this.contextService.setUserData("user_logueado",this.user_logueado);
			this.contextService.setUserData("myArrayDos",myArrayDos);
			this.contextService.setUserData('varCartaCredito', this.financiamiento_indicador_opcion);
			this.router.navigate(['/campo']);
			this.ofunc_tag50();

		} else if(this.cOrde == 1){
			this.ofunc_grabar_texto47A();		
			this.cOrde=0;
		}
	}

	ofunc_grabar_texto47A(){

		let wss_cod_prd :any = this.WSS_D01_SGM;
		let wss_tip_txt :any = 'ORDEN';
		let wss_num_opr :any = this.numOperacion;
		let wss_lin_txt :any = 'N';
		let wss_usercode :any = this.user_logueado;

		this.crdRs200111TxtLci.call (
			(value) => this.ofunc_result_texto47A(value)
		  , (value) => this.processFault(value)
		  , wss_cod_prd
		  , wss_tip_txt
		  , wss_num_opr
		  , wss_lin_txt
		  , wss_usercode
	  );
	} 	


	ofunc_result_texto47A(wsResult:CmWsResult){			
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
				//this.ofunc_grabar_texto_nuevo();
			}
	}	

			//FUNCION QUE TRAE DATOS TAG 50
	ofunc_grabar_texto_nuevo(){
				
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_txt_ord1 :string = this.txtBicOrde50.value;
		let wss_txt_ord2 :string = this.txtOrdeNom50.value;
		let wss_txt_ord3 :string = this.txtOrdeDire50.value;
		let wss_txt_ord4 :string = this.txtOrCiuPa50.value;
		let wss_usercode :string = this.user_logueado;

		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112Ord50.call(
			  (value) => this.ofunc_result_texto_nuevo(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_txt_ord1
			, wss_txt_ord2
			, wss_txt_ord3
			, wss_txt_ord4
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).	


		}

	ofunc_result_texto_nuevo(wsResult :CmWsResult):void{
		let wss_result_msg:any
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
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.ofunc_tag50();
		}	
	}


	ofunc_tag50(){
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Ord50.call(
			  (value) => this.ofunc_result_tag50(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).
	} 

	ofunc_result_tag50(wsResult:CmWsResult){
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;

		let aux:any;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
		
			this.arrayTag50[0] = wsResult.getResultString('wss_txt_ord1');
			this.arrayTag50[1] = wsResult.getResultString('wss_txt_ord2');
			this.arrayTag50[2] = wsResult.getResultString('wss_txt_ord3');
			this.arrayTag50[3] = wsResult.getResultString('wss_txt_ord4');

		}

	}


/**
 * Llamamos al Web Service.
 */
private crdRs200112AliCall(): void
{
	// obj.chkEnterada.selected = this.chkEnterada.selected;
	// obj.selecEnterada();		
	
	this.getFilas_result();
	this.bFlagCambioEspecial = true;
	if(this.txtCondicionesAdicio47.value != '')
		this.ofunc_grabar_texto('CONAD',this.txtCondicionesAdicio47.value);

	let inte:string="";			
	let refi:string="";
	let eef:string="";
	let dom:string="";
	let terce:string="";

	if(this.chbkInteresCreditoProveedor.value == true)inte = '1';else if(!this.chbkInteresCreditoProveedor.value == true)inte = '0';
	if(this.chbkRefinanciamiento.value == true)refi = "S";else if(!this.chbkRefinanciamiento.value == true)refi = "N";
	if(this.chbkDomestica.value == true) dom="S"; else if (!this.chbkDomestica.value == true) dom="N";
	if(this.chbkEnteradaEfectivo.value == true) eef="S"; else if (!this.chbkEnteradaEfectivo.value == true) eef="N";
	if(this.chbkTercerosPaises.value == true) terce="S"; else if (!this.chbkTercerosPaises.value == true) terce="N";


	/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
	let wss_num_opr :string = this.numOperacion;
	let wss_for_pag :string;

	if(this.cbbFormaPagoBenef.value =="" || this.txtFormaPagoBenef.value =="" || this.txtFormaPagoBenef.value == null)  //Int
		wss_for_pag = '0';
	else
		wss_for_pag = this.txtFormaPagoBenef.value;

	let wss_vis_pct :string = this.utilService.toDecimal(this.bcxPorcentajeVista.value);
	let wss_pla_pct :string = this.utilService.toDecimal(this.bcxPorcentajePlazo.value);
	let wss_fec_sol :any = this.utilService.toDate(this.txtFechaSolicitud.value);
	let wss_icp_ind :string = inte;
	let wss_icp_tip :string = this.txtTasaProveedor.value;
	let wss_icp_bas :string = this.utilService.toDecimal(this.bcxValorBase.value);
	let valorBase:number = Number(this.utilService.toDecimal(this.bcxCostoFondo.value));
	let spreadSumar:number = Number(this.utilService.toDecimal(this.bcxSpread.value));
	let resultado:number = valorBase + spreadSumar;				
	let wss_icp_spr :any = resultado;
	let wss_icp_mto :string = this.utilService.toDecimal(this.bcxMonto.value);
	let wss_tas_ape_neg :string = this.utilService.toDecimal(this.txtDesdeApeANego.value);
	let wss_tas_neg_vcp :string = this.utilService.toDecimal(this.txtDesdeNegoAVcto.value);
	let wss_dsd_pzo_rig :string = this.utilService.toString(this.txtPlazoRigeDesde.value);
	let wss_int_bco_tip :string = this.txtTasaFinanciamiento.value;
	let wss_int_bco_bas :string = this.utilService.toDecimal(this.bcxValorBaseBco.value);

	let valorBaseBco:number = Number(this.utilService.toDecimal(this.bcxCostoFondoBco.value));
	let spreadSumarBco:number = Number(this.utilService.toDecimal(this.bcxSpreadBco.value));
	let resultadoBco:number = valorBaseBco + spreadSumarBco;	
	let wss_int_bco_spr :any = resultadoBco;
	let wss_pla_bco :string = this.txtDiasPlazoBco.value;
	let wss_tip_reem :string = this.utilService.toString(this.txtReembolso.value);
	let wss_ind_zfr :string = this.utilService.toString(this.txtZonaFranca.value);


	let wss_ind_eef :string = eef;
	let wss_ind_dom :string = dom;
	let wss_ind_tpais :string = terce;
	let wss_ind_ref :string = refi;
	//DATOS DE RECEPTOR
	let wss_iso_rec :string = this.utilService.toString(this.txtBicRecep.value);
	let wss_nom_rec :string = this.utilService.toString(this.txtNomCorre.value);
	let wss_dir_rec :string = this.utilService.toString(this.txtDireCorre.value);
	let wss_ciu_rec :string = this.utilService.toString(this.txtCiuCorre.value);
	let wss_pai_rec :string = this.utilService.toString(this.txtPaisCorre.value);
	//DATOS DE BANCO ORDENANTE
	let wss_iso_ord :string = this.utilService.toString(this.txtBicBancoOrdenante.value);
	let wss_nom_ord :string = this.utilService.toString(this.txtNombreOrdenante.value);
	let wss_dir_ord :string = this.utilService.toString(this.txtDireOrdenante.value);
	let wss_ciu_ord :string = this.utilService.toString(this.txtCiuOrdenante.value);
	let wss_pai_ord :string = this.utilService.toString(this.txtPaisOrdenante.value);
	//DATOS EXTRA UTILIZABLE
	let wss_iso_nom :string = this.utilService.toString(this.txtUtilizableCon.value);
	let wss_gls_any :string = this.utilService.toString(this.txtUtilizableConCualquiera.value);
	//DATOS GIRADO
	let wss_iso_gdo :string = this.utilService.toString(this.txtBicGirado.value);
	let wss_nom_gdo :string = this.utilService.toString(this.txtGirNom.value);
	let wss_dir_gdo :string = this.utilService.toString(this.txtGirDire.value);
	let wss_ciu_gdo :string = this.utilService.toString(this.txtGirCiu.value);
	let wss_pai_gdo :string = this.utilService.toString(this.txtGirPais.value);
	//DATOS BANCO REEMBOLZADOR
	let wss_iso_reem :string = this.utilService.toString(this.txtBicReembolso.value);
	let wss_nom_reem :string = this.utilService.toString(this.txtReemNom.value);
	let wss_dir_reem :string = this.utilService.toString(this.txtReemDire.value);
	let wss_ciu_reem :string = this.utilService.toString(this.txtReemCiu.value);
	let wss_pai_reem :string = this.utilService.toString(this.txtReemPais.value);
	let wss_nro_ala :string = this.utilService.toString(this.txtNumeroAladi78.value);
	//DATOS AVISADOR
	let wss_iso_avi :string = this.utilService.toString(this.txtBicAvisador.value);
	let wss_nom_avi :string = this.utilService.toString(this.txtAviNom.value);
	let wss_dir_avi :string = this.utilService.toString(this.txtAviDire.value);
	let wss_ciu_avi :string = this.utilService.toString(this.txtAviCiu.value);
	let wss_pai_avi :string = this.utilService.toString(this.txtAviPais.value);
	//Spread + Costo de fondo
	let wss_tas_cp_cof :string = this.utilService.toDecimal(this.bcxCostoFondo.value);
	let wss_tas_cp_spr :string = this.utilService.toDecimal(this.bcxSpread.value);
	let wss_tas_fb_cof :string = this.utilService.toDecimal(this.bcxCostoFondoBco.value);
	let wss_tas_fb_spr :string = this.utilService.toDecimal(this.bcxSpreadBco.value);
	let wss_usercode :string = this.user_logueado;
	
	// Activamos el simbolo de progress.
	this.waitShow = true;
	// Invocamos el WS.
	this.crdRs200112Ali.call(
		  (value) => this.crdRs200112AliResult(value)
		, (value) => this.processFault(value)
		, wss_num_opr
		, wss_for_pag
		, wss_vis_pct
		, wss_pla_pct
		, wss_fec_sol
		, wss_icp_ind
		, wss_icp_tip
		, wss_icp_bas
		, wss_icp_spr
		, wss_icp_mto
		, wss_tas_ape_neg
		, wss_tas_neg_vcp
		, wss_dsd_pzo_rig
		, wss_int_bco_tip
		, wss_int_bco_bas
		, wss_int_bco_spr
		, wss_pla_bco
		, wss_tip_reem
		, wss_ind_zfr
		, wss_ind_eef
		, wss_ind_dom
		, wss_ind_tpais
		, wss_ind_ref
		, wss_iso_rec
		, wss_nom_rec
		, wss_dir_rec
		, wss_ciu_rec
		, wss_pai_rec
		, wss_iso_ord
		, wss_nom_ord
		, wss_dir_ord
		, wss_ciu_ord
		, wss_pai_ord
		, wss_iso_nom
		, wss_gls_any
		, wss_iso_gdo
		, wss_nom_gdo
		, wss_dir_gdo
		, wss_ciu_gdo
		, wss_pai_gdo
		, wss_iso_reem
		, wss_nom_reem
		, wss_dir_reem
		, wss_ciu_reem
		, wss_pai_reem
		, wss_nro_ala
		, wss_iso_avi
		, wss_nom_avi
		, wss_dir_avi
		, wss_ciu_avi
		, wss_pai_avi
		, wss_tas_cp_cof
		, wss_tas_cp_spr
		, wss_tas_fb_cof
		, wss_tas_fb_spr
		, wss_usercode
	);

	// Aca no puede haber nada que dependa del resultado (asincrono).

}
/**
 * Callback invocado por this.crdRs200112Ali.call.
 * @param wsResult Parametros de salida, mensaje de error.
 */
crdRs200112AliResult(wsResult :CmWsResult): void
{
	// Desactivamos el simbolo de progress.
	this.waitShow = false;
	/* Mover los parametros de salida a la pantalla. 
	this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
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
		let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
		this.utilService.alert(this.dialog,wss_result_msg);
	} else {
		this.crdRs200112DliCall();
	}
}
/**
 * Llamamos al Web Service.
 */
private crdRs200112DliCall(): void
{

	let pagPermi:string = "";
	let transPermi:string="";
	let doc:string="";
	let indGas:string="";
	let confi:string="";
	let rurr:string="";	

	if(this.optURR.value == 'N'){rurr="N";} if(this.optURR.value == 'S'){rurr="S";} if((this.optURR.value != 'S')&&(this.optURR.value != 'N')){rurr="";}
	if(this.optInstruccionConfirmacion.value == 'S'){confi="S";} if(this.optInstruccionConfirmacion.value=='N'){confi="N";} if(this.optInstruccionConfirmacion.value == 'M'){confi="M";}
	if(this.optGrpGst.value == 'B'){indGas="B";} if(this.optGrpGst.value=='S'){indGas="S";} if(this.optGrpGst.value == 'N'){indGas="N";}
	if(this.optGrpDcto.value == 'O'){doc="O";} if(this.optGrpDcto.value == 'S'){doc="S";}


	if(this.optEmbarqueParcial.value == 'S'){
		pagPermi="S";
	}
	else if(this.optEmbarqueParcial.value == 'N'){
		pagPermi="N";
	}
	else{
		pagPermi="C";
	}
	
	if(this.optTransbordo.value == 'S'){
		transPermi="S";
	}
	else if(this.optTransbordo.value == 'N'){
		transPermi="N";
	}
	else{
		transPermi="C";				
	}


	/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
	let wss_num_opr :string = this.numOperacion;
	let wss_for_lc :string = this.utilService.toString(this.txtFlc.value);
	let wss_cod_ucp :string = this.utilService.toString(this.txtUcp.value);
	let wss_gls_ucp :string = this.utilService.toString(this.txtUtilizableConCualquiera.value);
	let wss_dia_val_ccr :string = this.txtDiasValidez.value;
	let wss_fec_vto :any; 
	if(this.txtFechaExpiracion.value=='')
		wss_fec_vto	= '1753-01-01';
	else
		wss_fec_vto = this.utilService.toDate(this.txtFechaExpiracion.value);
	let wss_lug_vto :string = this.utilService.toString(this.txtLugarExpiracion.value);
	//DATOS DE BENEFICIARIO
	let wss_nom_ben1 :string = this.utilService.toString(this.txtBeneBic59.value);
	let wss_nom_ben2 :string = this.utilService.toString(this.txtBeneNombre59.value);
	let wss_dir_ben :string = this.utilService.toString(this.txtBeneDire59.value);
	let wss_ciu_ben :string = this.utilService.toString(this.txtBeneCiu59.value);
	let wss_pai_ben :string;
	if(this.txtPais.value == ''){
		wss_pai_ben = '0';
	} else {
		wss_pai_ben = this.utilService.toString(this.txtPais.value);
	} 
	let wss_tol_pct_neg :string;
	if(this.txtporcentaje.value == ''){
		wss_tol_pct_neg = '0';
	} else {
		wss_tol_pct_neg = this.utilService.toString(this.txtporcentaje.value);
	} 	
	let wss_tol_pct_pos :string;
	if(this.txtTolerancia.value == ''){
		wss_tol_pct_pos = '0';
	} else {
		wss_tol_pct_pos = this.utilService.toString(this.txtTolerancia.value);
	} 
	let wss_mto_adi1 :string = this.utilService.toString(this.txtMontoAdicionalCubierto.value);
	let wss_gir_a :string = this.utilService.toString(this.txtGirosATenor.value);
	let wss_pag_mix :string = this.utilService.toString(this.txtDetallePagoMixto.value);
	let wss_pag_dif :string = this.utilService.toString(this.txtDetallePagoDiferido.value);
	let wss_emb_par :string = pagPermi;
	let wss_ind_trnsb :string = transPermi;
	let wss_via_tpt :string = this.utilService.toString(this.txtViaTransporte.value);
	let wss_lug_desp :string = this.utilService.toString(this.txtLugarDespacho.value);
	let wss_pto_emb :string = this.utilService.toString(this.txtPuertoEmbarque.value);
	let wss_pto_desc :string = this.utilService.toString(this.txtPuertoDescarga.value);
	let wss_lug_dest :string = this.utilService.toString(this.txtLugarDestino44.value);
	let wss_pla_pre_doc :string = this.txtDiasPresentacionDoc.value;
	let wss_ult_fec_emb :any = this.utilService.toDate(this.txtFechaEmbarque.value);
	let wss_cls_comp :string;
	if(this.cbbClausulaCompra.value == '')
		wss_cls_comp = '0';
	else
		wss_cls_comp = this.txtClausulaCompra.value;
	let wss_fac_nom :string = this.utilService.toString(this.txtFacturasANombre.value);
	let wss_doc_emb_avi :string = doc;
	let wss_otr_avi_emb :string = this.utilService.toString(this.txtDocOtro.value);
	let wss_mar_esp_doc :string = this.utilService.toString(this.txtMarcasEspe.value);
	let wss_ind_gto :string = indGas;
	let wss_exc_gto :string = this.utilService.toString(this.txtExcepto.value);
	let wss_per_pres :string = this.utilService.toString(this.txtPeriodoPresentacion.value);
	let wss_ins_conf :string = confi;
	let wss_ind_urr :string = rurr;
	let wss_inf_rem_rec :string = this.utilService.toString(this.txtInfoRemitente72.value);
	let wss_ind_740 :string;
	if(this.chk740.value == true)
		wss_ind_740='S';
	else
		wss_ind_740='N';
	let wss_usercode :string = this.user_logueado;
	
	// Activamos el simbolo de progress.
	// this.waitShow = true;
	// Invocamos el WS.
	this.crdRs200112Dli.call(
		  (value) => this.crdRs200112DliResult(value)
		, (value) => this.processFault(value)
		, wss_num_opr
		, wss_for_lc
		, wss_cod_ucp
		, wss_gls_ucp
		, wss_dia_val_ccr
		, wss_fec_vto
		, wss_lug_vto
		, wss_nom_ben1
		, wss_nom_ben2
		, wss_dir_ben
		, wss_ciu_ben
		, wss_pai_ben
		, wss_tol_pct_neg
		, wss_tol_pct_pos
		, wss_mto_adi1
		, wss_gir_a
		, wss_pag_mix
		, wss_pag_dif
		, wss_emb_par
		, wss_ind_trnsb
		, wss_via_tpt
		, wss_lug_desp
		, wss_pto_emb
		, wss_pto_desc
		, wss_lug_dest
		, wss_pla_pre_doc
		, wss_ult_fec_emb
		, wss_cls_comp
		, wss_fac_nom
		, wss_doc_emb_avi
		, wss_otr_avi_emb
		, wss_mar_esp_doc
		, wss_ind_gto
		, wss_exc_gto
		, wss_per_pres
		, wss_ins_conf
		, wss_ind_urr
		, wss_inf_rem_rec
		, wss_ind_740
		, wss_usercode
	);

	// Aca no puede haber nada que dependa del resultado (asincrono).

}
/**
 * Callback invocado por this.crdRs200112Dli.call.
 * @param wsResult Parametros de salida, mensaje de error.
 */
crdRs200112DliResult(wsResult :CmWsResult): void
{
	
	let objetos:any[]=[];
	// Desactivamos el simbolo de progress.
	this.waitShow = false;
	/* Mover los parametros de salida a la pantalla. 
	this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
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
		let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
		this.utilService.alert(this.dialog,wss_result_msg);
	} else {
		if(this.identificador == "C"){
			this.ttlNueva.condicion=true;		
			this.ttlNueva.varCursar = 3;			
			//this.ttlNueva.crdRs200112OprIngCall('CURSAR', true);
			this.ttlNueva.varIden=true;	

			this.crdRs200112OprIngCall('CURSAR',true);

			this.ofunc_cusar_tag_50();
			

		}		
		else if(this.identificador == "N"){
			this.ofunc_cusar_tag_50();
			//ofunc_close_module();		
		}
	}
}

	//FUNCION QUE TRAE DATOS TAG 50
	ofunc_cusar_tag_50(){
		
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_txt_ord1 :string = this.txtBicOrde50.value;
		let wss_txt_ord2 :string = this.txtOrdeNom50.value;
		let wss_txt_ord3 :string = this.txtOrdeDire50.value;
		let wss_txt_ord4 :string = this.txtOrCiuPa50.value;
		let wss_usercode :string = this.user_logueado;

		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112Ord50.call(
				(value) => this.ofunc_result_cur50(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_txt_ord1
			, wss_txt_ord2
			, wss_txt_ord3
			, wss_txt_ord4
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).	


	}

	ofunc_result_cur50(wsResult :CmWsResult):void{
		let wss_result_msg:any
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
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			
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
			txtNomCorre:'',
			txtDireCorre:'',
			txtCiuCorre:'',
			txtPaisCorre:'',
			txtFlc:'',
			cbbFlc:'',
			txtNumeroCartaCredito:'',
			txtFechaEmision:['', CmDateValidator()],
			txtUcp:'',
			cbbUcp:'', 
			txtDiasValidez:'',
			txtFechaExpiracion:['', CmDateValidator()],
			txtLugarExpiracion:'',
			txtBicBancoOrdenante:'',
			txtNombreOrdenante:'',
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
			txtFechaEmbarque:['', CmDateValidator()],
			txtPeriodoEmbarque44:'',
			txtMercaderias:'',
			txtClausulaCompra:'',
			cbbClausulaCompra:'',
			txtFacturasANombre:'',
			optGrpDcto:'S',
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
			txtReemNom:'',
			txtReemDire:'',
			txtReemCiu:'',
			txtReemPais:'',
			optURR:'',
			txtNumeroAladi78:'',
			txtInstrucciones78:'',
			txtBicAvisador:'',
			txtAviNom:'',
			txtAviDire:'',
			txtAviCiu:'',
			txtAviPais:'',
			txtBicParticipante:'',
			txtParticipanteNom:'',
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
			myTextArea:'',
			bicCor :'',
			txtOtroVia:'',
			habBtnRefinanciamiento:'',
			habBotonDocumentos:'',
			habBotonOrdenante:''

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
		this.bcxMonto = this.form.controls['bcxMonto'];
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
		this.txtNomCorre = this.form.controls['txtNomCorre'];
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
		this.txtNombreOrdenante = this.form.controls['txtNombreOrdenante'];
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
		this.txtReemNom = this.form.controls['txtReemNom'];
		this.txtReemDire = this.form.controls['txtReemDire'];
		this.txtReemCiu = this.form.controls['txtReemCiu'];
		this.txtReemPais = this.form.controls['txtReemPais'];
		this.optURR = this.form.controls['optURR'];
		this.txtNumeroAladi78 = this.form.controls['txtNumeroAladi78'];
		this.txtBicAvisador = this.form.controls['txtBicAvisador'];
		this.txtAviDire = this.form.controls['txtAviDire'];
		this.txtAviNom = this.form.controls['txtAviNom'];
		this.txtAviCiu = this.form.controls['txtAviCiu'];
		this.txtAviPais = this.form.controls['txtAviPais'];		
		this.txtBicParticipante = this.form.controls['txtBicParticipante'];
		this.txtParticipanteNom = this.form.controls['txtParticipanteNom'];
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
		this.bicCor = this.form.controls['bicCor'];
		this.txtOtroVia = this.form.controls['txtOtroVia'];
		this.habBtnRefinanciamiento = this.form.controls['habBtnRefinanciamiento'];
		this.habBotonDocumentos = this.form.controls['habBotonDocumentos'];
		this.habBotonOrdenante = this.form.controls['habBotonOrdenante'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtTasa.setValidators(CmTextoComboValidator(this.cbbTasaArray, 'wss_tip_tas'));
		this.txtFormaPagoBenef.setValidators(CmTextoComboValidator(this.cbbFormaPagoBenefArray, 'wss_cod_fpag'));
		this.txtPlazoRigeDesde.setValidators(CmTextoComboValidator(this.cbbPlazoRigeDesdeArray, 'wss_cod_rdd'));
		this.txtTasaProveedor.setValidators(CmTextoComboValidator(this.cbbTasaProveedorArray, 'wss_tip_tas'));
		this.txtTasaFinanciamiento.setValidators(CmTextoComboValidator(this.cbbTasaFinanciamientoArray, 'wss_tip_tas'));
		this.txtFlc.setValidators(CmTextoComboValidator(this.cbbFlcArray, 'wss_cod_flc'));
		this.txtUcp.setValidators(CmTextoComboValidator(this.cbbUcpArray, 'wss_cod_rucp'));
		this.txtReembolso.setValidators(CmTextoComboValidator(this.cbbReembolsoArray, 'Cod'));
		this.txtZonaFranca.setValidators(CmTextoComboValidator(this.cbbZonaFrancaArray, 'Cod'));
		this.txtPais.setValidators(CmTextoComboValidator(this.cbbPaisArray, 'wss_cod_pais'));
		this.txtViaTransporte.setValidators(CmTextoComboValidator(this.cbbViaTransporteArray, 'wss_cod_viat'));
		this.txtClausulaCompra.setValidators(CmTextoComboValidator(this.cbbClausulaCompraArray, 'wss_cod_clacom'));




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
			this.utilService.toUpper(this.txtPlazoRigeDesde);
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
			this.utilService.toUpper(this.txtUcp);
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

	cmdDocumentosRequeridos_click() {

		if(this.cbbClausulaCompra.value != '')
		    //Application.application.varClausula = txtClausulaCompra.text;
			this.varClausula = this.txtClausulaCompra.value;
		else
			//Application.application.varClausula = '0';
			this.varClausula = '0';
			
		if(this.cbbPais.value == '')
			//this.varDocReq.codPais = 0;
			this.codPais = 0;
		else
			//this.varDocReq.codPais = Number(this.txtPais.value);
			this.codPais = this.txtPais.value;

		this.contextService.store(this);
		//varDocReq.nroTransporte = int(txtViaTransporte.text);
		this.contextService.setUserData("nroTransporte",this.txtViaTransporte.value);
		this.contextService.setUserData("numOperacion",this.numOperacion);	
		this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);	
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("opcion", this.opcion);
		this.contextService.setUserData("codPais", this.codPais);
		this.contextService.setUserData('varClausula', this.varClausula);

		this.router.navigate(['/documentosrequeridos']);
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
			if(this.varPlantillaGlobal == true) {	
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
		//this.waitShow = false;
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
			this.varInicio = 1;
			
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
			
			this.ofunc_cargar_inrem(this.txtInstrucciones78);
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

		this.myTextArea = myTextArea;
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
		let myTextArea_array:any[]=[];
		let myTextAreaAux:any;

		myTextArea_array = wsResult.getTableRows();

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
			for(let i=0; i< myTextArea_array.length; i++){
				myTextAreaAux = myTextAreaAux + myTextArea_array[i].wss_lin_txt+"\n";
			}	

			this.myTextArea.patchValue(myTextAreaAux);
			this.ofunc_cargar_inrem(this.txtInstrucciones78);
		}
	}


	
	ofunc_cargar_inrem(myTextArea:any){
		
		this.myTextArea = myTextArea;
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'INREM';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		//this.waitShow = true;
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
		
		let myTextArea_array:any[]=[];
		let myTextAreaAux:any;

		myTextArea_array = wsResult.getTableRows();

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
			for(let i=0; i< myTextArea_array.length; i++){
				myTextAreaAux = myTextAreaAux + myTextArea_array[i].wss_lin_txt+"\n";
			}	
			myTextAreaAux.replace('undefined','')
			this.myTextArea.patchValue("");
			this.myTextArea.patchValue(myTextAreaAux);
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


	ofunc_clean_grid(){
		this.tableRows = [
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},
			{ wss_pct_pzo:'',wss_dia_pzo: ''},

		  ];
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
		//this.waitShow = false;
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

		// if(arrAutomata[5] == true){
		// 	this.habPorcentajeGrilla = false;
		// 	this.habDiasPlazoGrilla = false;
		// } else {
		// 	this.habPorcentajeGrilla = true;
		// 	this.habDiasPlazoGrilla = true;
		// }


		//this.tblPorDias.enabled=arrAutomata[5];
		if(arrAutomata[6] == true){
			this.chbkInteresCreditoProveedor.enable();
		} else {
			this.chbkInteresCreditoProveedor.disable();
		}

		if(this.financiamiento_indicador_opcion == 'Preingreso'){

			this.txtDesdeApeANego.disable();
			this.txtDesdeNegoAVcto.disable();
			this.txtTasaFinanciamiento.disable();
			this.bcxValorBaseBco.disable();
			this.bcxSpreadBco.disable();
			this.bcxCostoFondoBco.disable();
			this.cbbTasaFinanciamiento.disable();
			this.txtDiasPlazoBco.enable();

		} else {

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
			this.habTxtBicRecep = false;
		} else {
			this.habTxtBicRecep = true;
		}

		if(arrAutomata[24] == true){
			this.txtNomCorre.enable();
		} else {
			this.txtNomCorre.disable();
		}
		//this.btnBicRecep.enabled=arrAutomata[23];
		//this.txtNomCorre.enabled=arrAutomata[24];
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
			this.cbbFlc.enable();
		} else {
			this.txtFlc.disable();
			this.cbbFlc.disable();
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
			this.cbbUcp.enable();
		} else {
			this.txtUcp.disable();
			this.cbbUcp.disable();
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
			this.habTxtBicBancoOrdenante = false;
		} else {
			this.habTxtBicBancoOrdenante = true;
		}

		if(arrAutomata[36] == true){
			this.txtNombreOrdenante.enable();
		} else {
			this.txtNombreOrdenante.disable();
		}
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
			this.cbbPais.enable();
		} else {
			this.txtPais.disable();
			this.cbbPais.disable();
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
			this.habTxtUtilizableCon = false;
		} else {
			this.habTxtUtilizableCon = true;
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
			this.habTxtBicGirado = false;
		} else {
			this.habTxtBicGirado = true;
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

		if(arrAutomata[75] == true){
			this.habBotonDocumentos.patchValue(false);
		} else {
			this.habBotonDocumentos.patchValue(true);
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
			this.txtBicReembolso = false;		
		} else {
			this.txtBicReembolso = true;		
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
			this.txtBicAvisador = false;		
		} else {
			this.txtBicAvisador = true;		
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
		
		let valueText:any = myText.value;

		if(myText.value!= '0,000000'){
			if(Number(this.utilService.toDecimal(myText.value)) > Number(this.utilService.toDecimal('100,000000'))){
				this.utilService.alert(this.dialog, "Valor ingresado fuera de rango","Carta de crédito")
				myText.patchValue('0,000000');
				//myText.setFocus();
			}
		}
	}


	ofunc_validar_spread():void {
		
		let costoFondo:any = Number(this.utilService.toDecimal(this.bcxCostoFondo.value));
		let spreadSumar:any = Number(this.utilService.toDecimal(this.bcxSpread.value));	
		let resultado:number = costoFondo + spreadSumar;

		if(resultado!= 0.000000){
			if(resultado > Number(this.utilService.toDecimal('100,000000'))){
				this.utilService.alert(this.dialog, "Valor ingresado fuera de rango");
				this.bcxCostoFondo.patchValue('0,000000');
				this.bcxSpread.patchValue('0,000000');
				//myText.setFocus();
			}
		}
	}


	ofunc_validar_spread_bco():void {
			
		let costoFondoBco:any = Number(this.utilService.toDecimal(this.bcxCostoFondoBco.value));
		let spreadSumarBco:any = Number(this.utilService.toDecimal(this.bcxSpreadBco.value));	
		let resultadoBco:number = costoFondoBco + spreadSumarBco;

		if(resultadoBco!= 0.000000){
			if(resultadoBco > Number(this.utilService.toDecimal('100,000000'))){
				this.utilService.alert(this.dialog, "Valor ingresado fuera de rango");
				this.bcxCostoFondo.patchValue('0,000000');
				this.bcxSpread.patchValue('0,000000');
				//myText.setFocus();
			}
		}
	}

	ofunc_eval_porce():void{
		
		if((this.cbbFormaPagoBenefArray[3].wss_gls_fpag == 'BY MIXED PAYMT')&& (this.bcxPorcentajePlazo.value != "0,000000")){
			let a:any=Number(this.utilService.toDecimal(this.bcxPorcentajeVista.value));
			let b:any=Number(this.utilService.toDecimal(this.bcxPorcentajePlazo.value));
			let suma:Number=a + b;
			if(suma == 100.00000)
				return;
			else{
				this.bcxPorcentajePlazo.patchValue("");
				this.utilService.alert(this.dialog,"Porcentaje de vista + plazo debe ser 100%");					
			}
		}
	}
	
	ofunc_val_fec_pro():void{
		
		let aux1 = this.utilService.toDateUi(this.fechaProceso);
		let aux2 = this.utilService.toDateUi(this.txtFechaSolicitud.value);

		let tst:any[] =new Array(aux1.split("/"));
		let val1:any=tst[0][2].toString()+""+tst[0][1].toString()+""+tst[0][0].toString();
		let val2:any=0;
		if(this.txtFechaSolicitud.value != ""){
			var tstDos:any[]=new Array(aux2.split("/"));
			val2=tstDos[0][2].toString()+""+tstDos[0][1].toString()+""+tstDos[0][0].toString();
		}
		
		if(val1<val2) {
			if(val2 ==0) return;
			else {				
				this.utilService.alert(this.dialog,"Fecha de solicitud no puede ser mayor que la fecha de proceso");
				return;
			}
		}
	}

	updateValue(event:any, cell, rowIndex){
		

		console.log('inline editing rowIndex', rowIndex);
		this.editing[rowIndex + '-' + cell] = false;
		this.tableRowsTemp[rowIndex][cell] = event.target.value;
		this.tableRowsTemp = [...this.tableRowsTemp];
		console.log('UPDATED!', this.tableRowsTemp[rowIndex][cell]);
		this.tableRows = this.tableRowsTemp;
	}


	ofunc_hab() {
		
		if(this.chbkInteresCreditoProveedor.value == true){
			this.txtTasaProveedor.enable();
			this.cbbTasaProveedor.enable();
			this.bcxValorBase.enable();
			this.bcxSpread.enable();
			this.bcxCostoFondo.enable();
			this.bcxMonto.enable();
		}
		else{
			this.txtTasaProveedor.patchValue("");
			this.cbbTasaProveedor.patchValue("");
			this.bcxValorBase.patchValue("");
			this.bcxSpread.patchValue("");
			this.bcxCostoFondo.patchValue("");
			this.bcxMonto.patchValue("");			
			this.txtTasaProveedor.disable();
			this.cbbTasaProveedor.disable();
			this.cbbTasaProveedor.patchValue("");	
			this.bcxValorBase.disable();
			this.bcxSpread.disable();
			this.bcxCostoFondo.disable();	
			this.bcxMonto.disable();
	
		}
		
		this.ofunc_39C();
	}

	ofunc_39C(){
		if(Number(this.bcxMonto.value) > 0){
			this.txtMontoAdicionalCubierto.patchValue('');
			this.txtMontoAdicionalCubierto.enable();
		}else{
			this.txtMontoAdicionalCubierto.patchValue('');
			this.txtMontoAdicionalCubierto.disable();
		}
	}

	deshabilitar_campos() {

		this.txtFormaPagoBenef.disable();
		this.cbbFormaPagoBenef.disable();
		this.bcxPorcentajeVista.disable();
		this.bcxPorcentajePlazo.disable();
		this.txtPlazoRigeDesde.disable();
		this.cbbPlazoRigeDesde.disable();
		this.txtFechaSolicitud.disable();
		this.bcxValorBase.disable();
		this.bcxCostoFondo.disable();
		this.bcxSpread.disable();
		this.bcxMonto.disable();	
		this.txtTasaProveedor.disable();
		this.cbbTasaProveedor.disable();
		this.bcxValorBase.disable();

		this.bcxValorBase.disable();
		this.bcxCostoFondo.disable();
		this.bcxSpread.disable();
		this.bcxMonto.disable();
		this.txtDesdeApeANego.disable();
		this.txtDesdeNegoAVcto.disable();
		this.txtTasaFinanciamiento.disable();
		this.cbbTasaFinanciamiento.disable();
		this.bcxValorBaseBco.disable();
		this.bcxCostoFondoBco.disable();
		this.bcxSpreadBco.disable();
		this.txtDiasPlazoBco.disable();
		this.txtReembolso.disable();
		this.cbbReembolso.disable();
		this.txtZonaFranca.disable();
		this.cbbZonaFranca.disable();
		this.chbkEnteradaEfectivo.disable();
		this.chbkDomestica.disable();
		this.chbkTercerosPaises.disable();
		this.chbkRefinanciamiento.disable();
		this.txtBicRecep.disable();
		this.txtNomCorre.disable();
		this.txtDireCorre.disable();
		this.txtCiuCorre.disable();
		this.txtPaisCorre.disable();
		this.txtFlc.disable();
		this.cbbFlc.disable();
		this.txtNumeroCartaCredito.disable();
		this.txtFechaEmision.disable();
		this.txtUcp.disable();
		this.cbbUcp.disable();
		this.txtDiasValidez.disable();
		this.txtFechaExpiracion.disable();
		this.txtLugarExpiracion.disable();
		this.txtBicBancoOrdenante.disable();
		this.txtNombreOrdenante.disable();
		this.txtDireOrdenante.disable();
		this.txtCiuOrdenante.disable();
		this.txtPaisOrdenante.disable();
		this.txtBicOrde50.disable();
		this.txtOrdeNom50.disable();
		this.txtOrdeDire50.disable();
		this.txtOrCiuPa50 .disable();
		this.txtPais.disable();
		this.cbbPais.disable();
		this.txtCodMonMonto.disable();
		this.txtporcentaje.disable();
		this.txtTolerancia.disable();
		this.txtMontoAdicionalCubierto.disable();
		this.txtUtilizableCon.disable();
		this.txtUtilizableConCualquiera.disable();
		this.txtPor.disable();
		this.txtGirosATenor.disable();
		this.txtBicGirado.disable();
		this.txtGirNom.disable();
		this.txtGirDire.disable();
		this.txtGirCiu.disable();
		this.txtGirPais.disable();
		this.txtDetallePagoMixto.disable();
		this.txtDetallePagoDiferido.disable();
		this.optEmbarqueParcial.disable();
		this.optTransbordo.disable();
		this.txtViaTransporte.disable();
		this.cbbViaTransporte.disable();
		this.txtLugarDespacho.disable();
		this.txtPuertoEmbarque.disable();
		this.txtPuertoDescarga.disable();
		this.txtDiasPresentacionDoc.disable();
		this.txtFechaEmbarque.disable();
		this.txtPeriodoEmbarque44.disable();
		this.txtMercaderias.disable();
		this.txtClausulaCompra.disable();
		this.cbbClausulaCompra.disable();
		this.txtFacturasANombre.disable();
		this.optGrpDcto.disable();
		this.txtDocOtro.disable();
		this.optInstruccionConfirmacion.disable();
		this.txtCondicionesAdicio47.disable();
		this.txtCondicionesEspecialesPagoBeneficiario.disable();
		this.txtCondicionesEspecialesPagoBancoReceptor.disable();
		this.optGrpGst.disable();
		this.txtExcepto.disable();
		this.txtNumeroPeriodoPresentacion.disable();
		this.chkPeriodoPresentacion.disable();
		this.txtPeriodoPresentacion.disable();
		this.chk740.disable();
		this.txtBicReembolso.disable();
		this.txtReemNom.disable();
		this.txtReemDire.disable();
		this.txtReemCiu.disable();
		this.txtReemPais.disable();
		//this.optURR.disable();
		this.txtNumeroAladi78.disable();
		this.txtBicAvisador.disable();
		this.txtAviDire.disable();
		this.txtAviNom.disable();
		this.txtAviCiu.disable();
		this.txtAviPais.disable();	
		this.txtBicParticipante.disable();
		this.txtParticipanteNom.disable();
		this.txtParticipanteDire.disable();
		this.txtParticipanteCiu.disable();
		this.txtParticipantePais.disable();
		this.txtInfoRemitente72.disable();
		this.txtInstrucciones78.disable();
		//this.myText.disable();
		this.txtUcpOtra.disable();
		this.txtBeneBic59.disable();
		this.txtBeneNombre59.disable();
		this.txtBeneDire59.disable();
		this.txtBeneCiu59.disable();
		this.txtMarcasEspe.disable();
		this.txtLugarDestino44.disable();
		this.myTextArea.disable();
		// this.bicCor.disable();
		this.txtOtroVia.disable();
		this.habBtnRefinanciamiento.disable();

		this.habTxtBicRecep = true;
		this.habTxtBicBancoOrdenante = true;
		this.habTxtUtilizableCon = true;
		this.habTxtBicGirado = true;
		this.habTxtBicReembolso = true;
		this.habTxtBicAvisador = true;
		this.habTxtBicParticipante = true;

		this.habPorcentajeGrilla = true;
		this.habDiasPlazoGrilla = true;


	}

	focusout_txtTasaProveedor(){
		if(this.cbbTasaProveedor.value!='' || this.txtTasaProveedor.value != '') {  
			this.bcxMonto.patchValue('');
			this.bcxMonto.enable();
		}else{
			this.bcxMonto.disable();
		}

	}

	change_tasas_proveedor_grl(){
		if(this.bcxSpread.value!='0,000000'){
			this.bcxMonto.patchValue("");
			this.bcxMonto.enable();
		}else{
			this.bcxMonto.disable();
		}
	}

	ofunc_write_nueva():void{
		// ttlNueva.txtTasa.text="0";
		// ttlNueva.cmbTasa.selectedIndex=0;
		// ttlNueva.txtTasaDos.text="0";	

		// ttlNueva.txtSpread.text="0";
		// ttlNueva.txtCostoFondo.text="0";	 
		// ttlNueva.txtTasaFnl.text="0";

		// ttlNueva.txtSpread.text="0";
		// ttlNueva.txtCostoFondo.text="0";
		// ttlNueva.txtTasaFnl.text="0";
		
		//ORIGINALMENTE HACÍA ESTO
		///ttlNueva.txtSpread.text=txtDesdeApeANego.text;	 
		//ttlNueva.txtTasaFnl.text=txtSpread.text; 	
	}

	focusout_txtReembolso(event):void{
	
		this.ofunc_aladi();
		this.ofunc_inhi_rurr();
		this.ofunc_precarga_pago();
	}


	ofunc_aladi(){

		let wss_num_opr: string  = this.numOperacion;
		let wss_ind_ald: string = this.txtReembolso.value;
		let wss_usercode: string = this.user_logueado;

		this.crdRs200118Ald.call (
			(value) => this.ofunc_result_aladi(value)
		  , (value) => this.processFault(value)
		  , wss_num_opr
		  , wss_ind_ald
		  , wss_usercode
	  );
		

	}

	ofunc_result_aladi(wsResult:CmWsResult){

		let wss_result_msg:string;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 

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
		}	
		else {
			this.txtNumeroAladi78.patchValue(wsResult.getResultString('wss_nro_aladi'));
			if(this.txtReembolso.value == 'A'){
				this.txtBicReembolso.patchValue('BCECCLRMXXX');
				this.myText.patchValue(this.txtBicReembolso.value);
				this.ofunc_banco_bic(this.txtBicReembolso);
				this.chk740.patchValue(false);
				this.chk740.disable();
				this.ofunc_inhi_rurr();
			}
			else{
				this.txtBicReembolso.patchValue('');
		
				this.ofunc_clean_bic(this.txtBicReembolso,this.txtReemNom,this.txtReemDire,this.txtReemCiu,this.txtReemPais);
				this.chk740.enable();
				if(this.financiamiento_indicador_opcion != 'Detalle' || this.financiamiento_indicador_opcion !='Preingreso')
					this.ofunc_valida_740();
			}
		}
	}

	ofunc_valida_740(){
		if(this.txtReembolso.value == 'A')
			return;
		if(!this.chk740.value == false){
			this.txtBicReembolso.patchValue("");
			//this.txtReemNom.text = "";
			this.txtReemCiu.patchValue("");
			this.txtReemDire.patchValue("");
			this.txtReemPais.patchValue("");			
			this.txtBicReembolso.disable();
			this.btnBicReembolso = false;			
			this.optURR.patchValue("");
			this.optURR.disable();
			this.ofunc_inhi_rurr();							
			this.ofunc_urr();
		}else{
			
			this.myText.patchValue(this.txtBicReembolso.value);
			this.bFlagCambioEspecial=true;		
			this.txtBicReembolso.patchValue(this.bicCor);				
			this.ofunc_event_focus_banco(this.bicCor);

			if(this.financiamiento_indicador_opcion == 'Detalle' || this.financiamiento_indicador_opcion == 'Preingreso'){
				if(this.consulta!='C'){
					this.habTxtBicReembolso.enable();
					this.optURR.enable();
				}else{
					this.habTxtBicReembolso.disable();	
					this.optURR.disable();			
				}
			}
			
			this.txtBicReembolso.enable();
			this.btnBicReembolso = true;
			this.ofunc_inhi_rurr();				
			this.ofunc_urr();				
		}
		this.varFpag = '';
		this.varPais = '';
		this.ofunc_textos_740();	
	}


	 ofunc_textos_740():void{
		if(this.chk740.value == true)
			this.txtInstrucciones78.patchValue('');
		else
			this.ofunc_precarga_reembolso();
			
		this.ofunc_grabar_texto('INREM',this.txtInstrucciones78.value);
		if(this.chk740.value == true){
			if(this.optURR.value == 'S'){
				this.txtUcp.patchValue('UCP');
				
			}
			else if(this.optURR.value == 'N'){
				this.txtUcp.patchValue('UCPURR');
			}				
		}
		else{
			this.txtUcp.patchValue('UCP');		
		}			
	}


	//FUNCION FICTICIA PARA PRECARGA SOLO DE INSTRUCCIONES DE REEMBOLSO
	ofunc_precarga_reembolso():void{
		//Alert.show(radiogroup1.selectedValue.toString());
		if((this.txtPais.value=="") || (this.txtPais.value == '0'))				
			return;
		if((this.varFpag != this.txtFormaPagoBenef.value) || (this.varCondicion != this.optInstruccionConfirmacion.value) 
		|| (this.varPais != this.txtPais.value) || (this.varBancoCorr != this.txtBicRecep.value) || (this.varBanReem != this.txtBicReembolso.value)
		|| (this.txtReembolso.value != this.varReembolso)){							
			let myArray:any[] = [];
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
			myArray[7]=this.user_logueado;

			// Activamos el simbolo de progress.
			this.waitShow = true;
			// Invocamos el WS.
			this.crdRs200152TxtLciT78.call(
				(value) => this.ofunc_result_prec_inrem(value)
				, (value) => this.processFault(value)
				, myArray[0]
				, myArray[1]
				, myArray[2]
				, myArray[3]
				, myArray[4]
				, myArray[5]
				, myArray[6]
				, myArray[7]
			);
		}
	}
	ofunc_result_prec_inrem(wsResult :CmWsResult):void{

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
			this.varInicio = 1;
			
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
			
			this.ofunc_cargar_inrem_prec();
		}
	}


		
	ofunc_cargar_inrem_prec(){
		
		/* Mover los datos de la pantalla a los parametros del Web Service.  
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'INREM';
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160TxtLci.call(
			  (value) => this.ofunc_cargar_inrem_prec_Result(value)
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
	ofunc_cargar_inrem_prec_Result(wsResult :CmWsResult): void
	{
		
		let myTextArea_array:any[]=[];
		let myTextAreaAux:any;

		myTextArea_array = wsResult.getTableRows();

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
			// for(let i=0; i< myTextArea_array.length; i++){
			// 	myTextAreaAux = myTextAreaAux + myTextArea_array[i].wss_lin_txt+"\n";
			// }	
			myTextAreaAux.replace('undefined','')
			this.txtInstrucciones78.patchValue(myTextArea_array[0].wss_lin_txt);
		}
	}





	ofunc_clean_bic(prin:any,c1:any,c2:any,c3:any,c4:any){
		let nameControl =this.getname_formcontrolname(prin);
	
		if((prin.value == '') || (prin.value == ' ')){
			c1.patchValue("");
			c2.patchValue("")
			c3.patchValue("")
			c4.patchValue("")
			c1.enable();
			c2.enable();
			c3.enable();
			c4.enable();
			if(nameControl == "txtBicReembolso"){

				this.optURR.patchValue("");
				this.optURR.disable();
				c1.disable();
				c2.disable();
				c3.disable();
				c4.disable();
			}
		}
		else {
			c1.disable();
			c2.disable();
			c3.disable();
			c4.disable();
			if(nameControl == "txtBicReembolso"){					
				this.optURR.enable();
				c1.disable();
				c2.disable();
				c3.disable();
				c4.disable();
			}
		}
	}

	ofunc_seteo_mayuscula_bancos(myText:any){
		if(myText.value == ''){
			return;
		}
		this.utilService.toUpper(myText);
	}


	change_chbkRefinanciamiento(){
		if(this.chbkRefinanciamiento.value == true){
			this.habBtnRefinanciamiento.patchValue(false);
		} else {
			this.habBtnRefinanciamiento.patchValue(true);
		}
	}

	change_txtBicRecep() {
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.utilService.toUpper(this.txtBicRecep);
			this.ofunc_clean_bic(this.txtBicRecep,this.txtNomCorre,this.txtDireCorre,this.txtCiuCorre,this.txtPaisCorre);	
		}this.ignoredFirstEvent = true;
	}

	focusout_txtBicRecep(){
		
		this.myText=this.txtBicRecep;
		this.ofunc_event_focus_banco(this.txtBicRecep);
		this.ofunc_precarga_pago()
	}

	focusout_txtFechaEmision(){
		this.ofunc_calc_fecha(1)
	}

	focusout_txtUlc(){
		if(this.txtUcp.value=='OTHR')
			this.txtUcpVisible=true; 
		else 
			this.txtUcpVisible=false;
	}

	closeHandler_cbbUcp(){
		if(this.txtUcp.value=='OTHR'){
			this.txtUcpOtra.patchValue('');
			this.txtUcpVisible=true;
		} else{
			this.txtUcpOtra.patchValue('');
			this.txtUcpVisible=false;
		}

	}

	focusout_txtDiasValidez(){
		this.ofunc_calc_fecha(2);
	}

	ofunc_seteo_mayuscula(txtInputGrl:any){
		if(txtInputGrl.value == ''){
			return;
		}
		this.utilService.toUpper(txtInputGrl);
	}


	change_txtBicBancoOrdenante(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.ofunc_seteo_mayuscula_bancos(this.txtBicBancoOrdenante);
			this.ofunc_clean_bic(this.txtBicBancoOrdenante,this.txtNombreOrdenante,this.txtDireOrdenante,this.txtCiuOrdenante,this.txtPaisOrdenante);
		}this.ignoredFirstEvent = true;
	}


	focus_txtBicBancoOrdenante(){
		this.myText=this.txtBicBancoOrdenante;
		this.ofunc_event_focus_banco(this.txtBicBancoOrdenante);
	}

	ofunc_event_focus_banco(myTextBcoGral:any){
		let nombreCampo:string;
		if(myTextBcoGral.value == "" || myTextBcoGral.value == null){
			return;
		}
		
		nombreCampo = this.getname_formcontrolname(myTextBcoGral);
		this.ofunc_banco_bic(nombreCampo);
	}


	focusout_txtPais(txtPaisAux:any){
		if(txtPaisAux.valid){
			this.ofunc_precarga_pago();
		} else {
			return;
		}
	}

	cbbPais_openedChange(event){
		if(this.txtPais.valid){
			this.ofunc_precarga_pago();
		} else {
			return;
		}
	}

	focusout_txtporcentaje(){
		if(this.txtporcentaje.value=='')
			this.txtporcentaje.patchValue('0');
	}

	focusout_txtTolerancia(){
		if(this.txtTolerancia.value=='')
			this.txtTolerancia.patchValue('0');
	}


	change_txtUtilizableCon(){
		if(this.txtUtilizableCon.value != '' || this.txtUtilizableCon.value != null){
			this.txtUtilizableConCualquiera.disable();
			this.txtUtilizableConCualquiera.patchValue('');
		}else if(this.txtUtilizableConCualquiera.value =='' || this.txtUtilizableConCualquiera.value == null){
			this.txtUtilizableConCualquiera.enable();
			this.txtUtilizableConCualquiera.patchValue('ANY BANK');
		};
	}

	focusout_txtUtilizableCon(){
		this.myText=this.txtUtilizableCon;
		this.ofunc_event_focus_banco(this.txtUtilizableCon);
		if(this.txtUtilizableCon.value != '' || this.txtUtilizableCon.value !=null){
			this.txtUtilizableConCualquiera.disable();
			this.txtUtilizableConCualquiera.patchValue('');
		}else if(this.txtUtilizableConCualquiera.value=='' || this.txtUtilizableConCualquiera.value==null){
			this.txtUtilizableConCualquiera.enable();
			this.txtUtilizableConCualquiera.patchValue('ANY BANK');
		}
	}

	ofunc_textArea_mayuscula_txtUt(txtAreaGrl:any){

		this.utilService.toUpper(txtAreaGrl);
		
		if(this.txtUtilizableConCualquiera.value != '' || this.txtUtilizableConCualquiera.value != null){
			this.txtUtilizableCon.patchValue('');
		}else{
			this.txtUtilizableCon.enable();
			this.bloquearBtnUtilizableCon =true;
		}
		this.bFlagCambioEspecial=true

		
	}

	change_txtBicGirado(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.ofunc_seteo_mayuscula_bancos(this.txtBicGirado);
			this.ofunc_clean_bic(this.txtBicGirado,this.txtGirNom,this.txtGirDire,this.txtGirCiu,this.txtGirPais);
		}this.ignoredFirstEvent = true;
	}

	focusout_txtBicGirado(){
		this.myText=this.txtBicGirado;
		this.ofunc_event_focus_banco(this.txtBicGirado);
	}

	ofunc_textArea_mayuscula(txtAreaGrl:any){
		this.utilService.toUpper(txtAreaGrl)
	}

	change_txtViaTransporte(){
		this.varTransporte=true;		
	}

	focusout_txtViaTransporte(){
		if(this.txtViaTransporte.value== '10'){
			this.visTxtOtroVia = true;
			//this.txtOtroVia.setFocus();
		}else{
			this.txtOtroVia.patchValue('');
			this.visTxtOtroVia =false;
		}
		this.ofunc_doc_trans();
	}

	cbbViaTransporte_openedChange(){
		if(this.txtViaTransporte.value== '10'){
			this.visTxtOtroVia=true;
			//txtOtroVia.setFocus();
		}else{
			this.txtOtroVia.patchValue('');
			this.visTxtOtroVia=false;
		}
		this.ofunc_doc_trans();
	}

	//FUNCION QUE VALIDA ORDENANTE
	ofunc_odenante():void{
		
		let txtBeneBic59Aux:string;

		txtBeneBic59Aux = this.txtBeneBic59.value;

		if(txtBeneBic59Aux.substring(0,1) == '/'){
			this.txtBeneCiu59.enable();
			if(txtBeneBic59Aux.length == 1){
				this.utilService.alert(this.dialog,"Debe ingresar cuenta corriente");
				//txtBeneBic59.setFocus();
			}
		}						
	}

	change_txtNumeroPeriodoPresentacion(){
		this.txtNumeroPeriodoPresentacion=this.txtDiasPresentacionDoc;
	}

	focusout_txtNumeroPeriodoPresentacion(){
		this.ofunc_calc_fecha_embarque(2);
	}

	focusout_txtPeriodoEmbarque44(){
		this.bFlagCambioEspecial=true;
		this.ofunc_grabar_texto('PEEMB',this.txtPeriodoEmbarque44.value);
	}

	change_txtPeriodoEmbarque44(){
		this.ofunc_textArea_mayuscula(this.txtPeriodoEmbarque44);
		this.bFlagCambioEspecial=true
	}

	focusout_txtMercaderias(){
		this.ofunc_grabar_texto('MERCA',this.txtMercaderias.value)
	}

	change_txtMercaderias(){
		this.ofunc_textArea_mayuscula(this.txtMercaderias);	
		this.bFlagCambioEspecial=true;

	}

	focusout_txtCondicionesAdicio47() {
		this.bFlagCambioEspecial=true;
		this.ofunc_grabar_texto('CONAD',this.txtCondicionesAdicio47.value)
	}

	change_txtCondicionesAdicio47(){
		this.ofunc_textArea_mayuscula(this.txtCondicionesAdicio47);
		this.bFlagCambioEspecial=true
	}

	focusout_txtCondicionesEspecialesPagoBeneficiario() {

		this.ofunc_grabar_texto('SCONB',this.txtCondicionesEspecialesPagoBeneficiario.value)
	}

	focusout_txtCondicionesEspecialesPagoBancoReceptor(){
		this.ofunc_grabar_texto('SCONR',this.txtCondicionesEspecialesPagoBancoReceptor.value);
	}	

	change_optGrpGst(){
		if(this.optGrpGst.value == 'S')
			this.txtExcepto.enable();
		else if(this.optGrpGst.value == 'B')
			this.txtExcepto.enable();
		else
			this.txtExcepto.disable();	
	}

	ofunc_habi():void{
		if(this.optGrpDcto.value == 'O'){
			this.txtDocOtro.enable();
			//txtDocOtro.setFocus();
		}
		else{
			this.txtDocOtro.patchValue('');
			this.txtDocOtro.disable();
		}
	}

	habilitaPeriodoPresentacion():void{
		if(this.chkPeriodoPresentacion.value == true){
			this.txtPeriodoPresentacion.enable();
		}
		else{
			this.txtPeriodoPresentacion.disable();
			this.txtPeriodoPresentacion.patchValue("");
		}
	}

	ofunc_instruccion_confirm(){
		let varError:number = 0;
		if(this.varCount == 2){
			do{			
				varError++;
				if(varError >= 1000000)
					this.varCount = 0;	
			}while(this.varCount != 0);
		}else if(this.varCount == 1){
			this.varCount = 3;
			this.bFlagCambioEspecial=true;
			this.ofunc_grabar_texto('CONAD',this.txtCondicionesAdicio47.value);
		}
		this.ofunc_precarga_pago();	
	}

	ofunc_grabar_texto(cIndicador:string, cTexto:any){

		if ((cIndicador == 'MOADI') && (this.bFlagCambioEspecial == false))
			return;		
		if ((cIndicador == 'UTCON') && (this.bFlagCambioEspecial == false))
			return;	
		if ((cIndicador == 'PEEMB') && (this.bFlagCambioEspecial == false))
			return;
		if ((cIndicador == 'MERCA') && (this.bFlagCambioEspecial == false))
			return;
		if ((cIndicador == 'CONAD') && (this.bFlagCambioEspecial == false))
			return;
		if ((cIndicador == 'INREM') && (this.bFlagCambioEspecial == false))
			return;

		let wss_sw_itr: string // Boolean
		let wss_cod_prd: string = this.WSS_D01_SGM;
		let wss_tip_txt: string = cIndicador;
		let wss_num_opr: string = this.numOperacion;
		let wss_lin_txt: string = cTexto;
		let wss_usercode: string = this.user_logueado;

		if(this.varCount == 3){
			this.varCount = 0;
			return;
		}
		else if(this.varCount == 1)
			this.varCount = 2;			
					
			
		this.crdRs200111TxtLci.call (
			(value) => this.ofunc_result_texto(value)
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

	change_txtBicReembolso(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.myText=this.txtBicReembolso;
			this.ofunc_seteo_mayuscula_bancos(this.txtBicReembolso);
			this.ofunc_clean_bic(this.txtBicReembolso,this.txtReemNom,this.txtReemDire,this.txtReemCiu,this.txtReemPais);
		}this.ignoredFirstEvent = true;
	}
	focusout_txtBicReembolso(){
		this.ofunc_event_focus_banco(this.txtBicReembolso);
		this.ofunc_validacion_bancos();
	}

	
	focusout_txtInstrucciones78(){
		this.ofunc_grabar_texto('INREM',this.txtInstrucciones78.value);
	}

	change_txtInstrucciones78(){

		this.ofunc_textArea_mayuscula(this.txtInstrucciones78);
		this.bFlagCambioEspecial=true;
	}

	focusout_txtBicAvisador(){
		this.ofunc_event_focus_banco(this.txtBicAvisador)
	}

	change_txtBicAvisador(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.myText=this.txtBicAvisador;
			this.ofunc_seteo_mayuscula_bancos(this.txtBicAvisador);
			this.ofunc_clean_bic(this.txtBicAvisador,this.txtAviNom,this.txtAviDire,this.txtAviCiu,this.txtAviPais);
		}this.ignoredFirstEvent = true;
	}

	focusout_txtBicParticipante(){
		this.ofunc_validacion_bancos();
		this.ofunc_guarda_banco_participante();
	}

	change_txtBicParticipante(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.myText=this.txtBicParticipante;
			this.ofunc_seteo_mayuscula_bancos(this.txtBicParticipante);
			this.ofunc_clean_bic(this.txtBicParticipante,this.txtParticipanteNom,this.txtParticipanteDire,this.txtParticipanteCiu,this.txtParticipantePais);
		}this.ignoredFirstEvent = true;
	}

	//FUNCION QUE VALIDA QUE BANCO REEMBOLSADOR Y BANCO RECEPTOR NO SEAN IGUALES
	ofunc_validacion_bancos():void{
		if(this.txtBicReembolso.value == '')
			return;
		if(this.txtBicRecep.value == this.txtBicReembolso.value){
			this.utilService.alert(this.dialog,'Banco reembolsador es igual a banco receptor');				
			this.txtBicReembolso.patchValue('');
			this.txtReemNom.patchValue('');
			this.txtReemCiu.patchValue('');
			this.txtReemDire.patchValue('');
			this.txtReemPais.patchValue('');
			//this.txtBicReembolso.setFocus();				
		}
	}

	ofunc_guarda_banco_participante():void{
		let txtBicParticipanteValue:any = this.txtBicParticipante.value;
		if (txtBicParticipanteValue.toString().trim() == ''){
		   return;							
		}
		
		let wss_opr_num: string = this.numOperacion;
		let wss_bco_cod_iso: string = this.txtBicParticipante.value;
		let wss_usercode: string = this.user_logueado

		this.crdRs200112BcoCnfr.call (
			(value) => this.ofunc_guarda_banco_part(value, this.txtBicParticipante)
		  , (value) => this.processFault(value)
		  , wss_opr_num
		  , wss_bco_cod_iso
		  , wss_usercode
	  );

	}
	
	ofunc_guarda_banco_part(wsResult:CmWsResult, component:any){
		let wss_result_msg:string;
		let codigoCampo:string;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 

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
		}	
		else {

			codigoCampo = this.getname_formcontrolname(component);

			this.ofunc_banco_bic(codigoCampo);
		}
			
	}

	
	ofunc_calc_fecha_embarque(numero:any){
	
		let wss_ind_cal: string = numero;
		let wss_fec_exp: string;

		if(this.txtFechaExpiracion.value == '' || this.txtFechaExpiracion.value == null){
			wss_fec_exp = '1753-01-01';
		} else {
			wss_fec_exp = this.utilService.toDate(this.txtFechaExpiracion.value);
		}
		let wss_dia_pre: string = this.txtDiasPresentacionDoc.value;
		let wss_fec_emb: string; 

		if(this.txtFechaEmbarque.value == '' || this.txtFechaEmbarque.value == null){
			wss_fec_emb = '1753-01-01';
		} else {
			wss_fec_emb = this.utilService.toDate(this.txtFechaEmbarque.value);
		}

		let wss_usercode: string = this.user_logueado;


		this.crdRs550Femb.call (
			(value) => this.ofunc_result_calc_fecha_embarque(value)
		  , (value) => this.processFault(value)
		  , wss_ind_cal // int
		  , wss_fec_exp // Date
		  , wss_dia_pre // int
		  , wss_fec_emb // Date
		  , wss_usercode // String
	  );

	} 

	ofunc_result_calc_fecha_embarque(wsResult:CmWsResult){

		let wss_result_msg:string;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 

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
		}	
		else {

		}

	}

	getFilas_result():void{						
		this.ofunc_zli(this.numFilas);
	}
	ofunc_zli(numero:any):void{
		
		let myArray:any[]=[];
		if(numero<this.tableRows.length){
			this.numFilas=numero;
			if(this.tableRows[numero].wss_pct_pzo.toString() != ''){	
				if(this.evalFilas==0)				
					myArray[0]=1;
				else
					myArray[0]=0;
				myArray[1]=this.numOperacion;
				myArray[2]=this.tableRows[numero].wss_pct_pzo;
				myArray[3]=this.tableRows[numero].wss_dia_pzo;

				// { wss_pct_pzo:'',wss_dia_pzo: ''},
				
				this.evalFilas++;
				this.ofunc_guardar_porcentaje(myArray);
			}
			else
				this.ofunc_zli(this.numFilas+1);
		}
		else{
			this.numFilas=0;
			this.evalFilas=0;
		}				
	}

	/**
	 * Llamamos al Web Service.
	 */
	private ofunc_guardar_porcentaje(myArray:any[]): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_sw_itr :string = myArray[0];
		let wss_num_opr :string = myArray[1];
		let wss_pct_pzo :string = myArray[2];
		let wss_dia_pzo :string = myArray[3];
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111Zli.call(
			  (value) => this.ofunc_result_ZLI(value)
			, (value) => this.processFault(value)
			, wss_sw_itr
			, wss_num_opr
			, wss_pct_pzo
			, wss_dia_pzo
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111Zli.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	ofunc_result_ZLI(wsResult :CmWsResult): void
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
		} else if (wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);
		} else {
			
			if(this.numFilas<this.tableRows.length){ 
				this.ofunc_zli(this.numFilas+1);
			}
			else{
				this.numFilas=0;
				this.evalFilas=0;
			
			}
		}
	}


		/**
	 * Llamamos al Web Service.
	 */
	private ofunc_cargar_porcentaje(): void
	{

		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160Zli.call(
			  (value) => this.ofunc_result_porce(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160Zli.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	ofunc_result_porce(wsResult :CmWsResult): void
	{
		
		let tableRowsAux:any[]=[];
		let tablaRowslenght:any;
		let tablaRowsTemplenght:any;
		let i:any;
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else {

			wsResult.formatDecAdd('wss_pct_pzo', 2);
			tableRowsAux = wsResult.getTableRows();
			tablaRowslenght = tableRowsAux.length;
			tablaRowsTemplenght = this.tableRowsTemp.length;

			while(tablaRowslenght<this.tableRowsTemp.length){		
				tableRowsAux.push({wss_pct_pzo:"",wss_dia_pzo:""});							
				tablaRowslenght++;
			}	

			this.tableRowsTemp = tableRowsAux;
			this.tableRows = this.tableRowsTemp;


			if(this.consulta=='A')
				this.ofun_busca_automata();
				this.waitShow = false;
		}
		// Primera pagina.
		this.table.offset = 0;
	}


	getname_formcontrolname(control:AbstractControl){
		let group = <FormGroup>control.parent;

		if (!group) {

		  return null;
		}
	
		let name: string;
	
		Object.keys(group.controls).forEach(key => {
		  let childControl = group.get(key);
	
		  if (childControl !== control) {
			return;
		  }
	
		  name = key;
		});
	
		return name;
	}



			/**
	 * Llamamos al Web Service.
	 */
	private crdRs200112OprIngCall(indicador_aux:string, evalua:boolean): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
				
			if(evalua == true) {
				let valorBase:number = Number(this.utilService.toDecimal(this.objetoPadre.bcxCostoFondo.value));
				let spreadSumar:number = Number(this.utilService.toDecimal(this.objetoPadre.bcxSpread.value));
				let resultado:number = valorBase + spreadSumar;		
				this.objetoPadre.spreadOculto = resultado;
				let wss_num_opr :string = this.objetoPadre.txtNumeroOperacion.value;	
				let wss_fam_prd :string;
				if(this.objetoPadre.txtFamiliaProducto.value == ''){
					wss_fam_prd = '0';
				} else {
					wss_fam_prd = this.objetoPadre.txtFamiliaProducto.value;
				}
				let wss_cod_prd :string;
				if(this.objetoPadre.txtCodProducto.value == ''){
					wss_cod_prd = '0';
				} else {
					wss_cod_prd = this.objetoPadre.txtCodProducto.value;
				}

				let wss_cod_cli :string = this.utilService.toRut(this.objetoPadre.bcxRut.value);

				let wss_ofi :string;
				if(this.objetoPadre.txtCodSucursal.value == ''){
					wss_ofi='0';
				} else {
					wss_ofi = this.objetoPadre.txtCodSucursal.value;
				}

				let wss_ref_cli :string;
				if(this.objetoPadre.txtReferenciaCliente.value==''){
					wss_ref_cli='';
				} else {
					wss_ref_cli = this.objetoPadre.txtReferenciaCliente.value;
				}

				let wss_mon_ope :string;
				if(this.objetoPadre.txtCodMoneda.value == ''){
					wss_mon_ope ='';
				} else {
					wss_mon_ope = this.objetoPadre.txtCodMoneda.value;
				}

				let wss_mto_ori :string 
				if(this.objetoPadre.bcxMonto.value == '0,00'){
					wss_mto_ori = this.utilService.toDecimal('0,00');
				} else {
					wss_mto_ori = this.utilService.toDecimal(this.objetoPadre.bcxMonto.value);
				}

				let wss_tas_tip :string;
				if(this.objetoPadre.txtTipoTasa.value == ''){
					wss_tas_tip = '0';
				} else {
					wss_tas_tip = this.objetoPadre.txtTipoTasa.value;
				}

				let wss_tas_bas :string;
				if(this.objetoPadre.bcxValorBase.value == '0,000000'){
					wss_tas_bas = this.utilService.toDecimal('0,000000');
				} else {
					wss_tas_bas = this.utilService.toDecimal(this.objetoPadre.bcxValorBase.value);
				}
				
				let wss_tas_spr :string = this.objetoPadre.spreadOculto;

				let wss_tas_tm2 :string
				if(this.objetoPadre.cbbTipoTasa0.value == ''){
					wss_tas_tm2 = '0';
				} else {
					wss_tas_tm2  = '0';
				}

				let wss_fec_otor :any; 
				if(this.objetoPadre.txtOtorgamiento.value == ''){
					wss_fec_otor = '1753-01-01';
				} else {
					wss_fec_otor = this.utilService.toDate(this.objetoPadre.txtOtorgamiento.value);
				}
		
				let wss_dias_pzo :string = this.objetoPadre.txtDiasPlazos.value;
				if(this.objetoPadre.txtDiasPlazos.value == ''){
					wss_dias_pzo = '0';
				} else {
					wss_dias_pzo = this.objetoPadre.txtDiasPlazos.value;
				}
				let wss_fec_vto :any;
				if(this.objetoPadre.txtVencimiento.value == ''){
					wss_fec_vto = '1753-01-01';
				} else {
					wss_fec_vto = this.utilService.toDate(this.objetoPadre.txtVencimiento.value);
				}

				let wss_fec_ini_int :any;
				if(this.objetoPadre.txtInicioCobroIn.value == ''){
					wss_fec_ini_int = this.utilService.toDate('01/01/1753');
				} else {
					wss_fec_ini_int = this.utilService.toDate(this.objetoPadre.txtInicioCobroIn.value);
				}

				let wss_opr_asoc :string;
				if(this.objetoPadre.bcxNumero.value == '0'){
					wss_opr_asoc = '0';
				} else {
					wss_opr_asoc = this.objetoPadre.bcxNumero.value;
				}
				
				let wss_corr_opr :string;
				if(this.objetoPadre.bcxCorrelativo.value == '0'){
					wss_corr_opr  = '0';
				} else {
					wss_corr_opr  = this.objetoPadre.bcxCorrelativo.value;
				}

				let wss_ref_ext :string;
				if(this.objetoPadre.bcxReferenciaExterna.value == ''){
					wss_ref_ext = '';
				} else {
					wss_ref_ext = this.objetoPadre.bcxReferenciaExterna.value;
				}
				let wss_opr_spr_cof :string;
				if(this.objetoPadre.bcxCostoFondo.value == '0,000000') {
					wss_opr_spr_cof = this.utilService.toDecimal('0,000000');
				} else {
					wss_opr_spr_cof = this.utilService.toDecimal(this.objetoPadre.bcxCostoFondo.value);
				}

				let wss_opr_spr_spr :string;
				if(this.objetoPadre.bcxSpread.value == '0,000000') {
					wss_opr_spr_spr = this.utilService.toDecimal('0,000000');
				} else {
					wss_opr_spr_spr = this.utilService.toDecimal(this.objetoPadre.bcxSpread.value);
				}

				let wss_usercode :string = this.user_logueado;
				
			
				// Invocamos el WS.
				this.crdRs200112OprIng.call(
					(value) => this.crdRs200112OprIngResult(value,indicador_aux)
					, (value) => this.processFault(value)
					, wss_num_opr
					, wss_fam_prd
					, wss_cod_prd
					, wss_cod_cli
					, wss_ofi
					, wss_ref_cli
					, wss_mon_ope
					, wss_mto_ori
					, wss_tas_tip
					, wss_tas_bas
					, wss_tas_spr
					, wss_tas_tm2
					, wss_fec_otor
					, wss_dias_pzo
					, wss_fec_vto
					, wss_fec_ini_int
					, wss_opr_asoc
					, wss_corr_opr
					, wss_ref_ext
					, wss_opr_spr_cof
					, wss_opr_spr_spr
					, wss_usercode
				);
				this.objetoPadre.condicion = true;

		}

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112OprIng.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200112OprIngResult(wsResult :CmWsResult, indicador_aux:string): void
	{
	

		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		//let wss_result_cod:any = wsResult.getResultString('wss_result_cod');
		
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}  else if(wsResult.getReturnValue()==0){
			let wss_result_msg:any = wsResult.getResultString('wss_result_msg') ;
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {


			if(this.objetoPadre.condicion)this.grabar_generacion_avisos();
	    	this.objetoPadre.condicion=false;
			this.crdRs99130MonmtoCall();   		    			
			//this.ofunc_carga_formularios(indicador_aux);
		}
	}

		/**
	 * Llamamos al Web Service.
	 */
	private crdRs99130MonmtoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_opr_num :string = this.objetoPadre.txtNumeroOperacion.value;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.crdRs99130Monmto.call(
			  (value) => this.crdRs99130MonmtoResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs99130Monmto.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs99130MonmtoResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */

		this.objetoPadre.modMonto = wsResult.getResultString('wss_mon_mto');
	
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
	private grabar_generacion_avisos(): void
	{

		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_cli_cod_cli :string = this.utilService.toRut(this.objetoPadre.bcxRut.value);
		let wss_opr_num :string = this.utilService.toString(this.objetoPadre.txtNumeroOperacion.value);
		let wss_cod_mod :string = 'ILC';
		let wss_cli_ind_dsc_avi :string;
		if(this.objetoPadre.optMensajesSWIFT.value = 'S'){
			wss_cli_ind_dsc_avi = 'S';
		} else {
			wss_cli_ind_dsc_avi = 'N';
		}
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200112Cliam.call(
			  (value) => this.ofunc_grabar_generacion_avisos(value)
			, (value) => this.processFault(value)
			, wss_cli_cod_cli
			, wss_opr_num
			, wss_cod_mod
			, wss_cli_ind_dsc_avi
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200112Cliam.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	ofunc_grabar_generacion_avisos(wsResult :CmWsResult): void
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
			let wss_result_msg:any = wsResult.getResultString('wss_result_msg') ;
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {

			this.crdRs200172OprIngCall();
		}
	}

		/**
	 * Llamamos al Web Service.
	 */
	private crdRs200172OprIngCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 	 */ 
		let wss_usr_cod :string = this.utilService.toRut(this.objetoPadre.bcxRut.value);
		let wss_opr_num :string = this.objetoPadre.txtNumeroOperacion.value;
		let wss_fam_prd :string;
		if(this.objetoPadre.txtFamiliaProducto.value == ''){
			wss_fam_prd = '0';
		} else {
			wss_fam_prd = this.objetoPadre.txtFamiliaProducto.value;
		}

		let wss_cod_prd :string;
		if(this.objetoPadre.txtCodProducto.value == ''){
			wss_cod_prd = '0';
		} else {
			wss_cod_prd = this.objetoPadre.txtCodProducto.value;
		}

		let wss_odf_opr_ind :string;
		if(this.objetoPadre.optMonedaOperacion.value == 'X'){
			wss_odf_opr_ind = 'X';
		} else{
			wss_odf_opr_ind = 'N';
		}
		
		let wss_odf_opr_cod :string;
		if(this.objetoPadre.txtCodigoOperacion.value == ''){
			wss_odf_opr_cod = '0';
		} else {
			wss_odf_opr_cod = this.objetoPadre.txtCodigoOperacion.value;
		}
		
		
		let wss_odf_opr_suc:string;
		if(this.objetoPadre.txtSucursalOperacion.value == ''){
			wss_odf_opr_suc = '0';
		} else {
			wss_odf_opr_suc = this.objetoPadre.txtSucursalOperacion.value;
		}

		let wss_odf_opr_ccte :string;
		if(this.objetoPadre.cbbCuentaCorrienteOperacion.value == ''){
			wss_odf_opr_ccte = '';
		} else {
			wss_odf_opr_ccte = this.objetoPadre.cbbCuentaCorrienteOperacion.value;
		}

		let wss_odf_opr_tc :string; 
		if(this.objetoPadre.bcxTipoCambioOperacion.value == '0,00000000' || this.objetoPadre.bcxTipoCambioOperacion.value == ''){
			wss_odf_opr_tc = '0'
		} else {
			wss_odf_opr_tc = this.utilService.toDecimal(this.objetoPadre.bcxTipoCambioOperacion.value);
		}


		let wss_odf_opr_bco :string;

		if(this.objetoPadre.txtFamiliaProducto.value == '2'){
			wss_odf_opr_bco="";
		} else {
			wss_odf_opr_bco=this.utilService.toString(this.objetoPadre.txtBicCorresponsalOperacion.value);		 		
		}

		let wss_odf_cyg_ind :string;

		if(this.objetoPadre.optMonedaComyGas.value == 'X'){
			wss_odf_cyg_ind = 'X';
		} else{
			wss_odf_cyg_ind = 'N';
		}

		let wss_odf_cyg_cod:string;
		if(this.objetoPadre.txtCodigoComyGas.value == ''){
			wss_odf_cyg_cod = '0';
		} else {
			wss_odf_cyg_cod = this.objetoPadre.txtCodigoComyGas.value;
		}

		let wss_odf_cyg_suc :string;
		if(this.objetoPadre.txtSucursalComyGas.value == ''){
			wss_odf_cyg_suc = '0';
		} else {
			wss_odf_cyg_suc = this.objetoPadre.txtSucursalComyGas.value;
		}
		

		let wss_odf_cyg_ccte :string = this.utilService.toString(this.objetoPadre.cbbCuentaCorrienteComyGas.value);
		let wss_odf_cyg_tc :string = this.utilService.toDecimal(this.objetoPadre.bcxTipoCambioComyGas.value);

		let wss_odf_cyg_bco :string = this.utilService.toString(this.objetoPadre.txtBicCorresponsalComyGas.value);


		let wss_usercode :string = this.user_logueado;
	
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200172OprIng.call(
			  (value) => this.crdRs200172OprIngResult(value)
			, (value) => this.processFault(value)
			, wss_usr_cod
			, wss_opr_num
			, wss_fam_prd
			, wss_cod_prd
			, wss_odf_opr_ind
			, wss_odf_opr_cod
			, wss_odf_opr_suc
			, wss_odf_opr_ccte
			, wss_odf_opr_tc
			, wss_odf_opr_bco
			, wss_odf_cyg_ind
			, wss_odf_cyg_cod
			, wss_odf_cyg_suc
			, wss_odf_cyg_ccte
			, wss_odf_cyg_tc
			, wss_odf_cyg_bco
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200172OprIng.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200172OprIngResult(wsResult :CmWsResult): void
	{
		
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} 
		else if(wsResult.getReturnValue()==0){
			this.waitShow = false;
			let wss_result_msg = wsResult.getResultString('wss_result_msg');		
			this.utilService.alert(this.dialog, wss_result_msg);
		} else{
			// if(this.varCursar == 1){
				this.imprimir_doc_revisa();
			// } 
			// if(this.varCursar == 3){
			// 	this.valorReturn = 3;
			// }
		}

	}

	imprimir_doc_revisa(): void {
				
			/**
		   * Documento Revisa PDF.
		   */
		
			let wss_cod_apl: string = 'DOCREV';
			let fld_eva_num_ope: string = this.numOperacion.replace(/^\s*|\s*$/g, '');
			let fld_eva_num_doc_rev: string = '0';
			let fld_eva_est_eve: string = '0';
		 
			this.url = this.hostService.getHost() + '/BCXGENPDF_WEB/generarPDF?wss_cod_apl='+wss_cod_apl+'&fld_eva_num_ope='+fld_eva_num_ope+'&fld_eva_num_doc_rev='+fld_eva_num_doc_rev+'&fld_eva_est_eve='+fld_eva_est_eve+'&ramdom=6806';
			if(this.url.indexOf("http:") < 0){
				this.url = 'http://' +  this.url;
			}
		 
			const subscription = interval(2000)
			.subscribe(() => {
				this.contextService.setUserData("varDatosadicionales",'dasnormal');
				this.objetoPadre.limpiar_campos_formularios();
				this.location.back();
				subscription.unsubscribe();
			});
			
			
		}


}
