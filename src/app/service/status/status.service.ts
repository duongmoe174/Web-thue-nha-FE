import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Status} from '../../model/status';
import {House} from '../../model/house';


const API_URL = `${environment.apiURL}`;
@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Status[]> {
    return this.http.get<Status[]>(`${API_URL}/houses/status`);
  }

  findById(id): Observable<Status> {
    return this.http.get<Status>(`${API_URL}/houses/${id}`);
  }

  update(id, data): Observable<Status> {
    return this.http.post<Status>(`${API_URL}/houses/status/${id}`, data);
  }
}