import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookingService {
  api = 'https://localhost:5001/api/bookings';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.api);
  }

  create(data: any) {
    return this.http.post(this.api, data);
  }

  update(data: any) {
    return this.http.put(`${this.api}/${data.id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  checkConflict(data: any) {
    return this.http.post<boolean>(`${this.api}/check-conflict`, data);
  }
}