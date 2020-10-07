import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudittrailService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAudittrail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAudittrailList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAudittrailAll(page: string, pageSize: string, changesType: string, search: string, idMerchant: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/audittrail-get', {
      params: {
        page,
        pageSize,
        changesType,
        search,
        idMerchant
      }
    });
  }

  getAudittrailChangeTypeCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/audittrail-count-change-type');
  }
}
