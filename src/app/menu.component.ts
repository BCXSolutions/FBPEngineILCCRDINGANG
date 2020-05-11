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
       , CmWsResult } from '@bcxang';
// Web Services
import { BCX_RS_200_160_FORM } from './ws/BCX_RS_200_160_FORM';
// import { BCX_RS_200_151_IND_SCX } from './ws/BCX_RS_200_151_IND_SCX';
// import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
// import { CRD_RS_200_151_OPR } from './ws/CRD_RS_200_151_OPR';
// import { BCX_RS_99_160_STD_BSC } from './ws/BCX_RS_99_160_STD_BSC';
// import { BCX_RS_200_160_SUC } from './ws/BCX_RS_200_160_SUC';
// import { BCX_RS_200_160_PRD } from './ws/BCX_RS_200_160_PRD';
// import { BCX_RS_200_160_CANAL } from './ws/BCX_RS_200_160_CANAL';
// import { CRD_RS_200_160_COL } from './ws/CRD_RS_200_160_COL';
import { FBP_RS_AUTH_SERVER } from '../../@bcxang/lib/ws/FBP_RS_AUTH_SERVER';
import { interval } from 'rxjs';

@Component({
	selector: 'my-form',
	styleUrls: ['./menu.component.css'],
	templateUrl: 'menu.component.html'
})
/**
 * Form: Buscar
 */
export class MenuComponent implements OnInit, AfterViewChecked
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
	user_logueado:string;
	opcion:any;

	WSS_D01_AREA:any;
	WSS_D01_SGM:any;
	WSS_D01_TIP:any;
	WSS_D01_CODNUM:any;
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
		, private bcxRs200160Form: BCX_RS_200_160_FORM
		// , private bcxRs200151IndScx: BCX_RS_200_151_IND_SCX
		// , private bcxRs99260Cln: BCX_RS_99_260_CLN
		// , private crdRs200151Opr: CRD_RS_200_151_OPR
		// , private bcxRs99160StdBsc: BCX_RS_99_160_STD_BSC
		// , private bcxRs200160Suc: BCX_RS_200_160_SUC
		// , private bcxRs200160Prd: BCX_RS_200_160_PRD
		// , private bcxRs200160Canal: BCX_RS_200_160_CANAL
		// , private crdRs200160Col: CRD_RS_200_160_COL
		, private fbpRsAuthServer: FBP_RS_AUTH_SERVER
		){}
	/**
	 * Inicializamos todo.
	 */

	ngOnInit(){
		this.formDef();
		this.controlesDef()

		const queryParams: any = this.utilService.getQueryParams();    
		this.opcion = queryParams["setOpcion"];
		
		this.user_logueado = this.hostService.getTokenUser();

		this.waitShow = true;
		const subscription = interval(1000)
		.subscribe(() => {
			this.fbpRsAuthServer.call(
				(value) => this.fbpRsAuthServerResult(value)
				, (value) => this.openDialogAlert(value)
				, "Bearer "+ this.hostService.getToken()
			);

			subscription.unsubscribe();
		});

		// const subscription = interval(1500)
		// .subscribe(() => {
		// 	this.init();
		// 	subscription.unsubscribe();
		// });



		

		

	}


	init()
	{ 


		this.bcxRs200160FormCall();
		
		if(this.opcion == "CRDAPE") {
			this.cmdAbrir_click();
		} else if(this.opcion == "CRDING") {
			this.cmdNueva_click();
		} 

		console.log("	 this.opcion: " + this.opcion);
		
	}	

	
	/**
	 * Posicion de scroll.
	 */
	ngAfterViewChecked()
	{
		this.tableAfterView = this.utilService.scrollPos(this.table, this.tableScroll, this.tableAfterView);
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
        let hayError: boolean = false//wsResult.hayError();
		//this.init();
        if(wsResult.getReturnValue() == 1){
            if(wsResult.getResultString('status') == 'OK'){
                this.init();
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
	 * Evento click del boton cmdProximos.
	 */
	cmdNueva_click(): void
	{
		this.waitShow = false;

		this.contextService.setUserData("pageName","Detalle crédito");
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("WSS_D01_AREA","IMP");
		this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);
		this.contextService.setUserData("WSS_D01_TIP",this.WSS_D01_TIP);
		this.contextService.setUserData("WSS_D01_CODNUM",this.WSS_D01_CODNUM);
		this.contextService.setUserData("financiamiento_indicador_opcion", 'Nueva');
		this.contextService.setUserData("cOrde", 0);
		this.contextService.setUserData("precarga", false);
		this.contextService.setUserData("varInicio", 0);

		// Application.application.numOpe="";
		// Application.application.fmlProd=0;
		// Application.application.setIdMoneda="";
		// Application.application.numeroRut="";
		// Application.application.fecPro="";
		// Application.application.modMOn="";
		// Application.application.bicCorr="";
		// Application.application.consulta="";
		// Application.application.cOrde=0;				    
		// Application.application.iPago=false;
		// Application.application.setEnmienda=0;				      
		// Application.application.precarga=false;
		// Application.application.varInicio = 0;


        this.router.navigate(['/ingresocartacredito']);
	//	this.utilService.alert(this.dialog, 'No implementado');
	}
	/**
	 * Evento click del boton cmdAceptar.
	 */
	cmdAbrir_click(): void
	{
		this.waitShow = false;
		this.contextService.setUserData("user_logueado",this.user_logueado);
		this.contextService.setUserData("WSS_D01_AREA","IMP");
		this.contextService.setUserData("WSS_D01_SGM",this.WSS_D01_SGM);
		this.contextService.setUserData("WSS_D01_TIP",this.WSS_D01_TIP);
		this.contextService.setUserData("WSS_D01_CODNUM",this.WSS_D01_CODNUM);
		this.contextService.setUserData("cOrde", 0);
		this.contextService.setUserData("precarga", false);
		this.contextService.setUserData("varInicio", 0);

        this.router.navigate(['/abrircartacredito']);
	//	this.utilService.alert(this.dialog, 'No implementado');
	}

	
	/**
	 * Evento click del boton cmdCancelar.
	 */
	cmdVolver_click(): void
	{


		this.waitShow = false;
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
			txtCanal:'',
			cbbCodCanal:'',
			txtTableFilter: ''
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
	}


	validatorsDef () {
	}

	/**
	 * Inscribe metodos para atrapar los cambios a los campos del formulario.
	 * Adecuado para uppercase,  valor inicial de BcxNumero,
	 * mantener relacion texto - combo, filtro de tabla.
	 */
	private valueChanges(): void
	{

	}



		/**
	 * Llamamos al Web Service.
	 */
	private bcxRs200160FormCall(): void
	{

		//debugger
		/* Mover los datos de la pantalla a los parametros del Web Service. 
		IMPORTANTE: Para variables Rut, usar: this.utilService.toRut(this.variableRut.value); */ 
		let WSS_D01_CODFORM :string = "CRDI0";
		let wss_usercode :string = this.user_logueado;
		 
		// Activamos el simbolo de progress.
		this.waitShow = true;
		// Invocamos el WS.
		this.bcxRs200160Form.call(
			  (value) => this.bcxRs200160FormResult(value)
			, (value) => this.processFault(value)
			, WSS_D01_CODFORM
			, wss_usercode
		);

		// Aca no puede haber nada que dependa del resultado (asincrono).

	}
	/**
	 * Callback invocado por this.bcxRs200160Form.call.
	 * @param wsResult Parametros de salida, mensaje de error.
	 */
	bcxRs200160FormResult(wsResult :CmWsResult): void
	{
		
		// Desactivamos el simbolo de progress.
		this.waitShow = false;
		/* Mover los parametros de salida a la pantalla. 
		this.xyz.patchValue(wsResult.getResultString('WSS_D01_AREA'));
		this.xyz.patchValue(wsResult.getResultString('WSS_D01_SGM'));
		this.xyz.patchValue(wsResult.getResultString('WSS_D01_TIP'));
		this.xyz.patchValue(wsResult.getResultString('WSS_D01_CODNUM'));
		this.xyz.patchValue(wsResult.getResultString('wss_result_msg'));
	
		 */
		//debugger



		// A veces el Fault se viene por aca.
		let hayError: boolean = wsResult.hayError();
		if (hayError)
		{
			let msg: string = wsResult.getErrorMsg();
			let code: string = wsResult.getErrorCode();
			this.utilService.alert(this.dialog, msg + ' [' + code + ']');
		} else if (wsResult.getReturnValue()==0){
			this.utilService.alert(this.dialog,  wsResult.getResultString('wss_result_msg'))
		} else {
			this.WSS_D01_AREA = "CRDI0";
			this.WSS_D01_SGM = wsResult.getResultString('wss_D01_SGM').toString().trim();

			console.log("this.WSS_D01_SGM: " + this.WSS_D01_SGM);

			this.WSS_D01_TIP = wsResult.getResultString('wss_D01_TIP').toString().trim();
			this.WSS_D01_CODNUM = wsResult.getResultString('wss_D01_CODNUM').toString().trim();
		}
	}

		/**
	 * Callback para el caso de Fault en llamada a Web Service.
	 */
	private processFault(err: any): void
	{
		this.waitShow = false;
		this.utilService.alert(this.dialog, err.error);
	}


}
