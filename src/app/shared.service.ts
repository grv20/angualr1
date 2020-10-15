import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { }

  getPersonList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/person/');
  }

  addPerson(val:any){
    return this.http.post(this.APIUrl + '/person/',val);
  }

  updatePerson(val:any){
    return this.http.put(this.APIUrl + '/person/',val);
  }

  deletePerson(val:any){
    return this.http.delete(this.APIUrl + '/person/'+val);
  }
}
