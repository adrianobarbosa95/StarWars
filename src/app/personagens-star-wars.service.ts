import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from "../app/environments/environments";
import { PersonagemClass } from './personagem-class';
@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {
private url = "http://localhost:3000/personagens";

  constructor(private _HttpClient: HttpClient) {

  }

  public getPersonagens() : Observable<PersonagemClass[]>{

    return this._HttpClient.get<PersonagemClass[]>(`${API_PATH}`);
  }
}
