import { Component } from '@angular/core';
import { VehiculosComponente } from "./vehiculos/vehiculos.component";

@Component({
  selector: 'app-root',
  imports: [VehiculosComponente],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehiculos';
}
