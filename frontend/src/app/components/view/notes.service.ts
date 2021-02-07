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

  create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.baseUrl, note);
  }
}
