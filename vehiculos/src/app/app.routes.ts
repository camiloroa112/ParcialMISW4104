import { Routes } from '@angular/router';

import { VehiculosComponente } from './vehiculos/vehiculos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculosComponente },
];
