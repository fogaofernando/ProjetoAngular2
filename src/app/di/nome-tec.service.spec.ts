/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NomeTecService } from './nome-tec.service';

describe('NomeTecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomeTecService]
    });
  });

  it('should ...', inject([NomeTecService], (service: NomeTecService) => {
    expect(service).toBeTruthy();
  }));
});
