import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from "../app/environments/environments";
@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {
private url = "http://localhost:3000/funcionarios"; 

  constructor(private _HttpClient: HttpClient) {

  }
}
