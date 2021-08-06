import { Component, OnInit, Input } from '@angular/core';

import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destinoviaje',
  templateUrl: './destinoviaje.component.html',
  styleUrls: ['./destinoviaje.component.css']
})
export class DestinoviajeComponent implements OnInit {
  @Input() destino: DestinoViaje;

   constructor() {
  
   }

  ngOnInit(): void {
  }

}
