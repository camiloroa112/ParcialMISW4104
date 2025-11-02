// src/app/features/vehicles/vehicles.service.ts
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import type { VehiculoInterfaz } from '../features/vehiculos.interface/vehiculo.interfaz';

@Injectable({ providedIn: 'root' })

export class VehiculoService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://gist.githubusercontent.com/josejbocanegra/17bb8c76405e43655d551a90800c8a81/raw/d41b4acc3457e51e7533fad6d5e9925ee9676457/202212_MISW4104_Grupo1.json';
  private readonly baseUrl = environment.apiUrl + '/vehiculos';
  readonly vehiculos$: Observable<VehiculoInterfaz[]> = this.http.get<VehiculoInterfaz[]>(this.apiUrl).pipe(shareReplay(1));


  readonly total$: Observable<number> = this.vehiculos$.pipe(
    map(list => list.length)
  );

  readonly porMarcaLista$: Observable<Array<{ marca: string; cantidad: number }>> =
    this.vehiculos$.pipe(
      map(list => {
        const acc: Record<string, number> = {};
        for (const v of list) acc[v.marca] = (acc[v.marca] ?? 0) + 1;
        return Object.entries(acc)
          .map(([marca, cantidad]) => ({ marca, cantidad }))
          .sort((a, b) => a.marca.localeCompare(b.marca));
      })
    );
  
  getVehiculos(): Observable<VehiculoInterfaz[]> {
    return this.http.get<VehiculoInterfaz[]>(this.apiUrl);
  }
}