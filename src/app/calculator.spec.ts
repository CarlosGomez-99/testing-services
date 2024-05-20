import { Calculator } from './calculator';

describe('Test for calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('#multiply should return 6', () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });
});
