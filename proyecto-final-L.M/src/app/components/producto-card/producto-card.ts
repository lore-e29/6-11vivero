import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../pages/productos/productos';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() 
articulos!: Productos;
  @Output() agregarAlCarrito = new EventEmitter<Productos>();

  onAgregar() {
    alert(`SE AGREGO EL PRODUCTO AL CARRITO.`);
    this.agregarAlCarrito.emit(this.articulos);


}
}