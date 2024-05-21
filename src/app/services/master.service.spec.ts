import { ValueBuilder } from './../data-builder/value-builder';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {

  describe('test for getValue', () => {
    it('should return the real value from the real service', () => {
      const valueService = new ValueService();
      const masterService = new MasterService(valueService);
      expect(masterService.getValue()).toBe('real value');
    });

    it('should return "other value" from the fake service', () => {
      const valueService = new ValueService();
      const masterService = new MasterService(valueService);
      expect(masterService.getValue()).toBe('real value');
    });

    it('should return "fake value" from the builder', () => {
      const fakeValueService = new ValueBuilder().withValue('fake value').build() as ValueService;
      const masterService = new MasterService(fakeValueService);
      expect(masterService.getValue()).toBe('fake value');
    });
  });
});
