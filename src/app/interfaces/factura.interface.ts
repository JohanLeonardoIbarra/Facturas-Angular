import { Producto } from './producto.interface';

export interface Factura {
  id: number;
  productos: Producto[];
}
