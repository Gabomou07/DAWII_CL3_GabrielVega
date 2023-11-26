import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api3menuService {

  private apiUrl = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) {}

  getLocacionwithIDPar() {
    return this.http.get<any>(this.apiUrl);
  }
}
