import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ClimaComponent } from './components/clima/clima.component';

const routes: Routes = [
  {path: 'clima',component:ClimaComponent},
  {path: 'agregar', component:AgregarEditarProductoComponent},
  {path: 'editar/:id', component:AgregarEditarProductoComponent},
  {path: 'ver/:id', component:VerProductoComponent},
  {path: '', component:ListarProductosComponent, pathMatch:'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
