// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 06/01/2020 11:32:50
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
import { CRD_RS_200_111_OGAR } from './ws/CRD_RS_200_111_OGAR';
import { BCX_RS_200_160_TGAR } from './ws/BCX_RS_200_160_TGAR';

@Component({
	selector: 'my-form',
	templateUrl: 'ingreso_garantia.component.html'
})
/**
 * Form: Buscar
 */
export class IngresoGarantiaComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = '';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtGarantia :any;
	cbbGarantia :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	// Datos de combo box.
	cbbGarantiaArray: any[] = [];

	_bcxNumOpe:any;
	user_logueado:any;
	fecPro:any;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200111Ogar: CRD_RS_200_111_OGAR
		, private bcxRs200160Tgar: BCX_RS_200_160_TGAR
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


	
		this._bcxNumOpe = this.contextService.getUserData("txtNumeroOperacion");
		console.log('this._bcxNumOpe: ' +this._bcxNumOpe);
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.fecPro = this.contextService.getUserData("txtFechaIngreso");


		// Validadores de Combo-Texto.
		this.validatorsDef();
		// Recuperamos el contexto.
		// const ctxSw :boolean = this.contextService.recover(this);
		// if (!ctxSw)
		// {
			// Combos llenados al inicio.
			this.waitShow = true;
			this.wsFin = [];

			// cbbGarantia
			this.wsFin.push(false);
			this.bcxRs200160Tgar.call (
				  (value) => this.getComboData0(value)
				, (value) => this.processFault(value)
				,'N'   //wss_ind_avc
				, this.user_logueado   //wss_usercode
			);
		// }
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111OgarCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_num_opr :string = this._bcxNumOpe;
		let wss_gar_tip :string = this.txtGarantia.value;
		let wss_fec_pro :any = this.fecPro;
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111Ogar.call(
			  (value) => this.crdRs200111OgarResult(value)
			, (value) => this.processFault(value)
			, wss_num_opr
			, wss_gar_tip
			, wss_fec_pro
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111Ogar.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111OgarResult(wsResult :CmWsResult): void
	{
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. */
		let wss_result_msg = wsResult.getResultString('wss_result_msg');
		 
		if(wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog, wss_result_msg);

		} else {
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
	 * Llenado de combo cbbGarantia
	 */
	private getComboData0(wsResult: CmWsResult): void
	{
		this.cbbGarantiaArray = wsResult.getTableRows();
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
	 * Evento click del boton cmdAgregar.
	 */
	cmdAgregar_click(): void
	{
		this.waitShow = false;
		this.crdRs200111OgarCall();
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
			txtGarantia:'',
			cbbGarantia:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtGarantia = this.form.controls['txtGarantia'];
		this.cbbGarantia = this.form.controls['cbbGarantia'];
	}
	/**
	 * Validadores de texto - combo.
	 */
	private validatorsDef(): void
	{
		this.txtGarantia.setValidators(CmTextoComboValidator(this.cbbGarantiaArray, 'wss_cod_gar'));
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		

		this.txtGarantia.valueChanges.subscribe((value) => {
			this.utilService.comboTexto_changeSelect(this.cbbGarantia, value);
			this.utilService.toUpper(this.txtGarantia);
		});
		this.cbbGarantia.valueChanges.subscribe((value) => {
			this.utilService.textoCombo_change(this.txtGarantia, value);
		});
	}
}
