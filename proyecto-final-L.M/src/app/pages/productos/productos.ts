import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Articulos {

articulos = [
    {
      id: 1,
      nombre: 'Girasol',
      precio: 8500,
      imagen: 'girasol.jpg',
      descripcion: 'flor ideal para jardines.',
      categoria: 'Flores'
    },
    {
      id: 2,
      nombre: 'Pensamientos',
      precio: 6500,
      imagen: 'pensamientos.jpg',
      descripcion: 'Planta aromática de flores violetas.',
      categoria: 'flores'
    },
    {
      id: 3,
      nombre: 'Rosas rojas',
      precio: 18000,
      imagen: 'rojas.jpg',
      descripcion: 'Rosa roja ideal para regalos y jardines.',
      categoria: 'Flores'
    },
    {
      id: 4,
      nombre: 'Garra de oso',
      precio: 12000,
      imagen: 'garra-de-oso.jpg',
      descripcion: 'Planta succulenta con forma de garra de oso.',
      categoria: 'Suculentas'
    },
    {
      id: 5,
      nombre: 'Fertilizante Orgánico',
      precio: 9500,
      imagen: 'assets/imagenes/fertilizante.jpg',
      descripcion: 'Abono orgánico para mejorar el crecimiento.',
      categoria: 'Fertilizantes'
    },
    {
      id: 6,
      nombre: 'Árbol de Limón',
      precio: 25000,
      imagen: 'assets/imagenes/limonero.jpg',
      descripcion: 'Árbol frutal ideal para jardines y patios.',
      categoria: 'Árboles frutales'
    }
  ];



  
}
