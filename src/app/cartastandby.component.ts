// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 30/04/2020 17:33:36
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
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
	   , CmWsResult } from '@bcxang';
import { SharedService } from './SharedService.service';	   
// Web Services
import { BCX_RS_200_160_RUCP_2 } from './ws/BCX_RS_200_160_RUCP_2';
import { BCX_RS_200_160_BANK } from './ws/BCX_RS_200_160_BANK';
import { BCX_RS_200_251_PDT } from './ws/BCX_RS_200_251_PDT';
import { BCX_RS_99_251_BANK } from './ws/BCX_RS_99_251_BANK';
import { CRD_RS_200_112_ALI } from './ws/CRD_RS_200_112_ALI';
import { CRD_RS_200_112_DLI } from './ws/CRD_RS_200_112_DLI';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { CRD_RS_200_151_ALI } from './ws/CRD_RS_200_151_ALI';
import { CRD_RS_200_151_DLI } from './ws/CRD_RS_200_151_DLI';
import { CRD_RS_200_160_TXT_LCI } from './ws/CRD_RS_200_160_TXT_LCI';
import { CRD_RS_200_112_OPR_ING } from './ws/CRD_RS_200_112_OPR_ING';
import { BCX_RS_200_112_CLIAM } from './ws/BCX_RS_200_112_CLIAM';
import { CRD_RS_200_172_OPR_ING } from './ws/CRD_RS_200_172_OPR_ING';
import { CRD_RS_99_130_MONMTO } from './ws/CRD_RS_99_130_MONMTO';
import { interval } from 'rxjs';


@Component({
	selector: 'my-form',
	templateUrl: 'cartastandby.component.html'
})
/**
 * Form: Condiciones adicionales
 */
export class CartaStandbyComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'Campo';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtBicRecep :any;
	txtNomCorre :any;
	txtDireCorre :any;
	txtCiuCorre :any;
	txtPaisCorre :any;
	txtNumeroCartaCredito :any;
	txtFecha :any;
	txtReglasAplicables :any;
	cbbReglasAplicables :any;
	txtReglaOther:any;
	txtDetalleGarantia :any;
	txtInfoRemitente72 :any;
	myTextArea:any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbReglasAplicablesArray: any[] = [];

	user_logueado:any;
	numOperacion:any;
	WSS_D01_SGM:any;
	opcion:any;
	financiamiento_indicador_opcion:any;
	bicCor:any;
	fechaProceso:any;
	objetoPadre:any;
	myDate:any;
	varInicio:any;
	myText:any;
	codigoCampo:any;

	bFlagCambioEspecial:boolean;
	ocultarReglaOther:boolean = false;
	identificador:any;

	url:string = '';
	valorReturn:any;
	varDatosadicionales:any;

	ignoredFirstEvent = false;
	initValue;
	myDateAny:any;


	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private bcxRs200160Rucp2: BCX_RS_200_160_RUCP_2
		, private bcxRs200160Bank: BCX_RS_200_160_BANK
		, private bcxRs200251Pdt: BCX_RS_200_251_PDT
		, private bcxRs99251Bank: BCX_RS_99_251_BANK
		, private crdRs200112Ali: CRD_RS_200_112_ALI
		, private crdRs200112Dli: CRD_RS_200_112_DLI
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private crdRs200151Ali: CRD_RS_200_151_ALI
		, private crdRs200151Dli: CRD_RS_200_151_DLI
		, private crdRs200160TxtLci: CRD_RS_200_160_TXT_LCI
		, private crdRs200112OprIng: CRD_RS_200_112_OPR_ING
		, private bcxRs200112Cliam: BCX_RS_200_112_CLIAM
		, private crdRs200172OprIng: CRD_RS_200_172_OPR_ING
		, private crdRs99130Monmto: CRD_RS_99_130_MONMTO
		, private sharedService: SharedService
		){

			this.initValue = this.myDateAny;

		}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		debugger
		this.financiamiento_indicador_opcion = this.contextService.getUserData("financiamiento_indicador_opcion");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");	
		this.bicCor = this.contextService.getUserData("bicCor");
		this.fechaProceso = this.contextService.getUserData("fechaProceso");		
		this.objetoPadre = this.contextService.getUserData("objetoPadre");
		this.varInicio = this.contextService.getUserData("varInicio");
		


		// Numericos y uppercase.
		this.valueChanges();
		// Combos llenados al inicio.
		this.waitShow = true;
		this.wsFin = [];

		// cbbReglasAplicables
		this.wsFin.push(false);
		this.bcxRs200160Rucp2.call (
			  (value) => this.getComboData0(value)
			, (value) => this.processFault(value)
		);


		this.txtNumeroCartaCredito.patchValue(this.objetoPadre.txtNumeroOperacion.value);
		this.txtNumeroCartaCredito.disable();
		this.txtFecha.disable();
		this.txtNomCorre.disable();
		this.txtDireCorre.disable();
		this.txtCiuCorre.disable();
		this.txtPaisCorre.disable();

		this.bcxRs200251PdtCall();	
		//txtBicRecep.setFocus();	
		if(this.varInicio == 1)
			this.crdRs200151AliCall();
		// Validadores de Combo-Texto.
		this.validatorsDef();


			// if (this.sharedService.clickEventsubscription == undefined) {	
				// this.sharedService.clickEventsubscription = this.sharedService.getClickEvent().subscribe((object)=> {						
				// 	this.valorReturn = object;								
				// })
			// }	
	}
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160Rucp2Call(): void
	{
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Rucp2.call(
			  (value) => this.bcxRs200160Rucp2Result(value)
			, (value) => this.processFault(value)
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Rucp2.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160Rucp2Result(wsResult :CmWsResult): void
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
	private bcxRs200160BankCall(cBic:any): void
	{
		if (cBic.toString().trim() == '')
		return;	
		/* Mover los datos de la pantalla a los parametros del Web Service.  */
		let wss_cod_ing :string = 'CR';
		let wss_cod_bus :string = '0';
		let wss_cod_bank :string = cBic;
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
		debugger
		this.codigoCampo = this.getname_formcontrolname(this.txtBicRecep);
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

			

			if(this.codigoCampo == "txtBicRecep"){						
				this.txtNomCorre.patchValue("");
				this.txtCiuCorre.patchValue("");
				this.txtDireCorre.patchValue("");
				this.txtPaisCorre.patchValue("");
			}
			this.myText.patchValue("");	
		} else {
			this.bcxRs99251BankCall()

		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200251PdtCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */ 
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200251Pdt.call(
			  (value) => this.bcxRs200251PdtResult(value)
			, (value) => this.processFault(value)
			, wss_usercode
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
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		this.myDate = wsResult.getResultDate('wss_fec_proc');				
		this.txtFecha.patchValue(wsResult.getResultDate('wss_fec_proc'));
		 
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
	private bcxRs99251BankCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_bco_swf :string = this.myText.value;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99251Bank.call(
			  (value) => this.bcxRs99251BankResult(value)
			, (value) => this.processFault(value)
			, wss_bco_swf
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs99251Bank.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99251BankResult(wsResult :CmWsResult): void
	{
		debugger
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
		}  else if(wsResult.getReturnValue()==0){

			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
			/* Mover los parametros de salida a la pantalla.*/
			if(this.codigoCampo == "txtBicRecep"){	

				this.txtNomCorre.patchValue(wsResult.getResultString('wss_bco_nom'));									
				this.txtCiuCorre.patchValue(wsResult.getResultString('wss_bco_ciu')); 
				this.txtDireCorre.patchValue(wsResult.getResultString('wss_bco_dir'));
				this.txtPaisCorre.patchValue(wsResult.getResultString('wss_paigls'));	
				
				this.txtNomCorre.disable();
				this.txtCiuCorre.disable();
				this.txtDireCorre.disable();
				this.txtPaisCorre.disable();				
			 }
		}
 



	}
	/**
	 * Llamamos al Web Service.
	 */
	private ofunc_cursar_op(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_for_pag :string = '0';
		let wss_vis_pct :string = '0';
		let wss_pla_pct :string = '0';
		let wss_fec_sol :any;
		if(this.txtFecha.value == '' || this.txtFecha.value == null || this.txtFecha.value == undefined)
			wss_fec_sol = '1753-01-01'
		else
			wss_fec_sol = this.txtFecha.value;
		let wss_icp_ind :string = '0';
		let wss_icp_tip :string = '0';
		let wss_icp_bas :string = '0';
		let wss_icp_spr :string = '0';
		let wss_icp_mto :string = '0';
		let wss_tas_ape_neg :string = '0';
		let wss_tas_neg_vcp :string = '0';
		let wss_dsd_pzo_rig :string = '';
		let wss_int_bco_tip :string = '0';
		let wss_int_bco_bas :string = '0';
		let wss_int_bco_spr :string = '0';
		let wss_pla_bco :string = '0';
		let wss_tip_reem :string = '';
		let wss_ind_zfr :string = '';
		let wss_ind_eef :string = '';
		let wss_ind_dom :string = '';
		let wss_ind_tpais :string = '';
		let wss_ind_ref :string = '';
		//DATOS DE RECEPTOR
		let wss_iso_rec :string = this.txtBicRecep.value;
		let wss_nom_rec :string = this.txtNomCorre.value;
		let wss_dir_rec :string = this.txtDireCorre.value;
		let wss_ciu_rec :string = this.txtCiuCorre.value;
		let wss_pai_rec :string = this.txtPaisCorre.value;
		//DATOS DE BANCO ORDENANTE
		let wss_iso_ord :string = '';
		let wss_nom_ord :string = '';
		let wss_dir_ord :string = '';
		let wss_ciu_ord :string = '';
		let wss_pai_ord :string = '';
		//DATOS EXTRA UTILIZABLE
		let wss_iso_nom :string = '';
		let wss_gls_any :string = '';
		//DATOS GIRADO
		let wss_iso_gdo :string = '';
		let wss_nom_gdo :string = '';
		let wss_dir_gdo :string = '';
		let wss_ciu_gdo :string = '';
		let wss_pai_gdo :string = '';
		//DATOS BANCO REEMBOLZADOR
		let wss_iso_reem :string = '';
		let wss_nom_reem :string = '';
		let wss_dir_reem :string = '';
		let wss_ciu_reem :string = '';
		let wss_pai_reem :string = '';
		//DATOS AVISADOR
		let wss_nro_ala :string = '';
		let wss_iso_avi :string = '';
		let wss_nom_avi :string = '';
		let wss_dir_avi :string = '';
		let wss_ciu_avi :string = '';
		let wss_pai_avi :string = '';

		let wss_tas_cp_cof :string = '0';
		let wss_tas_cp_spr :string = '0';
		let wss_tas_fb_cof :string = '0';
		let wss_tas_fb_spr :string = '0';
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
		let wss_result_msg:any;
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
		} else if(wsResult.getReturnValue()==0) {
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs200112DliCall();
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200112DliCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_for_lc :string = '';
		let wss_cod_ucp :string = this.utilService.toString(this.txtReglasAplicables.value);
		let wss_gls_ucp :string = this.utilService.toString(this.txtReglaOther.value);
		let wss_dia_val_ccr :string = '0';
		let wss_fec_vto :any = '1753-01-01';
		let wss_lug_vto :string = '';
		let wss_nom_ben1 :string = '';
		let wss_nom_ben2 :string = '';
		let wss_dir_ben :string = '';
		let wss_ciu_ben :string = '';
		let wss_pai_ben :string = '';
		let wss_tol_pct_neg :string = '0';
		let wss_tol_pct_pos :string = '0';
		let wss_mto_adi1 :string = '0';
		let wss_gir_a :string = '';
		let wss_pag_mix :string = '';
		let wss_pag_dif :string = '';
		let wss_emb_par :string = '';
		let wss_ind_trnsb :string = '';
		let wss_via_tpt :string = '';
		let wss_lug_desp :string = '';
		let wss_pto_emb :string = '';
		let wss_pto_desc :string = '';
		let wss_lug_dest :string = '';
		let wss_pla_pre_doc :string = '0';
		let wss_ult_fec_emb :any = '1753-01-01';
		let wss_cls_comp :string = '0';
		let wss_fac_nom :string = '';
		let wss_doc_emb_avi :string = '';
		let wss_otr_avi_emb :string = '';
		let wss_mar_esp_doc :string = '';
		let wss_ind_gto :string = '';
		let wss_exc_gto :string = '';
		let wss_per_pres :string = '';
		let wss_ins_conf :string = '';
		let wss_ind_urr :string = '';
		let wss_inf_rem_rec :string = '';
		let wss_ind_740 :string = 'N';
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
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
		let wss_result_msg:any;
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
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			if(this.identificador == "C"){
				if(this.objetoPadre!= null){
					this.objetoPadre.condicion=true;	
					this.objetoPadre.varCursar = 2;					
					this.objetoPadre.objectStandby = this;
					this.crdRs200112OprIngCall('CURSAR', true);
					// this.objetoPadre.crdRs200112OprIngCall('CURSAR', true);
				
				}	
				// else if(ttlNuevaDos != null){
				// 	ttlNuevaDos.condicion=true;				
				// 	ttlNuevaDos.ofunc_grabar_param(true);
				// 	ttlNuevaDos.varIdenDos=true;					
				//}			
			}		
			else if(this.identificador == "N")	{
				this.contextService.store(this);
				this.contextService.setUserData("varInicio",1);		
				this.location.back();
			}	
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
 	ofunc_grabar_texto(cIndicador:any,cTexto:any): void
	{

		if ((cIndicador == 'DEGAR') && (this.bFlagCambioEspecial == false))
		return;

		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = cIndicador;
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = cTexto;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111TxtLci.call(
			  (value) => this.ofunc_result_texto(value)
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
	ofunc_result_texto(wsResult :CmWsResult): void
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
		}else if(wsResult.getReturnValue()==0) {
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.bFlagCambioEspecial = false;
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151AliCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Ali.call(
			  (value) => this.crdRs200151AliResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151Ali.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151AliResult(wsResult :CmWsResult): void
	{
		let wss_result_msg:any;
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */	
		this.txtBicRecep.patchValue(wsResult.getResultString('wss_iso_rec'));
		this.txtNomCorre.patchValue(wsResult.getResultString('wss_nom_rec'));
		this.txtDireCorre.patchValue(wsResult.getResultString('wss_dir_rec'));
		this.txtCiuCorre.patchValue(wsResult.getResultString('wss_ciu_rec'));
		this.txtPaisCorre.patchValue(wsResult.getResultString('wss_pai_rec'));

		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0) {
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs200151DliCall();
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151DliCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Dli.call(
			  (value) => this.crdRs200151DliResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200151Dli.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151DliResult(wsResult :CmWsResult): void
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
		}else if(wsResult.getReturnValue()==0) {
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			/* Mover los parametros de salida a la pantalla.*/
			this.txtReglasAplicables.patchValue(wsResult.getResultString('wss_reg_ucp'));	    	
			if(wsResult.getResultString('wss_reg_ucp').toString() =='OTHR')this.txtReglaOther.visible=true;
			this.txtReglaOther.patchValue(wsResult.getResultString('wss_gls_ucp'));		    	
			this.txtInfoRemitente72.patchValue(wsResult.getResultString('wss_inf_rem_rec'));		 
			this.ofunc_cargar_textArea(this.txtDetalleGarantia,'DEGAR'); 
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private ofunc_cargar_textArea(myTextArea:any,opcion:any): void
	{

		this.myTextArea=myTextArea;
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = opcion;
		let wss_num_opr :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160TxtLci.call(
			  (value) => this.ofunc_result_textArea(value)
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
	ofunc_result_textArea(wsResult :CmWsResult): void
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
		}else if(wsResult.getReturnValue()==0) {
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			
		}
	}

	/**
	 * Llenado de combo cbbReglasAplicables
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbReglasAplicablesArray = wsResult.getTableRows();
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
		this.identificador='C';
		this.ofunc_cursar_op();
		this.waitShow = false;
	
	}
	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{

		this.identificador='N';
		this.ofunc_cursar_op();
		if(this.objetoPadre!= null)
			this.objetoPadre.varInicio=1;
		//else if(ttlNuevaDos != null)this.objetoPadre.varInicio=1;
		//this.location.back();
	}
	change_txtReglasAplicables(){
		this.ofunc_mayuscula(this.txtReglasAplicables);
		this.ofunc_campo_oculto();
	}

	cbbReglasAplicables_openedChange(event){
		this.ofunc_campo_oculto();
	}

	change_txtBicRecep(){
		if (this.ignoredFirstEvent || this.initValue === undefined) {
			return;
		} else {
			this.ofunc_mayuscula(this.txtBicRecep);
			this.ofunc_clean_bic(this.txtBicRecep,this.txtNomCorre,this.txtDireCorre,this.txtCiuCorre,this.txtPaisCorre)
		}this.ignoredFirstEvent = true;
	}
	focusout_txtBicRecep(){
		this.myText=this.txtBicRecep;
		this.ofunc_event_focus_banco(this.txtBicRecep.value,'Cobrador');
	}

	//METODO PARA BUSCAR BIC
	ofunc_event_focus_banco(txtObject:any,cOpcion:String):void{
		if (txtObject.toString().trim() == '')
			return;				
		this.bcxRs200160BankCall(txtObject.toString());
	}

	focusout_txtDetalleGarantia(){
		this.ofunc_grabar_texto('DEGAR',this.txtDetalleGarantia.value)
	}

	change_txtDetalleGarantia(){
		this.bFlagCambioEspecial=true;
		this.ofunc_mayuscula_area(this.txtDetalleGarantia);
	}

	ofunc_mayuscula(myTextInput:any){
		this.utilService.toUpper(myTextInput);
	}

	ofunc_mayuscula_area(myTextArea:any){
		if(myTextArea.value == '' || myTextArea.value == null || myTextArea.value == undefined)
		{
			return;
		} 

		this.utilService.toUpper(myTextArea);
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
			txtBicRecep:'',
			txtNomCorre:'',
			txtDireCorre:'',
			txtCiuCorre:'',
			txtPaisCorre:'',
			txtNumeroCartaCredito:'',
			txtFecha:['', CmDateValidator()],
			txtReglasAplicables:'',
			cbbReglasAplicables:'',
			txtReglaOther:'',
			txtDetalleGarantia:'',
			txtInfoRemitente72:'',
			myTextArea:'',
			myText:''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtBicRecep = this.form.controls['txtBicRecep'];
		this.txtNomCorre = this.form.controls['txtNomCorre'];
		this.txtDireCorre = this.form.controls['txtDireCorre'];
		this.txtCiuCorre = this.form.controls['txtCiuCorre'];
		this.txtPaisCorre = this.form.controls['txtPaisCorre'];
		this.txtNumeroCartaCredito = this.form.controls['txtNumeroCartaCredito'];
		this.txtFecha = this.form.controls['txtFecha'];
		this.txtReglasAplicables = this.form.controls['txtReglasAplicables'];
		this.cbbReglasAplicables = this.form.controls['cbbReglasAplicables'];
		this.txtReglaOther = this.form.controls['txtReglaOther'];
		this.txtDetalleGarantia = this.form.controls['txtDetalleGarantia'];
		this.txtInfoRemitente72 = this.form.controls['txtInfoRemitente72'];
		this.myTextArea = this.form.controls['myTextArea'];
		this.myText = this.form.controls['myText'];
	}

	//METODO PARA LIMPIAR CAMPOS DE BIC
	ofunc_clean_bic(prin:any,c1:any,c2:any,c3:any,c4:any):void{
		if(prin.text == ''){
			c1.text="";
			c2.text="";
			c3.text="";
			c4.text="";
			c1.enable();
			c2.enable();
			c3.enable();
			c4.enable();
		}
	}

	ofunc_campo_oculto():void{
		if(this.txtReglasAplicables.value == 'OTHR'){
			this.ocultarReglaOther = true;
			//this.txtReglaOther.setFocus();
		}else{
			this.ocultarReglaOther = false;
			this.txtReglaOther.patchValue('');
		}
	}

	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtReglasAplicables.setValidators(CmTextoComboValidator(this.cbbReglasAplicablesArray, 'wss_cod_rucp'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtReglasAplicables.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbReglasAplicables, value);
		});
		this.cbbReglasAplicables.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtReglasAplicables, value);
		});
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
		debugger
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

				this.objetoPadre.limpiar_campos_formularios();
				this.contextService.setUserData("varInicio",0);	
				this.location.back();
				subscription.unsubscribe();
			});
			
			
		}

}
