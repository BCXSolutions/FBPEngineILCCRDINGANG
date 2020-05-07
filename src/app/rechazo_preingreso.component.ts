// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 17/01/2020 10:00:13
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
import { SCX_RS_200_191_SOL_OPR } from './ws/SCX_RS_200_191_SOL_OPR';

@Component({
	selector: 'my-form',
	templateUrl: 'rechazo_preingreso.component.html'
})
/**
 * Form: Buscar
 */
export class RechazoPreingresoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtSolicitud :any;
	txtCliente :any;
	txtProducto :any;
	txtMoneda :any;
	txtMonto :any;
	txtFechaVencimiento :any;
	txtObservacion :any;
	user_logueado:any;
	bcxRut:any;
	nombre:any;
	numeroOperacion:any;
	numeroSolicitud:any;
	moneda:any;
	monto:any;
	fechaVencimiento:any;
	nombreProducto:any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private scxRs200191SolOpr: SCX_RS_200_191_SOL_OPR
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();


		this.txtSolicitud.disable();
		this.txtMonto.disable();
		this.txtCliente.disable();
		this.txtFechaVencimiento.disable();
		this.txtProducto.disable();
		this.txtMoneda.disable();


		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.bcxRut = this.contextService.getUserData("bcxRut");
		this.nombre = this.contextService.getUserData("nombre");
		this.numeroSolicitud = this.contextService.getUserData("numeroSolicitud");
		this.moneda = this.contextService.getUserData("moneda");
		this.monto = this.contextService.getUserData("monto");
		this.fechaVencimiento = this.contextService.getUserData("fechaVencimiento");
		this.nombreProducto = this.contextService.getUserData("nombreProducto");

		this.txtSolicitud.patchValue(this.numeroSolicitud);
		this.txtCliente.patchValue(this.nombre);
		this.txtMoneda.patchValue(this.moneda);
		this.txtMonto.patchValue(this.monto);
		this.txtFechaVencimiento.patchValue(this.fechaVencimiento);
		this.txtProducto.patchValue(this.nombreProducto);

	}
	/**
	 * Llamamos al Web Service.
	 */
	private scxRs200191SolOprCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_sol_num :string = this.utilService.toString(this.txtSolicitud.value);
		let wss_ins_num :string = '';
		let wss_usr_cod :string = '';
		let wss_obs_rch :string = this.utilService.toString(this.txtObservacion.value);
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.scxRs200191SolOpr.call(
			  (value) => this.scxRs200191SolOprResult(value)
			, (value) => this.processFault(value)
			, wss_sol_num
			, wss_ins_num
			, wss_usr_cod
			, wss_obs_rch
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.scxRs200191SolOpr.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	scxRs200191SolOprResult(wsResult :CmWsResult): void
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
			let wss_result_msg :string = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.router.navigate(['/preingreso']);
		}
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.scxRs200191SolOprCall()
	}
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdVolver_click(): void
	{
		this.waitShow = false;
		this.contextService.setUserData('varPantalla','');
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
			txtSolicitud:'',
			txtCliente:'',
			txtProducto:'',
			txtMoneda:'',
			txtMonto:'',
			txtFechaVencimiento:'',
			txtObservacion:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtSolicitud = this.form.controls['txtSolicitud'];
		this.txtCliente = this.form.controls['txtCliente'];
		this.txtProducto = this.form.controls['txtProducto'];
		this.txtMoneda = this.form.controls['txtMoneda'];
		this.txtMonto = this.form.controls['txtMonto'];
		this.txtFechaVencimiento = this.form.controls['txtFechaVencimiento'];
		this.txtObservacion = this.form.controls['txtObservacion'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.txtObservacion.valueChanges.subscribe((value)=> {
			this.utilService.toUpper(this.txtObservacion);
		});
	}
}
