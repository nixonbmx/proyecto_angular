import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-listadestinos',
  templateUrl: './listadestinos.component.html',
  styleUrls: ['./listadestinos.component.css']
})
export class ListadestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() { 
    this.destinos = [];
  }

  ngOnInit(): void {
  }
 guardar(nombre:string, url:string):boolean{
   this.destinos.push(new DestinoViaje(nombre,url));
  return false;
 }
 elegido(d: DestinoViaje) {
  this.destinos.forEach(function (x) {x.setSelected(false); });
  d.setSelected(true);
 }
}
