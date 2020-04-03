// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 03/03/2020 13:35:55
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
import { CRD_RS_200_160_MON_PTR } from './ws/CRD_RS_200_160_MON_PTR';
import { CRD_RS_200_160_PTR } from './ws/CRD_RS_200_160_PTR';

@Component({
	selector: 'my-form',
	templateUrl: 'template.component.html'
})
/**
 * Form: Buscar
 */
export class TemplateComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtMoneda :any;
	cbbMoneda :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbMonedaArray: any[] = [];
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
	bcxRut:any;
	user_logueado:any;
	cNumeroMayor:any;

	cmdHabSiguiente:boolean;
	varPadre:any;
	familiaProducto:any;


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
		, private crdRs200160MonPtr: CRD_RS_200_160_MON_PTR
		, private crdRs200160Ptr: CRD_RS_200_160_PTR
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Definicion de columnas.
		this.tableCols = [
		//	{ prop:'wss_cod_ptr', name:'wss_cod_ptr', width:'400', headerClass:'gridHeader'},
			{ prop:'wss_corr_ptr',name:'Seq', width:'100', headerClass:'gridHeader', cellTemplate: this.rightTmpl},
			{ prop:'wss_nom_ben', name:'Proveedor', width:'350', headerClass:'gridHeader'},
			{ prop:'wss_gls_plc', name:'Producto', width:'350', headerClass:'gridHeader'},
			{ prop:'wss_pai_ben', name:'País', width:'60', headerClass:'gridHeader'},
			{ prop:'wss_cod_mon', name:'Moneda', width:'80', headerClass:'gridHeader'},
			{ prop:'wss_cta_ben', name:'Cuenta', width:'350', headerClass:'gridHeader'},
			{ prop:'wss_inf_adi', name:'Descripción', width:'350', headerClass:'gridHeader'},
			{ prop:'wss_gls_est', name:'Estado', width:'200', headerClass:'gridHeader'},
			{ prop:'wss_obs_est', name:'Motivo del estado', width:'400', headerClass:'gridHeader'},
		//	{ prop:'wss_cod_est', name:'wss_cod_est', width:'10', headerClass:'gridHeader'},
			
		];
		// Mensajes a desplegar por la grilla.
		this.utilService.setTableMsg(this.table);
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();

		this.bcxRut = this.contextService.getUserData("bcxRut");
		this.familiaProducto = this.contextService.getUserData('familiaProducto');
		this.varPadre = this.contextService.getUserData('varPadre');
		this.user_logueado = this.contextService.getUserData("user_logueado");


		this.cmdHabSiguiente = true;

		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
		if (!ctxSw)
		{
			// Combos llenados al inicio.
			this.waitShow = true;
			this.wsFin = [];

			// cbbMoneda
			this.wsFin.push(false);
			this.crdRs200160MonPtr.call (
				  (value) => this.getComboData0(value)
				, (value) => this.processFault(value)
				, this.bcxRut   //wss_cod_cli
				, 'LCI'   //wss_cod_mod
				, this.user_logueado
			);
		}

		this.crdRs200160PtrCall();
		// Validadores de Combo-Texto.
		this.validatorsDef();
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdWs200160MonPtrCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_cod_cli :string = this.utilService.toString(this.bcxRut);
		let wss_cod_mod :string = 'LCI';
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160MonPtr.call(
			  (value) => this.crdWs200160MonPtrResult(value)
			, (value) => this.processFault(value)
			, wss_cod_cli
			, wss_cod_mod
			, this.user_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdWs200160MonPtr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdWs200160MonPtrResult(wsResult :CmWsResult): void
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
	private crdRs200160PtrCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_cod_cli :string = this.utilService.toRut(this.bcxRut);
		let wss_cod_mod :string = 'LCI';
		let wss_cod_ptr :string = '';
		let wss_fil_mon :string = (this.cbbMoneda.value == '')?'':this.txtMoneda.value; 
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160Ptr.call(
			  (value) => this.crdRs200160PtrResult(value)
			, (value) => this.processFault(value)
			, wss_cod_cli
			, wss_cod_mod
			, wss_cod_ptr
			, wss_fil_mon
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160Ptr.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs200160PtrResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.

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
			this.waitShow = false;
			// Obtenemos las filas.
			this.tableRows = wsResult.getTableRows();
			this.tableRowsTemp = this.tableRows;

			if (this.tableRowsTemp.length > 0) {
				this.tableRowsTemp.lastIndexOf(0);
			}
			if (this.tableRowsTemp.length >= 50) {
				this.cNumeroMayor = this.tableRowsTemp[49].wss_cod_ptr;
				this.cmdHabSiguiente = false;	
			} else {
				this.cmdHabSiguiente = true;
			}



		}
		// Primera pagina.
		this.table.offset = 0;
	}

		/**
	 * Llamamos al Web Service.
	 */
	private crdRs200160PtrProximosCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. */
		let wss_cod_cli :string = this.utilService.toRut(this.bcxRut);
		let wss_cod_mod :string = 'LCI';
		let wss_cod_ptr :string = this.cNumeroMayor;
		let wss_fil_mon :string = (this.cbbMoneda.value == '')?'':this.txtMoneda.value; 
		let wss_usercode :string = this.user_logueado;
		  
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200160Ptr.call(
			  (value) => this.crdRs200160PtrProximosResult(value)
			, (value) => this.processFault(value)
			, wss_cod_cli
			, wss_cod_mod
			, wss_cod_ptr
			, wss_fil_mon
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200160Ptr.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs200160PtrProximosResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.

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
			this.waitShow = false;
			// Obtenemos las filas.
			this.tableRows = wsResult.getTableRows();
			this.tableRowsTemp = this.tableRows;

			if (this.tableRowsTemp.length > 0) {
				this.tableRowsTemp.lastIndexOf(0);
			}
			if (this.tableRowsTemp.length >= 50) {
				this.cNumeroMayor = this.tableRowsTemp[49].wss_cod_ptr;
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
	 * Llenado de combo cbbMoneda
	 */
	private getComboData0(wsResult: CmWsResult): void
	{

		let cbbMonedaArrayAuxArray:any[]=[];
	
		cbbMonedaArrayAuxArray = wsResult.getTableRows();
		cbbMonedaArrayAuxArray = cbbMonedaArrayAuxArray.filter(v => {
			return v.wss_mon_cod = v.wss_mon_cod.toString().trim(); 
		});
		//this.cbbMonedaArray = wsResult.getTableRows();
		this.cbbMonedaArray = cbbMonedaArrayAuxArray;

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
	cmdBuscar_click(): void{
		this.crdRs200160PtrCall() 

	}

	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		if(this.tableSelected[0] == null || this.tableSelected[0] == ''){
			this.utilService.alert(this.dialog,'Debe seleccionar un template');	
			return;
		}

		if(this.tableSelected[0].wss_cod_est == 'R'){
			this.utilService.alert(this.dialog,'No puede utilizar Plantilla con Reparos');	
			return;
		}
		this.contextService.setUserData('varCodTemplate',this.tableSelected[0].wss_cod_ptr.toString());
		//this.varPadre.crdRs200152OprCall(this.bcxRut, this.familiaProducto ,this.tableSelected[0].wss_cod_ptr.toString());
		this.location.back();
	}
	/**
	 * Evento click del boton cmdProximos.
	 */
	cmdProximos_click(): void
	{
		this.waitShow = false;
		this.crdRs200160PtrProximosCall();
	}
	// /**
	//  * Evento click del boton cmdVolver.
	//  */
	// cmdVolver_click(): void
	// {
	// 	this.location.back();
	// }
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
				|| this.utilService.hayVal(d.wss_cod_ptr, val)
				|| this.utilService.hayVal(d.wss_corr_ptr, val)
				|| this.utilService.hayVal(d.wss_nom_ben, val)
				|| this.utilService.hayVal(d.wss_pai_ben, val)
				|| this.utilService.hayVal(d.wss_cod_mon, val)
				|| this.utilService.hayVal(d.wss_cta_ben, val)
				|| this.utilService.hayVal(d.wss_inf_adi, val)
				|| this.utilService.hayVal(d.wss_gls_est, val)
				|| this.utilService.hayVal(d.wss_obs_est, val)
				|| this.utilService.hayVal(d.wss_cod_est, val)
				|| this.utilService.hayVal(d.wss_gls_plc, val)
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
			txtMoneda:'',
			cbbMoneda:'',
			txtTableFilter: ''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtMoneda = this.form.controls['txtMoneda'];
		this.cbbMoneda = this.form.controls['cbbMoneda'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtMoneda.setValidators(CmTextoComboValidator(this.cbbMonedaArray, 'wss_mon_cod'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtMoneda.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbMoneda, value);
		});
		this.cbbMoneda.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtMoneda, value);
		});
		this.form.controls['txtTableFilter'].valueChanges.subscribe((value) => {
			this.tableFilter(value)
		});
	}

		/**
	 * Evento click del boton cmdEliminar.
	 */
	cmdVolver_click(): void
	{
		
		this.waitShow = false;


		let objName: string = "¿Esta seguro de generar una operación sin plantilla?";
		this.utilService.deleteConfirmGeneric(this.dialog
						, objName 
						, (res) => this.deleteResult(res) );
			
	}

	/**
   * 
   * @param result Respuesta de la confirmacion de eliminacion.
   */
  private deleteResult(result: number) :void  {
	  
	if (result == this.utilService.YES)
	{
		this.contextService.setUserData('varCodTemplate', '');
		this.router.navigate(["/ingresocartacredito"]);
		//this.varPadre.crdRs200152OprCall(this.bcxRut, this.familiaProducto ,"");
	} else {
		return;
	}
 }

}
