import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apprenant } from './apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {private baseURL = "http://localhost:8080/api/v1/apprenant";

constructor(private httpClient: HttpClient) { }


getApprenantList(): Observable<Apprenant[]>{
  return this.httpClient.get<Apprenant[]>(`${this.baseURL}`);
}

/*createFormateur(formateur: Formateur): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, formateur);
}*/

getApprenantById(id: number): Observable<Apprenant>{
  return this.httpClient.get<Apprenant>(`${this.baseURL}/${id}`);
}

/*updateFormateur(id: number, formateur: Formateur): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, formateur);
}*/

deleteApprenant(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


}