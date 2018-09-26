import { Component } from '@angular/core';
import { Banda, BANDAS } from './banda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Mis Bandas Favoritas';

  bandas = BANDAS;
  banda: Banda = {
  id: 1,
    nombre: 'Heroes del silencio'
  };

  seleccionar( item: Banda ):void {

    this.banda = item;

  }
}
