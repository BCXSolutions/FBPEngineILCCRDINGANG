// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 06/01/2020 11:18:28
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
import { CRD_RS_200_113_OGAR } from './ws/CRD_RS_200_113_OGAR';
import { CRD_RS_200_151_OGAR } from './ws/CRD_RS_200_151_OGAR';

@Component({
	selector: 'my-form',
	templateUrl: 'tipo_de_garantia.component.html'
})
/**
 * Form: Tipo de garantías
 */
export class TipoDeGarantiaComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = 'BCXCRDCARING';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtNumeroOperacion :any;
	
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

	bcxRut:any;
	_bcxNumOpe:any;
	user_logueado:any;
	fecPro:any;
	opcion:any;
	
	habilitarNuevo:boolean;
	habilitarEliminar:boolean;

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
		, private crdRs200113Ogar: CRD_RS_200_113_OGAR
		, private crdRs200151Ogar: CRD_RS_200_151_OGAR
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Definicion de columnas.
		this.tableCols = [
			{ prop:'wss_gar_tip', name:'Tipo', width:'80', headerClass:'gridHeader'},
			{ prop:'wss_gar_desc', name:'Descripción Garantía', width:'200', headerClass:'gridHeader'},
			{ prop:'wss_gar_fec_const_format', name:'Fecha Registro', width:'120', headerClass:'gridHeader', cellTemplate: this.centerTmpl, comparator: this.utilService.sortFecha.bind(this)},
			{ prop:'wss_gar_tip_corr', name:'Fecha Registro', width:'100', headerClass:'gridHeader', cellTemplate: this.rightTmpl ,visible:false},
		];


		this.tableCols = this.tableCols.filter(c => {
			if(c.visible == false && c.visible != null){
				return false;
			}
			else{
				return true;
			}
		});

		// Mensajes a desplegar por la grilla.
		this.utilService.setTableMsg(this.table);

		this.bcxRut = this.contextService.getUserData("bcxRut");
		this._bcxNumOpe = this.contextService.getUserData("txtNumeroOperacion");
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.fecPro = this.contextService.getUserData("txtFechaIngreso");
		this.opcion = this.contextService.getUserData("opcion");
	
		// Campos del formulario.
		this.formDef();
		this.controlesDef();

		this.txtNumeroOperacion.patchValue(this._bcxNumOpe);
		this.txtNumeroOperacion.disable();
		this.crdRs200151OgarCall();

		if(this.opcion == 'C'){
			this.habilitarNuevo = true;
			this.habilitarEliminar = true;
		} else {
			this.habilitarNuevo = false;
			this.habilitarEliminar = false;
		}
		// Numericos y uppercase.
		this.valueChanges();
		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200113OgarCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this.txtNumeroOperacion.value;
		let wss_gar_tip_corr :string = this.tableSelected[0].wss_gar_tip_corr;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200113Ogar.call(
			  (value) => this.crdRs200113OgarResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_gar_tip_corr
			, wss_usercode
		);
		// Aca no puede haber nada que dependa del resultado (asincrono).
	}
	/**
	 * Callback invocado por this.crdRs200113Ogar.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200113OgarResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */
		let wss_result_msg = wsResult.getResultString('wss_result_msg');
		if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs200151OgarCall();
			this.utilService.alert(this.dialog, "Garantía eliminada con exito");
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
	private crdRs200151OgarCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */
		let wss_num_opr :string = this.txtNumeroOperacion.value; 
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Ogar.call(
			  (value) => this.crdRs200151OgarResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_usercode
		);
		// Aca no puede haber nada que dependa del resultado (asincrono).
	}
	/**
	 * Callback invocado por this.crdRs200151Ogar.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs200151OgarResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// Creamos columnas adicionales formateadas.
		wsResult.formatDateAdd('wss_gar_fec_const');
		// Obtenemos las filas.
		this.tableRows = wsResult.getTableRows();
		this.tableRowsTemp = this.tableRows;
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
	 * Evento click del boton cmdNuevo.
	 */
	cmdNuevo_click(): void
	{
		debugger

		//	this.waitShow = false;
		this.contextService.store(this); 
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("txtFechaIngreso",this.fecPro);
		this.contextService.setUserData("txtNumeroOperacion",this.txtNumeroOperacion.value);

		this.router.navigate(['/ingresodegarantia']);
	}
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.contextService.setUserData("indicadorDeOpcion",this.opcion);
		this.contextService.setUserData('varPantalla','');	
		this.location.back();
	}
	/**
	 * Helper para desplegar alertas.
	 */
	private openDialogAlert(msg: string): void
	{
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
				|| this.utilService.hayVal(d.wss_gar_tip, val)
				|| this.utilService.hayVal(d.wss_gar_desc, val)
				|| this.utilService.hayVal(d.wss_gar_fec_const_format, val)
				|| this.utilService.hayVal(d.fld_gar_tip_corr, val)
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
			this.utilService.alert(this.dialog, 'No implementado');
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
			txtNumeroOperacion:'',
			txtTableFilter: ''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtNumeroOperacion = this.form.controls['txtNumeroOperacion'];
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
	}


		/**
	 * Evento click del boton cmdEliminar.
	 */
	cmdEliminar_click(): void
	{
		
		this.waitShow = false;
		if(this.tableSelected[0]=="" || this.tableSelected[0] == null) {
			this.utilService.alert(this.dialog, 'Debe seleccionar un tipo de garantía');
		} else {
			this.waitShow = false;

			let objName: string = "Aval";
			this.utilService.deleteConfirm(this.dialog
							, objName 
							, (res) => this.deleteResult(res) );
		}		
	}

	/**
   * 
   * @param result Respuesta de la confirmacion de eliminacion.
   */
  private deleteResult(result: number) :void  {
	if (result == this.utilService.YES)
	{
		this.crdRs200113OgarCall();
	}
 }

}
