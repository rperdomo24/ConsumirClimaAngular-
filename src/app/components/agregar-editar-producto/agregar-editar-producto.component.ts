import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../models/producto';
import { ListarProductosComponent } from '../listar-productos/listar-productos.component';


@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html',
  styleUrls: ['./agregar-editar-producto.component.css']
})
export class AgregarEditarProductoComponent implements OnInit {
  Producto: FormGroup;
  idProducto = 0;
  accion: 'Agregar';

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private productoSertvicio: ProductoService,
    private router: Router) {
    this.Producto = this.fb.group({
      nombre:['', Validators.required],
      precio:['', Validators.required],
      existencias:['', Validators.required],
    });

    if(+this.route.snapshot.paramMap.get('id')>0)
    {
      accion: "Modificar";
      this.idProducto= +this.route.snapshot.paramMap.get('id');
    }
   }

  ngOnInit(): void {
     this.esEdicion(this.idProducto);
  }

  guardarProducto(){

    const mproducto : Producto = {
      id: this.idProducto,
      nombre: this.Producto.get('nombre').value,
      precio: parseFloat(this.Producto.get('precio').value),
      existencias: parseFloat(this.Producto.get('existencias').value),
    };
    console.log(mproducto);

    if(this.idProducto == 0)
    {
      this.productoSertvicio.guardarProducto(mproducto).subscribe(data => {
        this.router.navigate(['/']);
      });
    }else{
      this.productoSertvicio.actualizarProducto(mproducto.id,mproducto).subscribe(data => {
        this.router.navigate(['/']);
        alert('modificado');
      });
    }
  }


  cargaProducto(id:number)
  {
    this.productoSertvicio.cargarProductoid(id).subscribe(data => {
      if(data != undefined)
      {
         this.Producto.patchValue({
        nombre : data.nombre,
        precio: data.precio,
        existencias: data.existencias,
        id: data.id
      });
      }
    })
  }

  esEdicion(id:number)
  {
    if(id >0)
    {
      this.cargaProducto(id);
    }
  }

}
