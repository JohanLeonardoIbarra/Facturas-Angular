import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Factura } from '../../interfaces/factura.interface';
import { FacturasService } from '../../services/facturas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
})
export class DetallesComponent {
  @Input() factura: Factura = {
    id: 0,
    productos: [],
  };

  public modal: boolean = false;

  @Output() closeDetalles: EventEmitter<Factura> = new EventEmitter();

  cerrarDetalles() {
    const clear = {
      id: 0,
      productos: [],
    };
    this.closeDetalles.emit(clear);
  }

  modalProducto() {
    this.modal = true;
  }

  cerrarModalProductos(modal: boolean) {
    this.modal = modal;
  }

  constructor(private facturasService: FacturasService) {}
}
