import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destinoviaje',
  templateUrl: './destinoviaje.component.html',
  styleUrls: ['./destinoviaje.component.css']
})
export class DestinoviajeComponent implements OnInit {
  @Input() destino: DestinoViaje;
  @Input('idx') position: number;
  @HostBinding('attr.class') cssClass = 'col-sm-4';
  @Output() clicked: EventEmitter<DestinoViaje>;

   constructor() {
    this.clicked = new EventEmitter();
   }

  ngOnInit(): void {
  }
  ir() {
    this.clicked.emit(this.destino);
    return false;
  }

}
