import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClimaService } from 'src/app/services/clima.service';
import { IpService } from 'src/app/services/ip.service';
import { ResponseApiClima } from 'src/app/models/clima';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  datosClimaActual : ResponseApiClima;
  constructor(private climaService :ClimaService, private ipservices :IpService) {
  this.permitirGeolocalizacion();
   }
   Latitud:string;
   Longitud:string;
   ciudad: string;
  ngOnInit(): void {
    // if(this.ciudad == undefined || (this.Latitud == undefined && this.Longitud == undefined))
    if(this.datosClimaActual == undefined)
    {
      console.log('entre');
      this.obtenerClimaActual(13.4833,-88.1833);
    }
    
  }

  async permitirGeolocalizacion()
  {
    this.getPosition().then(pos => {
      this.Latitud = pos.lat;
      this.Longitud = pos.lng;
  });
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
              alert('Sin permisos para obtener su localizacion, mostraremos el clima de San Miguel/El Salvador');
                reject(err);
          });
    });
}

  ActualizarClima()
  {
    if(this.Latitud != undefined && this.Longitud != undefined)
    {
      this.obtenerClimaActual(this.Latitud,this.Longitud)
    }else{
      alert('Sin permisos para obtener su localizacion, mostraremos el clima de San Miguel/El Salvador o habilite los permisos para acceder a su ubicacion');
    }
  }

   obtenerClimaActual(latitud,longitude)
  {
    this.climaService.ObtenerClimaporIp(latitud+","+longitude).subscribe(data => {
      this.datosClimaActual = data;
    });
  }

  obtenerClimaPorCiudad(pciudad)
  {
    // alert(pciudad);
    if(pciudad != undefined)
    {
      this.ciudad = pciudad;
      this.climaService.ObtenerClimaporIp(pciudad).subscribe(data => {
        this.datosClimaActual = data;
      });
    }else{
      console.log('error');
    }
   // console.log(pciudad);
  }

}


