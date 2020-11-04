import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public buscarPokemons(url: string) {

    return this.http.get(url);

  }

  public buscaPokemonNumero(url: string) {

    return this.http.get(`${url}`);

  };
}
