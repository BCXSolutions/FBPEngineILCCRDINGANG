// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 16/01/2020 10:35:20
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
       , CmWsResult } from '@bcxang';
// Web Services
import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
import { SCX_RS_200_160_EST } from './ws/SCX_RS_200_160_EST';
import { CRD_RS_200_160_PI_COL } from './ws/CRD_RS_200_160_PI_COL';
import { CRD_RS_200_152_PI_ILC } from './ws/CRD_RS_200_152_PI_ILC';
import { CRD_RS_200_151_OPR } from './ws/CRD_RS_200_151_OPR';

@Component({
	selector: 'my-form',
	templateUrl: 'preingreso.component.html'
})
/**
 * Form: Buscar
 */
export class BuscarPreingresoComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtNumeroSolicitud :any;
	bcxRut :any;
	txtNombre :any;
	txtEstado :any;
	cbbEstado :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbEstadoArray: any[] = [];
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
	user_logueado:any;
	codigo_usuario:any;

	producto:any;
	evento:any;
	solicitud:any;

	wsResult_detalle:CmWsResult;
	cNumeroMayor:any;

	cmdHabAceptar:boolean;
	cmdHabSiguiente:boolean;

	wss_opr_num_last:any;


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
		, private bcxRs99260Cln: BCX_RS_99_260_CLN
		, private scxRs200160Est: SCX_RS_200_160_EST
		, private crdRs200160PiCol: CRD_RS_200_160_PI_COL
		, private crdRs200152PiIlc: CRD_RS_200_152_PI_ILC
		, private crdRs200151Opr: CRD_RS_200_151_OPR
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Definicion de columnas.
		this.tableCols = [
			{ prop:'wss_opr_num_out', name:'Número', width:'160', headerClass:'gridHeader'},
			{ prop:'wss_sol_num', name:'Solicitud', width:'160', headerClass:'gridHeader'},
			{ prop:'wss_cod_cli_out', name:'Rut deudor', width:'110', headerClass:'gridHeader'},
			{ prop:'wss_nom_cli', name:'Nombre deudor', width:'400', headerClass:'gridHeader'},
			{ prop:'wss_opr_mon', name:'Moneda', width:'100', headerClass:'gridHeader'},
			{ prop:'wss_mto_ori_format', name:'Monto operación', width:'180', headerClass:'gridHeader', cellTemplate: this.rightTmpl, comparator: this.utilService.sortDecimal.bind(this)},
			{ prop:'wss_mto_sdo_format', name:'Saldo operación', width:'180', headerClass:'gridHeader', cellTemplate: this.rightTmpl, comparator: this.utilService.sortDecimal.bind(this)},
			{ prop:'wss_nom_suc', name:'Sucursal', width:'350', headerClass:'gridHeader'},
			{ prop:'wss_cod_plc', name:'Familia', width:'100', headerClass:'gridHeader', cellTemplate: this.rightTmpl},
			{ prop:'wss_nom_plc', name:'Nombre', width:'400', headerClass:'gridHeader'},
			{ prop:'wss_cod_est', name:'Estado', width:'200', headerClass:'gridHeader'},
			{ prop:'wss_fec_cont', name:'wss_fec_cont', width:'100', headerClass:'gridHeader'},
		];
		// Mensajes a desplegar por la grilla.
		this.utilService.setTableMsg(this.table);


		this.user_logueado = this.contextService.getUserData('user_logueado');
		this.producto = this.contextService.getUserData('producto');
		this.evento = this.contextService.getUserData('evento');
		

		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();
		// Validadores de Combo-Texto.
		this.validatorsDef();

		this.txtNombre.disable();
		this.cmdHabSiguiente = true;

		// Recuperamos el contexto.
		const ctx:boolean = this.contextService.recover(this);
		if (!ctx)
		{
			// Combos llenados al inicio.
			this.waitShow = true;
			this.wsFin = [];

			// cbbEstado
			this.wsFin.push(false);
			this.scxRs200160Est.call (
				  (value) => this.getComboData0(value)
				, (value) => this.processFault(value)
				, this.user_logueado   //wss_usercode
			);
		} else {
			this.crdRs200160PiColCall('B')
		}
	}



	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200152PiIlcCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 	 */ 
		let wss_sol_num :string = this.utilService.toString(this.tableSelected[0].wss_sol_num).trim();
		let wss_opr_num :string = this.utilService.toString(this.tableSelected[0].wss_opr_num_out).trim();
		let wss_usercode :string = this.user_logueado;
	
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200152PiIlc.call(
			  (value) => this.crdRs200152PiIlcResult(value)
			, (value) => this.processFault(value)
			, wss_sol_num
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200152PiFna.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200152PiIlcResult(wsResult :CmWsResult): void
	{
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
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs200151OprCall(this.tableSelected[0].wss_opr_num_out);
		}
	}


	/**
	 * Llamamos al Web Service.
	 */
	private bcxRs99260ClnCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); 	 */ 
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
		this.xyz.patchValue(wsResult.getResultString('wss_nom_cli'));
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
		} else if (wsResult.getReturnValue()==0){
			let wss_result_msg:string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else{
			this.txtNombre.patchValue(wsResult.getResultString('wss_nom_cli'));
		}
	}


	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200151OprCall(opcion:string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_num_opr :string = this.tableSelected[0].wss_opr_num_out;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Opr.call(
			  (value) => this.crdRs200151OprResult(value,opcion)
			, (value) => this.openDialogAlert(value)
			, wss_num_opr
			, this.user_logueado
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
		} else{
			this.cargar_formulario_preingreso();
		}
	}

	/**
	 * Llamamos al Web Service.
	 */
	private scxRs200160EstCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.scxRs200160Est.call(
			  (value) => this.scxRs200160EstResult(value)
			, (value) => this.processFault(value)
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.scxRs200160Est.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	scxRs200160EstResult(wsResult :CmWsResult): void
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

	//wss_opr_num_last


	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160PiColCall(indicadorBusqueda:string): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value);  */ 
		let wss_opr_num :string;
		let wss_est_col :string;
		let wss_fec_des :any;		
		let wss_fec_has :any;
		let wss_cod_cli :string;
		let wss_cod_suc :string;
		let wss_cod_fam :string;
		let wss_cod_cnl :string;
		let wss_sol_cod_pro :string;
		let wss_sol_cod_eve :string;
		let wss_usercode :string;


		if(indicadorBusqueda == 'B'){
			wss_opr_num = this.utilService.toString(this.txtNumeroSolicitud.value);
			if(this.txtEstado.value == ''){
				wss_est_col = '';
			} else {
				wss_est_col = this.utilService.toString(this.txtEstado.value);;
			}
			wss_fec_des = '1753-01-01';		
			wss_fec_has = '1753-01-01';
			wss_cod_cli = this.utilService.toRut(this.bcxRut.value);
			wss_cod_suc = '';
			wss_cod_fam = '';
			wss_cod_cnl = '';
			wss_sol_cod_pro = 'ILC';
			wss_sol_cod_eve = 'APE';
			wss_usercode = this.user_logueado;

		} else {
			wss_opr_num = this.wss_opr_num_last;
			if(this.txtEstado.value == ''){
				wss_est_col = '';
			} else {
				wss_est_col = this.utilService.toString(this.txtEstado.value);;
			}
			wss_fec_des = '1753-01-01';		
			wss_fec_has = '1753-01-01';
			wss_cod_cli = this.utilService.toRut(this.bcxRut.value);
			wss_cod_suc = '';
			wss_cod_fam = '';
			wss_cod_cnl = '';
			wss_sol_cod_pro = 'ILC';
			wss_sol_cod_eve = 'APE';
			wss_usercode = this.user_logueado;
		}
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160PiCol.call(
			  (value) => this.crdRs200160PiColResult(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_est_col
			, wss_fec_des
			, wss_fec_has
			, wss_cod_cli
			, wss_cod_suc
			, wss_cod_fam
			, wss_cod_cnl
			, wss_sol_cod_pro
			, wss_sol_cod_eve
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160PiCol.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs200160PiColResult(wsResult :CmWsResult): void
	{
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
		} else if(wsResult.getReturnValue()==0){
			let wss_result_msg:string =  wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog,wss_result_msg);
		} else {
			wsResult.formatDecAdd('wss_mto_ori', 2);
			wsResult.formatDecAdd('wss_mto_sdo', 2);
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
	 * Llenado de combo cbbEstado
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbEstadoArray = wsResult.getTableRows();
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
	 * Evento click del boton cmdBuscar.
	 */
	cmdBuscar_click(): void
	{
		this.waitShow = false;
		this.crdRs200160PiColCall('B');
	}
	/**
	 * Evento click del boton cmdProximos.
	 */
	cmdProximos_click(): void
	{
		this.waitShow = false;
		this.crdRs200160PiColCall('P');
	}


	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void {

		if(this.tableSelected[0] == '' || this.tableSelected[0] == null){
			this.utilService.alert(this.dialog, 'Debe seleccionar operación');
		} else {
			this.crdRs200152PiIlcCall();
		}
	}

	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{
		this.router.navigate(['/abrircartacredito']);
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
			txtNumeroSolicitud:'',
			bcxRut:'',
			txtNombre:'',
			txtEstado:'',
			cbbEstado:'',
			txtTableFilter: ''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtNumeroSolicitud = this.form.controls['txtNumeroSolicitud'];
		this.bcxRut = this.form.controls['bcxRut'];
		this.txtNombre = this.form.controls['txtNombre'];
		this.txtEstado = this.form.controls['txtEstado'];
		this.cbbEstado = this.form.controls['cbbEstado'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtEstado.setValidators(CmTextoComboValidator(this.cbbEstadoArray, 'wss_cod_est'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtEstado.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbEstado, value);
		});
		this.cbbEstado.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtEstado, value);
		});
		this.form.controls['txtTableFilter'].valueChanges.subscribe((value) => {
			this.tableFilter(value)
		});
	}

	focusout_rut(){
		this.bcxRs99260ClnCall();
	}

	cargar_formulario_preingreso (){
		this.waitShow=true;
		this.contextService.store(this);
		this.contextService.setUserData("pageName","Detalle carta de crédito - Preingreso");
		this.contextService.setUserData('numSolicitud', this.tableSelected[0].wss_sol_num);
		this.contextService.setUserData('numOperacion', this.tableSelected[0].wss_opr_num_out);
		this.contextService.setUserData('user_logueado', this.user_logueado);
		this.contextService.setUserData('wsResult_detalle', this.wsResult_detalle);
		this.contextService.setUserData("WSS_D01_AREA","CRDI0");
		this.contextService.setUserData("WSS_D01_SGM","FBA");
		this.contextService.setUserData("WSS_D01_TIP","CRD");
		this.contextService.setUserData("WSS_D01_CODNUM", '');
		this.contextService.setUserData("financiamiento_indicador_opcion", 'Preingreso');

		this.router.navigate(['/ingresocartacredito']);
	}
}
