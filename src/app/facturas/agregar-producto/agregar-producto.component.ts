import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
})
export class AgregarProductoComponent {
  @Input() modal: boolean = false;
  @Input('id') id: number = 0;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  nuevo: Producto = {
    nombre: '',
    cantidad: 0,
  };

  cerrarModal() {
    this.modal = false;
    this.close.emit(this.modal);
  }

  agregarProducto() {
    if (this.id === 0) return;
    this.facturasService.agregarProducto(this.id, this.nuevo);
    this.nuevo = {
      nombre: '',
      cantidad: 0,
    };
    this.modal = false;
    this.close.emit(this.modal);
  }
  constructor(private facturasService: FacturasService) {}
}
