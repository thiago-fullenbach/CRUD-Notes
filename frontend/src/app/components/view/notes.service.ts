import { Note } from './notes.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = 'http://localhost:3001/notes';

  constructor(private http: HttpClient) { }

  read(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }
}
