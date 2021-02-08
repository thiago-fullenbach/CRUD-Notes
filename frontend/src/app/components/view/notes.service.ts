import { Note } from './notes.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseUrl = 'http://localhost:3001/notes';


  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000
    })
  }

  read(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }

  readById(id: string): Observable<Note> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Note>(url);
  }

  create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl, note);
  }

  update(note: Note): Observable<Note> {
    const url = `${this.baseUrl}/${note.id}`;
    return this.http.put<Note>(url, note);
  }
}
