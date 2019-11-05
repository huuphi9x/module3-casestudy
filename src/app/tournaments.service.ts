import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITournaments} from './tournaments.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<ITournaments> {
    return this.http.get<ITournaments>(`${this.API_URL}/${id}`);
  }

  getTournaments(): Observable<ITournaments[]> {
    return this.http.get<ITournaments[]>(`${this.API_URL}`);
  }

  deleteTournaments(id: number): Observable<any> {
    const r = confirm('Bạn Muốn Xoá Không?\nChọn OK hoặc Cancel.');
    if (r) {
      return this.http.delete(`${this.API_URL}/delete/${id}`);
    }
  }

  createTournaments(post: Partial<ITournaments>): Observable<ITournaments> {
    return this.http.post<ITournaments>(`${this.API_URL}/create-tournaments`, post);
  }

  updateTournamentsl(post: ITournaments): Observable<ITournaments> {
    return this.http.put<ITournaments>(`${this.API_URL}/edit-tournaments/${post.id}`, post);
  }

}
