import Ability from "./Ability";
import BaseStat from "./BaseStat";
import Pokemon from "./Pokemon";

export default class Converter {
  static toPokemon(obj: any): Pokemon {
    return new Pokemon(
      obj.sprites.other["official-artwork"].front_default,
      obj.name,
      obj.height,
      obj.weight,
      obj.types.map((item: any) => this.toType(item)),
      obj.abilities.map((item: any) => this.toAbility(item)),
      obj.stats.map((item: any) => this.toBaseStat(item))
    );
  }

  static toAbility(abilityObj: any): Ability {
    return new Ability(abilityObj.ability.name, abilityObj.is_hidden);
  }

  static toBaseStat(baseObj: any): BaseStat {
    return new BaseStat(baseObj.base_stat, baseObj.stat.name);
  }

  static toType(typeObj: any): string[] {
    return typeObj.type.name;
  }
}
