import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {INational} from './national.interface';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NationalService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<INational> {
    return this.http.get<INational>(`${this.API_URL}/${id}`);
  }

  getNational(): Observable<INational[]> {
    return this.http.get<INational[]>(`${this.API_URL}`);
  }

  deleteNational(id: number): Observable<any> {
    const r = confirm('Bạn Muốn Xoá Không?\nChọn OK hoặc Cancel.');
    if (r) {
      return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
  }

  createNational(post: Partial<INational>): Observable<INational> {
    return this.http.post<INational>(`${this.API_URL}/create-national`, post);
  }

  updateNational(post: INational): Observable<INational> {
    return this.http.put<INational>(`${this.API_URL}/edit-national/${post.id}`, post);

  }
}
