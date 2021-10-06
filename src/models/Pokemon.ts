import Ability from "./Ability";
import BaseStat from "./BaseStat";

export default class Pokemon {
  private name: string;
  private height: number;
  private weight: number;
  private types: string[];
  private abilities: Ability[];
  private baseStats: BaseStat[];

  constructor(
    name: string,
    height: number,
    weight: number,
    types: string[],
    abilities: Ability[],
    baseStats: BaseStat[]
  ) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.baseStats = baseStats;
  }

  public getName(): string {
    return this.name;
  }

  public getHeight(): number {
    return this.height;
  }
  public getWeight(): number {
    return this.weight;
  }

  public getTypes(): string[] {
    return this.types;
  }

  public getAbilities(): Ability[] {
    return this.abilities;
  }

  public getBaseStats(): BaseStat[] {
    return this.baseStats;
  }
}
