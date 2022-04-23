import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {private baseURL = "http://localhost:8080/api/v1/mails";
  public formData : FormGroup;

  constructor(private http: HttpClient) { }

createData(info: Object): Observable<Object>{
  alert("save email");
  return this.http.post(`${this.baseURL}`, info);
}
getAll(): Observable<any>{
  return this.http.get(`${this.baseURL}`);
}


}
