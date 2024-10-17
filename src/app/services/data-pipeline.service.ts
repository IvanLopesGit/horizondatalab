import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPipelineService {
  private process_data = 'http://127.0.0.1:5000/process_data';

  constructor(
    private http: HttpClient
  ) { }

  getGraph(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file)
    return this.http.post(this.process_data, formData)
  }
}
