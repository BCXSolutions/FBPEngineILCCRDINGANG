// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 03/01/2020 15:25:36
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
import { CRD_RS_200_111_GAR } from './ws/CRD_RS_200_111_GAR';

@Component({
	selector: 'my-form',
	templateUrl: 'nuevo_aval.component.html'
})
/**
 * Form: Buscar
 */
export class NuevoAvalComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'Buscar';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	bcxRut :any;
	optGroupAvalCod :any;
	bcxPorAval :any;
	_bcxNumOpe: any;
	user_logueado:any;
	
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
		, private crdRs200111Gar: CRD_RS_200_111_GAR
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();

		//this.bcxRut = this.contextService.getUserData("bcxRut");

		this._bcxNumOpe = this.contextService.getUserData("txtNumeroOperacion");	
		this.user_logueado = this.contextService.getUserData("user_logueado");

		

		// Numericos y uppercase.
		this.valueChanges();
		// Recuperamos el contexto.
		//const ctxSw :boolean = this.contextService.recover(this);


	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111GarCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_num_opr :string = this._bcxNumOpe;
		let wss_rut_aval :string = this.utilService.toRut(this.bcxRut.value);
		let wss_ind_aval :string = 'N';
		let wss_ind_cod :string = 'N';
		if(this.optGroupAvalCod.value == '1') {
			wss_ind_aval = 'S';
			wss_ind_cod = 'N';
		} else {
			wss_ind_aval = 'N';
			wss_ind_cod = 'S';
		}
		let wss_gar_pct :string
		if(this.bcxPorAval.value == "0,00") {
			wss_gar_pct = this.utilService.toDecimal("0.00");
		} else {
			wss_gar_pct = this.utilService.toDecimal(this.bcxPorAval.value);
		}

		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111Gar.call(
			  (value) => this.crdRs200111GarResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_rut_aval
			, wss_ind_aval
			, wss_ind_cod
			, wss_gar_pct
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111Gar.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111GarResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		let wss_result_msg = wsResult.getResultString('wss_result_msg');
		 
		if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);
		}  else {
			this.cmdCancelar_click();
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
	 * Evento click del boton cmdAgregar.
	 */
	cmdAgregar_click(): void
	{
		this.waitShow = false;
		this.crdRs200111GarCall();
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
			optGroupAvalCod:'1',
			bcxPorAval:'0,00',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.bcxRut = this.form.controls['bcxRut'];
		this.optGroupAvalCod = this.form.controls['optGroupAvalCod'];
		this.bcxPorAval = this.form.controls['bcxPorAval'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		// this.bcxporAval.valueChanges.subscribe((value) => {
		// 	this.utilService.bcxNumeroInit(this.bcxporAval);
		// });
	}
}
