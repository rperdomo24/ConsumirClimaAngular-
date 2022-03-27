import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  ProductoActual: Producto;
  Idproducto  : number = 0;
  constructor(private productoService:ProductoService,
    private route: ActivatedRoute) { 
    
      if(+this.route.snapshot.paramMap.get('id')>0)
    {
      this.Idproducto = +this.route.snapshot.paramMap.get('id')
    }
  }

  ngOnInit(): void {
    this.cargaProducto(this.Idproducto);
  }

  cargaProducto(id:number)
  {
    this.productoService.cargarProductoid(id).subscribe(data => {
      console.log(data);
      if(data != undefined)
      {
        this.ProductoActual = data;
      }
      console.log(data);
    })
  }


}
