import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from './formateur';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationServiceService {
  url: string = 'http://localhost:8080/api/v1/formation'
  constructor(private http: HttpClient) {}
  
  getFormations(): Observable<Formation[]>{
    return this.http.get<Formation[]>(this.url+'/');   
}

  getFormateur(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>('http://localhost:8080/api/v1'+'/formateurs')
  }

  createFormation(formation: Formation): Observable<Object>{
    return this.http.post(`${this.url}`, formation);
  }

  getFormationByID(id:number): Observable<Formation>{
    return this.http.get<Formation>(this.url+'/'+id);
  }

  updateFormation(id: number,formation: Formation): Observable<Formation>{
    return this.http.put<Formation>(`${this.url}/${id}`,formation);
  }

  deleteFormation(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
 


}
