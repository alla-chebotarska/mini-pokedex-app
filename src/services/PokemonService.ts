import axios, { AxiosInstance } from "axios";
import Converter from "../models/Converter";
import Pokemon from "../models/Pokemon";

export default class PokemonService {
  private baseUrl: string;
  private axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  public getPokemonByName(name: string): Promise<Pokemon> {
    return this.axios
      .get(`/pokemon/${name}`)
      .then((response) => Converter.toPokemon(response.data));
  };

  public getPokemonById(id: number): Promise<Pokemon> {
    return this.axios
      .get(`/pokemon/${id}`)
      .then((response) => Converter.toPokemon(response.data));
  }

  public getPokemonNames():Promise<string[]> {
    return this.axios
    .get("/pokemon/?limit=1500")
    .then((response) => {
      return Converter.toPokemonNames(response.data);
    })
  }

}
