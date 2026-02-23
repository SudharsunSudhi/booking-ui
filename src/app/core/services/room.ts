import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RoomService {
  api = 'https://localhost:5001/api/rooms';

  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get<any[]>(this.api);
  }
}