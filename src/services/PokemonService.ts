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

  public getPokemon(name: string): Promise<Pokemon> {
    return this.axios
      .get(`/pokemon/${name}`)
      .then(function (response) {
        return Converter.toPokemon(response.data);
      });
  }

}
