// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 09/01/2020 12:08:25
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
       , CmWsResult } from '@bcxang';
// Web Services
import { CRD_RS_200_111_PLN_CUO } from './ws/CRD_RS_200_111_PLN_CUO';

@Component({
	selector: 'my-form',
	templateUrl: 'ingreso_plan_de_pago.component.html'
})
/**
 * Form: Ingreso de plan de pago
 */
export class IngresoPlanDePagoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'IngresoPlanDePAgo';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtFecha1 :any;
	bcxMonto1 :any;
	txtFecha7 :any;
	bcxMonto7 :any;
	txtFecha2 :any;
	bcxMonto2 :any;
	txtFecha8 :any;
	bcxMonto8 :any;
	txtFecha3 :any;
	bcxMonto3 :any;
	txtFecha9 :any;
	bcxMonto9 :any;
	txtFecha4 :any;
	bcxMonto4 :any;
	txtFecha10 :any;
	bcxMonto10 :any;
	txtFecha5 :any;
	bcxMonto5 :any;
	txtFecha11 :any;
	bcxMonto11 :any;
	txtFecha6 :any;
	bcxMonto6 :any;
	txtFecha12 :any;
	bcxMonto12 :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];
	numOperacion:any;
	user_logueado:any;



	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private dateAdapter: DateAdapter<Date>
		, private crdRs200111PlnCuo: CRD_RS_200_111_PLN_CUO
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		this.dateAdapter.setLocale('es-CL');
		// Campos del formulario.
		this.formDef();
		this.controlesDef();
		// Numericos y uppercase.
		this.valueChanges();

		this.numOperacion = this.contextService.getUserData("numOperacion");
		this.user_logueado = this.contextService.getUserData('user_logueado');
		// Recuperamos el contexto.
		const ctxSw :boolean = this.contextService.recover(this);
	}
	/**
	 * Llamamos al Web Service.
	 */
	private crdRs200111PlnCuoCall(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_lci_num :string = this.numOperacion;
		let wss_ngi_num :string = '';
		let wss_vto_cuo0 :any;

		if(this.txtFecha1.value == ''){
			wss_vto_cuo0 = '1753-01-01'
		} else {
			wss_vto_cuo0 = this.utilService.toDate(this.txtFecha1.value);
		}
		let wss_mto_cuo0 :string = this.utilService.toDecimal(this.bcxMonto1.value);

		let wss_vto_cuo1 :any;
		if(this.txtFecha2.value == ''){
			wss_vto_cuo1 = '1753-01-01'
		} else {
			wss_vto_cuo1 = this.utilService.toDate(this.txtFecha2.value);
		}		
		let wss_mto_cuo1 :string = this.utilService.toDecimal(this.bcxMonto2.value);

		let wss_vto_cuo2 :any;
		if(this.txtFecha3.value == ''){
			wss_vto_cuo2 = '1753-01-01';
		} else {
			wss_vto_cuo2 = this.utilService.toDate(this.txtFecha3.value);
		}
		let wss_mto_cuo2 :string = this.utilService.toDecimal(this.bcxMonto3.value);

		let wss_vto_cuo3 :any;
		if(this.txtFecha4.value == ''){
			wss_vto_cuo3 = '1753-01-01';
		} else {
			wss_vto_cuo3 = this.utilService.toDate(this.txtFecha4.value);
		}
		let wss_mto_cuo3 :string = this.utilService.toDecimal(this.bcxMonto4.value);

		let wss_vto_cuo4 :any;
		if(this.txtFecha5.value == ''){
			wss_vto_cuo4 = '1753-01-01';
		} else {
			wss_vto_cuo4 = this.utilService.toDate(this.txtFecha5.value);
		}
		let wss_mto_cuo4 :string = this.utilService.toDecimal(this.bcxMonto5.value);

		let wss_vto_cuo5 :any;
		if(this.txtFecha6.value == ''){
			wss_vto_cuo5 = '1753-01-01';
		} else {
			wss_vto_cuo5 = this.utilService.toDate(this.txtFecha6.value);
		}
		let wss_mto_cuo5 :string = this.utilService.toDecimal(this.bcxMonto6.value);

		let wss_vto_cuo6 :any;
		if(this.txtFecha7.value == ''){
			wss_vto_cuo6 = '1753-01-01';
		} else {
			wss_vto_cuo6 = this.utilService.toDate(this.txtFecha7.value);
		}
		let wss_mto_cuo6 :string = this.utilService.toDecimal(this.bcxMonto7.value);

		let wss_vto_cuo7 :any;
		if(this.txtFecha8.value == ''){
			wss_vto_cuo7 = '1753-01-01';
		} else {
			wss_vto_cuo7 = this.utilService.toDate(this.txtFecha8.value);
		}
		let wss_mto_cuo7 :string = this.utilService.toDecimal(this.bcxMonto8.value);

		let wss_vto_cuo8 :any;
		if(this.txtFecha9.value == ''){
			wss_vto_cuo8 = '1753-01-01';
		} else {
			wss_vto_cuo8 = this.utilService.toDate(this.txtFecha9.value);
		}	
		let wss_mto_cuo8 :string = this.utilService.toDecimal(this.bcxMonto9.value);

		let wss_vto_cuo9 :any;
		if(this.txtFecha10.value == ''){
			wss_vto_cuo9 = '1753-01-01';
		} else {
			wss_vto_cuo9 = this.utilService.toDate(this.txtFecha10.value);
		}	
		let wss_mto_cuo9 :string = this.utilService.toDecimal(this.bcxMonto10.value);

		let wss_vto_cuo10 :any;
		if(this.txtFecha11.value == ''){
			wss_vto_cuo10 = '1753-01-01';
		} else {
			wss_vto_cuo10 = this.utilService.toDate(this.txtFecha11.value);
		}			
		let wss_mto_cuo10 :string = this.utilService.toDecimal(this.bcxMonto11.value);

		let wss_vto_cuo11 :any;
		if(this.txtFecha12.value == ''){
			wss_vto_cuo11 = '1753-01-01';
		} else {
			wss_vto_cuo11 = this.utilService.toDate(this.txtFecha12.value);
		}	
		let wss_mto_cuo11 :string = this.utilService.toDecimal(this.bcxMonto12.value);
		
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111PlnCuo.call(
			  (value) => this.crdRs200111PlnCuoResult(value)
			, (value) => this.processFault(value)
			, wss_lci_num
			, wss_ngi_num
			, wss_vto_cuo0
			, wss_mto_cuo0
			, wss_vto_cuo1
			, wss_mto_cuo1
			, wss_vto_cuo2
			, wss_mto_cuo2
			, wss_vto_cuo3
			, wss_mto_cuo3
			, wss_vto_cuo4
			, wss_mto_cuo4
			, wss_vto_cuo5
			, wss_mto_cuo5
			, wss_vto_cuo6
			, wss_mto_cuo6
			, wss_vto_cuo7
			, wss_mto_cuo7
			, wss_vto_cuo8
			, wss_mto_cuo8
			, wss_vto_cuo9
			, wss_mto_cuo9
			, wss_vto_cuo10
			, wss_mto_cuo10
			, wss_vto_cuo11
			, wss_mto_cuo11
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200111PlnCuo.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	crdRs200111PlnCuoResult(wsResult :CmWsResult): void
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
		this.crdRs200111PlnCuoCall();
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
			txtFecha1:['', CmDateValidator()],
			bcxMonto1:'',
			txtFecha7:['', CmDateValidator()],
			bcxMonto7:'',
			txtFecha2:['', CmDateValidator()],
			bcxMonto2:'',
			txtFecha8:['', CmDateValidator()],
			bcxMonto8:'',
			txtFecha3:['', CmDateValidator()],
			bcxMonto3:'',
			txtFecha9:['', CmDateValidator()],
			bcxMonto9:'',
			txtFecha4:['', CmDateValidator()],
			bcxMonto4:'',
			txtFecha10:['', CmDateValidator()],
			bcxMonto10:'',
			txtFecha5:['', CmDateValidator()],
			bcxMonto5:'',
			txtFecha11:['', CmDateValidator()],
			bcxMonto11:'',
			txtFecha6:['', CmDateValidator()],
			bcxMonto6:'',
			txtFecha12:['', CmDateValidator()],
			bcxMonto12:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtFecha1 = this.form.controls['txtFecha1'];
		this.bcxMonto1 = this.form.controls['bcxMonto1'];
		this.txtFecha7 = this.form.controls['txtFecha7'];
		this.bcxMonto7 = this.form.controls['bcxMonto7'];
		this.txtFecha2 = this.form.controls['txtFecha2'];
		this.bcxMonto2 = this.form.controls['bcxMonto2'];
		this.txtFecha8 = this.form.controls['txtFecha8'];
		this.bcxMonto8 = this.form.controls['bcxMonto8'];
		this.txtFecha3 = this.form.controls['txtFecha3'];
		this.bcxMonto3 = this.form.controls['bcxMonto3'];
		this.txtFecha9 = this.form.controls['txtFecha9'];
		this.bcxMonto9 = this.form.controls['bcxMonto9'];
		this.txtFecha4 = this.form.controls['txtFecha4'];
		this.bcxMonto4 = this.form.controls['bcxMonto4'];
		this.txtFecha10 = this.form.controls['txtFecha10'];
		this.bcxMonto10 = this.form.controls['bcxMonto10'];
		this.txtFecha5 = this.form.controls['txtFecha5'];
		this.bcxMonto5 = this.form.controls['bcxMonto5'];
		this.txtFecha11 = this.form.controls['txtFecha11'];
		this.bcxMonto11 = this.form.controls['bcxMonto11'];
		this.txtFecha6 = this.form.controls['txtFecha6'];
		this.bcxMonto6 = this.form.controls['bcxMonto6'];
		this.txtFecha12 = this.form.controls['txtFecha12'];
		this.bcxMonto12 = this.form.controls['bcxMonto12'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
		this.bcxMonto1.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto1);
		});
		this.bcxMonto7.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto7);
		});
		this.bcxMonto2.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto2);
		});
		this.bcxMonto8.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto8);
		});
		this.bcxMonto3.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto3);
		});
		this.bcxMonto9.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto9);
		});
		this.bcxMonto4.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto4);
		});
		this.bcxMonto10.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto10);
		});
		this.bcxMonto5.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto5);
		});
		this.bcxMonto11.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto11);
		});
		this.bcxMonto6.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto6);
		});
		this.bcxMonto12.valueChanges.subscribe((value) => {
			this.utilService.bcxNumeroInit(this.bcxMonto12);
		});
	}
}
