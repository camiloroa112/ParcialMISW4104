import { of } from 'rxjs';
import { VehiculosComponente } from './vehiculos.component';
import { VehiculoService } from './service/vehiculo-service.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

const mockVehiculos = [
  { id: 1, marca: 'McLaren', linea: 'MP4-12C', referencia: 'Sports Car', modelo: 2020, kilometraje: 10000, color: 'Naranja', imagen: 'https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/7122/i4_0.jpg' },
  { id: 2, marca: 'Chevrolet', linea: 'Corvette', referencia: 'Sports Car',  modelo: 2022, kilometraje: 20000, color: 'Rojo', imagen: 'https://autos93.com/cdn/shop/files/F721DFBB-AAC8-4C75-8DD1-A227840455E5_540x.jpg?v=1747062318'},
  { id: 3, marca: 'Nissan', linea: 'March', referencia: 'Hatchback', modelo: 2019, kilometraje: 20000, color: 'Rojo', imagen: 'https://www.nissan-cdn.net/content/dam/Nissan/co/prensa/02March-Final-listo.jpg.ximg.l_12_m.smart.jpg'},
];

describe('VehiculosComponente', () => {
  let fixture: ComponentFixture<VehiculosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosComponente],
      providers: [{ provide: VehiculoService, useValue: { getVehiculos: () => of([]) } }],
    }).compileComponents();
    fixture = TestBed.createComponent(VehiculosComponente);
    fixture.componentInstance.vehiculos$ = of(mockVehiculos);
  });

  it('debe renderizar una tabla con 3 filas de vehículos más el encabezado', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement as HTMLElement;
    const table = host.querySelector('table');
    expect(table).not.toBeNull();
    const bodyRows = host.querySelectorAll('tbody tr');
    expect(bodyRows.length).toBe(3);
    const headerCells = host.querySelectorAll('thead tr th');
    expect(headerCells.length).toBe(4);
  }));
});