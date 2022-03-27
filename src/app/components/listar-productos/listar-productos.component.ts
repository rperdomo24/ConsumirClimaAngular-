import { Component, Input, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {


  listaProductos: Producto[];
  loading = false;
  
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos()
  {
    this.productoService.getListadoProductos().subscribe(data => {
      this.listaProductos = data;
    })
  }

  borrar(id: number)
  {
    this.productoService.borrarProducto(id).subscribe(data => {
      this.cargarProductos();
      alert('Producto Eliminado Exitosamente');
    });
  }
}
