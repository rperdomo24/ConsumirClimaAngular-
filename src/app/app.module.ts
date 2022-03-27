import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { ClimaComponent } from './components/clima/clima.component';




@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarProductoComponent,
    ListarProductosComponent,
    VerProductoComponent,
    NavbarComponent,
    ClimaComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
