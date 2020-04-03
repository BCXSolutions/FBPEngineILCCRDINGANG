  
// app-user-routing.module.ts  
  
import { NgModule }  from '@angular/core';  
import { RouterModule, Routes, CanActivate } from '@angular/router'; 
import { CmAuthGuardService } from '@bcxang';
import { CmErrorComponent } from '@bcxang';  
/**  
 * Lista de componentes.  
 */  
import { MenuComponent } from './menu.component';  
import { AbrirCarCredComponent } from  './abrircarcred.component';  
import { AvalesComponent } from './avales.component';
import { NuevoAvalComponent } from './nuevo_aval.component';
import { TipoDeGarantiaComponent } from './tipo_de_garantia.component';
import { IngresoGarantiaComponent } from './ingreso_garantia.component';
import { ContraParteComponent} from './contraparte.component';
import { ComisionesComponent } from './comisiones.component';
import { PlanDePagoComponent} from './plan_de_pago.component';
import { GenerarPlanDePagosComponent} from './generar_plan_de_pagos.component';
import { IngresoPlanDePagoComponent } from './ingreso_plan_de_pago.component';
import { BuscarPreingresoComponent } from './preingreso.component';
import { IngresoCarCredComponent } from './ingresocarcred.component';
import { RechazoPreingresoComponent } from './rechazo_preingreso.component';
import { frameDocumentosComponent } from './frame_documentos.component';
import { DatosAdicionalesComponent } from './datosadicionales.component';
import { TemplateComponent } from './template.component';
 

/**   
 * Lista de Componentes y sus path.
 */  
const appRoutes: Routes = [  
    { path: 'cm-error', component: CmErrorComponent }  
    ,{ path: '', component: MenuComponent, canActivate: [CmAuthGuardService]}  
    ,{ path: 'abrircartacredito', component: AbrirCarCredComponent, canActivate: [CmAuthGuardService]}    
    ,{ path: 'avales', component: AvalesComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'nuevoaval',component: NuevoAvalComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'tipodegarantia',component: TipoDeGarantiaComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'ingresodegarantia',component: IngresoGarantiaComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'contraparte',component: ContraParteComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'plandepago',component: PlanDePagoComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'generarplandepagos',component: GenerarPlanDePagosComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'ingresoplandepagos',component: IngresoPlanDePagoComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'preingreso',component: BuscarPreingresoComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'ingresocartacredito',component: IngresoCarCredComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'rechazopreingreso', component:RechazoPreingresoComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'documentos', component: frameDocumentosComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'comisiones/:numOpe/:codIng/:codPro/:codEve', component: ComisionesComponent, canActivate: [CmAuthGuardService]} 
    ,{ path: 'datosadicionales', component:DatosAdicionalesComponent, canActivate: [CmAuthGuardService]}
    ,{ path: 'template', component:TemplateComponent, canActivate: [CmAuthGuardService]}
   //, { path: '**', component: Test160Component, canActivate: [CmAuthGuardService] }  

   
];  

@NgModule({  
  imports: [RouterModule.forChild(appRoutes)],   
  exports: [RouterModule]  
}) 
export class AppUserRoutingModule {}