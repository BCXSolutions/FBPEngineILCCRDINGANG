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
import { BCX_RS_200_151_IND_SCX } from './ws/BCX_RS_200_151_IND_SCX';
import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
import { CRD_RS_200_151_OPR } from './ws/CRD_RS_200_151_OPR';
import { BCX_RS_99_160_STD_BSC } from './ws/BCX_RS_99_160_STD_BSC';
import { BCX_RS_200_160_SUC } from './ws/BCX_RS_200_160_SUC';
import { BCX_RS_200_160_PRD } from './ws/BCX_RS_200_160_PRD';
import { BCX_RS_200_160_CANAL } from './ws/BCX_RS_200_160_CANAL';
import { CRD_RS_200_160_OPR } from './ws/CRD_RS_200_160_OPR';
import { FBP_RS_AUTH_SERVER } from '../../@bcxang/lib/ws/FBP_RS_AUTH_SERVER';
import { interval } from 'rxjs';
import { stringify } from 'querystring';


@Component({
	selector: 'my-form',
	templateUrl: 'abrircarcred.component.html'
})
/**
 * Form: Buscar
 */
export class AbrirCarCredComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = 'Buscar';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	bcxnumOpe :any;
	txtDesde :any;
	txtHasta :any;
	bcxRut :any;
	txtNombre :any;
	txtEstado :any;
	cbbCodEstado :any;
	txtSucursal :any;
	cbbCodSucursal :any;
	txtProductos :any;
	cbbCodProductos :any;
	txtCanal :any;
	cbbCodCanal :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbCodEstadoArray: any[] = [];
	cbbCodSucursalArray: any[] = [];
	cbbCodProductosArray: any[] = [];
	cbbCodCanalArray: any[] = [];
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

	url: string ="";
	token:any;
	usuario_logueado:string ='';
	activar_preingreso:boolean;
	wss_opr_num_last:string = '';

	cmdHabAceptar:any;
	cmdHabSiguiente:any;

	wsResult_detalle: CmWsResult;

	optBusquedaOperacion:any;
	bcxRut_markAsTouched:boolean = false;
	WSS_D01_SGM:any;

	cOrde:any;

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
		, private dateAdapter: DateAdapter<Date>
		, private bcxRs200151IndScx: BCX_RS_200_151_IND_SCX
		, private bcxRs99260Cln: BCX_RS_99_260_CLN
		, private crdRs200151Opr: CRD_RS_200_151_OPR
		, private bcxRs99160StdBsc: BCX_RS_99_160_STD_BSC
		, private bcxRs200160Suc: BCX_RS_200_160_SUC
		, private bcxRs200160Prd: BCX_RS_200_160_PRD
		, private bcxRs200160Canal: BCX_RS_200_160_CANAL
		, private crdRs200160Opr: CRD_RS_200_160_OPR
		, private fbpRsAuthServer: FBP_RS_AUTH_SERVER
		){}





		ngOnInit() {
			this.formDef();
	
			this.controlesDef();

		// Definicion de columnas.
			this.tableCols = [
				{ prop:'wss_num_ope', name:'Numero', width:'140', headerClass:'gridHeader'},
				{ prop:'wss_num_sol', name:'Solicitud', width:'160', headerClass:'gridHeader'},
				{ prop:'wss_rut_sol', name:'Rut', width:'110', headerClass:'gridHeader'},
				{ prop:'wss_nom_sol', name:'Nombre cliente', width:'250', headerClass:'gridHeader'},
				{ prop:'wss_mon_ope', name:'Moneda', width:'100', headerClass:'gridHeader'},
				{ prop:'wss_mto_ope_format', name:'Monto original', width:'150', headerClass:'gridHeader', cellTemplate: this.rightTmpl},
				{ prop:'wss_sdo_ope_format', name:'Saldo', width:'150', headerClass:'gridHeader', cellTemplate: this.rightTmpl},
				{ prop:'wss_ind_pi', name:'Indicador PI', width:'150', headerClass:'gridHeader', cellTemplate: this.rightTmpl},
			];

			
		this.txtNombre.disable();
		// this.txtCanal.disable();
		// this.cbbCodCanal.disable();
		this.cmdHabAceptar = true;
		this.cmdHabSiguiente = true;
		this.wsResult_detalle = new CmWsResult();
        // Para evitar que parta antes de que lea el configuration.xml
        // Solo para paginas de primer nivel
    //     const subscription = interval(1)
    //         .subscribe(() => {
	// 		//	this.hostService.setRuta(this.hostService.getConfig("preferences/webservice/ruta-2"));
    //             this.fbpRsAuthServer.call(
    //                 (value) => this.fbpRsAuthServerResult(value)
    //               , (value) => this.openDialogAlert(value)
    //               , "Bearer "+ this.hostService.getToken()
    //             );
	// 		//	this.hostService.resetRuta();
    //             subscription.unsubscribe();
    //         });

	//  }  
	// /**
	//  * Inicializamos todo.
	//  */
	//  init()
	//  {
		// Definicion de columnas.

		// Mensajes a desplegar por la grilla.
	//	this.utilService.setTableMsg(this.table);
		this.dateAdapter.setLocale('es-CL');

		// Numericos y uppercase.
		this.valueChanges();

   


	//	this.token = queryParams["token"];//this.varGlobals.getOpcion();
	
		this.usuario_logueado = this.contextService.getUserData("user_logueado");
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");
		this.cOrde = this.contextService.getUserData("cOrde");
		this.bcxWs200151IndScxCall();
		this.txtNombre.disable()
		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);

	

	//	this.validar_token();

		if (!ctxSw)
		{

			this.cmdHabAceptar = true;
			this.cmdHabSiguiente = true;
			
			// Combos llenados al inicio.
		//	this.waitShow = true;
			this.wsFin = [];

			// cbbCodEstado
			this.wsFin.push(false);
			// this.bcxRs99160StdBsc.call (
			// 	  (value) => this.getComboData0(value)
			// 	, (value) => this.openDialogAlert(value)
			// 	, this.usuario_logueado
			// );

			// cbbCodSucursal
			this.wsFin.push(false);
		    this.bcxRs200160Suc.call (
				  (value) => this.getComboData1(value)
				, (value) => this.openDialogAlert(value)
				,this.usuario_logueado
			);

			// cbbCodProductos
			// this.wsFin.push(false);
			// this.bcxRs200160Prd.call (
			// 	  (value) => this.getComboData2(value)
			// 	, (value) => this.openDialogAlert(value)
			// 	,'90'   //wss_cod_fprd
			// 	,this.usuario_logueado
			// );

			// cbbCodCanal
			this.wsFin.push(false);
			this.bcxRs200160Canal.call (
				  (value) => this.getComboData3(value)
				, (value) => this.openDialogAlert(value)
				, this.usuario_logueado
			);
		} else {
			this.bcxRut_markAsTouched = true;
			this.cmdHabAceptar = false;
			this.cmdHabSiguiente = false;
		}

		this.validatorsDef();
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
                //this.init();
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

	/**
	 * Llamamos al Web Service.
	 */
	private bcxWs200151IndScxCall(): void
	{
		// Activamos el simbolo de progress.
		this.waitShow = true;

		let wss_usercode:string = this.usuario_logueado;

		// Invocamos el WS.
		this.bcxRs200151IndScx.call(
			  (value) => this.bcxWs200151IndScxResult(value)
			, (value) => this.openDialogAlert(value)
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxWs200151IndScx.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxWs200151IndScxResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
	
		let wss_ind_hab_pre_ing:string =wsResult.getResultString('wss_ind_hab_pre_ing');

		if(wss_ind_hab_pre_ing == "S"){
			this.activar_preingreso = true;
		} else {
			this.activar_preingreso = false;
		}
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_ind_hab_pre_ing'));
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
	private bcxRs99260ClnCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_cod_cli :string =  this.utilService.toRut(this.bcxRut.value);
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs99260Cln.call(
			  (value) => this.bcxRs99260ClnResult(value)
			, (value) => this.openDialogAlert(value)
			, wss_cod_cli
			,this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcx99260Cln.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99260ClnResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli'));
		/*this.xyz.patchValue(wsResult.getResultString('wss_cod_act'));
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
		}
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151OprCall(opcion:string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_num_opr :string = this.tableSelected[0].wss_num_ope;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Opr.call(
			  (value) => this.crdRs200151OprResult(value,opcion)
			, (value) => this.openDialogAlert(value)
			, wss_num_opr
			, this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdWs200151Opr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200151OprResult(wsResult :CmWsResult,opcion): void
	{


		// Desactivamos el simbolo de progress.
		this.waitShow = false;

		this.wsResult_detalle = wsResult;
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
		

		if(opcion == 'Detalle'){
			this.cargar_formulario_detalle();
		} else {
			this.cargar_formulario_preingreso();
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
	private bcxRs99160StdBscCall(): void
	{
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		// this.bcx99160StdBsc.call(
		// 	  (value) => this.bcxRs99160StdBscResult(value)
		// 	, (value) => this.openDialogAlert(value)
		// );

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcx99160StdBsc.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs99160StdBscResult(wsResult :CmWsResult): void
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
	private bcxRs200160SucCall(): void
	{
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Suc.call(
			  (value) => this.bcxRs200160SucResult(value)
			, (value) => this.openDialogAlert(value)
			, this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxWs200160Suc.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160SucResult(wsResult :CmWsResult): void
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
	private bcxRs200160PrdCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_cod_fprd :string = "this.utilService.toString(this.xyz.value)";
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Prd.call(
			  (value) => this.bcxWs200160PrdResult(value)
			, (value) => this.openDialogAlert(value)
			, wss_cod_fprd
			, this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxWs200160Prd.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxWs200160PrdResult(wsResult :CmWsResult): void
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
	private bcxWs200160CanalCall(): void
	{
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Canal.call(
			  (value) => this.bcxWs200160CanalResult(value)
			, (value) => this.openDialogAlert(value)
			,this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxWs200160Canal.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxWs200160CanalResult(wsResult :CmWsResult): void
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
	private crdWs200160ColCall(valor:string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */
		let wss_rut_cli :string;
		let wss_opr_num :string;
		let wss_fec_des :string;
		let wss_fec_has :any;
		let wss_est_lci :string;
		let wss_cod_suc :string;
		let wss_cod_cnl :string;


		if(valor == 'B') {
			wss_rut_cli = this.utilService.toRut(this.bcxRut.value);
			wss_opr_num = this.utilService.toString(this.bcxnumOpe.value);
					
			if(this.txtDesde.value == ''){
				wss_fec_des = '1753-01-01';
			} else {
				wss_fec_des = this.utilService.toDate(this.txtDesde.value);
			}
			
			if(this.txtHasta.value == ''){
				wss_fec_has = '1753-01-01';
			} else {
				wss_fec_has = this.utilService.toDate(this.txtHasta.value);
			}		
			
			if(this.optBusquedaOperacion.value == 'T'){
				wss_est_lci = 'T';
			} else if (this.optBusquedaOperacion.value == 'S'){
				wss_est_lci = 'S';
			} else if (this.optBusquedaOperacion.value == 'N'){
				wss_est_lci = 'N';
			} else {
				wss_est_lci = 'P';
			}
			wss_cod_suc = this.txtSucursal.value;
			wss_cod_cnl = this.utilService.toString(this.txtCanal.value);
		} 

		else  {
			wss_rut_cli = this.utilService.toRut(this.bcxRut.value);
			wss_opr_num = this.wss_opr_num_last;
		
			if(this.txtDesde.value == ''){
				wss_fec_des = '1753-01-01';
			} else {
				wss_fec_des = this.utilService.toDate(this.txtDesde.value);
			}

			if(this.txtHasta.value == ''){
				wss_fec_has = '1753-01-01';
			} else {
				wss_fec_has = this.utilService.toDate(this.txtHasta.value);
			}	
			
			if(this.optBusquedaOperacion.value == 'T'){
				wss_est_lci = 'T';
			} else if (this.optBusquedaOperacion.value == 'S'){
				wss_est_lci = 'S';
			} else if (this.optBusquedaOperacion.value == 'N'){
				wss_est_lci = 'N';
			} else {
				wss_est_lci = 'P';
			}

			wss_cod_suc = this.txtSucursal.value;
			wss_cod_cnl = this.utilService.toString(this.txtCanal.value);
		} 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160Opr.call(
			  (value) => this.crdWs200160ColResult(value)
		//	, (value) => this.openDialogAlert(value)
			, (value) => this.processFault(value)
			, wss_rut_cli
			, wss_opr_num
			, wss_fec_des
			, wss_fec_has
			, wss_est_lci
			, wss_cod_cnl
			, wss_cod_suc
			, this.usuario_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdWs200160Col.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdWs200160ColResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// Creamos columnas adicionales formateadas.
		wsResult.formatDecAdd('wss_sdo_ope', 2);
		wsResult.formatDecAdd('wss_mto_ope', 2);
		// Obtenemos las filas.
		this.tableRows = wsResult.getTableRows();
		this.tableRowsTemp = this.tableRows;

		
		if (this.tableRowsTemp.length > 0) {
			this.cmdHabAceptar = false;
			this.tableRowsTemp.lastIndexOf(0);
		}
		if (this.tableRowsTemp.length >= 50) {
			this.wss_opr_num_last = this.tableRowsTemp[49].wss_opr_num_out;
			this.cmdHabSiguiente = false;	
		} else {
			this.cmdHabSiguiente = true;
		}


		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
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
	 * Llenado de combo cbbCodEstado
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbCodEstadoArray = wsResult.getTableRows();
		this.getComboDataFin(0, wsResult);
	}

	/**
	 * Llenado de combo cbbCodSucursal
	 */
	private getComboData1(wsResult: CmWsResult): void
	{
		this.cbbCodSucursalArray = wsResult.getTableRows();
		this.getComboDataFin(0, wsResult);
	}

	/**
	 * Llenado de combo cbbCodProductos
	 */
	private getComboData2(wsResult: CmWsResult): void
	{
		this.cbbCodProductosArray = wsResult.getTableRows();
		this.getComboDataFin(2, wsResult);
	}

	/**
	 * Llenado de combo cbbCodCanal
	 */
	private getComboData3(wsResult: CmWsResult): void
	{
		this.cbbCodCanalArray = wsResult.getTableRows();
		this.getComboDataFin(2, wsResult);
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

	cargar_nombre () {
		this.bcxRs99260ClnCall();
	}

	/**
	 * Evento click del boton cmdBuscar.
	 */
	cmdBuscar_click(): void
	{
		this.waitShow = false;
		this.crdWs200160ColCall('B');
	//	this.bcxWs200151IndScxCall();
	//	this.utilService.alert(this.dialog, 'No implementado');
	}
	/**
	 * Evento click del boton cmdProximos.
	 */
	cmdProximos_click(): void
	{
		this.waitShow = false;
		this.crdWs200160ColCall('P');
	//	this.utilService.alert(this.dialog, 'No implementado');
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		

		this.waitShow = false;
		if(this.tableSelected[0] == '' ||  this.tableSelected[0] == null) {
			this.utilService.alert(this.dialog, 'Debe seleccionar una operación')
		} else {

			let wss_num_sol:string = this.tableSelected[0].wss_num_sol;

			if(wss_num_sol == '' || wss_num_sol == null){
				this.crdRs200151OprCall('Preingreso');
			} else {
				this.crdRs200151OprCall('Detalle');
			}


		}
	}

	cargar_formulario_detalle() {
		this.waitShow=true;
		this.contextService.store(this);
		this.contextService.setUserData("pageName","Detalle Carta de crédito");
		this.contextService.setUserData('numOperacion', this.tableSelected[0].wss_num_ope);
		this.contextService.setUserData('user_logueado', this.usuario_logueado);
		this.contextService.setUserData('wsResult_detalle', this.wsResult_detalle);
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
	 * Evento click del boton cmdPreingreso.
	 */
	cmdPreingreso_click() {
		this.waitShow=true;
		this.contextService.store(this);
		this.contextService.setUserData('user_logueado', this.usuario_logueado);
		this.contextService.setUserData('producto', 'FNA');
		this.contextService.setUserData('evento', 'OTO');
		this.contextService.setUserData("cOrde", this.cOrde);
		// _mdlAbrCarCrePreingreso.evento = "OTO";
		// _mdlAbrCarCrePreingreso.producto = "FNA";

		this.router.navigate(['/preingreso']);
	}

	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.waitShow = false;
		this.location.back();
	//	this.utilService.alert(this.dialog, 'No implementado');
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
			this.cmdAceptar_click();
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
	/**
	 * Controles del formulario.
	 */
	private formDef(): void
	{
		this.form = this.formBuilder.group({
			bcxnumOpe:'',
			txtDesde:['', CmDateValidator()],
			txtHasta:['', CmDateValidator()],
			bcxRut:'',
			txtNombre:'',
			txtEstado:'',
			cbbCodEstado:'',
			txtSucursal:'',
			cbbCodSucursal:'',
			txtProductos:'',
			cbbCodProductos:'',
			txtCanal:'Todo',
			cbbCodCanal:'',
			txtTableFilter: '',
			optBusquedaOperacion:'T'
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.bcxnumOpe = this.form.controls['bcxnumOpe'];
		this.txtDesde = this.form.controls['txtDesde'];
		this.txtHasta = this.form.controls['txtHasta'];
		this.bcxRut = this.form.controls['bcxRut'];
		this.txtNombre = this.form.controls['txtNombre'];
		this.txtEstado = this.form.controls['txtEstado'];
		this.cbbCodEstado = this.form.controls['cbbCodEstado'];
		this.txtSucursal = this.form.controls['txtSucursal'];
		this.cbbCodSucursal = this.form.controls['cbbCodSucursal'];
		this.txtProductos = this.form.controls['txtProductos'];
		this.cbbCodProductos = this.form.controls['cbbCodProductos'];
		this.txtCanal = this.form.controls['txtCanal'];
		this.cbbCodCanal = this.form.controls['cbbCodCanal'];
		this.optBusquedaOperacion = this.form.controls['optBusquedaOperacion'];
	}


	validatorsDef () {
		this.txtEstado.setValidators(CmTextoComboValidator(this.cbbCodEstadoArray, 'wss_cod_std'));
		this.txtSucursal.setValidators(CmTextoComboValidator(this.cbbCodSucursalArray, 'wss_cod_suc'));
		this.txtProductos.setValidators(CmTextoComboValidator(this.cbbCodProductosArray, 'wss_cod_prd'));
		this.txtCanal.setValidators(CmTextoComboValidator(this.cbbCodCanalArray, 'wss_cod_cnl'));
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

		this.txtSucursal.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbCodSucursal, value);
		});

		this.cbbCodSucursal.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtSucursal,value);
		});

		this.txtEstado.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.cbbCodEstado,value);
			this.utilService.toUpper(this.txtEstado);
			
		});

		this.cbbCodEstado.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtEstado,value);
		});

		this.txtProductos.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbCodProductos,value);
		});

		this.cbbCodProductos.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtProductos,value);
		});

		this.txtCanal.valueChanges.subscribe((value) => {		
			this.utilService.comboTexto_changeSelect(this.cbbCodCanal,value);
			this.utilService.toUpper(this.txtCanal);
			
		});
		
		this.cbbCodCanal.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.txtCanal,value);
		});
		// this.txtDesde.valueChanges.subscribe((value) => {
		// 	if(value==""){
		// 		this.txtDesde.patchValue("");
		// 	}
		// });

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
