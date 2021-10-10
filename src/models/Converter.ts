import Ability from "./Ability";
import BaseStat from "./BaseStat";
import Pokemon from "./Pokemon";

export default class Converter {

  private constructor(){
    // intentionally left blank
  }

  static toPokemon(obj: any): Pokemon {
    return new Pokemon(
      this.toImagesSrc(obj.sprites),
      obj.name,
      obj.height,
      obj.weight,
      obj.types.map((item: any) => this.toType(item)),
      obj.abilities.map((item: any) => this.toAbility(item)),
      obj.stats.map((item: any) => this.toBaseStat(item))
    );
  }

  static toImagesSrc(imageObj: any): string[] {
    const images = [
      imageObj.other["official-artwork"].front_default,
      imageObj.front_default,
      imageObj.back_default,
      imageObj.other.dream_world.front_default,
    ];
    return images;
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

  static toPokemonNames(obj: any): string[] {
    return obj.results.map(
      (result: { name: string; url: string }) => result.name
    );
  }
}
