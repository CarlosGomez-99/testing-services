import { Calculator } from './calculator';

describe('Test for calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Test for multiply', () => {
    it('#multiply should return 6', () => {
      const result = calculator.multiply(2, 3);
      expect(result).toEqual(6);
    });

    it('#multiply should return 0', () => {
      const result = calculator.multiply(2, 0);
      expect(result).toEqual(0);
    });
  });

  describe('Test for divide', () => {
    it('#divide should return 2', () => {
      const result = calculator.divide(6, 3);
      expect(result).toEqual(2);
    });

    it('#divide should throw an error', () => {
      expect(() => calculator.divide(6, 0)).toThrowError(
        'Cannot divide by zero'
      );
    });
  });

  describe('Test for add', () => {
    it('#add should return 3', () => {
      const result = calculator.add(1, 2);
      expect(result).toEqual(3);
    });

    it('#add should return 0', () => {
      const result = calculator.add(-1, 1);
      expect(result).toEqual(0);
    });
  });

  describe('Test for subtract', () => {
    it('#subtract should return -1', () => {
      const result = calculator.subtract(1, 2);
      expect(result).toEqual(-1);
    });

    it('#subtract should return 0', () => {
      const result = calculator.subtract(1, 1);
      expect(result).toEqual(0);
    });
  });
});
