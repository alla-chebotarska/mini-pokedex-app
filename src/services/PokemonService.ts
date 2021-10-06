import axios, { AxiosInstance } from "axios";

export default class PokemonService {
  private baseUrl: string;
  private axios: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axios = axios.create({
      baseURL: this.baseUrl,
    });
  }

  public getPokemon(name: string) {
    this.axios
      .get(`/pokemon/${name}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}
