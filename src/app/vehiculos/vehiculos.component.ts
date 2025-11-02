import { Observable } from 'rxjs';
import { Component, inject } from '@angular/core';
import { VehiculoService } from './service/vehiculo-service.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { VehiculoInterfaz } from './features/vehiculos.interface/vehiculo.interfaz'

@Component({
  standalone: true,
  selector: 'app-vehiculos',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponente {

  private svc = inject(VehiculoService);
  vehiculos$: Observable<VehiculoInterfaz[]> = this.svc.vehiculos$;
  total$: Observable<number> = this.svc.total$;
  porMarcaLista$ = this.svc.porMarcaLista$;
}
