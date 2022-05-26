import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
})
export class CrearComponent {
  @Input() modal: boolean = false;

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  get id(): number {
    return this.facturasService.id;
  }

  crearFactura(): void {
    this.facturasService.agregarFactura();
    this.modal = false;
    this.close.emit(this.modal);
  }

  cerrarModal(): void {
    this.modal = false;
    this.close.emit(this.modal);
  }

  constructor(private facturasService: FacturasService) {}
}
