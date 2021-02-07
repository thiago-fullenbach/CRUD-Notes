import { Note } from './../notes.model';
import { NotesService } from './../notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-read',
  templateUrl: './note-read.component.html',
  styleUrls: ['./note-read.component.css']
})
export class NoteReadComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.noteService.read().subscribe(notes => {
      this.notes = notes;
    })
  }

}
