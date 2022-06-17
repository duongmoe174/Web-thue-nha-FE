import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiURL}`;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  createOrder(order) {
    return this.http.post(`${API_URL}/orders`, order);
  }

  getAllOrderStatusDoneByIdHouse(id) {
    return this.http.get<any>(`${API_URL}/orders/statusDone/house/${id}`);
  }

  get5OrderByOrderIdRent(id) {
    return this.http.get<any>(`${API_URL}/orders/historyOrderTop5/${id}`);
  }

  changeCheckinOrder(id) {
    return this.http.get<any>(`${API_URL}/orders/changeStatusCheckin/${id}`);
  }

  customerChangeStatusOrderCanceled(id) {
    return this.http.get<any>(`${API_URL}/orders/customerChangeStatusCanceled/${id}`);
  }

  getAllOrderProcessingByUserId(currentUserId): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/orders/processing/${currentUserId}`);
  }

  changeStatusOrderDone(id) {
    return this.http.get<any>(`${API_URL}/orders/changeStatusDone/${id}`);
  }

  changeStatusOrderCanceled(id) {
    return this.http.get<any>(`${API_URL}/orders/changeStatusCanceled/${id}`);
  }
}