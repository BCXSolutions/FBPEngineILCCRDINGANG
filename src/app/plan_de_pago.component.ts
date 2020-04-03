// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 08/01/2020 16:06:39
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
import { CRD_RS_113_CUO } from './ws/CRD_RS_113_CUO';
import { CRD_RS_151_CUO } from './ws/CRD_RS_151_CUO';

@Component({
	selector: 'my-form',
	templateUrl: 'plan_de_pago.component.html'
})
/**
 * Form: Buscar
 */
export class PlanDePagoComponent implements OnInit, AfterViewChecked
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	bcxMontoOperacion :any;
	bcxMontoTotalCuotas :any;
	
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
	user_logueado:any;
	familiaProducto:any;
	numOperacion:any;
	opcion:any;

	habilitarGenerar:boolean;
	habilitarEliminar:boolean;
	habilitarIngresar:boolean;

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
		, private crdRs113Cuo: CRD_RS_113_CUO
		, private crdRs151Cuo: CRD_RS_151_CUO
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Definicion de columnas.
		this.tableCols = [
			// { prop:'wss_result_msg', name:'wss_result_msg', width:'400', headerClass:'gridHeader'},
			
			{ prop:'fld_cuo_fec_vto', name:'Fecha Vencimiento', width:'180', headerClass:'gridHeader'},
			{ prop:'fld_cuo_mto_ori_format', name:'Monto', width:'180', headerClass:'gridHeader', cellTemplate: this.rightTmpl, comparator: this.utilService.sortDecimal.bind(this)},
			{ prop:'fld_cuo_mto_sdo_format', name:'Saldo', width:'180', headerClass:'gridHeader', cellTemplate: this.rightTmpl, comparator: this.utilService.sortDecimal.bind(this)},
			{ prop:'fld_cuo_num_cuo', name:'fld_cuo_num_cuo', width:'100', headerClass:'gridHeader', cellTemplate: this.rightTmpl, visible: false}
		];


		//Justo después de definir las columnas se crea un filtro se encargará de ocultarla
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
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();

		this.user_logueado = this.contextService.getUserData('user_logueado');
		this.familiaProducto = this.contextService.getUserData("familiaProducto");
		this.numOperacion = this.contextService.getUserData("numOperacion");	
		this.opcion = this.contextService.getUserData("opcion");

		this.bcxMontoOperacion.disable();
		this.bcxMontoTotalCuotas.disable();

		
		if(this.opcion == 'C'){
			this.habilitarGenerar = true;
			this.habilitarEliminar = true;
			this.habilitarIngresar = true;
		} else {
			this.habilitarGenerar = false;
			this.habilitarEliminar = false;
			this.habilitarIngresar = false;
		}


		this.crdRs151CuoCall();

		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs113CuoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		let wss_num_ope :string = this.utilService.toString(this.xyz.value);
		let wss_cod_fam :string = this.xyz.value;
		;
		let wss_usercode :string = this.utilService.toString(this.xyz.value);
		 */ 
		let wss_cuo_num_cuo :string = this.tableSelected[0].fld_cuo_num_cuo;
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs113Cuo.call(
			  (value) => this.crdRs113CuoResult(value)
			, (value) => this.processFault(value)
			, this.numOperacion
			, this.familiaProducto
			, wss_cuo_num_cuo
			, this.user_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs113Cuo.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs113CuoResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
		 */

		let wss_result_msg:any = wsResult.getResultString('wss_result_msg');
		if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.crdRs151CuoCall();
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
	private crdRs151CuoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		let wss_num_ope :string = this.utilService.toString(this.xyz.value);
		let wss_cod_fam :string = this.xyz.value;
		let wss_usercode :string = this.utilService.toString(this.xyz.value);
		 */ 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs151Cuo.call(
			  (value) => this.crdRs151CuoResult(value)
			, (value) => this.processFault(value)
			, this.numOperacion
			, this.familiaProducto
			, this.user_logueado
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs151Cuo.call.
	 * @param wsResult Filas de la tabla, parametros de salida, mensaje de error.
	 */
	crdRs151CuoResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// Creamos columnas adicionales formateadas.
		wsResult.formatDecAdd('fld_cuo_mto_ori', 2);
		wsResult.formatDecAdd('fld_cuo_mto_sdo', 2);
		// Obtenemos las filas.
		this.tableRows = wsResult.getTableRows();
		this.tableRowsTemp = this.tableRows;
		/* Mover los parametros de salida a la pantalla.  */
		this.bcxMontoOperacion.patchValue(wsResult.getResultNumberFormat('wss_mto_ope', 2));
		this.bcxMontoTotalCuotas.patchValue(wsResult.getResultNumberFormat('wss_sdo_cuo', 2));
		
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
	 * Evento click del boton cmdGenerar.
	 */
	cmdGenerar_click(): void
	{
		
		this.contextService.store(this);
		this.contextService.setUserData('user_logueado', this.user_logueado);
		this.contextService.setUserData("numOperacion",this.numOperacion);			
		this.router.navigate(['/generarplandepagos']);
	}
	/**
	 * Evento click del boton cmdIngresar.
	 */
	cmdIngresar_click(): void
	{
		this.contextService.store(this);
		this.contextService.setUserData('user_logueado', this.user_logueado);
		this.contextService.setUserData("numOperacion",this.numOperacion);			
		this.router.navigate(['/ingresoplandepagos']);
	}

		/**
	 * Evento click del boton cmdEliminar.
	 */
	cmdEliminar_click(): void
	{
		
		this.waitShow = false;
		if(this.tableSelected[0]=="" || this.tableSelected[0] == null) {
			this.utilService.alert(this.dialog, 'Debe seleccionar una cuota');
		} else {
			this.waitShow = false;

			let objName: string = "registro";
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
		this.crdRs113CuoCall();
	}
 }
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdCancelar_click(): void
	{
		this.waitShow = false;
		this.contextService.setUserData("numOperacion",this.numOperacion);
		this.contextService.setUserData("indicadorDeOpcion",this.opcion);
		this.location.back()
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
				|| this.utilService.hayVal(d.wss_result_msg, val)
				|| this.utilService.hayVal(d.fld_cuo_num_cuo, val)
				|| this.utilService.hayVal(d.fld_cuo_fec_vto, val)
				|| this.utilService.hayVal(d.fld_cuo_mto_ori_format, val)
				|| this.utilService.hayVal(d.fld_cuo_mto_sdo_format, val)
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
			bcxMontoOperacion:'',
			bcxMontoTotalCuotas:'',
			txtTableFilter: ''
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.bcxMontoOperacion = this.form.controls['bcxMontoOperacion'];
		this.bcxMontoTotalCuotas = this.form.controls['bcxMontoTotalCuotas'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.bcxMontoOperacion.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMontoOperacion);
		});
		this.bcxMontoTotalCuotas.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMontoTotalCuotas);
		});
		this.form.controls['txtTableFilter'].valueChanges.subscribe((value) => {
			this.tableFilter(value)
		});
	}
}
