import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    DetallesComponent,
    AgregarProductoComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ListarComponent, CrearComponent],
})
export class FacturasModule {}
