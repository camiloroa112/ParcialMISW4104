/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { VehiculoService } from './vehiculo-service.service';

describe('VehiculoService', () => {
  let service: VehiculoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        });
        service = TestBed.inject(VehiculoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
