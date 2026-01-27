import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabunganService {

  private baseUrl = 'http://localhost/apitabungan';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>(`${this.baseUrl}/list.php`);
  }

  insert(data: any) {
    return this.http.post(`${this.baseUrl}/insert.php`, data);
  }

  delete(id: number) {
    return this.http.post(`${this.baseUrl}/delete.php`, { id });
  }
}
