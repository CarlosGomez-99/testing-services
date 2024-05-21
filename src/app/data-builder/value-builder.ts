export class ValueBuilder {
  value = 'real value from builder';

  withValue(value: string) {
    this.value = value;
    return this;
  }

  build() {
    return {
      getValue: () => this.value,
    };
  }
}
