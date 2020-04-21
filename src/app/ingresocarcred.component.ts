// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 09/12/2019 17:41:43
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
import { BCX_RS_200_160_FORM } from './ws/BCX_RS_200_160_FORM';
import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
import { CRD_RS_200_151_OPR } from './ws/CRD_RS_200_151_OPR';
import { BCX_RS_200_160_BANK } from './ws/BCX_RS_200_160_BANK';
import { BCX_RS_99_261_CLN_CTA } from './ws/BCX_RS_99_261_CLN_CTA';
// import { CRD_RS_200_155_EVA_TAS_FNA } from './ws/CRD_RS_200_155_EVA_TAS_FNA';
import { CRD_RS_200_151_ORD50 } from './ws/CRD_RS_200_151_ORD50';
import { BCX_RS_251_99_TIP_CMB } from './ws/BCX_RS_251_99_TIP_CMB';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { CRD_RS_99_151_BANKCOR } from './ws/CRD_RS_99_151_BANKCOR';
import { CRD_RS_550_PZO } from './ws/CRD_RS_550_PZO';
import { CRD_RS_99_130_MONMTO } from './ws/CRD_RS_99_130_MONMTO';
import { CRD_RS_200_112_OPR_ING } from './ws/CRD_RS_200_112_OPR_ING';
import { CRD_RS_200_172_OPR_ING } from './ws/CRD_RS_200_172_OPR_ING';
import { CRD_RS_200_152_OPR } from './ws/CRD_RS_200_152_OPR';
import { CRD_RS_200_151_IND_PTR } from './ws/CRD_RS_200_151_IND_PTR';
import { CRD_RS_200_112_CLI } from './ws/CRD_RS_200_112_CLI';
import { CRD_RS_200_151_CRD001 } from './ws/CRD_RS_200_151_CRD001';
// import { CRD_RS_200_112_COB_TYE } from './ws/CRD_RS_200_112_COB_TYE';
// import { CRD_RS_200_160_TRN_CEX } from './ws/CRD_RS_200_160_TRN_CEX';
// import { CRD_RS_200_151_COB_TYE } from './ws/CRD_RS_200_151_COB_TYE';
import { BCX_RS_200_151_FORM } from './ws/BCX_RS_200_151_FORM';
import { BCX_RS_200_160_FPRD } from './ws/BCX_RS_200_160_FPRD';
import { BCX_RS_200_160_SUC } from './ws/BCX_RS_200_160_SUC';
import { BCX_RS_200_160_PRD } from './ws/BCX_RS_200_160_PRD';
import { BCX_RS_200_160_MON } from './ws/BCX_RS_200_160_MON';
import { BCX_RS_200_160_TAS } from './ws/BCX_RS_200_160_TAS';
import { BCX_RS_99_260_ODF } from './ws/BCX_RS_99_260_ODF';
import { BCX_RS_200_251_PDT } from './ws/BCX_RS_200_251_PDT';
import { BCX_RS_99_260_CLN_cta } from './ws/BCX_RS_99_260_CLN_cta';
import { BCX_RS_200_151_CLIAM } from './ws/BCX_RS_200_151_CLIAM';
import { CRD_RS_200_151_OPR_ILC } from './ws/CRD_RS_200_151_OPR_ILC';
import { FBP_RS_AUTH_SERVER } from '../../@bcxang/lib/ws/FBP_RS_AUTH_SERVER';
import { interval } from 'rxjs';
// import { start } from 'repl';

@Component({
	selector: 'my-form',
	templateUrl: 'ingresocarcred.component.html'
})
/**
 * Form: Ingreso
 */
export class IngresoCarCredComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.

	txtNumeroOperacion: any;
	txtFechaIngreso: any;
	txtFamiliaProducto:any;
	cbbCodFamiliaProducto :any;
	bcxRut :any;
	txtNombre :any;
	txtDireccion :any;
	txtCodSucursal: any;
	cbbCodSucursal :any;
	txtCiudad :any;
	txtReferenciaCliente :any;
	txtCodProducto: any;
	cbbProducto :any;
	txtCodMoneda: any;
	cbbMoneda :any;
	bcxMonto :any;
	txtTipoTasa: any;
	cbbTipoTasa :any;
	cbbTipoTasa0 :any;
	bcxValorBase :any;
	bcxCostoFondo :any;
	bcxSpread :any;
	bcxTasaFinal :any;
	txtOtorgamiento :any;
	txtInicioCobroIn :any;
	txtDiasPlazos :any;
	txtVencimiento :any;
	bcxNumero :any;
	bcxCorrelativo :any;
	bcxReferenciaExterna :any;
	optMonedaOperacion :any;
	txtCodigoOperacion: any;
	cbbCodigoOperacion :any;
	cbbCuentaCorrienteOperacion :any;
	txtSucursalOperacion: any;
	cbbSucursalOperacion :any;
	bcxTipoCambioOperacion :any;
	txtBicCorresponsalOperacion :any;
	txtNombreCorresponsalOperacion :any;
	optMonedaComyGas :any;
	txtCodigoComyGas: any;
	cbbCodigoComyGas :any;
	cbbCuentaCorrienteComyGas :any;
	txtSucursalComyGas: any;
	cbbSucursalComyGas :any;
	bcxTipoCambioComyGas :any;
	txtBicCorresponsalComyGas :any;
	txtNombreCorresponsalComyGas :any;


	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbCodFamiliaProductoArray: any[] = [];
	cbbCodSucursalArray: any[] = [];
	cbbProductoArray: any[] = [];
	cbbMonedaArray: any[] = [];
	cbbTipoTasaArray: any[] = [];
	cbbTipoTasa0Array: any[] = [];
	cbbCodigoOperacionArray: any[] = [];
	cbbCuentaCorrienteOperacionArray: any[] = [];
	cbbSucursalOperacionArray: any[] = [];
	cbbCodigoComyGasArray: any[] = [];
	cbbCuentaCorrienteComyGasArray: any[] = [];
	cbbSucursalComyGasArray: any[] = [];

	WSS_D01_AREA:any;
	WSS_D01_SGM:any;
	WSS_D01_TIP:any;
	WSS_D01_CODNUM:any;

	user_logueado:any;
	
	cmbCausalNoCobro:any;
	cmbCausalNoCobroArray: any[] = [];

	chbkSinImpuesto:any;
	chbkSinImpuesto_selected:any = true;

	activar_chbkSinImpuesto:any;
	activar_cmbCausalNoCobro:any;
	habilitarChbkSinImpuesto:boolean;

	chboxSinImpuestos:any;

	cmbTn:any;
	cmbTnArray: any[] = [];

	wsResult_aux: CmWsResult;
	disabled:any = true;

	arrAutomata:any[] = [];
	btnPlanPago:boolean = true;
	btnAvales:boolean = true;
	btnOtrasGarantias:boolean = true;
	btnContraparte:boolean = true;
	btnComisiones:boolean = true;
	btnBancoOperacion:boolean = true;
	btnBancoComyGas:boolean = true;
	btnDatosAdicionales:boolean =false;

	refcliente_focusin:boolean = false;
	bicCor:string = '';
	modMonto: string = '';
	mod:any;
	spreadOculto:any;
	varTN:any;

	txtMyText:any;
	indicadorDeOpcion:any;
	wss_result_cod:any;
	url:string = '';

	financiamiento_indicador_opcion:any;
	numOperacion:any;
	wsResult_detalle:CmWsResult;
	destino_de_fondos_hiden:any;
	indicadorHabContraparte:any;
	ocultarbtnContraparte:any;

	ocultarBotonLimpiar:boolean=true;
	ocultarBotonRechazo:boolean=false;
	ocultarNumeroSolicitud:boolean=false;
	ocultarBotonDocumentos:boolean=false;
	ocultarBotonvolver:boolean=false;

	txtNumeroSolicitud:any;
	numeroSolicitud:any;
	waitShowValue:boolean[]=[];

	bloquearOperaciones:boolean;
	bloquearComyGas:boolean;

	habilitarBtnCursar:boolean;
	optMensajesSWIFT:any;

	varCodTemplate:any;
	varInicio:any;
	varPlantilla:any;
	varPlantillaGlobal:any;
	varCodTemplateGlobal:any;
	varInicioGlobal:any = 0;

	varRutGlobal:any;
	indCobrInt:any;
	habIndCobrInt:any;
	habCamposStby:any;
	chkEnterada:any;
	habChkEnterada:any;
	cnvDes:any;
	indicadorLlamada152Ope:any;
	cOrde:any;
	arrayTag50:any[]=[];
	precarga:any;
	opcion:any;

	@ViewChild("txtReferenciaCliente") txtReferenciaClienteNative: ElementRef; 
	@ViewChild("bcxRut") bcxRutNative: ElementRef; 


	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private dateAdapter: DateAdapter<Date>
		, private bcxRs200160Form: BCX_RS_200_160_FORM
		, private bcxRs99260Cln: BCX_RS_99_260_CLN
		, private crdRs200151Opr: CRD_RS_200_151_OPR
		, private bcxRs200160Bank: BCX_RS_200_160_BANK
		, private bcxRs99261ClnCta: BCX_RS_99_261_CLN_CTA
		// , private crdRs200155EvaTasFna: CRD_RS_200_155_EVA_TAS_FNA
		, private crdRs200151Ord50: CRD_RS_200_151_ORD50
		, private bcxRs25199TipCmb: BCX_RS_251_99_TIP_CMB
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private crdRs99151Bankcor: CRD_RS_99_151_BANKCOR
		, private crdRs550Pzo: CRD_RS_550_PZO
		, private crdRs99130Monmto: CRD_RS_99_130_MONMTO
		, private crdRs200112OprIng: CRD_RS_200_112_OPR_ING
		, private crdRs200172OprIng: CRD_RS_200_172_OPR_ING
		, private crdRs200152Opr: CRD_RS_200_152_OPR
		, private crdRs200151IndPtr: CRD_RS_200_151_IND_PTR
		, private crdRs200112Cli: CRD_RS_200_112_CLI
		, private crdRs200151Crd001: CRD_RS_200_151_CRD001
		//, private crdRs200112CobTye: CRD_RS_200_112_COB_TYE
		// , private crdRs200160TrnCex: CRD_RS_200_160_TRN_CEX
		// , private crdRs200151CobTye: CRD_RS_200_151_COB_TYE
		, private bcxRs200151Form: BCX_RS_200_151_FORM
		, private bcxRs200160Fprd: BCX_RS_200_160_FPRD
		, private bcxRs200160Suc: BCX_RS_200_160_SUC
		, private bcxRs200160Prd: BCX_RS_200_160_PRD
		, private bcxRs200160Mon: BCX_RS_200_160_MON
		, private bcxRs200160Tas: BCX_RS_200_160_TAS
		, private bcxRs99260Odf: BCX_RS_99_260_ODF
		, private bcxRs200251Pdt: BCX_RS_200_251_PDT
		, private bcxRs99260ClnCta: BCX_RS_99_260_CLN_cta
		, private bcxRs200151Cliam: BCX_RS_200_151_CLIAM
		, private crdRs200151OprIlc: CRD_RS_200_151_OPR_ILC
		, private fbpRsAuthServer: FBP_RS_AUTH_SERVER
		){}
	/**
	 * Inicializamos todo.
	 */
	
	// @ViewChild("txtReferenciaCliente", {static: false}) txtReferenciaClienteNative: ElementRef; 
	// @ViewChild("bcxRut", {static: false}) bcxRutNative: ElementRef; 
	
	 ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();
		// Para evitar que parta antes de que lea el configuration.xml
		// Solo para paginas de primer nivel
    //     const subscription = interval(1)
    //         .subscribe(() => {
	// 			// this.hostService.setRuta(this.hostService.getConfig("preferences/webservice/ruta-2"));
	// 			this.fbpRsAuthServer.call(
    //                 (value) => this.fbpRsAuthServerResult(value)
    //               , (value) => this.openDialogAlert(value)
    //               , "Bearer "+ this.hostService.getToken()
    //             );
	// 			// this.hostService.resetRuta();
    //             subscription.unsubscribe();
    //         });
		
	// }
	// init(){	
		this.dateAdapter.setLocale('es-CL');

		// Numericos y uppercase.
		this.pageName = this.contextService.getUserData("pageName");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.numOperacion = this.contextService.getUserData('numOperacion');
		this.WSS_D01_AREA = this.contextService.getUserData("WSS_D01_AREA");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");
		this.WSS_D01_TIP = this.contextService.getUserData("WSS_D01_TIP");
		this.WSS_D01_CODNUM = this.contextService.getUserData("WSS_D01_CODNUM");
		this.wsResult_detalle = this.contextService.getUserData('wsResult_detalle');
		this.financiamiento_indicador_opcion = this.contextService.getUserData("financiamiento_indicador_opcion");
		this.varCodTemplate = this.contextService.getUserData("varCodTemplate");
		this.indicadorLlamada152Ope = this.contextService.getUserData("indicadorLlamada152Ope");
		this.cOrde = this.contextService.getUserData("cOrde");
		this.precarga = this.contextService.getUserData("precarga");
		this.opcion = this.contextService.getUserData("opcion");


		console.log('this.financiamiento_indicador_opcion: ',this.financiamiento_indicador_opcion)
		this.wss_result_cod = 0;
		
	
		const ctxSw :boolean = this.contextService.recover(this);


		if(this.financiamiento_indicador_opcion == 'Nueva') {

		this.deshabilita_campos();
		this.indicadorHabContraparte = 'N';
		this.indicadorDeOpcion.patchValue('A');
		console.log('Nueva -> this.indicadorDeOpcion.value: ',this.indicadorDeOpcion.value);
		this.ocultarbtnContraparte = true;
		this.ocultarNumeroSolicitud = false;
		this.ocultarBotonRechazo = false;
		this.ocultarBotonDocumentos = false;
		this.ocultarBotonvolver = false;
		this.chboxSinImpuestos = 'N';
		
 		this.bcxRs200251PdtCall();
		this.carga_tasa_t0(); 


			if (!ctxSw)
			{				
				// Combos llenados al inicio.
				this.waitShow = true;
				this.wsFin = [];

				// cbbCodFamiliaProducto
				this.wsFin.push(false);
				this.bcxRs200160Fprd.call (  
					(value) => this.getComboData0(value)
					, (value) => this.processFault(value)
					, this.WSS_D01_AREA  //WSS_D01_AREA
					, this.WSS_D01_SGM   //WSS_D01_SGM
					, this.WSS_D01_TIP   //WSS_D01_TIP
					, this.user_logueado   //wss_usercode
				);

				// cbbCodSucursal
				this.wsFin.push(false);
				this.bcxRs200160Suc.call (
					(value) => this.getComboData1(value)
					, (value) => this.processFault(value)
					, this.user_logueado  //wss_usercode
				);

								// cbbMoneda
				this.wsFin.push(false);
				this.bcxRs200160Mon.call (
					(value) => this.getComboData2(value)
					, (value) => this.processFault(value)
					, this.user_logueado  //wss_usercode
				);

				
				// cbbTipoTasa
				this.wsFin.push(false);
				this.bcxRs200160Tas.call (
					(value) => this.getComboData3(value)
					, (value) => this.processFault(value)
					, this.user_logueado   //wss_usercode
				);

				//cmbCausalNoCobro
				// this.wsFin.push(false);
				// this.crdRs200160TrnCex.call (
				// 	(value) => this.getComboData4(value)
				// , (value) => this.processFault(value)
				// , this.user_logueado  //wss_usercode
				// );
				
				// cbbCodigoOperacion
				this.wsFin.push(false);
				this.bcxRs99260Odf.call (
					(value) => this.getComboData5(value)
					, (value) => this.processFault(value)
					,'2'   //wss_tip_odf
					,this.user_logueado//wss_usercode
				);

				// cbbCodigoComyGas
				this.wsFin.push(false);
				this.bcxRs99260Odf.call (
					(value) => this.getComboData6(value)
					, (value) => this.processFault(value)
					,'2'   //wss_tip_odf
					,this.user_logueado  //wss_usercode
				);
								
		
			} else {
				
				//this.indicadorDeOpcion = this.contextService.getUserData("indicadorDeOpcion");
				console.log('D Nueva -> this.indicadorDeOpcion.value: ',this.indicadorDeOpcion.value);
				if(this.varCodTemplate != undefined || this.varCodTemplate!=null || this.varCodTemplate!=''){
					this.crdRs200152OprCall(this.utilService.toRut(this.bcxRut.value), this.txtFamiliaProducto.value, this.varCodTemplate);
				} 
				this.crdRs200151Crd001Call();
				setTimeout(() => {					
					this.waitShow = false;
				  }, 2600);	
			}
		}  else  if(this.financiamiento_indicador_opcion == 'Detalle'){

				//this.indicadorDeOpcion = this.contextService.getUserData("indicadorDeOpcion");
				console.log('Detalle -> this.indicadorDeOpcion.value: ',this.indicadorDeOpcion.value);
				if(this.indicadorDeOpcion.value == 'C'){
					this.bloquearComyGas = true;
					this.bloquearOperaciones = true;
				}

				this.waitShow=true;

				this.ocultarBotonRechazo = false;
				this.ocultarbtnContraparte = true;
				this.ocultarNumeroSolicitud = false;
				this.ocultarBotonLimpiar = false;
				this.ocultarBotonDocumentos = false;
				this.ocultarBotonvolver = true
				this.bcxRut.disable();
				this.txtFamiliaProducto.disable();
				this.cbbCodFamiliaProducto.disable();

				this.btnAvales = false;
				//this.btnBancoComyGas = false;
				this.btnContraparte = false;
				this.btnPlanPago = false;
				this.btnOtrasGarantias = false;
				this.btnComisiones = false;

				this.indicadorHabContraparte = 'C';
				this.chboxSinImpuestos = 'N';


				if (!ctxSw)
				{
					
					this.ofunc_start();
					
				}  else {
					setTimeout(() => {					
						this.waitShow = false;
					  }, 2600);					
				}



		} else if(this.financiamiento_indicador_opcion == 'Preingreso'){
				console.log('Preingreso -> this.indicadorDeOpcion.value: ',this.indicadorDeOpcion.value);
				//this.indicadorDeOpcion = this.contextService.getUserData("indicadorDeOpcion");

				this.waitShow = true;

				this.txtNumeroSolicitud.disable();
				this.ocultarbtnContraparte = false;
				this.ocultarNumeroSolicitud = true;
				this.ocultarBotonvolver = true
				this.numeroSolicitud = this.contextService.getUserData('numSolicitud');

				this.ocultarBotonRechazo = true;
				this.ocultarBotonLimpiar = false;
				this.ocultarBotonDocumentos = true;
				this.bcxRut.disable();
				this.txtFamiliaProducto.disable();
				this.cbbCodFamiliaProducto.disable();

				this.btnAvales = false;
				this.btnContraparte = false;
				this.btnPlanPago = false;
				this.btnOtrasGarantias = false;
				this.btnComisiones = false;

				this.indicadorHabContraparte = 'C';	
				this.chboxSinImpuestos = 'N';		

				if (!ctxSw)
				{
					
					this.ofunc_start();
					
				}  else {
					setTimeout(() => {					
						this.waitShow = false;
					  }, 2600);	
				}

	
				this.habilitar_campos_preingreso();
		
	
			
		}
		
		this.txtNombre.disable();
		this.txtNumeroOperacion.disable()
		this.txtFechaIngreso.disable();
		this.txtNombreCorresponsalOperacion.disable();
		this.txtNombreCorresponsalComyGas.disable();
		this.txtBicCorresponsalComyGas.disable();
		this.txtBicCorresponsalOperacion.disable();
		
		this.validatorsDef();
		//
		
	}

	carga_tasa_t0() {
		
		this.cmbTnArray = [
			{cod:0, glosa: "T0"},
			{cod:1, glosa: "T1"},
			{cod:2, glosa: "T2"}
		];

		this.cbbTipoTasa0Array = this.cmbTnArray;
	}

	/**
     * Callback invocado por this.fbpRsAuthServer.call.
     * @param wsResult Parametros de salida, mensaje de error.
     */
    fbpRsAuthServerResult(wsResult :CmWsResult): void
    {
		
        // Desactivamos el simbolo de progress.
        this.waitShow = false;

        // A veces el Fault se viene por acá
        let hayError: boolean = wsResult.hayError();
        
        if(wsResult.getReturnValue() == 1){
            if(wsResult.getResultString('status') == 'OK'){
              //  this.init();
            }
            else{
                this.router.navigate(['cm-error']);
            }
        }
        else{
            this.router.navigate(['cm-error']);
        }
        
        if (hayError)
        {
            this.router.navigate(['cm-error']);
        }
        
	}

	ofunc_start() {
		////this.waitShow = true;

		// if(this.wsResult_detalle.getResultString('')==''){
		let wsResult:CmWsResult = this.wsResult_detalle;
		let wss_fam_prd:any = wsResult.getResultString('wss_fam_prd').trim();
		let wss_odf_opr_ind:any = wsResult.getResultString('wss_odf_opr_ind').trim();
		let wss_odf_cyg_ind:any = wsResult.getResultString('wss_odf_cyg_ind').trim();

		if(wss_fam_prd == '1') {
			this.ofunc_ocultar_destino_de_fondos(wss_fam_prd);		
		}
		if(wss_odf_opr_ind == 'X'){
			this.optMonedaOperacion.patchValue('X');
		} else if(wss_odf_opr_ind == 'N'){
			this.optMonedaOperacion.patchValue('N');
		}

		if(wss_odf_cyg_ind == 'X'){
			this.optMonedaComyGas.patchValue('X');
		} else if(wss_odf_cyg_ind == 'N'){
			this.optMonedaComyGas.patchValue('N');
		}

		if(this.optMonedaOperacion.value == 'X'){
			this.bcxRs99260OdfOperacionCall('1');
		}
		else if(this.optMonedaOperacion.value == 'N'){
			this.bcxRs99260OdfOperacionCall('2');				
		}	
		else
		{
			this.bcxRs99260OdfOperacionCall('2');				
		}

		if(this.optMonedaComyGas.value == 'X'){
			this.bcxRs99260OdfComCyGCall('1');
		}
		else if(this.optMonedaComyGas.value == 'N'){
			this.bcxRs99260OdfComCyGCall('2');				
		}	
		else
		{
			this.bcxRs99260OdfComCyGCall('2');				
		}

		this.ofunc_carga_combobox()
		
	}


	ofunc_carga_combobox(){
		this.bcxRs200160MonCall();
	}

	ofunc_ocultar_destino_de_fondos(variable:string){

		if(variable == '3'){
			this.destino_de_fondos_hiden.patchValue(false);
		} else {
			this.destino_de_fondos_hiden.patchValue(true);
		}
	}

	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200251PdtCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 
		let wss_usercode :string = this.utilService.toString(this.xyz.value);
		 */ 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200251Pdt.call(
			  (value) => this.bcxRs200251PdtResult(value)
			, (value) => this.processFault(value)
			, this.user_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200251Pdt.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200251PdtResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		this.txtFechaIngreso.patchValue(wsResult.getResultDate('wss_fec_proc'));
		this.txtOtorgamiento.patchValue(wsResult.getResultDate('wss_fec_proc'));

		this.waitShow = false;
		// this..patchValue(wsResult.getResultString('wss_result_msg'));
		 
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}
	}	


	ofunc_carga_generacion_avisos() {

		let wss_cli_cod_cli: string // String
		let wss_cod_mod: string // String
		let wss_usercode: string // String

		this.bcxRs200151Cliam.call(
			(value) => this.bcxRs200151CliamResult(value)
		  , (value) => this.processFault(value)
	 	  , wss_cli_cod_cli
		  , wss_cod_mod
		  , wss_usercode
	  );
	}

		/**
	 * Callback invocado por this.bcxRs99260ClnCta.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200151CliamResult(wsResult :CmWsResult): void
	{
	
	
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;

		let wss_cli_ind_dsc_avi:string;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			let	wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			wss_cli_ind_dsc_avi = wsResult.getResultString('wss_cli_ind_dsc_avi');
			if(wss_cli_ind_dsc_avi == 'S'){
				this.optMensajesSWIFT.patchValue('S');
			} else {
				this.optMensajesSWIFT.patchValue('N');
			}

			this.bcxRs99260ClnCall();
		}
	}



	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs99260ClnCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);*/ 
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
		//this.waitShow = false;



		// this.xyz.patchValue(wsResult.getResultString('wss_ctacte_mon'));
		// this.xyz.patchValue(wsResult.getResultString('wss_ctacte_num'));
		// this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));

		
		
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
						/* Mover los parametros de salida a la pantalla. */
			this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli'));
			this.txtCodSucursal.patchValue(wsResult.getResultString('wss_cod_suc').toString());
			this.txtDireccion.patchValue(wsResult.getResultString('wss_dir_cli'));
			this.txtCiudad.patchValue(wsResult.getResultString('wss_ciu_cli'));
			this.txtSucursalOperacion.patchValue(wsResult.getResultString('wss_cod_suc').toString());
			this.txtSucursalComyGas.patchValue(wsResult.getResultString('wss_cod_suc').toString());

			this.crdRs200151IndPtrCall();

			//this.crdRs200152OprCall(this.utilService.toRut(this.bcxRut.value), this.txtFamiliaProducto.value, '');
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151OprCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_num_opr :string = "this.utilService.toString(this.xyz.value)";
		let wss_usercode :string = "this.utilService.toString(this.xyz.value)";
		  
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Opr.call(
			  (value) => this.crdRs200151OprResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151Opr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151OprResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_ind_act'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_nom_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_dir_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_ciu_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_fam_prd'));
		this.xyz.patchValue(wsResult.getResultString('wss_ofi'));
		this.xyz.patchValue(wsResult.getResultString('wss_ref_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_mon'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_mto_ori', 2));
		this.xyz.patchValue(wsResult.getResultString('wss_tas_tip'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_bas', 6));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_spr', 6));
		this.xyz.patchValue(wsResult.getResultString('wss_tas_tm2'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_fin', 6));
		this.xyz.patchValue(wsResult.getResultDate('wss_fec_otor'));
		this.xyz.patchValue(wsResult.getResultDate('wss_fec_desde'));
		this.xyz.patchValue(wsResult.getResultString('wss_dias_pzo'));
		this.xyz.patchValue(wsResult.getResultDate('wss_fec_vto'));
		this.xyz.patchValue(wsResult.getResultDate('wss_fec_ini_int'));
		this.xyz.patchValue(wsResult.getResultString('wss_opr_asoc'));
		this.xyz.patchValue(wsResult.getResultString('wss_corr_opr'));
		this.xyz.patchValue(wsResult.getResultString('wss_ref_ext'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_prd'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_opr_ind'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_opr_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_opr_suc'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_opr_ccte'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_odf_opr_tc', 9));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_opr_bco'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_cyg_ind'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_cyg_cod'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_cyg_suc'));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_cyg_ccte'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_odf_cyg_tc', 9));
		this.xyz.patchValue(wsResult.getResultString('wss_odf_cyg_bco'));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_cof', 6));
		this.xyz.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_spr', 6));
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
	}
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160BankCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_cod_ing :string = "this.utilService.toString(this.xyz.value)";
		let wss_cod_bus :string = "this.xyz.value";
		let wss_cod_bank :string ="this.utilService.toString(this.xyz.value)";
		let wss_usercode :string = "this.utilService.toString(this.xyz.value)";
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
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
	private bcxRs99261ClnCtaCall(wss_rut_cli :string, wss_cod_mon :any, wss_ind_ori :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99261ClnCta.call(
			  (value) => this.bcxRs99261ClnCtaResult(value)
			, (value) => this.processFault(value)
			, wss_rut_cli
			, wss_cod_mon
			, wss_ind_ori
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).
	}


	/**
	 * Callback invocado por this.bcxRs99261ClnCta.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99261ClnCtaResult(wsResult :CmWsResult): void
	{

	

		this.cbbCuentaCorrienteOperacionArray = wsResult.getTableRows();
		this.cbbCuentaCorrienteComyGasArray = wsResult.getTableRows();


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
	// /**
	//  * Llamamos al Web Service.
	//  */
	// private crdRs200155EvaTasFnaCall(myArray:any[]): void
	// {
	// 	/* Mover los datos de la pantalla a los parametros del Web Service. 
	// 	IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
	// 	let wss_opr_fec_otor :any = myArray[0];
	// 	let wss_opr_tas_tip :string = myArray[1];
	// 	let wss_opr_tas_bas :string = myArray[2];
	// 	let wss_opr_tas_spr :string = myArray[3];
	// 	let wss_tas_tm2 :string = this.varTN;
	// 	let wss_usercode :string = this.user_logueado;
		  
	// 	// Activamos el simbolo de progress.

	// 	if(this.financiamiento_indicador_opcion == 'Nueva'){
	// 		//this.waitShow = true;
	// 	}
		
	// 	// Invocamos el WS.
	// 	this.crdRs200155EvaTasFna.call(
	// 		  (value) => this.crdRs200155EvaTasFnaResult(value)
	// 		, (value) => this.processFault(value)
	// 		, wss_opr_fec_otor
	// 		, wss_opr_tas_tip
	// 		, wss_opr_tas_bas
	// 		, wss_opr_tas_spr
	// 		, wss_tas_tm2
	// 		, wss_usercode
	// 	);

	// 	// Aca no puede haber nada que dependa del resultado (asincrono).

	// }
	// /**
	//  * Callback invocado por this.crdRs200155EvaTasFna.call.
	//  * @param wsResult Parametros de salida, mensaje de error.
	//  */
	// crdRs200155EvaTasFnaResult(wsResult :CmWsResult): void
	// {

	// 	/* Mover los parametros de salida a la pantalla. 
	// 	this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
	// 	 */

	// 	this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_opr_tas_fin', 6));

	// 	// Desactivamos el simbolo de progress.
	// 	if(this.financiamiento_indicador_opcion == 'Nueva'){
	// 		this.waitShow = false;
	// 	}
	// 	// A veces el Fault se viene por aca.
	// 	let hayError: boolean = wsResult.hayError();
	// 	if (hayError)
	// 	{
	// 		let msg: string = wsResult.getErrorMsg();
	// 		let code: string = wsResult.getErrorCode();
	// 		this.utilService.alert(this.dialog, msg + ' [' + code + ']');
	// 	}
	// }
	/**
	
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs25199TipCmbOperacionCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_mon_opr :string = this.txtCodMoneda.value;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs25199TipCmb.call(
			  (value) => this.bcxRs25199TipCmbOperacionResult(value)
			, (value) => this.processFault(value)
			, wss_mon_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs25199TipCmb.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs25199TipCmbOperacionResult(wsResult :CmWsResult): void
	{

		this.waitShow = false;
	
		//this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}
		else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {			
			this.bcxTipoCambioOperacion.patchValue(wsResult.getResultNumberFormat('wss_tc_opr', 8));	
		}		
	}


		/**
	 * Llamamos al Web Service.
	 */
	private bcxRs25199TipCmbComyGasCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_mon_opr :string = this.txtCodMoneda.value;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs25199TipCmb.call(
			  (value) => this.bbcxRs25199TipCmbComyGasResult(value)
			, (value) => this.processFault(value)
			, wss_mon_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs25199TipCmb.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bbcxRs25199TipCmbComyGasResult(wsResult :CmWsResult): void
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {			
			this.bcxTipoCambioComyGas.patchValue(wsResult.getResultNumberFormat('wss_tc_opr', 8));	
		}
	}



	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111TxtLciCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_sw_itr :string = "this.xyz.value";
		let wss_cod_prd :string = "this.utilService.toString(this.xyz.value)";
		let wss_tip_txt :string = "this.utilService.toString(this.xyz.value)";
		let wss_num_opr :string = "this.utilService.toString(this.xyz.value)";
		let wss_lin_txt :string = "this.utilService.toString(this.xyz.value)";
		let wss_usercode :string = "this.utilService.toString(this.xyz.value)";
		
		// Activamos el simbolo de progress.
		//this.waitShow = true;
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
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs99151BankcorCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_cod_mon :string = this.txtCodMoneda.value;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs99151Bankcor.call(
			  (value) => this.crdRs99151BankcorResult(value)
			, (value) => this.processFault(value)
			, wss_cod_mon
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs99151Bankcor.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs99151BankcorResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		this.bicCor = wsResult.getResultString('wss_bco_cor');
	//	this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 
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
	private crdRs550PzoCall(wss_ind_cal:any): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let fecha_otorgamiento: any;
		let fecha_vencimiento:any;

		if(this.txtOtorgamiento.value == ""){
			fecha_otorgamiento = "1753-01-01";
		} else {
			fecha_otorgamiento = this.utilService.toDate(this.txtOtorgamiento.value);
		}
		if(this.txtVencimiento.value == ""){
			fecha_vencimiento = "1753-01-01";
		} else {
			fecha_vencimiento = this.utilService.toDate(this.txtVencimiento.value);
		}
		let wss_fec_oto :any = fecha_otorgamiento;
		let wss_dia_pzo :string = this.txtDiasPlazos.value;
		let wss_fec_vto :any = fecha_vencimiento;
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
				// Desactivamos el simbolo de progress.
		if(this.financiamiento_indicador_opcion == 'Nueva'){
			//this.waitShow = true;
		}
		// Invocamos el WS.
		this.crdRs550Pzo.call(
			  (value) => this.crdRs550PzoResult(value)
			, (value) => this.processFault(value)
			, wss_ind_cal
			, wss_fec_oto
			, wss_dia_pzo
			, wss_fec_vto
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs550Pzo.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs550PzoResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		if(this.txtInicioCobroIn.value == "")
			this.txtInicioCobroIn.patchValue(this.txtOtorgamiento.value);

		this.txtDiasPlazos.patchValue(wsResult.getResultString('out_dia_pzo'));
		this.txtVencimiento.patchValue(wsResult.getResultDate('out_fec_vto'));
		//this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 
		if(this.financiamiento_indicador_opcion == 'Nueva'){
			this.waitShow = false;
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
	 * Llamamos al Web Service.
	 */
	private crdRs99130MonmtoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */
		let wss_opr_num :string = this.txtNumeroOperacion.value;
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

		this.modMonto = wsResult.getResultString('wss_mon_mto');
	
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
	private crdRs200112OprIngCall(indicador_aux:string, evalua:boolean): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */


		if(this.indicadorDeOpcion.value == 'C'){
			//this.ofunc_calcula_mod_monto();
			this.ofunc_carga_formularios(indicador_aux);
			return;
		} else {

			let valorBase:number = Number(this.utilService.toDecimal(this.bcxCostoFondo.value));
			let spreadSumar:number = Number(this.utilService.toDecimal(this.bcxSpread.value));
			let resultado:number = valorBase + spreadSumar;		
			this.spreadOculto = resultado;
			let wss_num_opr :string = this.txtNumeroOperacion.value;	
			let wss_fam_prd :string;
			if(this.txtFamiliaProducto.value == ''){
				wss_fam_prd = '0';
			} else {
				wss_fam_prd = this.txtFamiliaProducto.value;
			}
			let wss_cod_prd :string;
			if(this.txtCodProducto.value == ''){
				wss_cod_prd = '0';
			} else {
				wss_cod_prd = this.txtCodProducto.value;
			}

			let wss_cod_cli :string = this.utilService.toRut(this.bcxRut.value);

			let wss_ofi :string;
			if(this.txtCodSucursal.value == ''){
				wss_ofi='0';
			} else {
				wss_ofi = this.txtCodSucursal.value;
			}

			let wss_ref_cli :string;
			if(this.txtReferenciaCliente.value==''){
				wss_ref_cli='';
			} else {
				wss_ref_cli = this.txtReferenciaCliente.value;
			}

			let wss_mon_ope :string;
			if(this.txtCodMoneda.value == ''){
				wss_mon_ope ='';
			} else {
				wss_mon_ope = this.txtCodMoneda.value;
			}

			let wss_mto_ori :string 
			if(this.bcxMonto.value == '0,00'){
				wss_mto_ori = this.utilService.toDecimal('0,00');
			} else {
				wss_mto_ori = this.utilService.toDecimal(this.bcxMonto.value);
			}

			let wss_tas_tip :string;
			if(this.txtTipoTasa.value == ''){
				wss_tas_tip = '0';
			} else {
				wss_tas_tip = this.txtTipoTasa.value;
			}

			let wss_tas_bas :string;
			if(this.bcxValorBase.value == '0,000000'){
				wss_tas_bas = this.utilService.toDecimal('0,000000');
			} else {
				wss_tas_bas = this.utilService.toDecimal(this.bcxValorBase.value);
			}
			
			let wss_tas_spr :string = this.spreadOculto;

			let wss_tas_tm2 :string
			if(this.cbbTipoTasa0.value == ''){
				wss_tas_tm2 = '0';
			} else {
				wss_tas_tm2  = '0';
			}

			let wss_fec_otor :any; 
			if(this.txtOtorgamiento.value == ''){
				wss_fec_otor = '1753-01-01';
			} else {
				wss_fec_otor = this.utilService.toDate(this.txtOtorgamiento.value);
			}
	
			let wss_dias_pzo :string = this.txtDiasPlazos.value;
			if(this.txtDiasPlazos.value == ''){
				wss_dias_pzo = '0';
			} else {
				wss_dias_pzo = this.txtDiasPlazos.value;
			}
			let wss_fec_vto :any;
			if(this.txtVencimiento.value == ''){
				wss_fec_vto = '1753-01-01';
			} else {
				wss_fec_vto = this.utilService.toDate(this.txtVencimiento.value);
			}

			let wss_fec_ini_int :any;
			if(this.txtInicioCobroIn.value == ''){
				wss_fec_ini_int = this.utilService.toDate('01/01/1753');
			} else {
				wss_fec_ini_int = this.utilService.toDate(this.txtInicioCobroIn.value);
			}

			let wss_opr_asoc :string;
			if(this.bcxNumero.value == '0'){
				wss_opr_asoc = '0';
			} else {
				wss_opr_asoc = this.bcxNumero.value;
			}
			
			let wss_corr_opr :string;
			if(this.bcxCorrelativo.value == '0'){
				wss_corr_opr  = '0';
			} else {
				wss_corr_opr  = this.bcxCorrelativo.value;
			}

			let wss_ref_ext :string;
			if(this.bcxReferenciaExterna.value == ''){
				wss_ref_ext = '';
			} else {
				wss_ref_ext = this.bcxReferenciaExterna.value;
			}
			let wss_opr_spr_cof :string;
			if(this.bcxCostoFondo.value == '0,000000') {
				wss_opr_spr_cof = this.utilService.toDecimal('0,000000');
			} else {
				wss_opr_spr_cof = this.utilService.toDecimal(this.bcxCostoFondo.value);
			}

			let wss_opr_spr_spr :string;
			if(this.bcxSpread.value == '0,000000') {
				wss_opr_spr_spr = this.utilService.toDecimal('0,000000');
			} else {
				wss_opr_spr_spr = this.utilService.toDecimal(this.bcxSpread.value);
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
			this.ofunc_calcula_mod_monto();
			this.ofunc_carga_formularios(indicador_aux);
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200172OprIngCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 	 */ 
		let wss_usr_cod :string = this.utilService.toRut(this.bcxRut.value);
		let wss_opr_num :string = this.txtNumeroOperacion.value;
		let wss_fam_prd :string;
		if(this.txtFamiliaProducto.value == ''){
			wss_fam_prd = '0';
		} else {
			wss_fam_prd = this.txtFamiliaProducto.value;
		}

		let wss_cod_prd :string;
		if(this.txtCodProducto.value == ''){
			wss_cod_prd = '0';
		} else {
			wss_cod_prd = this.txtCodProducto.value;
		}

		let wss_odf_opr_ind :string;
		if(this.optMonedaOperacion.value == 'X'){
			wss_odf_opr_ind = 'X';
		} else{
			wss_odf_opr_ind = 'N';
		}
		
		let wss_odf_opr_cod :string;
		if(this.txtCodigoOperacion.value == ''){
			wss_odf_opr_cod = '0';
		} else {
			wss_odf_opr_cod = this.txtCodigoOperacion.value;
		}
		
		
		let wss_odf_opr_suc:string;
		if(this.txtSucursalOperacion.value == ''){
			wss_odf_opr_suc = '0';
		} else {
			wss_odf_opr_suc = this.txtSucursalOperacion.value;
		}

		let wss_odf_opr_ccte :string;
		if(this.cbbCuentaCorrienteOperacion.value == ''){
			wss_odf_opr_ccte = '';
		} else {
			wss_odf_opr_ccte = this.cbbCuentaCorrienteOperacion.value;
		}

		let wss_odf_opr_tc :string = this.utilService.toDecimal(this.bcxTipoCambioOperacion.value);
		let wss_odf_opr_bco :string = this.utilService.toString(this.txtBicCorresponsalOperacion.value);
		let wss_odf_cyg_ind :string;

		if(this.optMonedaComyGas.value == 'X'){
			wss_odf_cyg_ind = 'X';
		} else{
			wss_odf_cyg_ind = 'N';
		}

		let wss_odf_cyg_cod:string;
		if(this.txtCodigoComyGas.value == ''){
			wss_odf_cyg_cod = '0';
		} else {
			wss_odf_cyg_cod = this.txtCodigoComyGas.value;
		}

		let wss_odf_cyg_suc :string;
		if(this.txtSucursalComyGas.value == ''){
			wss_odf_cyg_suc = '0';
		} else {
			wss_odf_cyg_suc = this.txtSucursalComyGas.value;
		}
		

		let wss_odf_cyg_ccte :string = this.utilService.toString(this.cbbCuentaCorrienteComyGas.value);
		let wss_odf_cyg_tc :string = this.utilService.toDecimal(this.bcxTipoCambioOperacion.value);
		let wss_odf_cyg_bco :string = this.utilService.toString(this.txtBicCorresponsalComyGas.value);
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
			this.imprimir_doc_revisa();
			
		}




	}
	/**
	 * Llamamos al Web Service.
	 */
	public crdRs200152OprCall(wss_cod_cli :string, wss_fam_prd :string, wss_cod_ptr :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */

		this.varCodTemplate = wss_cod_ptr;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200152Opr.call(
			  (value) => this.crdRs200152OprResult(value)
			, (value) => this.processFault(value)
			, wss_cod_cli
			, wss_fam_prd
			, wss_cod_ptr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200152Opr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152OprResult(wsResult :CmWsResult): void
	{

		

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_nom_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_dir_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_ciu_cli'));
		this.xyz.patchValue(wsResult.getResultString('wss_cod_suc'));
		
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
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			
			this.txtNumeroOperacion.patchValue(wsResult.getResultString('wss_opr_num').trim());
			//this.numOperacion = wsResult.getResultString('wss_opr_num').trim();
			if(this.varCodTemplate != '') {
				this.varPlantillaGlobal = true;
				this.tasa_preferencial();
				this.varInicio=1;
				this.varInicioGlobal = 0;
				this.varCodTemplateGlobal = this.varCodTemplate;
			}else {
				this.varPlantillaGlobal = false;
				this.varCodTemplateGlobal = '';
			}
			if(this.txtFamiliaProducto.value == '2'){
				
				this.ofunc_habilita_cbr_interes_ant(this.txtNumeroOperacion.value);	
				this.habCamposStby.patchValue(false)
				this.habIndCobrInt.patchValue(true);
				
			} else {
				
				this.habIndCobrInt.patchValue(false);
			}

			this.bcxRs99260OdfOperacionCall('2');
			this.bcxRs99260OdfComCyGCall('2');

			// this.ofunc_hiden();

			// if(this.txtFamiliaProducto.value == '2'){
			// 	this.tamanio_canvas(this.txtFamiliaProducto.value);
			// } else {
			// 	this.selecEnterada();
			// }


			this.crdRs200151Crd001Call();	
		//	this.bcxRut.disable();
		
			
		}
	}

	ofunc_hiden(){
		
		if (this.txtFamiliaProducto.value == "1") {
			//cnvOF.y = 718;	
			//cnvComi.y=886;
			//cnvDes.visible=false;
			//this.habChkEnterada.patchValue(false);		
			this.chkEnterada.enable();				
		}
		else{
			//cnvOF.y = 886;
			//cnvComi.y=1054;
			//cnvDes.visible=true;
			
			this.chkEnterada.patchValue(true);	
			this.chkEnterada.disable();
		}			
		
	}


	tamanio_canvas(famProd:any) {
		if(famProd == '2'){
			this.destino_de_fondos_hiden.patchValue(true);
		} else {
			this.destino_de_fondos_hiden.patchValue(false);
			this.txtCodigoOperacion.patchValue("");
			this.cbbCodigoOperacion.patchValue("");	
		}
	}


	selecEnterada(){
		
		if(this.chkEnterada.value == true){
			this.destino_de_fondos_hiden.patchValue(false);
			this.txtCodigoOperacion.patchValue("");
			this.cbbCodigoOperacion.patchValue("");	
		}
		else{
			this.destino_de_fondos_hiden.patchValue(true);
			//height = 900;
		
		}
	}


	ofunc_habilita_cbr_interes_ant(rut:string){

	}




	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151IndPtrCall(): void
	{

		if(this.txtFamiliaProducto.value == '2'){
			this.crdRs200152OprCall(this.utilService.toRut(this.bcxRut.value),this.txtFamiliaProducto.value, '0000000000000000000000000000000000000000000');
		} else {
						/* Mover los datos de la pantalla a los parametros del Web Service. 
			IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
			let wss_cod_cli :string = this.utilService.toRut(this.bcxRut.value);
			let wss_usercode :string = this.user_logueado;
			
			// Activamos el simbolo de progress.
			//this.waitShow = true;
			// Invocamos el WS.
			this.crdRs200151IndPtr.call(
				(value) => this.crdRs200151IndPtrResult(value)
				, (value) => this.processFault(value)
				, wss_cod_cli
				, wss_usercode
			);
		}


		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151IndPtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151IndPtrResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_ind_ptr'));
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
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			//this.xyz.patchValue(wsResult.getResultString('wss_ind_ptr'));

			if(wsResult.getResultString('wss_ind_ptr') == 'S'){
				// var varTemplate:ttlTemplate = ttlTemplate(PopUpManager.createPopUp(this, ttlTemplate, true));	
				// varTemplate.varRut = txtRut.value();
				// varTemplate.varPadre = this;
				this.contextService.store(this);
				this.contextService.setUserData('bcxRut', this.utilService.toRut(this.bcxRut.value));
				this.contextService.setUserData('familiaProducto', this.txtFamiliaProducto.value);
				this.contextService.setUserData('varPadre', this);
				this.contextService.setUserData("user_logueado",this.user_logueado);
				this.router.navigate(['/template'])


			}else{
				/**varCodTemplate = '';
				ofunc_buscar_cliente();
				ofunc_cta_cte();
				ofunc_cta_cteDos();
				ofunc_hiden();**/
				//this.ofunc_aceptar_templates('');
				this.crdRs200152OprCall(this.utilService.toRut(this.bcxRut.value),this.txtFamiliaProducto.value, '');
				this.bcxRut.disable();
			}
		}
	}


	tasa_preferencial(){
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_num_opr: string = this.txtNumeroOperacion.value;
		let wss_usercode: string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151OprIlc.call(
			  (value) => this.crdRs200151OprIlcResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

	}


	/**
	 * Callback invocado por this.crdRs200112Cli.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151OprIlcResult(wsResult :CmWsResult): void
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.txtTipoTasa.patchValue(wsResult.getResultString('wss_tas_tip'));			
			this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_tas_bas',6));			
			this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr',6));
			this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_tas_fin',6));


			if(this.varCodTemplate != ''){
				this.txtReferenciaCliente.patchValue(wsResult.getResultString('wss_ref_cli'));
				this.txtCodMoneda.patchValue(wsResult.getResultString('wss_mon'));
				this.bcxMonto.patchValue(wsResult.getResultNumberFormat('wss_mto_ori',2));
				this.txtTipoTasa.patchValue(wsResult.getResultString('wss_tas_tip'));
				this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_tas_bas',6));				
				this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr',6));
				
				//txtCostoFondo.text=clsGeneral.oFormatNumeric(externalXML.itemout[0].wss_tas_spr_cof,6);
				//txtSpread.text=clsGeneral.oFormatNumeric(externalXML.itemout[0].wss_tas_spr_spr,6);
				
				this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_tas_fin',6));
				//txtDesde.text = formatDateTime.format(externalXML.itemout[0].wss_fec_otor.toString()); //  clsGeneral.oFormatDatetime(,3);     
				this.txtDiasPlazos.patchValue(wsResult.getResultString('wss_dias_pzo'));
				//txtVcto.text = formatDateTime.format(externalXML.itemout[0].wss_fec_vto.toString()); //  clsGeneral.oFormatDatetime(externalXML.itemout[0].wss_fec_vto,3);
				//txtFiCob.text = formatDateTime.format(externalXML.itemout[0].wss_fec_ini_int.toString()); //  clsGeneral.oFormatDatetime(externalXML.itemout[0].wss_fec_ini_int,3);   
			
		   }

		   this.varRutGlobal = this.utilService.toRut(this.bcxRut.value);

		}
	}





	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200112CliCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_opr_cli :string = "this.utilService.toString(this.xyz.value)";
		let wss_opr_num :string = "this.utilService.toString(this.xyz.value)";
		let wss_usercode :string = "this.utilService.toString(this.xyz.value)";
		  
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112Cli.call(
			  (value) => this.crdRs200112CliResult(value)
			, (value) => this.processFault(value)
			, wss_opr_cli
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112Cli.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200112CliResult(wsResult :CmWsResult): void
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
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151Crd001Call(): void
	{
		let wss_fam_prd :string; 
		let wss_usercode :string;

			if ((this.cbbCodFamiliaProducto != '') && (this.bcxRut.value != '')){
				let codigo:number=Number(this.txtFamiliaProducto.value);
				//FlexGlobals.topLevelApplication.setFmlPrd(codigo);
				wss_fam_prd	= this.txtFamiliaProducto.value;
				wss_usercode = this.user_logueado;
			
			
			// Activamos el simbolo de progress.
			////this.waitShow = true;
			// Invocamos el WS.
			this.crdRs200151Crd001.call(
				(value) => this.crdRs200151Crd001Result(value)
				, (value) => this.processFault(value)
				, wss_fam_prd
				, wss_usercode
			);

		}

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151Crd001.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151Crd001Result(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_vis_01'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_sw'));
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
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		}  else {
			let str:string = wsResult.getResultString('wss_vis_01');
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

	automata_habilita_campos(arrayAutomata:any[]){
		
			if(arrayAutomata[0] == true){
				this.txtNumeroOperacion.enable();
			} else {
				this.txtNumeroOperacion.disable();
			}	


			if(arrayAutomata[1] == true){
				this.txtFechaIngreso.enable();
			} else {
				this.txtFechaIngreso.disable();
			}
			this.txtFamiliaProducto.disable();
			this.cbbCodFamiliaProducto.disable();
			//this.bcxRut.enable();
			//this.txtNombre.enable();
			if(arrayAutomata[4] == true){
				this.txtDireccion.enable();
			} else {
				this.txtDireccion.disable();
			}
			if(arrayAutomata[5] == true){
				this.txtCodSucursal.enable();
				this.cbbCodSucursal.enable();
			} else {
				this.txtCodSucursal.disable();
				this.cbbCodSucursal.disable();
			}
			if(arrayAutomata[6] == true){
				this.txtCiudad.enable();
			} else {
				this.txtCiudad.disable();
			}
			if(arrayAutomata[7] == true){
				this.txtReferenciaCliente.enable();
			} else {
				this.txtReferenciaCliente.disable();
			}

			this.optMensajesSWIFT.enable();

			if(arrayAutomata[8] == true){
				this.txtCodProducto.enable();
				this.cbbProducto.enable();
			} else {
				this.txtCodProducto.disable();
				this.cbbProducto.disable();
			}
			if(arrayAutomata[9] == true){
				this.txtCodMoneda.enable();
				this.cbbMoneda.enable();
			} else {
				this.txtCodMoneda.disable();
				this.cbbMoneda.disable();
			}
			if(arrayAutomata[10] == true){
				this.bcxMonto.enable();
			} else {
				this.bcxMonto.enable();
			}
			if(arrayAutomata[11] == true){
				this.txtTipoTasa.enable();
				this.cbbTipoTasa.enable();
			} else {
				this.txtTipoTasa.disable();
				this.cbbTipoTasa.disable();
			}								
			//this.cbbTipoTasa0.enable();
			if(arrayAutomata[12] == true){
				this.bcxValorBase.enable();
			} else {
				this.bcxValorBase.disable();
			}
			if(arrayAutomata[13] == true){
				this.bcxCostoFondo.enable();
				this.bcxSpread.enable();
			} else {
				this.bcxCostoFondo.disable();
				this.bcxSpread.disable();
			}									
			this.bcxTasaFinal.disable();
			if(arrayAutomata[15] == true){
				this.txtOtorgamiento.enable();
			} else {
				this.txtOtorgamiento.disable();
			}
			if(arrayAutomata[16] == true){
				this.txtInicioCobroIn.enable();
			} else {
				this.txtInicioCobroIn.disable();
			}		
			if(arrayAutomata[17] == true){
				this.txtDiasPlazos.enable();
			} else {
				this.txtDiasPlazos.disable();
			}
			if(arrayAutomata[18] == true){
				this.txtVencimiento.enable();
			} else {
				this.txtVencimiento.disable();
			}
			if(arrayAutomata[19] == true){
				this.btnPlanPago = false;
			} else {
				this.btnPlanPago = true;
			}									
			if(arrayAutomata[20] == true){
				this.bcxNumero.enable();
			} else {
				this.bcxNumero.disable();
			}									
			if(arrayAutomata[21] == true){
				this.bcxCorrelativo.enable();
			} else {
				this.bcxCorrelativo.disable();
			}									
			if(arrayAutomata[22] == true){
				this.bcxReferenciaExterna.enable();
			} else {
				this.bcxReferenciaExterna.disable();
			}	
			if(arrayAutomata[23] == true){
				this.btnAvales = false;
			} else {
				this.btnAvales = true;
			}	
			if(arrayAutomata[24] == true){
				this.btnOtrasGarantias = false;
			} else {
				this.btnOtrasGarantias = true;
			}	
			if(arrayAutomata[25] == true){
				this.btnComisiones = false;
			} else {
				this.btnComisiones = true;
			}	
			if(arrayAutomata[26] == true){
				this.btnContraparte = false;
			} else {
				this.btnContraparte = true;
			}	
			if(arrayAutomata[27] == true){
				this.optMonedaOperacion.enable();
			} else {
				this.optMonedaOperacion.disable();
			}	
			if(arrayAutomata[27] == true){
				this.optMonedaOperacion.enable();
			} else {
				this.optMonedaOperacion.disable();
			}				
			if(arrayAutomata[28] == true){				
				this.txtCodigoOperacion.enable();
				this.cbbCodigoOperacion.enable();
			} else {				
				this.txtCodigoOperacion.disable();
				this.cbbCodigoOperacion.disable();
			}					
			//this.cbbCuentaCorrienteOperacion.enable();	
			if(arrayAutomata[30] == true){				
				this.txtSucursalOperacion.enable();
				this.cbbSucursalOperacion.enable();
			} else {				
				this.txtSucursalOperacion.disable();
				this.cbbSucursalOperacion.disable();
			}				
			if(arrayAutomata[31] == true){				
				this.bcxTipoCambioOperacion.enable();
			} else {				
				this.bcxTipoCambioOperacion.disable();
			}					
			if(arrayAutomata[32] == true){				
				this.bloquearOperaciones = false;
			} else {				
				this.bloquearOperaciones = true;
			}
			if(arrayAutomata[33] == true){				
				this.optMonedaComyGas.enable();
			} else {				
				this.optMonedaComyGas.disable();
			}
			if(arrayAutomata[34] == true){				
				this.txtCodigoComyGas.enable();
				this.cbbCodigoComyGas.enable();
			} else {				
				this.txtCodigoComyGas.disable();
				this.cbbCodigoComyGas.disable();
			}
			if(arrayAutomata[36] == true){				
				this.txtSucursalComyGas.enable();
				this.cbbSucursalComyGas.enable();
			} else {				
				this.txtSucursalComyGas.disable();
				this.cbbSucursalComyGas.disable();
			}				
			if(arrayAutomata[37] == true){				
				this.bcxTipoCambioComyGas.enable();
			} else {				
				this.bcxTipoCambioComyGas.disable();
			}					
			if(arrayAutomata[38] == true){				
				this.bloquearComyGas = false;
			} else {				
				this.bloquearComyGas = true;
			}	

			this.habilitarChbkSinImpuesto = false;
			this.cmbCausalNoCobro.enable();
			
			if(this.financiamiento_indicador_opcion == 'Nueva') {
							
				this.waitShow = false;
						
				// setTimeout(() => { 
				// 	this.txtReferenciaClienteNative.nativeElement.focus()
				//   }, 100);
				//this.txtNumeroOperacion.patchValue(this.numOperacion)
				this.bcxRut.disable();
				this.habilitarBtnCursar = false;
			}


			this.txtCodProducto.setValidators(CmTextoComboValidator(this.cbbProductoArray, 'wss_cod_prd'));	

	}






	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200112CobTyeCall(): void
	{
		
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_opr_num :string = this.txtNumeroOperacion.value;
		let wss_opr_eve :string = "OTO";
		let wss_ind_sn :string = this.chboxSinImpuestos		
		let wss_cod_cex :string;
		if(this.cmbCausalNoCobro.value == ''){
			wss_cod_cex = '';
		} else {
			wss_cod_cex = this.cmbCausalNoCobro.value;
		}
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		// this.crdRs200112CobTye.call(
		// 	  (value) => this.crdRs200112CobTyeResult(value)
		// 	, (value) => this.processFault(value)
		// 	, wss_opr_num
		// 	, wss_opr_eve
		// 	, wss_ind_sn
		// 	, wss_cod_cex
		// 	, wss_usercode
		// );
		this.crdRs200112OprIngCall('CURSAR', true);
		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112CobTye.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200112CobTyeResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg:string = wsResult.getResultString('wss_result_msg')
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);
		} else{
			this.crdRs200112OprIngCall('CURSAR', true);
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160TrnCexCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		// this.crdRs200160TrnCex.call(
		// 	  (value) => this.crdRs200160TrnCexResult(value)
		// 	, (value) => this.processFault(value)
		// 	, wss_usercode
		// );

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160TrnCex.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200160TrnCexResult(wsResult :CmWsResult): void
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
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151CobTyeCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_opr_num :string = this.txtNumeroOperacion.value;
		let wss_fam_prd :string = this.txtFamiliaProducto.value;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		// this.crdRs200151CobTye.call(
		// 	  (value) => this.crdRs200151CobTyeResult(value)
		// 	, (value) => this.processFault(value)
		// 	, wss_opr_num
		// 	, wss_fam_prd
		// 	, wss_usercode
		// );

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151CobTye.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151CobTyeResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_ind_vis'));
		this.xyz.patchValue(wsResult.getResultString('wss_ind_sn'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let indicadorVisible = wsResult.getResultString('wss_ind_vis');
		let indicadorSeleccionado = wsResult.getResultString('wss_ind_sn');

		if(indicadorVisible == "S"){
			this.activar_chbkSinImpuesto = true;
			this.activar_cmbCausalNoCobro = true;
				
			if(indicadorSeleccionado == "S"){
				
				this.chbkSinImpuesto = true;
				this.chboxSinImpuestos = "S";
								
			} else {
				
				this.chbkSinImpuesto = false;
				this.chboxSinImpuestos = "N";
			}
							
		} else {
			
			this.activar_chbkSinImpuesto = false;
			this.activar_cmbCausalNoCobro = false;
			this.chboxSinImpuestos = "N";
		}

		//this.chbkSinImpuesto.disable();
		this.cmbCausalNoCobro.disable();
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} //else if() {}

		
	}
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200151FormCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_form_ind_secc :string = "ADI";
		let wss_form_cod_ent :string = this.txtFamiliaProducto.value;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200151Form.call(
			  (value) => this.bcxRs200151FormResult(value)
			, (value) => this.processFault(value)
			, wss_form_ind_secc
			, wss_form_cod_ent
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200151Form.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200151FormResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_form_cod_form'));
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
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			let codForm = wsResult.getResultString('wss_form_cod_form');
			if(codForm == 'CRDI1'){
				
				

				if(this.cOrde == 0){

					this.ofunc_get_tag50();


				} else {
					this.ofunc_get_tag50();
				}
				
				this.contextService.store(this);
				this.contextService.setUserData("arrayTag50",this.arrayTag50);
				this.contextService.setUserData("financiamiento_indicador_opcion",this.financiamiento_indicador_opcion);
				this.contextService.setUserData("user_logueado",this.user_logueado);
				this.contextService.setUserData("familiaProducto",this.txtFamiliaProducto.value);
				this.contextService.setUserData("numOperacion", this.txtNumeroOperacion.value);
				this.contextService.setUserData("bcxRut",this.bcxRut.value);
				this.contextService.setUserData("WSS_D01_SGM", this.WSS_D01_SGM);
				this.contextService.setUserData("varPlantillaGlobal",this.varPlantillaGlobal);
				this.contextService.setUserData("varCodTemplateGlobal",this.varCodTemplateGlobal);		
				this.contextService.setUserData("varInicioGlobal",this.varInicioGlobal);
				this.contextService.setUserData("bicCor", this.bicCor);
				this.contextService.setUserData("fechaProceso",this.txtFechaIngreso.value);	
				this.contextService.setUserData("precarga", this.precarga);		
				this.contextService.setUserData("opcion",this.opcion);
				this.router.navigate(['/datosadicionales']);


			} else if (codForm == 'CRDI2'){

			}
		}
	}

	ofunc_get_tag50(){
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_opr_num :string = this.txtNumeroOperacion.value;
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
			debugger
			this.arrayTag50[0] = wsResult.getResultString('wss_txt_ord1');
			this.arrayTag50[1] = wsResult.getResultString('wss_txt_ord2');
			this.arrayTag50[2] = wsResult.getResultString('wss_txt_ord3');
			this.arrayTag50[3] = wsResult.getResultString('wss_txt_ord4');

		/* Mover los parametros de salida a la pantalla. 
			this.xyz.patchValue(wsResult.getResultString('wss_txt_ord1'));
			this.xyz.patchValue(wsResult.getResultString('wss_txt_ord2'));
			this.xyz.patchValue(wsResult.getResultString('wss_txt_ord3'));
			this.xyz.patchValue(wsResult.getResultString('wss_txt_ord4'));
			this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		}

	}



	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160FprdCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let WSS_D01_AREA :string = 'IMP';
		let WSS_D01_SGM :string = 'LCI';
		let WSS_D01_TIP :string = 'CRD';
		let wss_usercode :string = this.user_logueado;
		
		// // Activamos el simbolo de progress.
		 ////this.waitShow = true;
		// // Invocamos el WS.
		this.bcxRs200160Fprd.call(
			  (value) => this.bcxRs200160FprdResult(value)
			, (value) => this.processFault(value)
			, WSS_D01_AREA
			, WSS_D01_SGM
			, WSS_D01_TIP
			, wss_usercode
		);
	}
	/**
	 * Callback invocado por this.bcxRs200160Fprd.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160FprdResult(wsResult :CmWsResult): void
	{


		this.cbbCodFamiliaProductoArray = wsResult.getTableRows();
		this.bcxRs200160TasCall();

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
	private bcxRs200160SucCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Suc.call(
			  (value) => this.bcxRs200160SucResult(value)
			, (value) => this.processFault(value)
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Suc.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160SucResult(wsResult :CmWsResult): void
	{

		this.cbbSucursalOperacionArray = wsResult.getTableRows();
		this.cbbSucursalComyGasArray = wsResult.getTableRows();
		this.cbbCodSucursalArray = wsResult.getTableRows();

		this.bcxRs200160FprdCall();
		//

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
	private bcxRs200160PrdDetalleCall(famPrd:string): void
	{
		
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_cod_fprd :string = famPrd;
	

		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Prd.call(
			//  (value) => this.getComboData5(value)
			  (value) => this.bcxRs200160PrdDetalleResult(value)
			, (value) => this.processFault(value)
			, wss_cod_fprd
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Prd.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160PrdDetalleResult(wsResult :CmWsResult): void
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
			let	wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else{
			this.cbbProductoArray = wsResult.getTableRows();
		
		
			this.carga_tasa_t0();
			this.ofunc_llena_formulario();
	
			
		}
	}



	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160PrdCall(): void
	{

		if(this.txtFamiliaProducto.value == null || this.txtFamiliaProducto.value==""){
			this.txtFamiliaProducto.patchValue("");
		}
		
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_cod_fprd :string = this.txtFamiliaProducto.value;
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Prd.call(
			//  (value) => this.getComboData5(value)
			  (value) => this.bcxRs200160PrdResult(value)
			, (value) => this.processFault(value)
			, wss_cod_fprd
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Prd.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160PrdResult(wsResult :CmWsResult): void
	{

		this.cbbProductoArray = wsResult.getTableRows();
		this.crdRs550PzoCall(1);
		
		
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
	private bcxRs200160MonCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Mon.call(
			  (value) => this.bcxRs200160MonResult(value)
			, (value) => this.processFault(value)
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Mon.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160MonResult(wsResult :CmWsResult): void
	{

		this.cbbMonedaArray = wsResult.getTableRows();

		this.bcxRs200160SucCall();

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
	private bcxRs200160TasCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
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

		this.cbbTipoTasaArray = wsResult.getTableRows();
		let famPrd:string = this.wsResult_detalle.getResultString('wss_fam_prd');
		this.bcxRs200160PrdDetalleCall(famPrd);

		// Desactivamos el simbolo de progress.
		//this.waitShow = false;
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
	private bcxRs99260OdfOperacionCall(wss_tip_odf :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260Odf.call(
			  (value) => this.bcxRs99260OdfOperacionResult(value)
			, (value) => this.processFault(value)
			, wss_tip_odf
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99260Odf.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260OdfOperacionResult(wsResult :CmWsResult): void
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
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.cbbCodigoOperacionArray = wsResult.getTableRows(); 	
			this.ofunc_cta_cte_operacion();
			this.txtCodigoOperacion.setValidators(CmTextoComboValidator(this.cbbCodigoOperacionArray, 'cod_DES'));
		}
	}



	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs99260OdfComCyGCall(wss_tip_odf :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260Odf.call(
			  (value) => this.bcxRs99260OdfComCyGResult(value)
			, (value) => this.processFault(value)
			, wss_tip_odf
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99260Odf.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260OdfComCyGResult(wsResult :CmWsResult): void
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
		} 
		 else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.waitShow = false;
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.cbbCodigoComyGasArray = wsResult.getTableRows();
			this.ofunc_cta_cte_com_y_gas();
			this.txtCodigoComyGas.setValidators(CmTextoComboValidator(this.cbbCodigoComyGasArray, 'cod_DES'));
		}
	}



		/**
	 * Llamamos al Web Service.
	 */
	private bcxRs99260ClnCtaOperacionCall(wss_rut_cli :string, wss_cod_mon :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		// let wss_rut_cli :string = this.utilService.toRut(this.bcxRut.value);
		// let wss_cod_mon :string = this.utilService.toString(this.txtCodMoneda.value);
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260ClnCta.call(
			  (value) => this.bcxRs99260ClnCtaOperacionResult(value)
			, (value) => this.processFault(value)
			, wss_rut_cli
			, wss_cod_mon
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99260ClnCta.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260ClnCtaOperacionResult(wsResult :CmWsResult): void
	{
		
		this.cbbCuentaCorrienteOperacionArray = wsResult.getTableRows();
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;

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
	private bcxRs99260ClnCtaComyGastoCall(wss_rut_cli :string, wss_cod_mon :string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		// let wss_rut_cli :string = this.utilService.toRut(this.bcxRut.value);
		// let wss_cod_mon :string = this.utilService.toString(this.txtCodMoneda.value);
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		////this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260ClnCta.call(
			  (value) => this.bcxRs99260ClnCtaComyGastoResult(value)
			, (value) => this.processFault(value)
			, wss_rut_cli
			, wss_cod_mon
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99260ClnCta.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260ClnCtaComyGastoResult(wsResult :CmWsResult): void
	{
	
		this.cbbCuentaCorrienteComyGasArray = wsResult.getTableRows();
		// Desactivamos el simbolo de progress.
		//this.waitShow = false;


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
	 * Llenado de combo cbbCodFamiliaProducto
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbCodFamiliaProductoArray = wsResult.getTableRows();
		this.getComboDataFin(0, wsResult);
	}

	/**
	 * Llenado de combo cbbCodSucursal
	 */
	private getComboData1(wsResult: CmWsResult): void
	{
		this.cbbCodSucursalArray = wsResult.getTableRows();
		this.cbbSucursalOperacionArray = wsResult.getTableRows();
		this.cbbSucursalComyGasArray = wsResult.getTableRows();
		this.getComboDataFin(1, wsResult);
	}

	/**
	 * Llenado de combo cbbMoneda
	 */
	private getComboData2(wsResult: CmWsResult): void
	{
		this.cbbMonedaArray = wsResult.getTableRows();
		this.getComboDataFin(2, wsResult);
	}

	/**
	 * Llenado de combo cbbTipoTasa
	 */
	private getComboData3(wsResult: CmWsResult): void
	{
		this.cbbTipoTasaArray = wsResult.getTableRows();
		this.getComboDataFin(3, wsResult);
	}

	/**
	 * Llenado de combo cmbCausalNoCobro
	 */
	private getComboData4(wsResult: CmWsResult): void
	{
		this.cmbCausalNoCobroArray = wsResult.getTableRows();
		this.getComboDataFin(4, wsResult);
	}

	/**
	 * Llenado de combo cbbCodigoOperacion
	 */
	private getComboData5(wsResult: CmWsResult): void
	{		
		this.cbbCodigoOperacionArray = wsResult.getTableRows();
		this.getComboDataFin(4, wsResult);
		
	}

	/**
	 * Llenado de combo cbbCodigoComyGas
	 */
	private getComboData6(wsResult: CmWsResult): void
	{
		this.cbbCodigoComyGasArray = wsResult.getTableRows();
		this.getComboDataFin(5, wsResult);
	}

	/**
	 * Llenado de combo cbbProducto
	 */
	private getComboData7(wsResult: CmWsResult): void
	{
		this.cbbProductoArray = wsResult.getTableRows();
		this.getComboDataFin(7, wsResult);
	}

	/**
	 * Llenado de combo cbbSucursalOperacion
	 */
	private getComboData8(wsResult: CmWsResult): void
	{
		this.cbbSucursalOperacionArray = wsResult.getTableRows();
		this.getComboDataFin(8, wsResult);
	}

	/**
	 * Llenado de combo cbbCodigoComyGas
	 */
	private getComboData9(wsResult: CmWsResult): void
	{
		this.cbbCuentaCorrienteOperacionArray = wsResult.getTableRows();
		//this.cbbCodigoComyGasArray = wsResult.getTableRows();
		this.getComboDataFin(9, wsResult);
	}

	/**
	 * Llenado de combo cbbCuentaCorrienteComyGas
	 */
	private getComboData10(wsResult: CmWsResult): void
	{
		this.cbbCuentaCorrienteComyGasArray = wsResult.getTableRows();
		this.getComboDataFin(10, wsResult);
	}

	/**
	 * Llenado de combo cbbSucursalComyGas
	 */
	private getComboData11(wsResult: CmWsResult): void
	{
		this.cbbSucursalComyGasArray = wsResult.getTableRows();
		this.getComboDataFin(11, wsResult);
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
	 * Evento click del boton cmdRechazar.
	 */
	cmdRechazar_click(): void
	{

		this.waitShow = true;
		this.contextService.store(this);
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("bcxRut",this.bcxRut.value);
		this.contextService.setUserData("nombre",this.txtNombre.value);
		this.contextService.setUserData("numeroOperacion",this.txtNumeroOperacion.value);
		this.contextService.setUserData("numeroSolicitud",this.txtNumeroSolicitud.value);
		this.contextService.setUserData("moneda",this.cbbMoneda.value);
		this.contextService.setUserData("monto",this.bcxMonto.value);
		this.contextService.setUserData("fechaVencimiento",this.txtVencimiento.value);
		this.contextService.setUserData("nombreProducto","Financiamiento - Otorgamiento");
		

		this.router.navigate(['/rechazopreingreso']);

	}
	/**
	 * Evento click del boton cmdCursar.
	 */
	cmdCursar_click(): void
	{
		this.crdRs200112CobTyeCall();
		
	}
	/**
	 * Evento click del boton cmdDocumentos.
	 */
	cmdDocumentos_click(): void {

		this.waitShow = true;
		this.contextService.store(this);
		this.contextService.setUserData("user_logueado",this.user_logueado);
		

		this.contextService.setUserData("numeroOperacion",this.txtNumeroOperacion.value);
		this.contextService.setUserData("numeroSolicitud",this.txtNumeroSolicitud.value);

		this.router.navigate(['/documentos']);
	}
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.waitShow = false;
		if(this.financiamiento_indicador_opcion == 'Detalle'){
			this.location.back()
		} else if(this.financiamiento_indicador_opcion == 'Preingreso'){
			this.location.back()
		} else {
			this.utilService.alert(this.dialog, "No implementado");
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

			txtNumeroOperacion: '',
			txtFechaIngreso: ['', CmDateValidator()],
			txtFamiliaProducto:'',
			cbbCodFamiliaProducto:'',
			bcxRut:'',
			txtNombre:'',
			txtDireccion:'',
			txtCodSucursal:'',
			cbbCodSucursal:'',
			txtCiudad:'',
			txtReferenciaCliente:'',
			txtCodProducto:'',
			cbbProducto:'',
			txtCodMoneda:'',			
			cbbMoneda:'',
			bcxMonto:'',
			txtTipoTasa:'',
			cbbTipoTasa:'',
			cbbTipoTasa0:'',
			bcxValorBase:'',
			bcxCostoFondo:'',
			bcxSpread:'',
			bcxTasaFinal:'',
			txtOtorgamiento:['', CmDateValidator()],
			txtInicioCobroIn:['', CmDateValidator()],
			txtDiasPlazos:'',
			txtVencimiento:['', CmDateValidator()],
			bcxNumero:'',
			bcxCorrelativo:'',
			bcxReferenciaExterna:'',
			optMonedaOperacion:'N',
			txtCodigoOperacion:'',
			cbbCodigoOperacion:'',
			cbbCuentaCorrienteOperacion:'',
			txtSucursalOperacion:'',
			cbbSucursalOperacion:'',
			bcxTipoCambioOperacion:'',
			txtBicCorresponsalOperacion:'',
			txtNombreCorresponsalOperacion:'',
			optMonedaComyGas:'N',
			txtCodigoComyGas:'',
			cbbCodigoComyGas:'',
			cbbCuentaCorrienteComyGas:'',
			txtSucursalComyGas:'',
			cbbSucursalComyGas:'',
			bcxTipoCambioComyGas:'',
			txtBicCorresponsalComyGas:'',
			txtNombreCorresponsalComyGas:'',
			cmbCausalNoCobro:'',
			chbkSinImpuesto:'',
			txtNumeroSolicitud:'',
			indicadorDeOpcion:'',
			optMensajesSWIFT:'S',
			indCobrInt:'',
			habIndCobrInt:'',
			habCamposStby:'',
			chkEnterada:'',
			habChkEnterada:'',
			cnvDes:'',
			destino_de_fondos_hiden:''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{

		this.txtNumeroOperacion = this.form.controls['txtNumeroOperacion'];
		this.txtFechaIngreso = this.form.controls['txtFechaIngreso'];
		this.txtFamiliaProducto = this.form.controls['txtFamiliaProducto'];
		this.cbbCodFamiliaProducto = this.form.controls['cbbCodFamiliaProducto'];
		this.bcxRut = this.form.controls['bcxRut'];
		this.txtNombre = this.form.controls['txtNombre'];
		this.txtDireccion = this.form.controls['txtDireccion'];
		this.txtCodSucursal = this.form.controls['txtCodSucursal'];
		this.cbbCodSucursal = this.form.controls['cbbCodSucursal'];
		this.txtCiudad = this.form.controls['txtCiudad'];
		this.txtReferenciaCliente = this.form.controls['txtReferenciaCliente'];
		this.txtCodProducto = this.form.controls['txtCodProducto'];
		this.cbbProducto = this.form.controls['cbbProducto'];
		this.txtCodMoneda = this.form.controls['txtCodMoneda'];
		this.cbbMoneda = this.form.controls['cbbMoneda'];
		this.bcxMonto = this.form.controls['bcxMonto'];
		this.txtTipoTasa = this.form.controls['txtTipoTasa'];
		this.cbbTipoTasa = this.form.controls['cbbTipoTasa'];
		this.cbbTipoTasa0 = this.form.controls['cbbTipoTasa0'];
		this.bcxValorBase = this.form.controls['bcxValorBase'];
		this.bcxCostoFondo = this.form.controls['bcxCostoFondo'];
		this.bcxSpread = this.form.controls['bcxSpread'];
		this.bcxTasaFinal = this.form.controls['bcxTasaFinal'];
		this.txtOtorgamiento = this.form.controls['txtOtorgamiento'];
		this.txtInicioCobroIn = this.form.controls['txtInicioCobroIn'];
		this.txtDiasPlazos = this.form.controls['txtDiasPlazos'];
		this.txtVencimiento = this.form.controls['txtVencimiento'];
		this.bcxNumero = this.form.controls['bcxNumero'];
		this.bcxCorrelativo = this.form.controls['bcxCorrelativo'];
		this.bcxReferenciaExterna = this.form.controls['bcxReferenciaExterna'];
		this.optMonedaOperacion = this.form.controls['optMonedaOperacion'];
		this.txtCodigoOperacion = this.form.controls['txtCodigoOperacion'];
		this.cbbCodigoOperacion = this.form.controls['cbbCodigoOperacion'];
		this.cbbCuentaCorrienteOperacion = this.form.controls['cbbCuentaCorrienteOperacion'];
		this.txtSucursalOperacion = this.form.controls['txtSucursalOperacion']
		this.cbbSucursalOperacion = this.form.controls['cbbSucursalOperacion'];
		this.bcxTipoCambioOperacion = this.form.controls['bcxTipoCambioOperacion'];
		this.txtBicCorresponsalOperacion = this.form.controls['txtBicCorresponsalOperacion'];
		this.txtNombreCorresponsalOperacion = this.form.controls['txtNombreCorresponsalOperacion'];
		this.optMonedaComyGas = this.form.controls['optMonedaComyGas'];
		this.txtCodigoComyGas = this.form.controls['txtCodigoComyGas'];
		this.cbbCodigoComyGas = this.form.controls['cbbCodigoComyGas'];
		this.cbbCuentaCorrienteComyGas = this.form.controls['cbbCuentaCorrienteComyGas'];
		this.txtSucursalComyGas = this.form.controls['txtSucursalComyGas'];
		this.cbbSucursalComyGas = this.form.controls['cbbSucursalComyGas'];
		this.bcxTipoCambioComyGas = this.form.controls['bcxTipoCambioComyGas'];
		this.txtBicCorresponsalComyGas = this.form.controls['txtBicCorresponsalComyGas'];
		this.txtNombreCorresponsalComyGas = this.form.controls['txtNombreCorresponsalComyGas'];
		this.cmbCausalNoCobro = this.form.controls['cmbCausalNoCobro'];
		this.chbkSinImpuesto = this.form.controls['chbkSinImpuesto'];
		this.txtNumeroSolicitud = this.form.controls['txtNumeroSolicitud'];
		this.indicadorDeOpcion = this.form.controls['indicadorDeOpcion'];
		this.optMensajesSWIFT = this.form.controls['optMensajesSWIFT'];
		this.indCobrInt = this.form.controls['indCobrInt'];
		this.habIndCobrInt = this.form.controls['habIndCobrInt'];
		this.habCamposStby = this.form.controls['habCamposStby'];
		this.chkEnterada = this.form.controls['chkEnterada'];
		this.habChkEnterada = this.form.controls['habChkEnterada'];
		this.cnvDes = this.form.controls['cnvDes'];
		this.destino_de_fondos_hiden = this.form.controls['destino_de_fondos_hiden'];
	}


	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{

		this.txtFamiliaProducto.setValidators(CmTextoComboValidator(this.cbbCodFamiliaProductoArray, 'wss_cod_fprd'));
		this.txtCodSucursal.setValidators(CmTextoComboValidator(this.cbbCodSucursalArray, 'wss_cod_suc'));
		this.txtCodProducto.setValidators(CmTextoComboValidator(this.cbbProductoArray, 'wss_cod_prd'));
		this.txtCodMoneda.setValidators(CmTextoComboValidator(this.cbbMonedaArray, 'wss_cod_mon'));
		this.txtTipoTasa.setValidators(CmTextoComboValidator(this.cbbTipoTasaArray, 'wss_tip_tas'));
		this.txtCodigoOperacion.setValidators(CmTextoComboValidator(this.cbbCodigoOperacionArray, 'cod_DES'));
		this.txtCodigoComyGas.setValidators(CmTextoComboValidator(this.cbbCodigoComyGasArray, 'cod_DES'));
		this.txtSucursalOperacion.setValidators(CmTextoComboValidator(this.cbbSucursalOperacionArray, 'wss_cod_suc'));
		this.txtSucursalComyGas.setValidators(CmTextoComboValidator(this.cbbSucursalComyGasArray, 'wss_cod_suc'));

	}


	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		// this.bcxMonto.valueChanges.subscribe((value) => {
		// 	this.utilService.bcxNumeroInit(this.bcxMonto);
		// });
		this.bcxValorBase.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxValorBase);
		});
		this.bcxCostoFondo.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxCostoFondo);
		});
		this.bcxSpread.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxSpread);
		});
		this.bcxTasaFinal.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxTasaFinal);
		});
		this.bcxNumero.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxNumero);
		});
		this.bcxCorrelativo.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxCorrelativo);
		});

		this.bcxTipoCambioOperacion.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxTipoCambioOperacion);
		});
		this.bcxTipoCambioComyGas.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxTipoCambioComyGas);
		});
		this.txtFamiliaProducto.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbCodFamiliaProducto,value);
		});
		this.cbbCodFamiliaProducto.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtFamiliaProducto,value);
		});
		this.txtCodSucursal.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbCodSucursal,value);
		});
		this.cbbCodSucursal.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtCodSucursal,value);
		});
		this.txtCodMoneda.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbMoneda,value);
		});
		this.cbbMoneda.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtCodMoneda,value);
		});
		this.txtTipoTasa.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbTipoTasa,value);
		});
		this.cbbTipoTasa.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtTipoTasa,value);
		});
		this.txtCodProducto.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbProducto,value);
		});
		this.cbbProducto.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtCodProducto,value);
		});
		this.txtReferenciaCliente.valueChanges.subscribe((value)=> {
			this.utilService.toUpper(this.txtReferenciaCliente);
		});
		this.txtCodigoOperacion.valueChanges.subscribe((value)=>{
			this.utilService.textoCombo_change(this.cbbCodigoOperacion,value);
		});
		this.cbbCodigoOperacion.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtCodigoOperacion,value);
		});
		this.txtSucursalOperacion.valueChanges.subscribe((value)=>{
			this.utilService.textoCombo_change(this.cbbSucursalOperacion,value);
		});
		this.cbbSucursalOperacion.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtSucursalOperacion,value);
		});
		this.txtCodigoComyGas.valueChanges.subscribe((value)=>{
			this.utilService.textoCombo_change(this.cbbCodigoComyGas,value);
		});
		this.cbbCodigoComyGas.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtCodigoComyGas,value);
		});
		this.txtSucursalComyGas.valueChanges.subscribe((value)=>{
			this.utilService.textoCombo_change(this.cbbSucursalComyGas,value);
		});
		this.cbbSucursalComyGas.valueChanges.subscribe((value)=> {
			this.utilService.comboTexto_changeSelect(this.txtSucursalComyGas,value);
		});



	}

	focusout_cargar_datos_cliente() {

		let bcxRutId:any = document.getElementById("bcxRutId");

		if(this.bcxRut.valid){
			this.ofunc_carga_generacion_avisos();
			//this.bcxRs99260ClnCall();
		} else {
			
			bcxRutId.focus();
			// setTimeout(()=>{
			// 	this.bcxRutNative.nativeElement.focus();
			// },0);	
		}
		
	}

	// setTimeout(()=>{ // this will make the execution after the above boolean has changed
	// 	this.searchElement.nativeElement.focus();
	//     






	focusout_familia_de_producto() {

		//this.waitShow = true;
		this.crdRs200151CobTyeCall();
		this.ofunc_buscar_cliente();
		this.bcxRs200160PrdCall();		
		//this.crdRs200151Crd001Call();
		

	}

	focusout_codigo_moneda() {
	
		if(this.txtCodMoneda.value != ''){
			this.cargar_banco();
		}
		//this.ofunc_tipo_cambio_dos();
		this.ofunc_tipo_cambio_dos_operaciones()
		this.ofunc_tipo_cambio_dos_comygas();
		this.ofunc_calcula_mod_monto();		
		this.ofunc_cta_cte_operacion();
		this.ofunc_cta_cte_com_y_gas();
	
	}

	habilitarSinCobroImpuestos(){
		this.crdRs200151CobTyeCall();
	}

	chbkSinImpuesto_change(){
		if(this.chbkSinImpuesto==true){
			this.chbkSinImpuesto = false;
			this.chboxSinImpuestos='N';
		
		} else {
			this.chbkSinImpuesto = true;
			this.chboxSinImpuestos='S';			
		}
	}

	focusout_monto() {
		if(this.txtCodMoneda.value != ""){
			this.cargar_banco();
		}
		this.ofunc_calcula_mod_monto();
	}

	focus_tipo_de_tasa() {
		this.Cambiar_tasa();
	}

	ofunc_buscar_cliente() {
		
		let variableRut:any = this.utilService.toRut(this.bcxRut.value);
		if (variableRut=='00000000000'){			
			this.txtNombre.patchValue("");
			this.txtDireccion.patchValue("");
			this.txtCodSucursal.patchValue("");
			this.cbbCodSucursal.patchValue("");
			this.txtCiudad.patchValue("");		
			this.txtReferenciaCliente.patchValue("");		
			return;
		} 
		this.txtNombre.patchValue("");
		this.txtDireccion.patchValue("");
		this.txtCodSucursal.patchValue("");
		this.cbbCodSucursal.patchValue("");
		this.txtCiudad.patchValue("");		
		this.txtReferenciaCliente.patchValue("");	

		let wss_cod_cli :string = this.utilService.toRut(this.bcxRut.value);
		let wss_fam_prd :string = this.txtFamiliaProducto.value; 
		let wss_cod_ptr :string = '';

		

		if((this.txtFamiliaProducto.value != "") && (this.bcxRut.value != "") && (this.cbbCodFamiliaProducto.value != "") && (this.txtNumeroOperacion.value != "")){
			this.crdRs200152OprCall(wss_cod_cli,wss_fam_prd,wss_cod_ptr);
		} else {
			this.bcxRs99260ClnCall();
		}
	}

	ofunc_mtd_llena_producto() {
		this.bcxRs200160PrdCall();
	}

	deshabilita_campos(){
		

		this.txtNumeroOperacion.disable();
		this.txtFechaIngreso.disable();		
		this.txtDireccion.disable();
		this.txtCodSucursal.disable();
		this.cbbCodSucursal.disable();
		this.txtCiudad.disable();
		this.txtReferenciaCliente.disable();
		this.txtCodProducto.disable();
		this.cbbProducto.disable();
		this.txtCodMoneda.disable();
		this.cbbMoneda.disable();
		this.bcxMonto.disable();
		this.txtTipoTasa.disable();
		this.cbbTipoTasa.disable();
		this.cbbTipoTasa0.disable();
		this.bcxValorBase.disable();
		this.bcxCostoFondo.disable();
		this.bcxSpread.disable();									
		this.bcxTasaFinal.disable();
		this.txtOtorgamiento.disable();
		this.txtInicioCobroIn.disable();
		this.txtDiasPlazos.disable();
		this.txtVencimiento.disable();  
		this.bcxNumero.disable();
		this.bcxCorrelativo.disable();
		this.bcxReferenciaExterna.disable();
		if(this.financiamiento_indicador_opcion == 'Nueva'){
			this.btnPlanPago = true;
			this.btnAvales = true;
			this.btnOtrasGarantias = true;
			this.btnComisiones = true;
			this.btnContraparte = true
		} else {
			this.btnPlanPago = false;
			this.btnAvales = false;
			this.btnOtrasGarantias = false;
			this.btnComisiones = false;
			this.btnContraparte = false
		}
		this.optMonedaOperacion.disable();				
		this.txtCodigoOperacion.disable();
		this.cbbCodigoOperacion.disable();
		this.cbbCuentaCorrienteOperacion.disable();			
		this.txtSucursalOperacion.disable();
		this.cbbSucursalOperacion.disable();			
		this.bcxTipoCambioOperacion.disable();				
		//this.txtBicCorresponsalOperacion.disable();
		this.btnBancoOperacion = true;				
		this.optMonedaComyGas.disable();				
		this.txtCodigoComyGas.disable();
		this.cbbCodigoComyGas.disable();
		this.cbbCuentaCorrienteComyGas.disable();			
		this.txtSucursalComyGas.disable();
		this.cbbSucursalComyGas.disable();			
		this.bcxTipoCambioComyGas.disable();			
		//this.txtBicCorresponsalComyGas.disable();
		this.btnBancoComyGas = true;

		this.bloquearOperaciones = true;
		this.bloquearComyGas = true;

		this.habilitarChbkSinImpuesto = true;
		this.cmbCausalNoCobro.disable();
		this.habCamposStby.patchValue(true);
		this.optMensajesSWIFT.disable();		
		this.destino_de_fondos_hiden.patchValue(false);
		this.chkEnterada.patchValue(false);

}

ofunc_origen_de_fondo() {
	this.bcxRs99260OdfOperacionCall('2');
	this.bcxRs99260OdfComCyGCall('2');
}




ofunc_cta_cte_operacion() {

	
	if((this.txtCodMoneda.value != "") && (this.bcxRut.value != "")){
		if(this.optMonedaOperacion.value == 'X'){
			this.bcxRs99260ClnCtaOperacionCall(this.utilService.toRut(this.bcxRut.value), this.txtCodMoneda.value);
		}
		else if(this.optMonedaOperacion.value == 'N'){
			this.bcxRs99260ClnCtaOperacionCall(this.utilService.toRut(this.bcxRut.value),"0");
		}
	}
}

 ofunc_cta_cte_com_y_gas() {

	if((this.txtCodMoneda.value != "") && (this.bcxRut.value != "")){
		if(this.optMonedaComyGas.value == 'X'){
			this.bcxRs99260ClnCtaComyGastoCall(this.utilService.toRut(this.bcxRut.value), this.txtCodMoneda.value);
		}
		else if(this.optMonedaComyGas.value == 'N'){
			this.bcxRs99260ClnCtaComyGastoCall(this.utilService.toRut(this.bcxRut.value),"0");
		}
	}
}

cmdLimpiar_click(){
	
	this.limpiar_campos_formularios();
	this.bcxRs200251PdtCall();
	this.deshabilita_campos();
	setTimeout(() => {					
		this.waitShow = false;
	  }, 1600);	

}

limpiar_campos_formularios(){
	this.txtNumeroOperacion.patchValue("");
	this.bcxRut.patchValue("");
	this.txtNombre.patchValue();
	this.bcxRut.enable();
	this.txtFamiliaProducto.patchValue("");
	this.cbbCodFamiliaProducto.patchValue("");
	
	//this.txtFechaIngreso.patchValue("");	
	this.txtFamiliaProducto.enable();
	this.cbbCodFamiliaProducto.enable();
	this.txtDireccion.patchValue("");
	this.txtCodSucursal.patchValue("");
	this.cbbCodSucursal.patchValue("");
	this.txtCiudad.patchValue("");
	this.txtReferenciaCliente.patchValue("");
	this.txtCodProducto.patchValue("");
	this.cbbProducto.patchValue("");
	this.txtCodMoneda.patchValue("");
	this.cbbMoneda.patchValue("");
	this.bcxMonto.patchValue("");
	this.txtTipoTasa.patchValue("");
	this.cbbTipoTasa.patchValue("");
	this.cbbTipoTasa0.patchValue("");
	this.bcxValorBase.patchValue("");
	this.bcxCostoFondo.patchValue("");
	this.bcxSpread.patchValue("");									
	this.bcxTasaFinal.patchValue("");
	this.txtOtorgamiento.patchValue("");
	//this.txtInicioCobroIn.disable();
	this.txtDiasPlazos.disable();
	this.txtDiasPlazos.patchValue("");
	this.txtVencimiento.disable();  
	this.btnPlanPago = false;
	this.bcxNumero.patchValue("");
	this.bcxCorrelativo.patchValue("");
	this.bcxReferenciaExterna.patchValue("");
	this.btnAvales = false;
	this.btnOtrasGarantias = false;
	this.btnContraparte = false;
	this.btnComisiones = false;
	this.optMonedaOperacion.patchValue("N");				
	this.txtCodigoOperacion.patchValue("");
	this.cbbCodigoOperacion.patchValue("");
	this.cbbCuentaCorrienteOperacion.patchValue("");			
	this.txtSucursalOperacion.patchValue("");
	this.cbbSucursalOperacion.patchValue("");			
	this.bcxTipoCambioOperacion.patchValue("");				
	this.txtBicCorresponsalOperacion.patchValue("");
	this.btnBancoOperacion = false;				
	this.optMonedaComyGas.patchValue("N");				
	this.txtCodigoComyGas.patchValue("");
	this.cbbCodigoComyGas.patchValue("");
	this.cbbCuentaCorrienteComyGas.patchValue("");			
	this.txtSucursalComyGas.patchValue("");
	this.cbbSucursalComyGas.patchValue("");			
	this.bcxTipoCambioComyGas.patchValue("");			
	this.txtBicCorresponsalComyGas.patchValue("");
	this.btnBancoComyGas = false;
	this.chbkSinImpuesto = "";
	this.activar_chbkSinImpuesto = false;
	this.cmbCausalNoCobro.patchValue("");
	this.activar_cmbCausalNoCobro = false;
	this.habilitarBtnCursar = true;
	this.habCamposStby.patchValue(true);
	this.habIndCobrInt.patchValue(false);
	this.destino_de_fondos_hiden.patchValue(true);
}

cargar_banco(){
	this.crdRs99151BankcorCall();
}

 ofunc_tipo_cambio_dos_operaciones(){
	if(this.optMonedaOperacion.value = 'N'){
		this.txtMyText=this.bcxTipoCambioOperacion;
		this.ofunc_tipo_cambio_operacion();
	}	

}

ofunc_tipo_cambio_dos_comygas(){	
	if(this.optMonedaComyGas.value = 'N'){
		this.txtMyText=this.bcxTipoCambioComyGas;
		this.ofunc_tipo_cambio_comygas();
	}

}

ofunc_tipo_cambio_operacion(){
	this.bcxRs25199TipCmbOperacionCall();
}

ofunc_tipo_cambio_comygas(){
	this.bcxRs25199TipCmbComyGasCall();
}


ofunc_calcula_mod_monto(){
	this.crdRs99130MonmtoCall()
}

change_codigo_moneda() {
	this.ofunc_cta_cte_operacion();
	this.ofunc_cta_cte_com_y_gas();
}

close_combobox_moneda(event) {
	this.ofunc_cta_cte_operacion();
	this.ofunc_odf("2",3);
	if(this.txtCodMoneda.value != ""){
		this.cargar_banco();
	}
	this.ofunc_tipo_cambio_dos_operaciones();
	this.ofunc_calcula_mod_monto();
}

close_tasa_tn(event){
	this.varTN = this.cbbTipoTasa0.value;
	
}

ofunc_odf(valor:string,modu:number){
	if((this.txtCodMoneda.value != "") && (this.bcxRut.value != "")){
		if(modu == 1){

			this.txtCodigoOperacion.patchValue("");
			this.mod=1;
			this.bcxRs99260OdfOperacionCall(valor);

		}else if(modu == 2){
			this.txtCodigoComyGas.patchValue("");
			this.mod=2;
			this.bcxRs99260OdfComCyGCall(valor);
		}
		else{
			this.txtCodigoOperacion.patchValue("");
			this.txtCodigoComyGas.patchValue("");
			this.mod=3;
			this.bcxRs99260OdfOperacionCall(valor);
			this.bcxRs99260OdfComCyGCall(valor);
		}
	}
}


 Cambiar_tasa():void{

	let myArray:any[] = [];

	let valorBase:number = Number(this.utilService.toDecimal(this.bcxCostoFondo.value));
	let spreadSumar:number = Number(this.utilService.toDecimal(this.bcxSpread.value));
	let resultado:number = valorBase + spreadSumar;
	
	this.spreadOculto = resultado;
					
	myArray[0]=this.utilService.toDate(this.txtOtorgamiento.value);
	if(this.txtTipoTasa.value=='')
		myArray[1]=0;
	else
		myArray[1]=this.txtTipoTasa.value;
	
	if(this.bcxValorBase.value=='')
		myArray[2]=this.utilService.toDecimal("0.000000");
	else	
		myArray[2]=this.utilService.toDecimal(this.bcxValorBase.value);
	
	if(this.spreadOculto=='')
		myArray[3]=this.utilService.toDecimal("0.000000");
	else	
		myArray[3]=resultado;
	
	if(this.varTN=="0")
		myArray[4]=0;
	else
		myArray[4]=this.varTN;
	
	
	//this.crdRs200155EvaTasFnaCall(myArray);

}		

 change_TN(event):void {
	
	if(this.txtTipoTasa.value !="0") {
		this.cbbTipoTasa0.enable();
	}	
	else {
		this.cbbTipoTasa0.disable();		
		this.cbbTipoTasa0.patchValue("");
	}
}

 ofunc_calcular_fecha(indicador:number){

	this.crdRs550PzoCall(indicador);	
}			

copiarFechaOtorgamiento():void {
			
	this.txtInicioCobroIn.patchValue(this.txtOtorgamiento.value);
	
}

ngModelChange_codigo_operacion(event) {
	this.utilService.textoCombo_change(this.cbbCodigoOperacion,event.value);
}

ngModelChange_codigo_cyg(event) {
	this.utilService.textoCombo_change(this.cbbCodigoComyGas,event.value);
}

	/**
	 * Funcion que se gatilla cuando cambias de opcion : moneda extranjera (MX)
	 * Moneda nacional (MN)
	 */
change_optionButton_optMonedaOperacion():void{
	
	this.txtCodigoOperacion.patchValue("");
	this.cbbCodigoOperacion.patchValue("");
	this.cbbCodigoOperacionArray = [];
	this.cbbCuentaCorrienteOperacion.disable();
	this.cbbCuentaCorrienteOperacion.patchValue("");

	this.cargar_tipo_operacion_();
	this.ofunc_cta_cte_operacion();
	this.habilita_cuenta_corriente_operacion();
	

}

 cargar_tipo_operacion_(){
	if(this.optMonedaOperacion.value == 'X'){
		this.bcxTipoCambioOperacion.patchValue('0,00000');
		this.ofunc_odf('1',1);
	} else if(this.optMonedaOperacion.value == 'N'){
		this.ofunc_tipo_cambio_dos_operaciones();
		this.ofunc_odf('2',1);
	}
}

/**
 * Funcion que se gatilla cuando cambias de opcion : moneda extranjera (MX)
 * Moneda nacional (MN)
 */
change_optionButton_optMonedaComyGas():void{
	this.txtCodigoComyGas.patchValue("");
	this.cbbCodigoComyGas.patchValue("");
	this.cbbCodigoComyGasArray = [];
	this.cbbCuentaCorrienteComyGas.disable();
	this.cbbCuentaCorrienteComyGas.patchValue("")
	this.cargar_tipo_comygas_()
	this.ofunc_cta_cte_com_y_gas();
	this.habilita_cuenta_corriente_comcyg();
	
}

cargar_tipo_comygas_(){
	if(this.optMonedaComyGas.value == 'X'){
		this.bcxTipoCambioComyGas.patchValue('0,000000');
		this.ofunc_odf('1', 2);
	} else if(this.optMonedaComyGas.value == 'N'){
		//this.ofunc_tipo_cambio_dos();
		this.ofunc_tipo_cambio_dos_comygas()
		this.ofunc_odf('2', 2);
	}
}

/** 
 * Función que habilita o deshabilita campo de cuenta corriente de la operación
 */	
habilita_cuenta_corriente_operacion(){
	
	if((this.optMonedaOperacion.value == 'X') && (this.txtCodigoOperacion.value=='5')){
		this.cbbCuentaCorrienteOperacion.enable();

	} else if((this.optMonedaOperacion.value=='N') && (this.txtCodigoOperacion.value=='1')){
		this.cbbCuentaCorrienteOperacion.enable();
	} else {
		this.cbbCuentaCorrienteOperacion.disable();	
		this.cbbCuentaCorrienteOperacion.patchValue('');
	}   

	this.txtCodigoOperacion.setValidators(CmTextoComboValidator(this.cbbCodigoOperacionArray, 'cod_DES'));
}		
/** 
* Función que habilita o deshabilita campo de cuenta corriente de comisiones y gastos
*/	
habilita_cuenta_corriente_comcyg(){

	if((this.optMonedaComyGas.value == 'X') && (this.txtCodigoComyGas.value=='5')){
		this.cbbCuentaCorrienteComyGas.enable();

	} else if((this.optMonedaComyGas.value=='N') && (this.txtCodigoComyGas.value=='1')){
		this.cbbCuentaCorrienteComyGas.enable();
	} else {
		this.cbbCuentaCorrienteComyGas.disable();	
		this.cbbCuentaCorrienteComyGas.patchValue('');
	}	

	this.txtCodigoComyGas.setValidators(CmTextoComboValidator(this.cbbCodigoComyGasArray, 'cod_DES'));
}


cmdAvales_click(){
	this.crdRs200112OprIngCall('AA',false);
} 


cmdOtrasGarantias_click() {
	this.crdRs200112OprIngCall('OG',false);
} 

cmdContraParte_click() {
	this.crdRs200112OprIngCall('CP',false);

}

cmdComisiones_click():void{
	this.crdRs200112OprIngCall('MC',false);

}

cmdPlanDePago_click() {
	this.crdRs200112OprIngCall('PP',false);
}

cmdDatosAdicionales_click():void{
	this.crdRs200112OprIngCall('DA',false);
}


ofunc_carga_formularios(indicador_aux:string) {
	

	if(indicador_aux == 'MC'){
		this.contextService.store(this);
		let numeroOperacion: string = this.txtNumeroOperacion.value;
		let codigoIndicador: string = this.indicadorDeOpcion.value;
		let codigoProducto: string = "CRD";
		let codigoEvento: string = ""
	  
		this.router.navigate(['/comisiones', 
		  numeroOperacion, 
		  codigoIndicador, 
		  codigoProducto,
		  codigoEvento 
		]);
	  
	}
	if(indicador_aux == 'PP'){
		this.contextService.store(this);
		this.contextService.setUserData('user_logueado', this.user_logueado);
		this.contextService.setUserData("familiaProducto", this.txtFamiliaProducto.value);
		this.contextService.setUserData("numOperacion",this.txtNumeroOperacion.value);	
		this.contextService.setUserData("opcion", this.indicadorDeOpcion.value);		
		this.router.navigate(['/plandepago']);
	}
	if(indicador_aux =='CP'){
		this.contextService.store(this);

		this.contextService.setUserData("numOperacion", this.txtNumeroOperacion.value);
		this.contextService.setUserData("bcxRut",this.bcxRut.value);
		this.contextService.setUserData("indicadorHabContraparte",this.indicadorHabContraparte);
		this.contextService.setUserData("opcion", this.indicadorDeOpcion.value);			
		this.contextService.setUserData("familiaProducto", this.txtFamiliaProducto.value);
		this.contextService.setUserData("codigoProducto", this.txtCodProducto.value);
		this.contextService.setUserData("user_logueado", this.user_logueado);
		this.contextService.setUserData("sucursal", this.txtCodSucursal.value);
		this.contextService.setUserData("moneda", this.txtCodMoneda.value);
		this.contextService.setUserData("monto", this.bcxMonto.value);
		this.contextService.setUserData("diasPlazo", this.txtDiasPlazos.value);
		this.contextService.setUserData("fechaVencimiento", this.txtVencimiento.value);
		this.contextService.setUserData("inicioIntereses", this.txtInicioCobroIn.value);
		this.contextService.setUserData("otorgamiento", this.txtOtorgamiento.value);
	
		this.router.navigate(['/contraparte']);
	}
	if(indicador_aux =='OG'){
		this.contextService.store(this);
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("bcxRut",this.bcxRut.value);
		this.contextService.setUserData("txtNumeroOperacion",this.txtNumeroOperacion.value);
		this.contextService.setUserData("txtFechaIngreso", this.utilService.toDate(this.txtFechaIngreso.value))
		this.contextService.setUserData("opcion", this.indicadorDeOpcion.value);
	
		this.router.navigate(['/tipodegarantia']);
	}
	if(indicador_aux =='AA') {
		this.contextService.store(this);
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("bcxRut",this.bcxRut.value);
		this.contextService.setUserData("txtNumeroOperacion",this.txtNumeroOperacion.value);
		this.contextService.setUserData("opcion", this.indicadorDeOpcion.value);
	
		this.router.navigate(['/avales']);
	}
	if(indicador_aux == 'DA'){		
		this.bcxRs200151FormCall();

	}
	if(indicador_aux == 'CURSAR'){		
		this.crdRs200172OprIngCall();
	}
}


ofunc_llena_formulario(){
	
	let wsResult:CmWsResult = this.wsResult_detalle;
	this.indicadorDeOpcion.patchValue(wsResult.getResultString('wss_ind_act'));
	console.log("Carga -> this.indicadorDeOpcion.value: ", this.indicadorDeOpcion.value);
	if(wsResult.getResultString('wss_ind_act')=='A'){
		this.txtNumeroOperacion.patchValue(this.numOperacion.trim());
		this.txtFechaIngreso.patchValue(wsResult.getResultDate('wss_fec_otor'));
		this.bcxRut.patchValue(wsResult.getResultString('wss_cod_cli'));
		this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli')); 
		this.txtDireccion.patchValue(wsResult.getResultString('wss_dir_cli')); 
		this.txtCiudad.patchValue(wsResult.getResultString('wss_ciu_cli')); 
		this.txtFamiliaProducto.patchValue(wsResult.getResultString('wss_fam_prd').trim());
		this.txtCodSucursal.patchValue(wsResult.getResultString('wss_ofi').toString());
		this.txtReferenciaCliente.patchValue(wsResult.getResultString('wss_ref_cli'));
		this.txtCodProducto.patchValue(wsResult.getResultString('wss_cod_prd').toString().trim());
		this.txtCodMoneda.patchValue(wsResult.getResultString('wss_mon'));
		this.bcxMonto.patchValue(wsResult.getResultNumberFormat('wss_mto_ori',2));
		this.txtTipoTasa.patchValue(wsResult.getResultString('wss_tas_tip').toString())
		if(wsResult.getResultString('wss_tas_tip').toString()!='0'){
			this.cbbTipoTasa0.enable()
		} else {
			this.cbbTipoTasa0.disable()
		}
		
		this.cbbTipoTasa0.patchValue(wsResult.getResultString('wss_tas_tm2'));
		this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_tas_bas',6));
		this.spreadOculto = wsResult.getResultNumberFormat('wss_tas_spr',6);
		this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_tas_bas',6));
		this.txtOtorgamiento.patchValue(wsResult.getResultDate('wss_fec_otor'));
		this.txtDiasPlazos.patchValue(wsResult.getResultString('wss_dias_pzo'));
		this.txtVencimiento.patchValue(wsResult.getResultDate('wss_fec_vto'));
		this.txtInicioCobroIn.patchValue(wsResult.getResultDate('wss_fec_ini_int'));
		this.bcxNumero.patchValue(wsResult.getResultString('wss_opr_asoc').trim());
		this.bcxCorrelativo.patchValue(wsResult.getResultString('wss_corr_opr').toString());
		this.bcxReferenciaExterna.patchValue(wsResult.getResultString('wss_ref_ext'));
		this.bcxCostoFondo.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_cof',6));
		this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_spr',6));
		
		this.txtCodigoOperacion.patchValue(wsResult.getResultString('wss_odf_opr_cod').toString());
		this.cbbCuentaCorrienteOperacion.patchValue(wsResult.getResultString('wss_odf_opr_ccte'));
		this.txtSucursalOperacion.patchValue(wsResult.getResultString('wss_odf_opr_suc').toString());	
		this.bcxTipoCambioOperacion.patchValue(wsResult.getResultNumberFormat('wss_odf_opr_tc',6));
		this.txtBicCorresponsalOperacion.patchValue(wsResult.getResultString('wss_odf_opr_bco').trim());

		this.txtCodigoComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_cod').toString().toString());
		this.cbbCuentaCorrienteComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_ccte').toString());
		this.txtSucursalComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_suc').toString());
		this.bcxTipoCambioComyGas.patchValue(wsResult.getResultNumberFormat('wss_odf_cyg_tc',6));
		this.txtBicCorresponsalComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_bco').trim());

		if(this.financiamiento_indicador_opcion == 'Preingreso'){
			this.txtNumeroSolicitud.patchValue(this.numeroSolicitud.trim());	


			// this.ofunc_cta_cte_operacion();
			// this.ofunc_cta_cte_com_y_gas();
		//	this.habilitar_campos_preingreso();
			this.habilitarSinCobroImpuestos();
			this.ofunc_calcular_fecha(2);
			this.Cambiar_tasa();
		} else {
			this.crdRs200151Crd001Call();
		}

		this.ofunc_cta_cte_operacion();
		this.ofunc_cta_cte_com_y_gas();
	
		//this.habilitarBtnCursar = false;

	} else if(wsResult.getResultString('wss_ind_act')=='C'){
		this.txtNumeroOperacion.patchValue(this.numOperacion.trim());
		if(this.financiamiento_indicador_opcion == 'Preingreso'){
			this.txtNumeroSolicitud.patchValue(this.numeroSolicitud.trim());	
		}
		this.txtFechaIngreso.patchValue(wsResult.getResultDate('wss_fec_otor'));
		this.bcxRut.patchValue(wsResult.getResultString('wss_cod_cli'));
		this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli')); 
		this.txtDireccion.patchValue(wsResult.getResultString('wss_dir_cli')); 
		this.txtCiudad.patchValue(wsResult.getResultString('wss_ciu_cli')); 
		this.txtFamiliaProducto.patchValue(wsResult.getResultString('wss_fam_prd').trim());
		this.txtCodSucursal.patchValue(wsResult.getResultString('wss_ofi').toString());
		this.txtReferenciaCliente.patchValue(wsResult.getResultString('wss_ref_cli'));		
		this.txtCodProducto.patchValue(wsResult.getResultString('wss_cod_prd').toString().trim());
		this.txtCodMoneda.patchValue(wsResult.getResultString('wss_mon'));
		this.bcxMonto.patchValue(wsResult.getResultNumberFormat('wss_mto_ori',2));
		this.txtTipoTasa.patchValue(wsResult.getResultString('wss_tas_tip').toString())
		if(wsResult.getResultString('wss_tas_tip').toString()!='0'){
			this.cbbTipoTasa0.enable()
		} else {
			this.cbbTipoTasa0.disable()
		}

		this.cbbTipoTasa0.patchValue(wsResult.getResultString('wss_tas_tm2'));
		this.bcxValorBase.patchValue(wsResult.getResultNumberFormat('wss_tas_bas',6));
		this.spreadOculto = wsResult.getResultNumberFormat('wss_tas_spr',6);
		this.bcxTasaFinal.patchValue(wsResult.getResultNumberFormat('wss_tas_fin',6));
		this.txtOtorgamiento.patchValue(wsResult.getResultDate('wss_fec_otor'));
		this.txtDiasPlazos.patchValue(wsResult.getResultString('wss_dias_pzo'));
		this.txtVencimiento.patchValue(wsResult.getResultDate('wss_fec_vto'));
		this.txtInicioCobroIn.patchValue(wsResult.getResultDate('wss_fec_ini_int'));
		this.bcxNumero.patchValue(wsResult.getResultString('wss_opr_asoc').trim())
		this.bcxCorrelativo.patchValue(wsResult.getResultString('wss_corr_opr').toString())
		this.bcxReferenciaExterna.patchValue(wsResult.getResultString('wss_ref_ext'));
		this.bcxCostoFondo.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_cof',6));
		this.bcxSpread.patchValue(wsResult.getResultNumberFormat('wss_tas_spr_spr',6));
		
		this.txtCodigoOperacion.patchValue(wsResult.getResultString('wss_odf_opr_cod').toString());
		this.cbbCuentaCorrienteOperacion.patchValue(wsResult.getResultString('wss_odf_opr_ccte'));
		this.txtSucursalOperacion.patchValue(wsResult.getResultString('wss_odf_opr_suc').toString());	
		this.bcxTipoCambioOperacion.patchValue(wsResult.getResultNumberFormat('wss_odf_opr_tc',6));
		this.txtBicCorresponsalOperacion.patchValue(wsResult.getResultString('wss_odf_opr_bco').trim());

		this.txtCodigoComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_cod').toString());
		this.cbbCuentaCorrienteComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_ccte').toString());
		this.txtSucursalComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_suc').toString());
		this.bcxTipoCambioComyGas.patchValue(wsResult.getResultNumberFormat('wss_odf_cyg_tc',6));
		this.txtBicCorresponsalComyGas.patchValue(wsResult.getResultString('wss_odf_cyg_bco').trim());

		this.ofunc_cta_cte_operacion();
		this.ofunc_cta_cte_com_y_gas();
		this.deshabilita_campos();

		this.habilitarBtnCursar = true;
	
	}
	this.waitShow = false;
	
}

imprimir_doc_revisa(): void {
		
// 	this.url = this.hostService.getHost() + '/BCXGENPDF_WEB/generarPDF?wss_cod_apl=BKO&wss_cod_doc=DOCFNAING&wss_sol_num=&wss_ins_num=&wss_opr_num='+this.txtNumeroOperacion.value.trim()+',0&wss_cod_cli='+this.hostService.getTokenUser()+'&wss_doc_ver=0&wss_val_prm1=&wss_val_prm=';
// 	if(this.url.indexOf("http:") < 0){
// 		this.url = 'http://' +  this.url;
// 	}
	/**
   * Documento Revisa PDF.
   */

    let wss_cod_apl: string = 'DOCREV';
    let fld_eva_num_ope: string = this.txtNumeroOperacion.value.replace(/^\s*|\s*$/g, '');
    let fld_eva_num_doc_rev: string = '0';
    let fld_eva_est_eve: string = '0';
 
    this.url = this.hostService.getHost() + '/BCXGENPDF_WEB/generarPDF?wss_cod_apl='+wss_cod_apl+'&fld_eva_num_ope='+fld_eva_num_ope+'&fld_eva_num_doc_rev='+fld_eva_num_doc_rev+'&fld_eva_est_eve='+fld_eva_est_eve;
    if(this.url.indexOf("http:") < 0){
        this.url = 'http://' +  this.url;
    }
 
	const subscription = interval(3800)
	.subscribe(() => {
		this.seleccion_de_formulario();
		subscription.unsubscribe();
	});

	
}

seleccion_de_formulario(){

		if(this.financiamiento_indicador_opcion == 'Detalle') {
		
			this.router.navigate(['/abrircolocacion']);
		}else if(this.financiamiento_indicador_opcion == 'Preingreso'){
		
			this.router.navigate(['/preingreso']);		
		} else {

			this.cmdLimpiar_click();
		}
		this.waitShow = false;

}


// const subscription = interval(1000)
// .subscribe(() => {

// 	//this.waitShow = true;

// 	subscription.unsubscribe();
// });


abrir_frame_documentos(): void {
		
	this.url = this.hostService.getHost() + '/BCXGENPDF_WEB/generarPDF?wss_cod_apl=BKO&wss_cod_doc=DOCFNAING&wss_sol_num=&wss_ins_num=&wss_opr_num='+this.txtNumeroOperacion.value.trim()+',0&wss_cod_cli='+this.hostService.getTokenUser()+'&wss_doc_ver=0&wss_val_prm1=&wss_val_prm=';
	if(this.url.indexOf("http:") < 0){
		this.url = 'http://' +  this.url;
	}

//	iFrame.frame.source = urlDocumentos + "/index.xhtml?setUsuario=" + FlexGlobals.topLevelApplication.setUsuario + "&setPassword="+ FlexGlobals.topLevelApplication.setPassword + "&setModo=CON&nOperacion="+numeroOperacion+"&nSolicitud="+txtNumSol.text+"&codProd=FNA";


}

change_txtcodigo_operacion() {

	let codigoOperacionValue:any = Number(this.txtCodigoOperacion.value);
	this.utilService.textoCombo_change(this.cbbCodigoOperacion,codigoOperacionValue);
}

change_txtcodigo_cyg() {

	let codigoCygValue:any = Number(this.txtCodigoComyGas.value);
	this.utilService.textoCombo_change(this.cbbCodigoComyGas,codigoCygValue);
}


habilitar_campos_preingreso(){

	
	//this.txtFamiliaProducto.disable();
	//this.cbbCodFamiliaProducto.disable();
	this.txtDireccion.enable();
	this.txtCodSucursal.disable();
	this.cbbCodSucursal.disable();
	this.txtCiudad.enable();
	this.txtReferenciaCliente.disable();
	this.txtCodProducto.enable();
	this.cbbProducto.enable();
	this.txtCodMoneda.disable();
	this.cbbMoneda.disable();
	this.bcxMonto.disable();
	this.txtTipoTasa.disable();
	this.cbbTipoTasa.disable();
	this.cbbTipoTasa0.disable();
	this.bcxValorBase.disable();
	this.bcxCostoFondo.disable();
	this.bcxSpread.disable();									
	this.bcxTasaFinal.disable();
	this.txtOtorgamiento.disable();
	this.txtInicioCobroIn.disable();
	this.txtDiasPlazos.disable();
	this.txtVencimiento.disable();  
	this.btnPlanPago = false;
	this.bcxNumero.enable();
	this.bcxCorrelativo.enable();
	this.bcxReferenciaExterna.enable();
	this.btnAvales = false;
	this.btnOtrasGarantias = false;
	this.btnComisiones = false;
	this.btnContraparte = false;
	this.optMonedaOperacion.enable();				
	this.txtCodigoOperacion.enable();
	this.cbbCodigoOperacion.enable();
	this.cbbCuentaCorrienteOperacion.disable();			
	this.txtSucursalOperacion.enable();
	this.cbbSucursalOperacion.enable();			
	this.bcxTipoCambioOperacion.enable();				
	this.txtBicCorresponsalOperacion.enable();
	this.btnBancoOperacion = true;				
	this.optMonedaComyGas.enable();				
	this.txtCodigoComyGas.enable();
	this.cbbCodigoComyGas.enable();
	this.cbbCuentaCorrienteComyGas.disable();			
	this.txtSucursalComyGas.enable();
	this.cbbSucursalComyGas.enable();			
	this.bcxTipoCambioComyGas.enable();			
	this.txtBicCorresponsalComyGas.enable();
	this.btnBancoComyGas = true;

	this.chbkSinImpuesto.enable();
	this.cmbCausalNoCobro.enable();

	// this.waitShow = false;
	
} 



}

