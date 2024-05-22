import { TestBed } from '@angular/core/testing';
import { ValueBuilder } from './../data-builder/value-builder';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [
        MasterService,
        {
          provide: ValueService,
          useValue: spy,
        },
      ],
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('should be created', () => {
    expect(masterService).toBeTruthy();
  });

  describe('test for getValue', () => {
    // it('should return the real value from the real service', () => {
    //   const valueService = new ValueService();
    //   const masterService = new MasterService(valueService);
    //   expect(masterService.getValue()).toBe('real value');
    // });

    // it('should return "other value" from the fake service', () => {
    //   const valueService = new ValueService();
    //   const masterService = new MasterService(valueService);
    //   expect(masterService.getValue()).toBe('real value');
    // });

    // it('should return "fake value" from the builder', () => {
    //   const fakeValueService = new ValueBuilder()
    //     .withValue('fake value')
    //     .build() as ValueService;
    //   const masterService = new MasterService(fakeValueService);
    //   expect(masterService.getValue()).toBe('fake value');
    // });

    it('should call to getValue from ValueService', () => {
      valueServiceSpy.getValue.and.returnValue('fake value');
      expect(masterService.getValue()).toBe('fake value');
      expect(valueServiceSpy.getValue).toHaveBeenCalled();
      expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
    });
  });
});
