import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getValue', () => {
    it('should return the real value', () => {
      expect(service.getValue()).toBe('real value');
    });
  });

  describe('test for setValue', () => {
    it('should change the value', () => {
      service.setValue('new value');
      expect(service.getValue()).toBe('new value');
      expect(service.getValue()).not.toBe('real value');
    });
  });

  describe('test for getPromiseValue', () => {
    it('should return "promise value" from promise with then', (doneFn) => {
      service.getPromiseValue().then((value) => {
        expect(value).toBe('promise value');
        doneFn();
      });
    });

    it('should return "promise value" from promise using async', async () => {
      const value = await service.getPromiseValue();
      expect(value).toBe('promise value');
    });
  });

  describe('test for getObservableValue', () => {
    it('should return "observable value" from observable', (doneFn) => {
      service.getObservableValue().subscribe((value) => {
        expect(value).toBe('observable value');
        doneFn();
      });
    });

    it('should return "observable value" from observable using async', async () => {
      const value = await firstValueFrom(service.getObservableValue());
      expect(value).toBe('observable value');
    });
  });
});
