import { Component } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { Factura } from '../../interfaces/factura.interface';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
})
export class ListarComponent {
  public modal: boolean = false;
  public factura: Factura = {
    id: 0,
    productos: [],
  };

  get facturas(): Factura[] {
    return this.facturasService.facturas;
  }

  modalDetalles(id: number) {
    this.factura = this.facturasService.facturas.filter((x) => x.id === id)[0];
  }

  modalCrear(): void {
    this.modal = !this.modal;
  }

  cerrarModalCrear(modal: boolean): void {
    this.modal = modal;
  }

  cerrarModalDetalles(factura: Factura): void {
    this.factura = factura;
  }

  constructor(private facturasService: FacturasService) {}
}
