import { NotesService } from './../notes.service';
import { Note } from './../notes.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote: Note = {
    title: '',
    note: '',
    date: ''
  };

  constructor(
    private router: Router,
    private noteService: NotesService
  ) { }

  ngOnInit(): void {
  }

  createNote() {
    this.newNote.date = new Date().toLocaleString();
    this.noteService.create(this.newNote).subscribe(() => {
      this.noteService.showMessage('Anotação adicionada com Sucesso!');
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }

}
