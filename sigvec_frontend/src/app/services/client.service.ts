import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly BASE_URL: string = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.BASE_URL}/listar`);
  }

  getOne(client: any): Observable<HttpEvent<Client>> {
    return this.http.get<Client>(`${this.BASE_URL}/search`, client);
  }

  create(form: any) {
    return this.http.post(`${this.BASE_URL}/agregar`, form);
  }

  update(form: any) {
    return this.http.post(`${this.BASE_URL}/actualizar`, form);
  }

  delete(persona: any) {
    return this.http.delete(`${this.BASE_URL}/eliminar`, persona);
  }
}
