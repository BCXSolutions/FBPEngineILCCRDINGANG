// Generado por Xml2Ang, Bcx Solutions 
// Fecha: 22/04/2020 11:02:11
import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MatDialog, MatDialogRef } from '@angular/material';
import { Location } from '@angular/common';
import { SharedService } from './SharedService.service';
// Componentes y objetos Bcx
import { CmContextService
       , CmDialogAlertComponent
       , CmWsHostService
       , CmUtilService
       , CmWaitComponent
       , CmWsResult } from '@bcxang';
// Web Services
import { CRD_RS_200_112_ORD50 } from './ws/CRD_RS_200_112_ORD50';
import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
import { CRD_RS_200_151_ORD50 } from './ws/CRD_RS_200_151_ORD50';

@Component({
	selector: 'my-form',
	templateUrl: 'campo.component.html'
})
/**
 * Form: Condiciones adicionales
 */
export class CampoComponent implements OnInit
{
	// Nombre de la pagina.
	pageName: string = 'Campo';
	// Estructura con los datos del form.
	form: FormGroup;
	
	// Objetos de input.
	txtDatos :any;
	
	// Activa o desactiva el progress.
	waitShow: boolean;
	// Registro de los WS finalizados.
	wsFin: boolean[] = [];

	numOperacion:any;
	user_logueado:any;
	WSS_D01_SGM:any;
	varCartaCredito:any;
	myArrayDos:any[]=[];
	varArray:any[]=[];
	cOrde:any;
	indicadorOpcion:any;

	constructor (private hostService: CmWsHostService
		, private formBuilder: FormBuilder
		, public  dialog: MatDialog
		, private router: Router
		, private location: Location
		, public  utilService: CmUtilService
		, private contextService: CmContextService
		, private crdRs200112Ord50: CRD_RS_200_112_ORD50
		, private crdRs200111TxtLci: CRD_RS_200_111_TXT_LCI
		, private crdRs200151Ord50: CRD_RS_200_151_ORD50
		, private sharedService: SharedService
		){}
	/**
	 * Inicializamos todo.
	 */
	ngOnInit()
	{
		// Campos del formulario.
		this.formDef();
		this.controlesDef();


		this.numOperacion = this.contextService.getUserData("numOperacion");	
		this.WSS_D01_SGM = this.contextService.getUserData("WSS_D01_SGM");	
		this.user_logueado = this.contextService.getUserData("user_logueado");
		this.myArrayDos =  this.contextService.getUserData("myArrayDos");
		this.indicadorOpcion = this.contextService.getUserData('indicadorOpcion');
		this.varCartaCredito = this.contextService.getUserData('varCartaCredito');

		this.ofunc_datos(this.myArrayDos);
		// Numericos y uppercase.
		this.valueChanges();
	}

	 ofunc_datos(myArray:any[]):void{
		let txtDatosAux:any;
		this.varArray = myArray;
		txtDatosAux = "APPLICANT:\n";
		for(let i:any=0;i<myArray.length;i++){
			if(myArray[i] > ' '){
				txtDatosAux += myArray[i]+"\n";						
			} 
		}
		this.txtDatos.patchValue(txtDatosAux);
	}

	/**
	 * Llamamos al Web Service.
	 */
	private ofunc_grabar_texto(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		 */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'ORDEN';
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = 'S';
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
		} else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.ofunc_grabar_odenante();
		}
	}

	/**
	 * Llamamos al Web Service.
	 */
	private ofunc_grabar_odenante(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		 */ 
		let wss_cod_prd :string = this.WSS_D01_SGM;
		let wss_tip_txt :string = 'ORDNT';
		let wss_num_opr :string = this.numOperacion;
		let wss_lin_txt :string = this.txtDatos.value.replace('APPLICANT:','');
		let wss_usercode :string = this.user_logueado;
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200111TxtLci.call(
			  (value) => this.ofunc_result_odenante(value)
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
	ofunc_result_odenante(wsResult :CmWsResult): void
	{
		let wss_result_msg:any
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		}else if(wsResult.getReturnValue()==0){
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			this.ofunc_enviar_datos();
		}
	}

	ofunc_enviar_datos():void{

		debugger
		let objetos:any[]=[];
		let txtCondicionesAdicio47Aux:any;
		// if(varCartaCredito != null){	
		if(this.indicadorOpcion == 'Nueva'){			
			this.varCartaCredito.txtCondicionesAdicio47.value+="\n"+this.txtDatos.value;
			this.varCartaCredito.bFlagCambioEspecial = true;
			this.varCartaCredito.ofunc_grabar_texto('CONAD',this.varCartaCredito.txtCondicionesAdicio47.value);	

			this.ofunc_grabar_texto_nuevo50();			
		}
		// if(this.varCartaCreditoDos != null){
		if(this.indicadorOpcion == 'Detalle'){					
			this.varCartaCredito.txtCondicionesAdicio47.value+="\n"+this.txtDatos.value;
			this.varCartaCredito.bFlagCambioEspecial = true;
			this.varCartaCredito.ofunc_grabar_texto('CONAD',this.varCartaCredito.txtCondicionesAdicio47.value);	
			this.ofunc_grabar_texto_nuevo50();		


		}	
		if(this.indicadorOpcion == 'Preingreso'){	
			this.varCartaCredito.txtCondicionesAdicio47.value+="\n"+this.txtDatos.value;
			this.varCartaCredito.bFlagCambioEspecial = true;
			this.varCartaCredito.ofunc_grabar_texto('CONAD',this.varCartaCredito.txtCondicionesAdicio47.value);	
			this.ofunc_grabar_texto_nuevo50();	
						
		}					
		//this.location.back();
			
	}

		/**indicadorOpcion
	 * Llamamos al Web Service.
	 */
	private ofunc_grabar_texto_nuevo50(): void
	{
		/* Mover los datos de la pantalla a los parametros del Web Service.  */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_txt_ord1 :string = this.myArrayDos[0];
		let wss_txt_ord2 :string = this.myArrayDos[1];
		let wss_txt_ord3 :string = this.myArrayDos[2];
		let wss_txt_ord4 :string = this.myArrayDos[3];
		let wss_usercode :string = this.user_logueado;
		
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200112Ord50.call(
			  (value) => this.ofunc_result_texto_nuevo50(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_txt_ord1
			, wss_txt_ord2
			, wss_txt_ord3
			, wss_txt_ord4
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.crdRs200112Ord50.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	ofunc_result_texto_nuevo50(wsResult :CmWsResult): void
	{
		let wss_result_msg:any
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
			wss_result_msg = wsResult.getResultString('wss_result_msg');
			this.utilService.alert(this.dialog, wss_result_msg);
		} else {
			let ejecutarFuncion:string
			if(this.indicadorOpcion == 'Nueva'){
				this.ofunc_tag_50_campo();				
			}
			
			if(this.indicadorOpcion == 'Detalle'){
				this.ofunc_tag_50_campo();				
			}	

			if(this.indicadorOpcion == 'Preingreso'){
				this.ofunc_tag_50_campo();					
			}	
			this.location.back();
		}

	}



	ofunc_tag_50_campo(){
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let wss_opr_num :string = this.numOperacion;
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		//this.waitShow = true;
		// Invocamos el WS.
		this.crdRs200151Ord50.call(
			  (value) => this.ofunc_result_tag50_campo(value)
			, (value) => this.processFault(value)
			, wss_opr_num
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).
	} 

	ofunc_result_tag50_campo(wsResult:CmWsResult){
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;

		let aux:any;
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
		
			// this.varCartaCredito.arrayTag50 =[];
			// this.varCartaCredito.txtBicOrde50.patchValue('');
			// this.varCartaCredito.txtOrdeNom50.patchValue('');
			// this.varCartaCredito.txtOrdeDire50.patchValue('');
			// this.varCartaCredito.txtOrCiuPa50.patchValue('');

			this.varCartaCredito.txtBicOrde50.patchValue(wsResult.getResultString('wss_txt_ord1'));
			this.varCartaCredito.txtOrdeNom50.patchValue(wsResult.getResultString('wss_txt_ord2'));
			this.varCartaCredito.txtOrdeDire50.patchValue(wsResult.getResultString('wss_txt_ord3'));
			this.varCartaCredito.txtOrCiuPa50.patchValue(wsResult.getResultString('wss_txt_ord4'));

		}

	}

	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAceptar_click(): void
	{
		this.waitShow = false;
		this.cOrde = 1;
		this.ofunc_grabar_texto();
	}
	//FUNCION QUE CONVIERTE A MAYUSCULA LOS TEXTOS
	ofunc_mayuscula(myTextArea:any):void{
		if(myTextArea.value != ''){
			//myTextArea.value = myTextArea.text.toUpperCase(); 
			this.utilService.toUpper(myTextArea);
		}
	}	
	/**
	 * Evento click del boton cmdVolver.
	 */
	cmdVolver_click(): void
	{
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
			txtDatos:'',
		});
	}
	/**
	 * Nombres de controles para simplificar su uso.
	 */
	private controlesDef(): void
	{
		this.txtDatos = this.form.controls['txtDatos'];
	}
	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{
	}
}
