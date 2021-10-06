export default class BaseStat {
  private value: number;
  private name: string;

  constructor(value: number, name: string) {
    this.value = value;
    this.name = name;
  }

  public getValue(): number {
    return this.value;
  }

  public getName(): string {
    return this.name;
  }
}
