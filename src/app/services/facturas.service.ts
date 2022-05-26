import { Injectable } from '@angular/core';
import { Factura } from '../interfaces/factura.interface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  private _facturas: Factura[] = [];

  get facturas(): Factura[] {
    return [...this._facturas];
  }

  get id(): number {
    return this._facturas.length + 1;
  }

  agregarFactura() {
    const nuevaFactura: Factura = {
      id: this._facturas.length + 1,
      productos: [],
    };
    this._facturas.push(nuevaFactura);
  }

  agregarProducto(id: number, producto: Producto): void {
    const factura: Factura | undefined = this._facturas.find(
      (x) => x.id === id
    );
    if (factura) {
      if (!factura.productos.map((x) => x.nombre).includes(producto.nombre)) {
        factura.productos.push(producto);
        return;
      }
      const productoExistente = factura.productos.filter(
        (x) => x.nombre === producto.nombre
      )[0];
      productoExistente.cantidad += producto.cantidad;
    }
  }
  constructor() {}
}
