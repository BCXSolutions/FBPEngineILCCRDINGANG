# Utilización de Componentes.

1.- importar la libreria en app-user.module.ts

  - Link de app-user.module [app-user.module](../src/app/app-user.module.ts)

  ```ts
  // Importar la libreria.
  import { BcxBancoModule } from '@bcx-components';

  // Agregar la importación en el imports.
  @NgModule({  
    imports: [
      BcxBancoModule //<-- aqui se agrega la libreria importada.
    ]
  )}
  ```

2.- Utilización del tag <banco-bcx>

  - class: agregar la siguiente clase:
    hide-descripcion: permite ocultar el input descripción.
  
  - isDisabled: bloquea y desbloquea el input codigo banco y el botón.

  ```html

  <!-- COMPONENTE BANCO -->
  <bcx-banco class="hide-descripcion" [tabindex]="1" formControlName="txtCodigoBanco2" placeholder="BIC" placeholderDes="Descripción" [isDisabled]="true" [data]="this"></bcx-banco>
  
  ```




