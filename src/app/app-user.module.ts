  
// app-user.module.ts  
import { NgModule } from '@angular/core';  
import { CmModule } from '@bcxang';  
import { CmSharedModule } from '@bcxang';  
import { CmMainComponent } from '@bcxang-main';  
import { AppUserRoutingModule } from './app-user-routing.module';
import { BcxBancoModule } from '@bcx-components';  

/**  
 * Lista Componentes (paginas). Reemplazar por las propias.    
 */  

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AbrirCarCredComponent } from './abrircarcred.component';  
import { MenuComponent } from './menu.component';
import { AvalesComponent } from './avales.component';
import { NuevoAvalComponent } from './nuevo_aval.component';
import { SafePipe } from './safe.pipe';
import { TipoDeGarantiaComponent } from './tipo_de_garantia.component';
import { IngresoGarantiaComponent } from './ingreso_garantia.component';
import { ContraParteComponent} from './contraparte.component';
import { ComisionesComponent, SafeHtmlComPipe} from './comisiones.component';
import { PlanDePagoComponent} from './plan_de_pago.component';
import { GenerarPlanDePagosComponent} from './generar_plan_de_pagos.component';
import { IngresoPlanDePagoComponent } from './ingreso_plan_de_pago.component';
import { BuscarPreingresoComponent } from './preingreso.component';
import { IngresoCarCredComponent } from './ingresocarcred.component';
import { RechazoPreingresoComponent } from './rechazo_preingreso.component';
import { frameDocumentosComponent } from './frame_documentos.component';
import { DatosAdicionalesComponent } from './datosadicionales.component';
import { TemplateComponent } from './template.component';
import { DocumentosRequeridosComponent } from './documentosrequeridos.component';
import { DocumentoSeguroComponent } from './detalledocumentoseguro.component';
import { DocumentoTransporteComponent } from './documentotransporte.component';
import { DocumentoNuevoComponent } from './documentonuevo.component';
import { DocumentoIngresoNuevoComponent } from './documentoingresonuevo.component';
import { RefinanciamientoComponent } from './refinanciamiento.component';
import { CampoComponent } from './campo.component';
import { CartaStandbyComponent } from './cartastandby.component';


// import { Test160Component } from './test160.component';  

/**  
  * Llamados a Web Service. Reemplazar por los propios.  
  */  
 import { BCX_RS_200_160_FORM } from './ws/BCX_RS_200_160_FORM';
 import { BCX_RS_200_151_IND_SCX } from './ws/BCX_RS_200_151_IND_SCX';
 import { BCX_RS_99_260_CLN } from './ws/BCX_RS_99_260_CLN';
 import { CRD_RS_200_151_OPR } from './ws/CRD_RS_200_151_OPR';
 import { BCX_RS_99_160_STD_BSC } from './ws/BCX_RS_99_160_STD_BSC';
 import { BCX_RS_200_160_SUC } from './ws/BCX_RS_200_160_SUC';
 import { BCX_RS_200_160_PRD } from './ws/BCX_RS_200_160_PRD';
 import { BCX_RS_200_160_CANAL } from './ws/BCX_RS_200_160_CANAL';
 import { CRD_RS_200_160_OPR } from './ws/CRD_RS_200_160_OPR';
 import { CRD_RS_200_131_GAR } from './ws/CRD_RS_200_131_GAR';
 import { CRD_RS_200_151_GAR } from './ws/CRD_RS_200_151_GAR'; 
 import { BCX_RS_200_160_BANK } from './ws/BCX_RS_200_160_BANK';
 import { CRD_RS_200_151_GNM_CTR } from './ws/CRD_RS_200_151_GNM_CTR';
 import { CRD_RS_200_112_GNM_CTR } from './ws/CRD_RS_200_112_GNM_CTR';
 import { BCX_RS_200_160_TAS } from './ws/BCX_RS_200_160_TAS';
 import { CRD_RS_111_GEN_CUO } from './ws/CRD_RS_111_GEN_CUO';
 import { CRD_RS_200_111_OGAR } from './ws/CRD_RS_200_111_OGAR';
 import { BCX_RS_200_160_TGAR } from './ws/BCX_RS_200_160_TGAR';
 import { CRD_RS_200_111_PLN_CUO } from './ws/CRD_RS_200_111_PLN_CUO';
 import { CRD_RS_200_111_GAR } from './ws/CRD_RS_200_111_GAR';
 import { SCX_RS_200_160_EST } from './ws/SCX_RS_200_160_EST';
 import { CRD_RS_200_160_PI_COL } from './ws/CRD_RS_200_160_PI_COL';
 import { CRD_RS_200_152_PI_ILC } from './ws/CRD_RS_200_152_PI_ILC';
 import { CRD_RS_200_113_OGAR } from './ws/CRD_RS_200_113_OGAR';
 import { CRD_RS_200_151_OGAR } from './ws/CRD_RS_200_151_OGAR';
 import { BCX_RS_99_261_CLN_CTA } from './ws/BCX_RS_99_261_CLN_CTA';
 import { CRD_RS_200_151_ORD50 } from './ws/CRD_RS_200_151_ORD50';
 import { BCX_RS_251_99_TIP_CMB } from './ws/BCX_RS_251_99_TIP_CMB';
 import { CRD_RS_200_111_TXT_LCI } from './ws/CRD_RS_200_111_TXT_LCI';
 import { CRD_RS_99_151_BANKCOR } from './ws/CRD_RS_99_151_BANKCOR';
 import { CRD_RS_550_PZO } from './ws/CRD_RS_550_PZO';
 import { CRD_RS_99_130_MONMTO } from './ws/CRD_RS_99_130_MONMTO';
 import { CRD_RS_200_112_OPR_ING } from './ws/CRD_RS_200_112_OPR_ING';
 import { CRD_RS_200_172_OPR_ING } from './ws/CRD_RS_200_172_OPR_ING';
 import { CRD_RS_200_152_OPR } from './ws/CRD_RS_200_152_OPR';
 import { CRD_RS_200_151_IND_PTR } from './ws/CRD_RS_200_151_IND_PTR';
 import { CRD_RS_200_112_CLI } from './ws/CRD_RS_200_112_CLI';
 import { CRD_RS_200_151_CRD001 } from './ws/CRD_RS_200_151_CRD001';
 import { BCX_RS_200_151_FORM } from './ws/BCX_RS_200_151_FORM';
 import { BCX_RS_200_160_FPRD } from './ws/BCX_RS_200_160_FPRD';
 import { BCX_RS_200_160_MON } from './ws/BCX_RS_200_160_MON';
 import { BCX_RS_99_260_ODF } from './ws/BCX_RS_99_260_ODF';
 import { BCX_RS_99_260_CLN_cta } from './ws/BCX_RS_99_260_CLN_cta';
 import { BCX_RS_200_251_PDT } from './ws/BCX_RS_200_251_PDT';
 import { SCX_RS_200_191_SOL_OPR } from './ws/SCX_RS_200_191_SOL_OPR';
 import { CRD_RS_113_CUO } from './ws/CRD_RS_113_CUO';
 import { CRD_RS_151_CUO } from './ws/CRD_RS_151_CUO';
 import { CRD_RS_200_160_TXT_LCI } from './ws/CRD_RS_200_160_TXT_LCI';
 import { BCX_RS_200_160_PAIS } from './ws/BCX_RS_200_160_PAIS';
 import { BCX_RS_200_160_CLACOM } from './ws/BCX_RS_200_160_CLACOM';
 import { BCX_RS_200_160_VIAT } from './ws/BCX_RS_200_160_VIAT';
 import { BCX_RS_200_160_FPAG } from './ws/BCX_RS_200_160_FPAG';
 import { BCX_RS_200_160_RUCP } from './ws/BCX_RS_200_160_RUCP';
 import { BCX_RS_200_160_FLC } from './ws/BCX_RS_200_160_FLC';
 import { BCX_RS_200_160_RIG_DSD } from './ws/BCX_RS_200_160_RIG_DSD';
 import { CRD_RS_200_130_FDFL } from './ws/CRD_RS_200_130_FDFL';
 import { CRD_RS_200_160_MON_PTR } from './ws/CRD_RS_200_160_MON_PTR';
 import { CRD_RS_200_160_PTR } from './ws/CRD_RS_200_160_PTR';
 import { CRD_RS_200_151_ALI } from './ws/CRD_RS_200_151_ALI';
 import { CRD_RS_200_151_BCO_CNFR } from './ws/CRD_RS_200_151_BCO_CNFR';
 import { BCX_RS_99_251_BANK } from './ws/BCX_RS_99_251_BANK';
 import { CRD_RS_200_151_DLI } from './ws/CRD_RS_200_151_DLI';
 import { BCX_RS_200_151_CLIAM } from './ws/BCX_RS_200_151_CLIAM';
 import { CRD_RS_200_151_OPR_ILC } from './ws/CRD_RS_200_151_OPR_ILC';
 import { CRD_RS_200_151_CRD002 } from './ws/CRD_RS_200_151_CRD002';
 import { CRD_RS_200_152_TXT_LCI_INI } from './ws/CRD_RS_200_152_TXT_LCI_INI';
 import { CRD_RS_200_152_TXT_LCI } from './ws/CRD_RS_200_152_TXT_LCI';
 import { CRD_RS_99_150_DOC } from './ws/CRD_RS_99_150_DOC';
 import { CRD_RS_200_118_ALD } from './ws/CRD_RS_200_118_ALD';
 import { CRD_RS_550_FEMB } from './ws/CRD_RS_550_FEMB';
 import { CRD_RS_200_112_BCO_CNFR } from './ws/CRD_RS_200_112_BCO_CNFR';
 import { BCX_RS_200_160_DOC } from './ws/BCX_RS_200_160_DOC';
 import { CRD_RS_200_151_DOC } from './ws/CRD_RS_200_151_DOC';
 import { BCX_RS_200_160_CNDENT } from './ws/BCX_RS_200_160_CNDENT';
 import { CRD_RS_200_111_DOC } from './ws/CRD_RS_200_111_DOC';
 import { CRD_RS_200_113_DOC } from './ws/CRD_RS_200_113_DOC';
 import { CRD_RS_200_112_DOC_REQ } from './ws/CRD_RS_200_112_DOC_REQ';
 import { CRD_RS_200_151_DOC_SEG } from './ws/CRD_RS_200_151_DOC_SEG';
 import { CRD_RS_200_152_DOC_VAR_SEG } from './ws/CRD_RS_200_152_DOC_VAR_SEG';
 import { CRD_RS_200_160_DOC_LCI } from './ws/CRD_RS_200_160_DOC_LCI';
 import { CRD_RS_200_111_DOC_SEG } from './ws/CRD_RS_200_111_DOC_SEG';
 import { CRD_RS_200_111_DOC_LCI } from './ws/CRD_RS_200_111_DOC_LCI';
 import { CRD_RS_200_160_DOC_LCI_BL } from './ws/CRD_RS_200_160_DOC_LCI_BL';
 import { CRD_RS_200_152_DOC_PRE } from './ws/CRD_RS_200_152_DOC_PRE';
 import { CRD_RS_200_111_DOC_LCI_BL } from './ws/CRD_RS_200_111_DOC_LCI_BL';
 import { CRD_RS_200_151_DOC_REQ } from './ws/CRD_RS_200_151_DOC_REQ';
 import { CRD_RS_200_112_REF } from './ws/CRD_RS_200_112_REF';
 import { CRD_RS_200_151_REF } from './ws/CRD_RS_200_151_REF';
 import { CRD_RS_200_112_ORD50 } from './ws/CRD_RS_200_112_ORD50';
 import { CRD_RS_200_112_ALI } from './ws/CRD_RS_200_112_ALI';
 import { CRD_RS_200_112_DLI } from './ws/CRD_RS_200_112_DLI';
 import { CRD_RS_200_111_ZLI } from './ws/CRD_RS_200_111_ZLI';
 import { CRD_RS_200_160_ZLI } from './ws/CRD_RS_200_160_ZLI';
 import { BCX_RS_200_112_CLIAM } from './ws/BCX_RS_200_112_CLIAM';
 import { BCX_RS_200_160_RUCP_2 } from './ws/BCX_RS_200_160_RUCP_2';
 import { CRD_RS_200_152_TXT_LCI_T78 } from './ws/CRD_RS_200_152_TXT_LCI_T78';
 
 
/**  
  *  En "declarations:", mantener "CmMainComponent" y reemplazar el resto por los componentes propios.  
  *  En "providers", reemplazar por los Web Services propios.  
  */    
@NgModule({  
  imports: [  
    CmSharedModule  
    , AppUserRoutingModule  
    , CmModule, BrowserAnimationsModule , BcxBancoModule 
  ],  
  declarations: [  
    CmMainComponent  
    , MenuComponent  
    , SafeHtmlComPipe
    , ComisionesComponent
    , ContraParteComponent
    , AbrirCarCredComponent
    , AvalesComponent
    , NuevoAvalComponent
    , SafePipe
    , TipoDeGarantiaComponent
    , IngresoGarantiaComponent
    , PlanDePagoComponent
    , GenerarPlanDePagosComponent
    , IngresoPlanDePagoComponent
    , BuscarPreingresoComponent
    , IngresoCarCredComponent
    , RechazoPreingresoComponent
    , frameDocumentosComponent
    , DatosAdicionalesComponent
    , TemplateComponent
    , DocumentosRequeridosComponent
    , DocumentoSeguroComponent
    , DocumentoTransporteComponent
    , DocumentoNuevoComponent
    , DocumentoIngresoNuevoComponent
    , RefinanciamientoComponent
    , CampoComponent
    , CartaStandbyComponent
    // , Test160Component  
  ],  
  exports: [CmSharedModule],  
  bootstrap: [CmMainComponent],  
  providers: [  
     BCX_RS_200_160_FORM
   , BCX_RS_200_151_IND_SCX  
   , BCX_RS_99_260_CLN 
   , CRD_RS_200_151_OPR
   , BCX_RS_99_160_STD_BSC
   , BCX_RS_200_160_SUC
   , BCX_RS_200_160_PRD
   , BCX_RS_200_160_CANAL
   , CRD_RS_200_160_OPR
   , CRD_RS_200_131_GAR
   , CRD_RS_200_151_GAR
   , BCX_RS_200_160_BANK
   , CRD_RS_200_151_GNM_CTR
   , CRD_RS_200_112_GNM_CTR
   , BCX_RS_200_160_TAS
   , CRD_RS_111_GEN_CUO
   , CRD_RS_200_111_OGAR
   , BCX_RS_200_160_TGAR
   , CRD_RS_200_111_PLN_CUO
   , CRD_RS_200_111_GAR
   , SCX_RS_200_160_EST
   , CRD_RS_200_160_PI_COL
   , CRD_RS_200_152_PI_ILC
   , CRD_RS_200_113_OGAR
   , CRD_RS_200_151_OGAR
   , BCX_RS_99_261_CLN_CTA
   , CRD_RS_200_151_ORD50
   , BCX_RS_251_99_TIP_CMB
   , CRD_RS_200_111_TXT_LCI
   , CRD_RS_99_151_BANKCOR
   , CRD_RS_550_PZO
   , CRD_RS_99_130_MONMTO
   , CRD_RS_200_112_OPR_ING
   , CRD_RS_200_172_OPR_ING
   , CRD_RS_200_152_OPR
   , CRD_RS_200_151_IND_PTR
   , CRD_RS_200_112_CLI
   , CRD_RS_200_151_CRD001
   , BCX_RS_200_151_FORM
   , BCX_RS_200_160_FPRD
   , BCX_RS_200_160_MON
   , BCX_RS_99_260_ODF
   , BCX_RS_99_260_CLN_cta
   , BCX_RS_200_251_PDT
   , SCX_RS_200_191_SOL_OPR
   , CRD_RS_113_CUO
   , CRD_RS_151_CUO
   , CRD_RS_200_160_TXT_LCI
   , BCX_RS_200_160_PAIS
   , BCX_RS_200_160_CLACOM
   , BCX_RS_200_160_VIAT
   , BCX_RS_200_160_FPAG
   , BCX_RS_200_160_RUCP
   , BCX_RS_200_160_FLC
   , BCX_RS_200_160_RIG_DSD
   , CRD_RS_200_130_FDFL
   , CRD_RS_200_160_MON_PTR
   , CRD_RS_200_160_PTR
   , CRD_RS_200_151_ALI
   , CRD_RS_200_151_BCO_CNFR
   , BCX_RS_99_251_BANK
   , CRD_RS_200_151_DLI
   , BCX_RS_200_151_CLIAM
   , CRD_RS_200_151_OPR_ILC
   , CRD_RS_200_151_CRD002
   , CRD_RS_200_152_TXT_LCI_INI
   , CRD_RS_200_152_TXT_LCI
   , CRD_RS_99_150_DOC
   , CRD_RS_200_118_ALD
   , CRD_RS_550_FEMB
   , CRD_RS_200_112_BCO_CNFR
   , BCX_RS_200_160_DOC
   , CRD_RS_200_151_DOC
   , BCX_RS_200_160_CNDENT
   , CRD_RS_200_111_DOC
   , CRD_RS_200_113_DOC
   , CRD_RS_200_112_DOC_REQ
   , CRD_RS_200_151_DOC_SEG
   , CRD_RS_200_152_DOC_VAR_SEG
   , CRD_RS_200_160_DOC_LCI
   , CRD_RS_200_111_DOC_SEG
   , CRD_RS_200_111_DOC_LCI
   , CRD_RS_200_160_DOC_LCI_BL
   , CRD_RS_200_152_DOC_PRE
   , CRD_RS_200_111_DOC_LCI_BL
   , CRD_RS_200_151_DOC_REQ
   , CRD_RS_200_112_REF
   , CRD_RS_200_151_REF
   , CRD_RS_200_112_ORD50
   , CRD_RS_200_112_ALI
   , CRD_RS_200_112_DLI
   , CRD_RS_200_111_ZLI
   , CRD_RS_200_160_ZLI
   , BCX_RS_200_112_CLIAM
   , BCX_RS_200_160_RUCP_2
   , CRD_RS_200_152_TXT_LCI_T78
   
  ]  
})  
export class AppUserModule { }